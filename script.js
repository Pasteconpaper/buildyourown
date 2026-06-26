// --- AUTO-INJECT CSS TO CONTAIN THE NEW MASSIVE CANVAS IN THE UI ---
const previewStyleFix = document.createElement('style');
previewStyleFix.innerHTML = `
  .lightbox-canvas-box .canvas-container { width: 100% !important; height: auto !important; aspect-ratio: 1075 / 1854; position: relative; }
  .lightbox-canvas-box canvas { width: 100% !important; height: 100% !important; position: absolute !important; top: 0; left: 0; }
`;
document.head.appendChild(previewStyleFix);

// 1. GLOBAL APP STATE INITIALIZATION
const canvas = new fabric.Canvas('stickerCanvas', { width: 400, height: 400, backgroundColor: 'transparent', preserveObjectStacking: true, allowTouchScrolling: true });
// EXACT PRINTER ASPECT RATIO (Target 2150x3708 / 2 = 1075x1854)
const previewCanvas = new fabric.Canvas('previewCanvas', { width: 1075, height: 1854, selection: false });
const CX = 200; 
const CY = 200; 

let undoStack = [];
const MAX_UNDO_STEPS = 30; 
let currentStateJSON = null;
let isPreviewMode = false;       
let savedDesignState = null;     
let scrambleCount = 5;

const rigColors = { body: '#ff9800', hair: '#000000', eye: '#000000', mouth: '#000000', arm: '#4caf50', leg: '#4caf50' };
const indices = { body: 0, hair: 0, eye: 0, mouth: 0, arm: 0, leg: 0 };
const swatches = ['#000000', '#ff1744', '#FF008C', '#9c27b0', '#2196f3', '#00CED1', '#00e676', '#ffea00', '#ff9800', '#eae4d6', '#DD99FF', '#AAFFCC'];
let activePopout = null;
let globalSelectedName = ""; 
let globalBypassNameSticker = false;
let cleanPrintDataUrl = "";
window.cleanPrintWidth = 0;
window.cleanPrintHeight = 0;

window.cutlineHullPoints = [];
window.cutlineOffsetX = 0;
window.cutlineOffsetY = 0;

// --- Audio ---
const AudioContextClass = window.AudioContext || window.webkitAudioContext;
let audioCtx = null;

function playPopSound() {
  try {
    if (!audioCtx) audioCtx = new AudioContextClass();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, audioCtx.currentTime + 0.1);
    gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);
    osc.connect(gain); gain.connect(audioCtx.destination);
    osc.start(); osc.stop(audioCtx.currentTime + 0.1);
  } catch (e) { console.log('Audio blocked'); }
}

function earnScramble() {
  if (scrambleCount < 5) {
    scrambleCount++;
    const counterUI = document.getElementById('scrambleCounter');
    if (counterUI) {
        counterUI.innerText = scrambleCount;
        counterUI.classList.remove('pop-anim');
        void counterUI.offsetWidth; counterUI.classList.add('pop-anim');
    }
    if (scrambleCount > 0) document.getElementById('scrambleBtn').classList.remove('depleted');
  }
}

canvas.toJSON = (function(orig) {
  return function(propertiesToInclude) {
    return orig.call(this, ['customLayer', 'rigPart', 'id', 'accessoryId', 'baseScaleX', 'baseScaleY'].concat(propertiesToInclude || []));
  };
})(canvas.toJSON);

const rotateIcon = new Image();
rotateIcon.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23888888' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 2v6h-6'/%3E%3Cpath d='M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8'/%3E%3C/svg%3E";

fabric.Object.prototype.set({
  transparentCorners: false, borderColor: '#ea7316', cornerColor: '#fbfbf6', cornerStrokeColor: '#1a1a1a', cornerStyle: 'circle', cornerSize: 14, borderDashArray: [4, 4], padding: 8, borderScaleFactor: 2
});

fabric.Object.prototype.controls.mtr = new fabric.Control({
  x: 0, y: 0.5, offsetY: 35, cursorStyle: 'crosshair', actionHandler: fabric.controlsUtils.rotationWithSnapping, actionName: 'rotate',
  render: function(ctx, left, top, styleOverride, fabricObject) {
    const size = 26; ctx.save(); ctx.translate(left, top); ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
    ctx.drawImage(rotateIcon, -size/2, -size/2, size, size); ctx.restore();
  }, withConnection: true, actionVisible: true
});

function enforceLayering() {
  const objects = [...canvas.getObjects()];
  for (let i = objects.length - 1; i >= 0; i--) { if (objects[i].customLayer === 'body') canvas.sendToBack(objects[i]); }
  for (let i = 0; i < objects.length; i++) { if (objects[i].customLayer === 'face') canvas.bringToFront(objects[i]); }
  for (let i = 0; i < objects.length; i++) { if (objects[i].customLayer === 'accessory') canvas.bringToFront(objects[i]); }
}

function saveCurrentState() { currentStateJSON = JSON.stringify(canvas); }

function pushToUndoStack(state) {
  if (!state) return;
  undoStack.push(state);
  if (undoStack.length > MAX_UNDO_STEPS) { undoStack.shift(); }
  updateUndoBtn();
}

function updateUndoBtn() {
  const btn = document.getElementById('undoBtn');
  if (!btn) return;
  if (undoStack.length > 0) btn.classList.remove('disabled-btn'); else btn.classList.add('disabled-btn');
}

canvas.on('object:moving', e => {
  const obj = e.target; if (!obj) return; obj.setCoords(); const b = obj.getBoundingRect();
  let left = obj.left, top = obj.top;
  if (b.left < 0) left += -b.left; else if (b.left + b.width > canvas.width) left -= (b.left + b.width - canvas.width);
  if (b.top < 0) top += -b.top; else if (b.top + b.height > canvas.height) top -= (b.top + b.height - canvas.height);
  obj.set({ left, top }); obj.setCoords();
});

canvas.on('object:scaling', e => { 
  const obj = e.target; 
  if (!obj) return; 

  const maxW = canvas.width * 0.95;
  const maxH = canvas.height * 0.95;
  const currentW = obj.width * Math.abs(obj.scaleX);
  const currentH = obj.height * Math.abs(obj.scaleY);

  if (currentW > maxW || currentH > maxH) {
    const limit = Math.min(maxW / obj.width, maxH / obj.height);
    obj.set({ scaleX: limit * (obj.scaleX < 0 ? -1 : 1), scaleY: limit * (obj.scaleY < 0 ? -1 : 1) });
  }

  obj.setCoords(); 
  const b = obj.getBoundingRect();
  let left = obj.left, top = obj.top;
  
  if (b.left < 0) left += -b.left; else if (b.left + b.width > canvas.width) left -= (b.left + b.width - canvas.width);
  if (b.top < 0) top += -b.top; else if (b.top + b.height > canvas.height) top -= (b.top + b.height - canvas.height);
  
  obj.set({ left, top }); obj.setCoords();
  obj.baseScaleX = obj.scaleX; obj.baseScaleY = obj.scaleY; 
});

canvas.on('object:modified', () => { 
    if (isPreviewMode) return; 
    pushToUndoStack(currentStateJSON); 
    saveCurrentState(); 
});

window.undo = function() {
  if (undoStack.length > 0) {
    canvas.loadFromJSON(undoStack.pop(), () => { canvas.renderAll(); enforceLayering(); saveCurrentState(); updateUndoBtn(); updateClosetUI(); });
  }
}

function calculateConvexHullPoints(objects) {
  let coords = [];
  objects.forEach(obj => {
    if (!obj.rigPart) return; 
    obj.setCoords(); const m = obj.getCoords();
    coords.push({x:m[0].x, y:m[0].y}, {x:m[1].x, y:m[1].y}, {x:m[2].x, y:m[2].y}, {x:m[3].x, y:m[3].y});
  });
  if (coords.length < 3) return coords;
  let startPoint = coords[0];
  for (let i = 1; i < coords.length; i++) { if (coords[i].x < startPoint.x) startPoint = coords[i]; }
  let hull = [], currentPoint = startPoint, nextPoint;
  do {
    hull.push(currentPoint); nextPoint = coords[0];
    for (let i = 1; i < coords.length; i++) {
      if (coords[i] === currentPoint) continue;
      let crossProduct = (coords[i].y - currentPoint.y) * (nextPoint.x - currentPoint.x) - (coords[i].x - currentPoint.x) * (nextPoint.y - currentPoint.y);
      if (nextPoint === currentPoint || crossProduct > 0 || (crossProduct === 0 && (Math.pow(coords[i].x - currentPoint.x, 2) + Math.pow(coords[i].y - currentPoint.y, 2) > Math.pow(nextPoint.x - currentPoint.x, 2) + Math.pow(nextPoint.y - currentPoint.y, 2)))) { nextPoint = coords[i]; }
    }
    currentPoint = nextPoint;
  } while (currentPoint !== startPoint && hull.length < coords.length);
  return hull;
}

const lib = {
  body: [
    { id: 'square', svg: '<svg viewBox="0 0 60 60"><rect x="10" y="10" width="40" height="40" rx="8" fill="{{COLOR}}"/></svg>' },
    { id: 'oval', svg: '<svg viewBox="0 0 60 60"><ellipse cx="30" cy="30" rx="20" ry="28" fill="{{COLOR}}"/></svg>' },
    { id: 'pear', svg: '<svg viewBox="0 0 60 60"><path d="M30,5 C37.5,5 42.5,12 42.5,23 C42.5,33 55,39 55,47.5 C55,55 43.8,60 30,60 C16.2,60 5,55 5,47.5 C5,39 17.5,33 17.5,23 C17.5,12 22.5,5 30,5 Z" fill="{{COLOR}}"/></svg>' },
    { id: 'hexagon', svg: '<svg viewBox="0 0 60 60"><polygon points="30,5 55,18 55,42 30,55 5,42 5,18" fill="{{COLOR}}"/></svg>' },
    { id: 'pentagon', svg: '<svg viewBox="0 0 60 60"><polygon points="30,5 55,25 45,55 15,55 5,25" fill="{{COLOR}}"/></svg>' },
    { id: 'trapezoid', svg: '<svg viewBox="0 0 60 60"><polygon points="20,15 40,15 50,48 10,48" fill="{{COLOR}}"/></svg>' },
    { id: 'arch', svg: '<svg viewBox="0 0 60 60"><path d="M15,35 A15,15 0 0,1 45,35 L45,55 L15,55 Z" fill="{{COLOR}}"/></svg>' }
  ],
  hair: [
    { id: 'arches', svg: '<svg viewBox="0 0 60 30"><path d="M 10 25 Q 16.6 5 23.3 25 Q 30 5 36.6 25 Q 43.3 5 50 25" fill="none" stroke="{{COLOR}}" stroke-width="4" stroke-linecap="round"/></svg>' },
    { id: 'dots', svg: '<svg viewBox="0 0 60 30"><circle cx="14" cy="15" r="3" fill="{{COLOR}}"/><circle cx="22" cy="15" r="3" fill="{{COLOR}}"/><circle cx="30" cy="15" r="3" fill="{{COLOR}}"/><circle cx="38" cy="15" r="3" fill="{{COLOR}}"/><circle cx="46" cy="15" r="3" fill="{{COLOR}}"/></svg>' },
    { id: 'triangles', svg: '<svg viewBox="0 0 60 30"><path d="M 10 25 L 16.6 5 L 23.3 25 L 30 5 L 36.6 25 L 43.3 5 L 50 25" fill="none" stroke="{{COLOR}}" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/></svg>' },
    { id: 'afro', svg: '<svg viewBox="0 0 60 30"><path d="M 16 25 A 6 6 0 0 1 25 15 A 8 8 0 0 1 40 10 A 6 6 0 0 1 48 25" fill="none" stroke="{{COLOR}}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>' },
    { id: 'pigtail', svg: '<svg viewBox="0 0 60 30"><path d="M 20 20 C 15 5, 45 5, 40 20" fill="none" stroke="{{COLOR}}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>' }
  ],
  eye: [
    { id: 'eyes', svg: '<svg viewBox="0 0 60 30"><circle cx="20" cy="15" r="5" fill="{{COLOR}}"/><circle cx="40" cy="15" r="5" fill="{{COLOR}}"/></svg>' },
    { id: 'mad_eyes', svg: '<svg viewBox="0 0 60 30"><circle cx="20" cy="18" r="5" fill="{{COLOR}}"/><circle cx="40" cy="18" r="5" fill="{{COLOR}}"/><path d="M10 10 L25 15 M50 10 L35 15" stroke="{{COLOR}}" stroke-width="3" stroke-linecap="round"/></svg>' },
    { id: 'squinty_eyes', svg: '<svg viewBox="0 0 60 30"><path d="M15 18 Q20 8 25 18 M35 18 Q40 8 45 18" fill="none" stroke="{{COLOR}}" stroke-width="3" stroke-linecap="round"/></svg>' },
    { id: 'large_eyes', svg: '<svg viewBox="0 0 60 30"><circle cx="20" cy="15" r="8" fill="{{COLOR}}"/><circle cx="23" cy="11" r="2.5" fill="white"/><circle cx="40" cy="15" r="8" fill="{{COLOR}}"/><circle cx="43" cy="11" r="2.5" fill="white"/></svg>' },
    { id: 'serious_eyes', svg: '<svg viewBox="0 0 60 30"><line x1="12" y1="15" x2="25" y2="15" stroke="{{COLOR}}" stroke-width="5" stroke-linecap="round"/><line x1="35" y1="15" x2="48" y2="15" stroke="{{COLOR}}" stroke-width="5" stroke-linecap="round"/></svg>' },
    { id: 'derp_eyes', svg: '<svg viewBox="0 0 60 30"><ellipse cx="18" cy="15" rx="8" ry="12" fill="{{COLOR}}"/><ellipse cx="20" cy="12" rx="3" ry="5" fill="#ffffff" /><ellipse cx="42" cy="15" rx="8" ry="12" fill="{{COLOR}}"/><ellipse cx="44" cy="12" rx="3" ry="5" fill="#ffffff"/></svg>' },
    { id: 'eyelashes', svg: '<svg viewBox="0 0 60 30"><circle cx="18" cy="18" r="7" fill="{{COLOR}}"/><path d="M 15 13 Q 13 7 10 6 M 13 15 Q 8 11 6 12 M 17 12 Q 16 6 15 4" fill="none" stroke="{{COLOR}}" stroke-width="2.5" stroke-linecap="round"/><circle cx="42" cy="18" r="7" fill="{{COLOR}}"/><path d="M 45 13 Q 47 7 50 6 M 47 15 Q 52 11 54 12 M 43 12 Q 44 6 45 4" fill="none" stroke="{{COLOR}}" stroke-width="2.5" stroke-linecap="round"/></svg>' }
  ],
  mouth: [
    { id: 'smile', svg: '<svg viewBox="0 0 60 30"><path d="M15 10 Q30 40 60 10" fill="none" stroke="{{COLOR}}" stroke-width="6" stroke-linecap="round" id="smile"/></svg>' },
    { id: 'open_smile', svg: '<svg viewBox="0 0 60 30"><path d="M 15 10 C 15 35, 45 35, 45 10 Z" fill="{{COLOR}}"/></svg>' },
    { id: 'smirk', svg: '<svg viewBox="0 0 60 30"><path d="M0 10 Q 20 20 40 0" fill="none" stroke="{{COLOR}}" stroke-width="6" stroke-linecap="round"/></svg>' },
    { id: 'wavy_mouth', svg: '<svg viewBox="0 0 60 30"><path d="M0 10 Q 15 -10 30 10 T 60 10" fill="none" stroke="{{COLOR}}" stroke-width="6" stroke-linecap="round"/></svg>' },
    { id: 'shocked_mouth', svg: '<svg viewBox="0 0 60 30"><ellipse cx="30" cy="15" rx="6" ry="10" fill="none" stroke="{{COLOR}}" stroke-width="5"/></svg>' },
    { id: 'whistle', svg: '<svg viewBox="0 0 60 30"><circle cx="30" cy="15" r="4" fill="none" stroke="{{COLOR}}" stroke-width="5"/></svg>' },
    { id: 'notch', svg: '<svg viewBox="0 0 60 30"><path d="M 15 10 L 25 10 L 25 18 L 35 18 L 35 10 L 45 10 A 15 15 0 0 1 15 10 Z" fill="{{COLOR}}"/></svg>' },
    { id: 'vampire', svg: '<svg viewBox="0 0 60 30"><path d="M 15 10 Q 30 14 45 10" fill="none" stroke="{{COLOR}}" stroke-width="5" stroke-linecap="round"/><polygon points="20,12 26,12 23,22" fill="{{COLOR}}"/><polygon points="34,12 40,12 37,22" fill="{{COLOR}}"/></svg>' },
    { id: 'tooth_stroke', svg: '<svg viewBox="0 0 60 30"><path d="M 15 10 A 15 15 0 0 0 45 10" fill="none" stroke="{{COLOR}}" stroke-width="6"/><rect x="22" y="10" width="16" height="6" fill="{{COLOR}}"/></svg>' }
  ],
  arm: [
    { id: 'macaroni', svg: '<svg viewBox="0 0 40 40"><path d="M 12 35 C 12 20, 20 12, 35 12" fill="none" stroke="{{COLOR}}" stroke-width="20" stroke-linecap="round"/></svg>' },
    { id: 'lump', svg: '<svg viewBox="0 0 40 40"><rect x="12" y="5" width="16" height="30" rx="8" fill="{{COLOR}}"/></svg>' },
    { id: 'hard_point', svg: '<svg viewBox="0 0 40 40"><polygon points="5,5 35,5 20,35" fill="{{COLOR}}"/></svg>' },
    { id: 'squiggle', svg: '<svg viewBox="0 0 40 40"><path d="M 12 35 Q 0 20 15 15 T 35 10" fill="none" stroke="{{COLOR}}" stroke-width="16" stroke-linecap="round"/></svg>' },
    { id: 'stick_fist', svg: '<svg viewBox="0 0 40 40"><path d="M 35 35 L 20 20 L 5 20" fill="none" stroke="{{COLOR}}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/><circle cx="5" cy="20" r="5" fill="{{COLOR}}"/></svg>' },
    { id: 'sinewave', svg: '<svg viewBox="0 0 40 40"><path d="M 10 5 C 10 15, 30 15, 30 25 C 30 35, 10 35, 10 45" fill="none" stroke="{{COLOR}}" stroke-width="16" stroke-linecap="round"/></svg>' }
  ],
  leg: [
    { id: 'lump', svg: '<svg viewBox="0 0 40 40"><rect x="12" y="5" width="16" height="30" rx="8" fill="{{COLOR}}"/></svg>' },
    { id: 'macaroni', svg: '<svg viewBox="0 0 40 40"><path d="M 12 35 C 12 20, 20 12, 35 12" fill="none" stroke="{{COLOR}}" stroke-width="20" stroke-linecap="round"/></svg>' },
    { id: 'hard_point', svg: '<svg viewBox="0 0 40 40"><polygon points="5,5 35,5 20,35" fill="{{COLOR}}"/></svg>' },
    { id: 'squiggle', svg: '<svg viewBox="0 0 40 40"><path d="M 12 35 Q 0 20 15 15 T 35 10" fill="none" stroke="{{COLOR}}" stroke-width="16" stroke-linecap="round"/></svg>' },
    { id: 'stick_fist', svg: '<svg viewBox="0 0 40 40"><path d="M 35 35 L 20 20 L 5 20" fill="none" stroke="{{COLOR}}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/><circle cx="5" cy="20" r="5" fill="{{COLOR}}"/></svg>' },
    { id: 'sinewave', svg: '<svg viewBox="0 0 40 40"><path d="M 10 5 C 10 15, 30 15, 30 25 C 30 35, 10 35, 10 45" fill="none" stroke="{{COLOR}}" stroke-width="16" stroke-linecap="round"/></svg>' }
  ]
};

const accessoriesLib = [
  { id: 'crown', color: '#ffea00', svg: '<svg viewBox="0 0 60 60"><polygon points="10,50 50,50 55,20 40,35 30,15 20,35 5,20" fill="{{COLOR}}" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/></svg>' },
  { id: 'horns', color: '#eae4d6', svg: '<svg viewBox="0 0 60 60"><polygon points="25.5,17 17,25.5 0,0" fill="{{COLOR}}" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/><polygon points="34.5,17 43,25.5 60,0" fill="{{COLOR}}" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/></svg>' },
  { id: 'sunglasses', color: '#1a1a1a', svg: '<svg viewBox="0 0 60 30"><rect x="5" y="10" width="20" height="15" rx="3" fill="{{COLOR}}"/><rect x="35" y="10" width="20" height="15" rx="3" fill="{{COLOR}}"/><line x1="25" y1="15" x2="35" y2="15" stroke="{{COLOR}}" stroke-width="4"/></svg>' },
  { id: 'bowtie', color: '#ff1744', svg: '<svg viewBox="0 0 60 30"><polygon points="30,15 10,5 10,25" fill="{{COLOR}}" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/><polygon points="30,15 50,5 50,25" fill="{{COLOR}}" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/><circle cx="30" cy="15" r="4" fill="#ffffff" stroke="#1a1a1a" stroke-width="3"/></svg>' },
  { id: 'top_hat', color: '#333333', svg: '<svg viewBox="0 0 60 60"><rect x="15" y="10" width="30" height="30" rx="2" fill="{{COLOR}}" stroke="#1a1a1a" stroke-width="3"/><rect x="10" y="40" width="40" height="8" rx="2" fill="{{COLOR}}" stroke="#1a1a1a" stroke-width="3"/><rect x="15" y="32" width="30" height="8" fill="#ff1744" stroke="#1a1a1a" stroke-width="2"/></svg>' },
  { id: 'headphones', color: '#9c27b0', svg: '<svg viewBox="0 0 60 60"><path d="M 10 35 A 20 20 0 0 1 50 35" fill="none" stroke="{{COLOR}}" stroke-width="5" stroke-linecap="round"/><circle cx="10" cy="38" r="8" fill="{{COLOR}}" stroke="#1a1a1a" stroke-width="3"/><circle cx="50" cy="38" r="8" fill="{{COLOR}}" stroke="#1a1a1a" stroke-width="3"/><rect x="7" y="35" width="6" height="10" rx="2" fill="#1a1a1a"/><rect x="47" y="35" width="6" height="10" rx="2" fill="#1a1a1a"/></svg>' }
];

function initColorPickers() {
  Object.keys(rigColors).forEach(cat => {
    const popout = document.getElementById(`popout-${cat}`); if (!popout) return; popout.innerHTML = '';
    swatches.forEach(c => {
      const div = document.createElement('div'); div.className = 'inline-swatch'; div.style.backgroundColor = c;
      div.onclick = (e) => { e.stopPropagation(); applyRigColor(cat, c); }; popout.appendChild(div);
    });
    document.getElementById(`electron-${cat}`).style.backgroundColor = rigColors[cat];
    document.getElementById(`${cat}Display`).style.borderColor = rigColors[cat];
  });
}

function renderCloset() {
  const drawer = document.getElementById('closetDrawer'); if (!drawer) return; drawer.innerHTML = '';
  accessoriesLib.forEach(item => {
    const btn = document.createElement('button'); btn.className = 'closet-item'; btn.id = `closet-btn-${item.id}`;
    btn.innerHTML = item.svg.replace(/\{\{COLOR\}\}/g, item.color);
    btn.onclick = () => window.addAccessory(item.id); drawer.appendChild(btn);
  });
}

function updateClosetUI() {
    const activeIds = canvas.getObjects().filter(o => o.rigPart === 'accessory').map(o => o.accessoryId);
    const limitReached = activeIds.length >= 2;
    accessoriesLib.forEach(item => {
        const btn = document.getElementById(`closet-btn-${item.id}`); if (!btn) return;
        btn.classList.remove('selected', 'greyed-out');
        if (activeIds.includes(item.id)) btn.classList.add('selected'); else if (limitReached) btn.classList.add('greyed-out');
    });
}

window.toggleCloset = function() {
  const drawer = document.getElementById('closetDrawer'); const btn = document.getElementById('closetToggleBtn'); playPopSound();
  if (drawer.style.display === 'grid') { drawer.style.display = 'none'; if(btn) btn.innerText = 'Open Closet'; } 
  else { drawer.style.display = 'grid'; if(btn) btn.innerText = 'Close Closet'; }
};

window.addAccessory = function(id) {
  playPopSound(); pushToUndoStack(currentStateJSON);
  const currentAcc = canvas.getObjects().filter(o => o.rigPart === 'accessory');
  const existing = currentAcc.find(o => o.accessoryId === id);
  if (existing) { canvas.remove(existing); saveCurrentState(); updateUndoBtn(); updateClosetUI(); canvas.requestRenderAll(); return; }
  if (currentAcc.length >= 2) canvas.remove(currentAcc[0]);
  const itemData = accessoriesLib.find(a => a.id === id); let obj;
  if (id === 'crown') obj = new fabric.Polygon([{x:10,y:50}, {x:50,y:50}, {x:55,y:20}, {x:40,y:35}, {x:30,y:15}, {x:20,y:35}, {x:5,y:20}], { fill: itemData.color, stroke: '#1a1a1a', strokeWidth: 3, strokeLineJoin: 'round' });
  else if (id === 'sunglasses') obj = new fabric.Group([new fabric.Rect({ left: 5, top: 10, width: 20, height: 15, rx: 3, ry: 3, fill: itemData.color }), new fabric.Rect({ left: 35, top: 10, width: 20, height: 15, rx: 3, ry: 3, fill: itemData.color }), new fabric.Line([25, 15, 35, 15], { stroke: itemData.color, strokeWidth: 4, strokeLineCap: 'round', id: 'stroke-only' })]);
  else if (id === 'bowtie') obj = new fabric.Group([new fabric.Polygon([{x:30,y:15}, {x:10,y:5}, {x:10,y:25}], { fill: itemData.color, stroke: '#1a1a1a', strokeWidth: 3, strokeLineJoin: 'round' }), new fabric.Polygon([{x:30,y:15}, {x:50,y:5}, {x:50,y:25}], { fill: itemData.color, stroke: '#1a1a1a', strokeWidth: 3, strokeLineJoin: 'round' }), new fabric.Circle({ radius: 4, left: 26, top: 11, fill: '#ffffff', stroke: '#1a1a1a', strokeWidth: 3, isPupil: true })]);
  else if (id === 'top_hat') obj = new fabric.Group([new fabric.Rect({ left: 15, top: 10, width: 30, height: 30, rx: 2, fill: itemData.color, stroke: '#1a1a1a', strokeWidth: 3 }), new fabric.Rect({ left: 10, top: 40, width: 40, height: 8, rx: 2, fill: itemData.color, stroke: '#1a1a1a', strokeWidth: 3 }), new fabric.Rect({ left: 15, top: 32, width: 30, height: 8, fill: '#ff1744', stroke: '#1a1a1a', strokeWidth: 2 })]);
  else if (id === 'horns') {
    const polyProps = { fill: itemData.color, stroke: '#1a1a1a', strokeWidth: 3, strokeLineJoin: 'round', originX: 'center', originY: 'center' };
    const coneGeometry = [{x:-6, y:15}, {x:6,y:15}, {x:0, y:-15}]; 
    const hL = new fabric.Polygon(coneGeometry, {...polyProps, angle: -45, left: -24, top: 0});
    const hR = new fabric.Polygon(coneGeometry, {...polyProps, angle: 45, left: 24, top: 0});
    obj = new fabric.Group([hL, hR]);
  }
  else if (id === 'headphones') obj = new fabric.Group([new fabric.Path('M 10 35 A 20 20 0 0 1 50 35', { fill: '', stroke: itemData.color, strokeWidth: 5, strokeLineCap: 'round', id: 'stroke-only' }), new fabric.Circle({ radius: 8, left: 2, top: 30, fill: itemData.color, stroke: '#1a1a1a', strokeWidth: 3 }), new fabric.Circle({ radius: 8, left: 42, top: 30, fill: itemData.color, stroke: '#1a1a1a', strokeWidth: 3 }), new fabric.Rect({ left: 7, top: 35, width: 6, height: 10, rx: 2, ry: 2, fill: '#1a1a1a' }), new fabric.Rect({ left: 47, top: 35, width: 6, height: 10, rx: 2, ry: 2, fill: '#1a1a1a' })]);
  
  const bodyObj = canvas.getObjects().find(o => o.rigPart === 'body');
  let bodyScaleAvg = 1;
  if (bodyObj) {
      bodyScaleAvg = (bodyObj.scaleX + bodyObj.scaleY) / 2;
  }

  let landTop = CY;
  let originY = 'center';
  let standardScale = bodyScaleAvg; 

  if (id === 'crown' || id === 'top_hat') {
      landTop = CY - (85 * bodyScaleAvg); 
      originY = 'bottom';
  } else if (id === 'horns') {
      landTop = CY - (60 * bodyScaleAvg); 
      originY = 'bottom';
  } else if (id === 'headphones') {
      landTop = CY - (85 * bodyScaleAvg); 
      originY = 'bottom'; 
  } else if (id === 'sunglasses') {
      landTop = CY - (20 * bodyScaleAvg); 
      originY = 'center';
  } else if (id === 'bowtie') {
      landTop = CY + (35 * bodyScaleAvg); 
      originY = 'top';
  }

  const off = currentAcc.length === 1 ? (30 * bodyScaleAvg) : 0; 

  obj.accessoryId = id;
  obj.set({ 
      customLayer: 'accessory', 
      originX: 'center', 
      originY: originY, 
      rigPart: 'accessory', 
      left: CX + off, 
      top: landTop + off, 
      baseScaleX: standardScale, 
      baseScaleY: standardScale,
      scaleX: standardScale, 
      scaleY: standardScale 
  });
  canvas.add(obj); canvas.setActiveObject(obj); enforceLayering(); canvas.requestRenderAll();
  saveCurrentState(); updateUndoBtn(); popAnimation([obj]); updateClosetUI();
}

window.toggleColorPicker = function(cat, e) {
  e.stopPropagation(); playPopSound();
  if (activePopout && activePopout !== cat) { const prev = document.getElementById(`popout-${activePopout}`); if (prev) prev.style.display = 'none'; }
  const pop = document.getElementById(`popout-${cat}`); if (!pop) return;
  if (pop.style.display === 'grid') { pop.style.display = 'none'; activePopout = null; } else { pop.style.display = 'grid'; activePopout = cat; }
}
window.addEventListener('click', () => { if (activePopout) { const pop = document.getElementById(`popout-${activePopout}`); if (pop) pop.style.display = 'none'; activePopout = null; } });

function applyRigColor(cat, newColor, renderStack = true) {
  if(renderStack) { pushToUndoStack(currentStateJSON); earnScramble(); playPopSound(); }
  rigColors[cat] = newColor; 
  if(document.getElementById(`electron-${cat}`)) document.getElementById(`electron-${cat}`).style.backgroundColor = newColor;
  if(document.getElementById(`${cat}Display`)) document.getElementById(`${cat}Display`).style.borderColor = newColor;
  if (activePopout === cat) { document.getElementById(`popout-${cat}`).style.display = 'none'; activePopout = null; }
  renderCarousels();
  canvas.getObjects().filter(o => o.rigPart === cat).forEach(obj => {
    const paint = (item) => {
        if (item.isPupil) return; 
        if (item.type === 'group') item.getObjects().forEach(o => paint(o));
        else {
            const isLine = item.id === 'stroke-only' || ((item.fill === '' || item.fill === 'none' || !item.fill) && item.strokeWidth > 0);
            if (isLine) item.set({ stroke: newColor, fill: '' }); else item.set({ fill: newColor, stroke: null, strokeWidth: 0 });
        }
    }; paint(obj);
  });
  canvas.requestRenderAll(); if(renderStack) { saveCurrentState(); updateUndoBtn(); }
}

function renderCarousels() {
  Object.keys(indices).forEach(cat => {
    const disp = document.getElementById(`${cat}Display`);
    if(disp) disp.innerHTML = lib[cat][indices[cat]].svg.replace(/\{\{COLOR\}\}/g, rigColors[cat]);
  });
}

function generateLimbPair(cat, type) {
  let l1, l2; const props = { customLayer: 'limb', originX: 'center', originY: 'center', rigPart: cat };
  if (type === 'lump') { l1 = new fabric.Rect({...props, width: 25, height: 70, rx: 12, ry: 12 }); l2 = new fabric.Rect({...props, width: 25, height: 70, rx: 12, ry: 12 }); } 
  else if (type === 'macaroni') { l1 = new fabric.Path('M 12 35 C 12 20, 20 12, 35 12', {...props, fill:'', strokeWidth: 22, strokeLineCap: 'round', id: 'stroke-only' }); l2 = new fabric.Path('M 12 35 C 12 20, 20 12, 35 12', {...props, fill:'', strokeWidth: 22, strokeLineCap: 'round', id: 'stroke-only' }); } 
  else if (type === 'hard_point') { l1 = new fabric.Triangle({...props, width: 30, height: 70, flipY: true }); l2 = new fabric.Triangle({...props, width: 30, height: 70, flipY: true }); }
  else if (type === 'squiggle') { l1 = new fabric.Path('M 12 35 Q 0 20 15 15 T 35 10', {...props, fill: '', strokeWidth: 18, strokeLineCap: 'round', id: 'stroke-only' }); l2 = new fabric.Path('M 12 35 Q 0 20 15 15 T 35 10', {...props, fill: '', strokeWidth: 18, strokeLineCap: 'round', flipX: true, id: 'stroke-only' }); }
  else if (type === 'stick_fist') { 
    l1 = new fabric.Group([new fabric.Path('M 35 35 L 20 20 L 5 20', { fill: '', strokeWidth: 14, strokeLineCap: 'round', strokeLineJoin: 'round', id: 'stroke-only' }), new fabric.Circle({ radius: 8, left: 5, top: 20, originX: 'center', originY: 'center' })], props); 
    l2 = new fabric.Group([new fabric.Path('M 35 35 L 20 20 L 5 20', { fill: '', strokeWidth: 14, strokeLineCap: 'round', strokeLineJoin: 'round', id: 'stroke-only' }), new fabric.Circle({ radius: 8, left: 5, top: 20, originX: 'center', originY: 'center' })], {...props, flipX: true}); 
  }
  else if (type === 'sinewave') { l1 = new fabric.Path('M 10 5 C 10 15, 30 15, 30 25 C 30 35, 10 35, 10 45', {...props, fill: '', strokeWidth: 18, strokeLineCap: 'round', id: 'stroke-only'}); l2 = new fabric.Path('M 10 5 C 10 15, 30 15, 30 25 C 30 35, 10 35, 10 45', {...props, fill: '', strokeWidth: 18, strokeLineCap: 'round', flipX: true, id: 'stroke-only'}); }
  return [l1, l2];
}

function generateSingleFeature(cat, type) {
  let obj;
  if (cat === 'body') {
    if (type === 'square') obj = new fabric.Rect({ width: 140, height: 160, rx: 25, ry: 25 });
    else if (type === 'oval') obj = new fabric.Ellipse({ rx: 70, ry: 80 });
    else if (type === 'pear') obj = new fabric.Path('M 95 10 C 113.7 10 126.2 27.5 126.2 55 C 126.2 80 157.5 95 157.5 113.7 C 157.5 132.5 129.5 145 95 145 C 60.5 145 32.5 132.5 32.5 113.7 C 32.5 95 63.8 80 63.8 55 C 63.8 27.5 76.3 10 95 10 Z');
    else if (type === 'hexagon') obj = new fabric.Polygon([{x:96,y:16}, {x:176,y:57}, {x:176,y:134}, {x:96,y:176}, {x:16,y:134}, {x:16,y:57}]);
    else if (type === 'pentagon') obj = new fabric.Polygon([{x:96,y:16}, {x:176,y:80}, {x:144,y:176}, {x:48,y:176}, {x:16,y:80}]);
    else if (type === 'trapezoid') obj = new fabric.Polygon([{x:71,y:35}, {x:142,y:35}, {x:177,y:195}, {x:35,y:195}]);
    else if (type === 'arch') obj = new fabric.Path('M 60 120 A 60 60 0 0 1 180 120 L 180 220 L 60 220 Z');
  } else if (cat === 'hair') {
    if (type === 'arches') obj = new fabric.Path('M 10 25 Q 16.6 5 23.3 25 Q 30 5 36.6 25 Q 43.3 5 50 25', { fill: '', strokeWidth: 6, strokeLineCap: 'round', strokeLineJoin: 'round', id: 'stroke-only' });
    else if (type === 'dots') obj = new fabric.Group([new fabric.Circle({ radius: 3, left: 0 }), new fabric.Circle({ radius: 3, left: 10 }), new fabric.Circle({ radius: 3, left: 20 }), new fabric.Circle({ radius: 3, left: 30 }), new fabric.Circle({ radius: 3, left: 40 })]);
    else if (type === 'triangles') obj = new fabric.Path('M 10 25 L 16.6 5 L 23.3 25 L 30 5 L 36.6 25 L 43.3 5 L 50 25', { fill: '', strokeWidth: 6, strokeLineCap: 'round', strokeLineJoin: 'round', id: 'stroke-only' });
    else if (type === 'afro') obj = new fabric.Path('M 16 25 A 6 6 0 0 1 25 15 A 8 8 0 0 1 40 10 A 6 6 0 0 1 48 25', { fill: '', strokeWidth: 6, strokeLineCap: 'round', strokeLineJoin: 'round', id: 'stroke-only' });
    else if (type === 'pigtail') obj = new fabric.Path('M 20 20 C 15 5, 45 5, 40 20', { fill: '', strokeWidth: 6, strokeLineCap: 'round', strokeLineJoin: 'round', id: 'stroke-only' });
  } else if (cat === 'eye') {
    if (type === 'eyes') obj = new fabric.Group([new fabric.Circle({ radius: 8, left: 0 }), new fabric.Circle({ radius: 8, left: 40 })]);
    else if (type === 'mad_eyes') obj = new fabric.Group([new fabric.Circle({ radius: 8, left: 0, top: 5 }), new fabric.Path('M -5 0 L 15 10', { fill: '', strokeWidth: 5, id: 'stroke-only' }), new fabric.Circle({ radius: 8, left: 40, top: 5 }), new fabric.Path('M 35 10 L 55 0', { fill: '', strokeWidth: 5, id: 'stroke-only' })]);
    else if (type === 'squinty_eyes') obj = new fabric.Group([new fabric.Path('M 0 5 Q 10 -5 20 5', { fill: '', strokeWidth: 5, strokeLineCap: 'round', id: 'stroke-only' }), new fabric.Path('M 30 5 Q 40 -5 50 5', { fill: '', strokeWidth: 5, strokeLineCap: 'round', id: 'stroke-only' })]);
    else if (type === 'large_eyes') obj = new fabric.Group([new fabric.Circle({ radius: 14, left: 0 }), new fabric.Circle({ radius: 4, fill: '#fff', left: 6, top: 4, isPupil: true }), new fabric.Circle({ radius: 14, left: 35 }), new fabric.Circle({ radius: 4, fill: '#fff', left: 41, top: 4, isPupil: true })]);
    else if (type === 'serious_eyes') obj = new fabric.Group([new fabric.Line([12, 15, 25, 15], { fill: '', strokeWidth: 6, strokeLineCap: 'round', id: 'stroke-only' }), new fabric.Line([35, 15, 48, 15], { fill: '', strokeWidth: 6, strokeLineCap: 'round', id: 'stroke-only' })]);
    else if (type === 'derp_eyes') obj = new fabric.Group([new fabric.Ellipse({ rx: 12, ry: 18, left: 0 }), new fabric.Ellipse({ rx: 4, ry: 6, fill: '#fff', left: 5, top: -4, isPupil: true }), new fabric.Ellipse({ rx: 12, ry: 18, left: 40 }), new fabric.Ellipse({ rx: 4, ry: 6, fill: '#fff', left: 45, top: -4, isPupil: true })]);
    else if (type === 'eyelashes') obj = new fabric.Group([new fabric.Circle({ radius: 7, left: 11, top: 11 }), new fabric.Path('M 15 13 Q 13 7 10 6 M 13 15 Q 8 11 6 12 M 17 12 Q 16 6 15 4', { fill: '', strokeWidth: 2.5, strokeLineCap: 'round', id: 'stroke-only' }), new fabric.Circle({ radius: 7, left: 35, top: 11 }), new fabric.Path('M 45 13 Q 47 7 50 6 M 47 15 Q 52 11 54 12 M 43 12 Q 44 6 45 4', { fill: '', strokeWidth: 2.5, strokeLineCap: 'round', id: 'stroke-only' })], { scaleX: 1.35, scaleY: 1.35 });
  } else if (cat === 'mouth') {
    if (type === 'smile') obj = new fabric.Path('M 0 10 Q 30 40 60 10', { fill: '', strokeWidth: 6, strokeLineCap: 'round', id: 'stroke-only' }); 
    else if (type === 'open_smile') obj = new fabric.Path('M 15 10 C 15 35, 45 35, 45 10 Z', { fill: '#000000' });
    else if (type === 'smirk') obj = new fabric.Path('M 0 10 Q 20 20 40 0', { fill: '', strokeWidth: 6, strokeLineCap: 'round', id: 'stroke-only' }); 
    else if (type === 'wavy_mouth') obj = new fabric.Path('M 0 10 Q 15 -10 30 10 T 60 10', { fill: '', strokeWidth: 6, strokeLineCap: 'round', id: 'stroke-only' }); 
    else if (type === 'shocked_mouth') obj = new fabric.Ellipse({ rx: 6, ry: 10, fill: '', strokeWidth: 5, id: 'stroke-only' });
    else if (type === 'whistle') obj = new fabric.Circle({ radius: 4, fill: '', strokeWidth: 5, left: 26, top: 11, id: 'stroke-only' });
    else if (type === 'notch') obj = new fabric.Path('M 15 10 L 25 10 L 25 18 L 35 18 L 35 10 L 45 10 A 15 15 0 0 1 15 10 Z');
    else if (type === 'vampire') obj = new fabric.Group([new fabric.Path('M 15 10 Q 30 14 45 10', { fill: '', strokeWidth: 5, strokeLineCap: 'round', id: 'stroke-only' }), new fabric.Path('M 20 12 L 26 12 L 23 22 Z'), new fabric.Path('M 34 12 L 40 12 L 37 22 Z')]);
    else if (type === 'tooth_stroke') obj = new fabric.Group([new fabric.Path('M 15 10 A 15 15 0 0 0 45 10', { fill: '', strokeWidth: 6, id: 'stroke-only' }), new fabric.Rect({ left: 22, top: 10, width: 16, height: 6 })]);
  }
  if(obj.type === 'rect') obj.on('scaling', function() { this.set({ width: this.width * this.scaleX, height: this.height * this.scaleY, scaleX: 1, scaleY: 1 }); });
  obj.set({ customLayer: cat === 'body' ? 'body' : 'face', originX: 'center', originY: 'center', rigPart: cat }); return obj;
}

function buildCreature(clearUndo = true, triggerStateCommit = true) {
  const body = generateSingleFeature('body', lib.body[indices.body].id); 
  const hair = generateSingleFeature('hair', lib.hair[indices.hair].id); 
  const eye = generateSingleFeature('eye', lib.eye[indices.eye].id); 
  const mouth = generateSingleFeature('mouth', lib.mouth[indices.mouth].id); 
  const arm = generateLimbPair('arm', lib.arm[indices.arm].id);
  const leg = generateLimbPair('leg', lib.leg[indices.leg].id);
  canvas.add(body, hair, eye, mouth, arm[0], arm[1], leg[0], leg[1]);
  Object.keys(rigColors).forEach(cat => applyRigColor(cat, rigColors[cat], false));
  body.set({ left: CX, top: CY }); hair.set({ left: CX, top: CY - 60 }); eye.set({ left: CX, top: CY - 20 }); mouth.set({ left: CX, top: CY + 20 });
  arm[0].set({ left: CX - 65, top: CY + 10 }); arm[1].set({ left: CX + 65, top: CY + 10, flipX: true }); 
  leg[0].set({ left: CX - 30, top: CY + 75 }); leg[1].set({ left: CX + 30, top: CY + 75 });
  canvas.getObjects().forEach(obj => { if (typeof obj.setCoords === 'function') obj.setCoords(); });
  enforceLayering(); 
  if(clearUndo) undoStack = [];
  if(triggerStateCommit) { saveCurrentState(); updateUndoBtn(); canvas.requestRenderAll(); }
}

window.randomizeCreature = function() {
  if (scrambleCount <= 0) return; if (currentStateJSON) pushToUndoStack(currentStateJSON); playPopSound(); 
  scrambleCount--; const counterUI = document.getElementById('scrambleCounter');
  if (counterUI) counterUI.innerText = scrambleCount;
  if (scrambleCount === 0) document.getElementById('scrambleBtn').classList.add('depleted');
  canvas.getObjects().filter(o => o.rigPart && o.rigPart !== 'accessory').forEach(obj => canvas.remove(obj));
  let pool = [...swatches]; for (let i = pool.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [pool[i], pool[j]] = [pool[j], pool[i]]; }
  const categories = Object.keys(indices);
  categories.forEach((cat, index) => { indices[cat] = Math.floor(Math.random() * lib[cat].length); rigColors[cat] = pool[index]; });
  buildCreature(false, false);
  const activeObjects = canvas.getObjects().filter(o => o.rigPart); const bodyObj = activeObjects.find(o => o.rigPart === 'body');
  if (bodyObj) {
    const picasso = Math.random() > 0.95;
    categories.forEach(cat => {
      if (cat === 'body') return; const targets = activeObjects.filter(o => o.rigPart === cat); if (!targets.length) return;
      const rS = picasso ? (0.7 + Math.random() * 0.7) : (0.9 + Math.random() * 0.2);
      const rR = picasso ? ((Math.random() - 0.5) * 60) : ((Math.random() - 0.5) * 20);
      const pY = (Math.random() - 0.5) * 160, pX = (Math.random() - 0.5) * 80;
      targets.forEach((obj, index) => {
        const sx = obj.scaleX < 0 ? -rS : rS, sy = obj.scaleY < 0 ? -rS : rS;
        let fl = obj.left, ft = obj.top;
        if (picasso) { fl += (index === 1 ? -pX : pX); ft += pY; } 
        else { const dX = obj.left - CX, dY = obj.top - CY; fl = CX + dX * rS; ft = CY + dY * rS; const ang = Math.atan2(ft - CY, fl - CX); fl += Math.cos(ang) * (12 + Math.random() * 15); ft += Math.sin(ang) * (12 + Math.random() * 15); }
        obj.set({ scaleX: sx, scaleY: sy, angle: obj.angle + (index === 1 ? -rR : rR), left: fl, top: ft, baseScaleX: sx, baseScaleY: sy });
        obj.setCoords(); bodyObj.setCoords();
        let att = 0; while (!obj.intersectsWithObject(bodyObj) && att < 25) { const angB = Math.atan2(bodyObj.top - obj.top, bodyObj.left - obj.left); obj.set({ left: obj.left + Math.cos(angB) * 6, top: obj.top + Math.sin(angB) * 6 }); obj.setCoords(); att++; }
      });
    });
  }
  enforceLayering(); canvas.requestRenderAll(); saveCurrentState(); updateUndoBtn(); updateClosetUI(); 
}

window.swapRigElement = function(cat, dir) {
  earnScramble(); playPopSound(); pushToUndoStack(currentStateJSON);
  indices[cat] = (indices[cat] + dir + lib[cat].length) % lib[cat].length; renderCarousels();
  const newType = lib[cat][indices[cat]].id; const old = canvas.getObjects().filter(o => o.rigPart === cat); old.forEach(obj => canvas.remove(obj));
  const anchors = { body: { left: CX, top: CY }, hair: { left: CX, top: CY - 60 }, eye: { left: CX, top: CY - 20 }, mouth: { left: CX, top: CY + 20 }, arm: [ { left: CX - 65, top: CY + 10 }, { left: CX + 65, top: CY + 10, flipX: true } ], leg: [ { left: CX - 30, top: CY + 75 }, { left: CX + 30, top: CY + 75 } ] };
  if (cat === 'arm' || cat === 'leg') {
    let p1 = anchors[cat][0], p2 = anchors[cat][1];
    if (old.length > 0) p1 = { left: old[0].left, top: old[0].top, angle: old[0].angle, scaleX: old[0].baseScaleX || old[0].scaleX, scaleY: old[0].baseScaleY || old[0].scaleY, flipX: old[0].flipX, flipY: old[0].flipY };
    if (old.length > 1) p2 = { left: old[1].left, top: old[1].top, angle: old[1].angle, scaleX: old[1].baseScaleX || old[1].scaleX, scaleY: old[1].baseScaleY || old[1].scaleY, flipX: old[1].flipX, flipY: old[1].flipY };
    const newO = generateLimbPair(cat, newType); if (cat === 'arm' && newType === 'sinewave') { p1.angle = 90; p2.angle = -90; }
    newO[0].set({...p1, baseScaleX: p1.scaleX || 1, baseScaleY: p1.scaleY || 1}); newO[1].set({...p2, baseScaleX: p2.scaleX || 1, baseScaleY: p2.scaleY || 1}); canvas.add(newO[0], newO[1]);
  } else {
    let p = anchors[cat]; if (old.length > 0) p = { left: old[0].left, top: old[0].top, angle: old[0].angle, scaleX: old[0].baseScaleX || old[0].scaleX, scaleY: old[0].baseScaleY || old[0].scaleY };
    const newO = generateSingleFeature(cat, newType); newO.set({...p, baseScaleX: p.scaleX || 1, baseScaleY: p.scaleY || 1}); canvas.add(newO);
  }
  enforceLayering(); applyRigColor(cat, rigColors[cat], false); canvas.renderAll(); saveCurrentState(); updateUndoBtn(); popAnimation(canvas.getObjects().filter(o => o.rigPart === cat)); 
}

function popAnimation(targets) {
  targets.forEach(obj => {
    const oX = obj.baseScaleX || obj.scaleX || 1, oY = obj.baseScaleY || obj.scaleY || 1;
    obj.set({ scaleX: oX, scaleY: oY });
    obj.animate('scaleX', oX * 1.25, { duration: 100, onChange: canvas.renderAll.bind(canvas), onComplete: () => { obj.animate('scaleX', oX, { duration: 180, easing: fabric.util.ease.easeOutBounce, onChange: canvas.renderAll.bind(canvas) }); } });
    obj.animate('scaleY', oY * 1.25, { duration: 100, onComplete: () => { obj.animate('scaleY', oY, { duration: 180, easing: fabric.util.ease.easeOutBounce }); } });
  });
}

window.clearCanvas = function() {
  playPopSound();
  document.getElementById('startOverLightbox').style.display = 'flex';
}

window.confirmStartOver = function() {
  playPopSound();
  document.getElementById('startOverLightbox').style.display = 'none';
  scrambleCount = 5;
  const counterUI = document.getElementById('scrambleCounter');
  if (counterUI) counterUI.innerText = scrambleCount;
  document.getElementById('scrambleBtn').classList.remove('depleted');
  canvas.clear();
  Object.keys(indices).forEach(k => indices[k] = 0);
  
  rigColors.body = '#ff9800'; rigColors.hair = '#000000'; rigColors.eye = '#000000'; rigColors.mouth = '#000000'; rigColors.arm = '#4caf50'; rigColors.leg = '#4caf50';
  
  renderCarousels();
  initColorPickers();
  buildCreature();
  updateClosetUI();
}

window.cancelStartOver = function() {
  playPopSound();
  document.getElementById('startOverLightbox').style.display = 'none';
}

window.closeSuccessModal = function() {
  playPopSound();
  document.getElementById('successLightbox').style.display = 'none';
}

// --- CLONE PIPELINE: SNAP ONLY WHITE BACKGROUND + FIGURE (NO CYAN BAKED) ---
window.togglePreview = async function() {
  const box = document.getElementById('previewLightbox');
  if (box.style.display === 'none') {
    const activeObjects = canvas.getObjects().filter(o => o.rigPart);
    if (activeObjects.length === 0) return;
    canvas.discardActiveObject();
    window.globalSelectedName = document.getElementById('stickerName').value.trim();

    let minX = 9999, minY = 9999, maxX = -9999, maxY = -9999;
    activeObjects.forEach(o => {
        const b = o.getBoundingRect();
        minX = Math.min(minX, b.left);
        minY = Math.min(minY, b.top);
        maxX = Math.max(maxX, b.left + b.width);
        maxY = Math.max(maxY, b.top + b.height);
    });

    const pad = 45;
    minX = Math.max(0, minX - pad);
    minY = Math.max(0, minY - pad);
    maxX = Math.min(canvas.width, maxX + pad);
    maxY = Math.min(canvas.height, maxY + pad);

    // Store base canvas hull path and offsets globally to draw overlay guides later
    window.cutlineHullPoints = calculateConvexHullPoints(activeObjects);
    window.cutlineOffsetX = minX;
    window.cutlineOffsetY = minY;

    let webShield = null;
    if (window.cutlineHullPoints.length >= 3) {
        webShield = new fabric.Polygon(window.cutlineHullPoints, { 
            fill: '#ffffff', stroke: '#ffffff', strokeWidth: 35, strokeLineJoin: 'round', 
            selectable: false, evented: false
        });
    }

    const clonedObjects = await Promise.all(activeObjects.map(obj => {
        return new Promise(resolve => {
            obj.clone((cloned) => {
                cloned.set({
                    left: obj.left, top: obj.top, scaleX: obj.scaleX, scaleY: obj.scaleY,
                    angle: obj.angle, originX: obj.originX, originY: obj.originY
                });

                const makeFat = (item) => {
                    if (item.type === 'group') {
                        item.getObjects().forEach(o => makeFat(o));
                    } else {
                        item.set({
                            fill: '#ffffff', stroke: '#ffffff', strokeWidth: (item.strokeWidth || 0) + 35, 
                            strokeLineJoin: 'round', strokeLineCap: 'round', shadow: null 
                        });
                    }
                };
                makeFat(cloned);
                resolve(cloned);
            });
        });
    }));

    if (webShield) canvas.add(webShield);
    clonedObjects.forEach(c => canvas.add(c));
    
    if (webShield) webShield.sendToBack();
    clonedObjects.forEach(c => c.sendToBack());
    activeObjects.forEach(o => o.bringToFront()); 
    canvas.renderAll();

    // Capture pure white die-cut backing file output (Completely free of cyan marks)
    window.cleanPrintDataUrl = canvas.toDataURL({ left: minX, top: minY, width: maxX - minX, height: maxY - minY, format: 'png', multiplier: 2 });
    window.cleanPrintWidth = maxX - minX;
    window.cleanPrintHeight = maxY - minY;

    if (webShield) canvas.remove(webShield);
    clonedObjects.forEach(c => canvas.remove(c));
    canvas.renderAll();
    
    renderPreviewSheetGrid(window.cleanPrintDataUrl, window.cleanPrintWidth, window.cleanPrintHeight, previewCanvas); 
    
    box.style.display = 'flex';
  } else { 
      box.style.display = 'none'; 
  }
}

// --- SCREEN GRID BUILDER (RENDERS EXTENDED CYAN VECTOR OVERLAYS ONLY) ---
function renderPreviewSheetGrid(srcUrl, cWidth, cHeight, previewCanvasObj) {
    previewCanvasObj.clear();
    
    const backgroundUrl = 'https://images.squarespace-cdn.com/content/696e90a0119f252471e6c387/5001f07a-737b-48eb-9cfd-62bcb5b4cf46/PasteConPaper_Background.jpg?content-type=image%2Fjpeg'; 
    
    fabric.Image.fromURL(backgroundUrl, function(bgImg) {
        if (bgImg) { 
            bgImg.set({ 
                originX: 'left', originY: 'top', left: 0, top: 0, 
                scaleX: previewCanvasObj.width / bgImg.width,
                scaleY: previewCanvasObj.height / bgImg.height,
                selectable: false, isHeaderElement: true 
            }); 
            previewCanvasObj.add(bgImg); 
        }

        const headerHeight = 269; 
        const cols = 3;
        const rows = 3;
        const stickerGap = 45;
        const sideMargin = 57;
        const topBuffer = 80;  
        const footerBuffer = 174; 

        const usableWidth = previewCanvasObj.width - (sideMargin * 2);
        const gridHeight = previewCanvasObj.height - headerHeight - topBuffer - footerBuffer;

        const maxImgW = (usableWidth - (stickerGap * (cols - 1))) / cols;
        const maxImgHConstraint = (gridHeight - (stickerGap * (rows - 1))) / rows;
        
        const absoluteOneInchMaxCap = 300; 
        const gridScaleFactor = Math.min(maxImgW / cWidth, maxImgHConstraint / cHeight);
        
        let finalScale = gridScaleFactor;
        if ((cWidth * finalScale) > absoluteOneInchMaxCap || (cHeight * finalScale) > absoluteOneInchMaxCap) {
            finalScale = Math.min(absoluteOneInchMaxCap / cWidth, absoluteOneInchMaxCap / cHeight);
        }
        
        const safetyFactor = 0.95;
        const scaleFactor = finalScale * safetyFactor;

        const finalImgW = cWidth * scaleFactor;
        const finalImgH = cHeight * scaleFactor;
        
        const startX = sideMargin + (usableWidth - (cols * finalImgW + (cols - 1) * stickerGap)) / 2;
        const startY = headerHeight + topBuffer + (gridHeight - (rows * finalImgH + (rows - 1) * stickerGap)) / 2;

        let loadedCount = 0;
        
        for(let r = 0; r < rows; r++) {
            for(let c = 0; c < cols; c++) {
                
                // Render Creature Cutline Overlay strictly inside preview space parameters
                if (window.cutlineHullPoints && window.cutlineHullPoints.length >= 3) {
                    let cx = 0, cy = 0;
                    window.cutlineHullPoints.forEach(p => { cx += p.x; cy += p.y; });
                    cx /= window.cutlineHullPoints.length; cy /= window.cutlineHullPoints.length;
                    
                    const adjustedPoints = window.cutlineHullPoints.map(p => {
                        const dX = p.x - cx, dY = p.y - cy, dist = Math.sqrt(dX*dX+dY*dY);
                        // Force alignment to match the external contour edge bounds precisely
                        const expandedX = cx + (dX / dist) * (dist + 22);
                        const expandedY = cy + (dY / dist) * (dist + 22);
                        return {
                            x: (expandedX - window.cutlineOffsetX) * (scaleFactor / 2),
                            y: (expandedY - window.cutlineOffsetY) * (scaleFactor / 2)
                        };
                    });
                    
                    const visualDottedLine = new fabric.Polygon(adjustedPoints, {
                        fill: 'transparent',
                        stroke: '#00FFFF', // Plotter Cyan Guide
                        strokeWidth: 3,
                        strokeDashArray: [8, 8],
                        strokeLineJoin: 'round',
                        left: startX + c * (finalImgW + stickerGap),
                        top: startY + r * (finalImgH + stickerGap),
                        originX: 'left', originY: 'top', selectable: false, evented: false,
                        isVisualCutline: true 
                    });
                    previewCanvasObj.add(visualDottedLine);
                }

                fabric.Image.fromURL(srcUrl, function(img) {
                    img.set({ 
                        left: startX + c * (finalImgW + stickerGap), 
                        top: startY + r * (finalImgH + stickerGap), 
                        scaleX: scaleFactor / 2, scaleY: scaleFactor / 2, 
                        originX: 'left', originY: 'top', selectable: false,
                        shadow: null 
                    });
                    previewCanvasObj.add(img); 
                    loadedCount++;
                    
                    if(loadedCount === rows * cols && !window.globalBypassNameSticker) {
                        const nameplateY = previewCanvasObj.height - 230;
                        const nameplateX = previewCanvasObj.width / 2;

                        const nameText = new fabric.Text(window.globalSelectedName, { fontSize: 31, fontWeight: 'bold', fontFamily: 'Helvetica Neue, Arial, sans-serif', fill: '#ff9800', originX: 'center', originY: 'center' });
                        const nameBg = new fabric.Rect({ width: window.globalSelectedName ? nameText.width + 62 : 226, height: nameText.height + 34, fill: '#ffffff', stroke: '#ff9800', strokeWidth: 4.2, rx: 28, ry: 28, originX: 'center', originY: 'center' });
                        const nameShield = new fabric.Rect({ width: window.globalSelectedName ? nameText.width + 62 : 226, height: nameText.height + 34, fill: '#ffffff', stroke: '#ffffff', strokeWidth: 24, rx: 28, ry: 28, originX: 'center', originY: 'center' });
                        
                        // Extract precise metrics from compiled base group to loop structural bounds
                        const targetCutWidth = nameShield.width + nameShield.strokeWidth;
                        const targetCutHeight = nameShield.height + nameShield.strokeWidth;

                        // MATCHING RULE: Build a matching concentric rectangle tracing the absolute rim contour limits
                        const nameplateCutline = new fabric.Rect({
                            width: targetCutWidth,
                            height: targetCutHeight,
                            rx: nameShield.rx + (nameShield.strokeWidth / 2),
                            ry: nameShield.ry + (nameShield.strokeWidth / 2),
                            fill: 'transparent',
                            stroke: '#00FFFF', // Plotter Standard Cyan Guide
                            strokeWidth: 3,
                            strokeDashArray: [8, 8],
                            left: nameplateX, 
                            top: nameplateY, 
                            originX: 'center', originY: 'center', selectable: false, evented: false,
                            isVisualCutline: true
                        });

                        const nameGroup = new fabric.Group([nameShield, nameBg, nameText], { 
                            left: nameplateX, top: nameplateY, originX: 'center', originY: 'center', selectable: false,
                            shadow: null 
                        });
                        nameGroup.isNameplate = true; 
                        
                        previewCanvasObj.add(nameGroup, nameplateCutline);
                    }

                    // Strict overlay layer sorting
                    previewCanvasObj.getObjects().forEach(o => {
                        if (o.isVisualCutline) o.bringToFront();
                    });
                    previewCanvasObj.renderAll();
                }, { crossOrigin: 'anonymous' });
            }
        }
    }, { crossOrigin: 'anonymous' });
}

// --- CLOUDINARY ENGINE (WIPES INTERACTIVE CYAN MARKS BEFORE UPLOAD) ---
window.sendToKitchen = async function() {
    const rawInput = document.getElementById('stickerName').value.trim();
    
    if (!rawInput && !window.globalBypassNameSticker) {
        const previewActions = document.getElementById('previewActions');
        if (previewActions) {
            previewActions.innerHTML = `
                <div id="softGatePromptTier" class="action-tier">
                    <p class="warning-text">Your sticker sheet doesn't have a name! Want to go back and add one, or skip it?</p>
                    <div class="action-row">
                      <button class="control-btn" onclick="window.abortAndRename()">Add Name</button>
                      <button class="control-btn skip-btn" onclick="window.bypassAndPrint(true)">Skip</button>
                    </div>
                </div>
            `;
        }
        return;
    }

    const targetBtns = document.querySelectorAll('#previewActions .bake-btn, .skip-btn');
    const originalTexts = Array.from(targetBtns).map(btn => btn.innerText);
    
    let dotCount = 0;
    const loadingInterval = setInterval(() => {
        dotCount = (dotCount + 1) % 4;
        targetBtns.forEach(btn => { 
            btn.innerText = "Sending" + ".".repeat(dotCount); 
            btn.style.opacity = 0.7; 
            btn.style.pointerEvents = "none";
        });
    }, 400);

    try {
        await new Promise(resolve => setTimeout(resolve, 800)); 

        // FLIP TOGGLES: Turn off visibility flags on all structural layout items
        previewCanvas.setBackgroundColor(null, () => {});
        previewCanvas.getObjects().forEach(obj => {
            if (obj.isHeaderElement) obj.set('visible', false);
            if (obj.isVisualCutline) obj.set('visible', false); // Clean strip achieved!
        });
        previewCanvas.renderAll();

        const exportedDataUrl = previewCanvas.toDataURL({ 
            format: 'png', multiplier: 2 
        });

        // Restore canvas visibility flags completely back for UI inspection state
        previewCanvas.setBackgroundColor('#ffffff', () => {});
        previewCanvas.getObjects().forEach(obj => {
            if (obj.isHeaderElement) obj.set('visible', true);
            if (obj.isVisualCutline) obj.set('visible', true);
        });
        previewCanvas.renderAll();
        
        const cloudName = "u05fp6zm";
        const uploadPreset = "izbfqsmq"; 

        const base64DataString = "data:image/png;base64," + exportedDataUrl.split(',')[1];

        const formData = new FormData();
        formData.append("file", base64DataString);
        formData.append("upload_preset", uploadPreset);
        formData.append("tags", rawInput.toLowerCase());

        const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
            method: 'POST',
            body: formData
        });

        const result = await response.json();

        if (response.ok) {
            console.log("Image safely stored at:", result.secure_url);
            window.togglePreview();
            document.getElementById('successLightbox').style.display = 'flex';
        } else {
            throw new Error(result.error ? result.error.message : "Cloudinary rejected the upload.");
        }

    } catch (e) {
        console.error("Cloudinary upload failure:", e);
        alert(`Upload Failed: ${e.message}`);
    } finally {
        clearInterval(loadingInterval);
        targetBtns.forEach((btn, index) => { 
            btn.innerText = originalTexts[index]; 
            btn.style.opacity = 1; 
            btn.style.pointerEvents = "auto"; 
        });
    }
}

window.abortAndRename = function() { 
    document.getElementById('previewActions').innerHTML = `<button class="clear-btn" onclick="window.togglePreview()">Edit Design</button><button class="bake-btn" onclick="window.sendToKitchen()">Send to Kitchen</button>`; 
    window.togglePreview(); 
    setTimeout(() => document.getElementById('stickerName').focus(), 300); 
}

window.bypassAndPrint = function(bypass) { 
    if (bypass) { 
        window.globalBypassNameSticker = true; 
        previewCanvas.getObjects().forEach(obj => {
            if (obj.isNameplate) {
                obj.set('visible', false);
            }
        });
        previewCanvas.renderAll();
    } 
    
    window.sendToKitchen();
    
    setTimeout(() => {
        window.globalBypassNameSticker = false; 
    }, 1000);
}

// KEYBOARD NUDGING & UNDO 
window.addEventListener('keydown', e => { 
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z') {
      e.preventDefault();
      window.undo();
      return;
  }
  const activeObj = canvas.getActiveObject();
  if (activeObj && ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
      e.preventDefault();
      const step = e.shiftKey ? 10 : 1; 
      if (!activeObj.__isNudging) {
          pushToUndoStack(currentStateJSON);
          activeObj.__isNudging = true;
      }
      if (e.key === 'ArrowUp') activeObj.set('top', activeObj.top - step);
      if (e.key === 'ArrowDown') activeObj.set('top', activeObj.top + step);
      if (e.key === 'ArrowLeft') activeObj.set('left', activeObj.left - step);
      if (e.key === 'ArrowRight') activeObj.set('left', activeObj.left + step);
      activeObj.setCoords();
      canvas.requestRenderAll();
  }
});

window.addEventListener('keyup', e => {
  const activeObj = canvas.getActiveObject();
  if (activeObj && activeObj.__isNudging && ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
      activeObj.__isNudging = false;
      saveCurrentState();
      updateUndoBtn();
  }
});

function playIntroScramble() {
  let flashCount = 0;
  const maxFlashes = 12; 
  const speed = 120;     
  
  const scrambleTimer = setInterval(() => {
    canvas.getObjects().filter(o => o.rigPart && o.rigPart !== 'accessory').forEach(obj => canvas.remove(obj));
    
    let pool = [...swatches];
    for (let i = pool.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [pool[i], pool[j]] = [pool[j], pool[i]]; }
    
    Object.keys(indices).forEach((cat, index) => { 
        indices[cat] = Math.floor(Math.random() * lib[cat].length); 
        rigColors[cat] = pool[index]; 
    });
    
    buildCreature(false, false);
    canvas.renderAll();
    
    flashCount++;

    if (flashCount >= maxFlashes) {
      clearInterval(scrambleTimer);
      
      canvas.getObjects().filter(o => o.rigPart && o.rigPart !== 'accessory').forEach(obj => canvas.remove(obj));
      Object.keys(indices).forEach(k => indices[k] = 0);
      rigColors.body = '#ff9800'; rigColors.hair = '#000000'; rigColors.eye = '#000000'; rigColors.mouth = '#000000'; rigColors.arm = '#4caf50'; rigColors.leg = '#4caf50';
      
      renderCarousels();
      initColorPickers();
      buildCreature(true, true);
      
      playPopSound(); 
    }
  }, speed);
}

window.randomizeCreature = randomizeCreature;
window.undo = undo;
window.clearCanvas = clearCanvas;
window.confirmStartOver = confirmStartOver;
window.cancelStartOver = cancelStartOver;
window.togglePreview = togglePreview;
window.swapRigElement = swapRigElement;
window.toggleColorPicker = toggleColorPicker;
window.sendToKitchen = sendToKitchen;
window.abortAndRename = abortAndRename;
window.bypassAndPrint = bypassAndPrint;
window.addAccessory = addAccessory;
window.toggleCloset = toggleCloset;
window.closeSuccessModal = closeSuccessModal;

initColorPickers(); renderCarousels(); renderCloset(); playIntroScramble();
