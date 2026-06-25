
Conversation with Gemini
That worked. I will do some testing with the printer now to see if this is working with the Liene. We can pause here and save the latest CSS, HTML, and JS as clean code for future updates.

That is a huge milestone! Getting the web app to perfectly format a high-res, transparent cut-file specifically for your hardware is usually the hardest part of a project like this.

Good luck with the Liene PixCut S1 test prints! Here is the master archive of your production-ready "Drop One" build. Whenever you are ready to pick this back up for Drop Two, you will have a perfect, clean slate right here.

1. index.html
HTML
<!DOCTYPE html>
<html lang="en">

  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta charset="UTF-8">
    <title>Build your own - Neo Brutalism</title>
    <link rel="stylesheet" href="style.css?v=2">
  </head>
    
  <body>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/fabric.js/5.3.1/fabric.min.js"></script>

<div class="app-wrapper">
  <header class="app-header">
    <h1>La Stickería</h1>
    <p>Cook up your own custom character! Mix, stretch, and spin your favorite ingredientes into a fresh sticker sheet. Let's see what's cooking in la cocina!</p>
  </header>

  <div class="kitchen-container">
    
    <div class="pantry">
      
      <div class="pantry-grid">
        <div class="ingredient-group">
          <label>Body</label>
          <div class="carousel-container">
            <button class="carousel-nav" onclick="window.swapRigElement('body', -1)">❮</button>
            <div class="carousel-center">
              <div class="carousel-view" id="bodyDisplay" onclick="window.toggleColorPicker('body', event)"></div>
              <div class="color-electron" id="electron-body" onclick="window.toggleColorPicker('body', event)"></div>
              <div class="electron-popout" id="popout-body"></div>
            </div>
            <button class="carousel-nav" onclick="window.swapRigElement('body', 1)">❯</button>
          </div>
        </div>
        
        <div class="ingredient-group">
          <label>Hair</label>
          <div class="carousel-container">
            <button class="carousel-nav" onclick="window.swapRigElement('hair', -1)">❮</button>
            <div class="carousel-center">
              <div class="carousel-view" id="hairDisplay" onclick="window.toggleColorPicker('hair', event)"></div>
              <div class="color-electron" id="electron-hair" onclick="window.toggleColorPicker('hair', event)"></div>
              <div class="electron-popout" id="popout-hair"></div>
            </div>
            <button class="carousel-nav" onclick="window.swapRigElement('hair', 1)">❯</button>
          </div>
        </div>

        <div class="ingredient-group">
          <label>Eyes</label>
          <div class="carousel-container">
            <button class="carousel-nav" onclick="window.swapRigElement('eye', -1)">❮</button>
            <div class="carousel-center">
              <div class="carousel-view" id="eyeDisplay" onclick="window.toggleColorPicker('eye', event)"></div>
              <div class="color-electron" id="electron-eye" onclick="window.toggleColorPicker('eye', event)"></div>
              <div class="electron-popout" id="popout-eye"></div>
            </div>
            <button class="carousel-nav" onclick="window.swapRigElement('eye', 1)">❯</button>
          </div>
        </div>

        <div class="ingredient-group">
          <label>Mouth</label>
          <div class="carousel-container">
            <button class="carousel-nav" onclick="window.swapRigElement('mouth', -1)">❮</button>
            <div class="carousel-center">
              <div class="carousel-view" id="mouthDisplay" onclick="window.toggleColorPicker('mouth', event)"></div>
              <div class="color-electron" id="electron-mouth" onclick="window.toggleColorPicker('mouth', event)"></div>
              <div class="electron-popout" id="popout-mouth"></div>
            </div>
            <button class="carousel-nav" onclick="window.swapRigElement('mouth', 1)">❯</button>
          </div>
        </div>

        <div class="ingredient-group">
          <label>Arms</label>
          <div class="carousel-container">
            <button class="carousel-nav" onclick="window.swapRigElement('arm', -1)">❮</button>
            <div class="carousel-center">
              <div class="carousel-view" id="armDisplay" onclick="window.toggleColorPicker('arm', event)"></div>
              <div class="color-electron" id="electron-arm" onclick="window.toggleColorPicker('arm', event)"></div>
              <div class="electron-popout" id="popout-arm"></div>
            </div>
            <button class="carousel-nav" onclick="window.swapRigElement('arm', 1)">❯</button>
          </div>
        </div>

        <div class="ingredient-group">
          <label>Legs</label>
          <div class="carousel-container">
            <button class="carousel-nav" onclick="window.swapRigElement('leg', -1)">❮</button>
            <div class="carousel-center">
              <div class="carousel-view" id="legDisplay" onclick="window.toggleColorPicker('leg', event)"></div>
              <div class="color-electron" id="electron-leg" onclick="window.toggleColorPicker('leg', event)"></div>
              <div class="electron-popout" id="popout-leg"></div>
            </div>
            <button class="carousel-nav" onclick="window.swapRigElement('leg', 1)">❯</button>
          </div>
        </div>
      </div>

      <div class="closet-wrapper">
        <button id="closetToggleBtn" class="closet-btn" onclick="window.toggleCloset()">Open Closet</button>
        <div id="closetDrawer" class="closet-drawer">
          </div>
      </div>
      
      <div class="canvas-actions" id="editActions">
        <button id="undoBtn" class="undo-btn disabled-btn" onclick="window.undo()">Undo</button>
        <button class="clear-btn" onclick="window.clearCanvas()">Start Over</button>
        <button class="bake-btn" onclick="window.togglePreview()">Preview Print</button>
      </div>

    </div>

    <div class="cutting-board-wrapper">
      <div class="cutting-board">
        <canvas id="stickerCanvas"></canvas>
        
        <button class="loco-btn" id="scrambleBtn" onclick="window.randomizeCreature()" title="El Collage Loco">
          <span id="scrambleCounter" class="loco-counter">5</span>
          <svg viewBox="0 0 40 40">
            <circle class="loco-shape loco-circle" cx="14" cy="18" r="6" />
            <rect class="loco-shape loco-rect" x="20" y="8" width="12" height="12" transform="rotate(15 26 14)" />
            <polygon class="loco-shape loco-poly" points="12,36 22,24 32,36" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
      
      <div class="name-group ingredient-group">
        <label>Name Your Masterpiece</label>
        <input type="text" id="stickerName" placeholder="e.g. El Jefe" maxlength="18" />
      </div>

    </div>
    
  </div>
</div>

<div id="previewLightbox" class="lightbox-overlay" style="display: none;">
  <div class="lightbox-modal">
    <div class="lightbox-canvas-box">
      <canvas id="previewCanvas"></canvas>
    </div>
    <div class="canvas-actions" id="previewActions">
      <button class="clear-btn" onclick="window.togglePreview()">Edit Design</button>
      <button class="bake-btn" onclick="window.sendToKitchen()">Send to Kitchen</button>
    </div>
  </div>
</div>

<div id="startOverLightbox" class="lightbox-overlay" style="display: none;">
  <div class="prompt-box">
    <h2>Scrap It?</h2>
    <p>Are you sure you want to throw this character in the trash and start fresh?</p>
    <div class="action-row">
      <button class="control-btn" onclick="window.cancelStartOver()">Nevermind</button>
      <button class="control-btn trash-btn" onclick="window.confirmStartOver()">Trash It</button>
    </div>
  </div>
</div>
    <script src="script.js?v=2"></script>

  </body>
  
</html>
2. style.css
CSS
body { 
  font-family: 'Helvetica Neue', Arial, sans-serif; 
  background-color: #fdfaf2; 
  background-image: 
    radial-gradient(rgba(26, 26, 26, 0.03) 1px, transparent 0),
    radial-gradient(rgba(26, 26, 26, 0.02) 1px, transparent 0);
  background-size: 4px 4px, 6px 6px;
  background-position: 0 0, 2px 2px;
  color: #1a1a1a; 
  margin: 0; 
  display: flex; 
  justify-content: center; 
  padding: 30px 20px; 
  overflow-x: hidden; 
}

/* APP LAYOUT */
.app-wrapper { display: flex; flex-direction: column; gap: 20px; max-width: 850px; width: 100%; position: relative; }

/* NEO-BRUTALIST HEADER */
.app-header { background-color: #ea7316; padding: 25px 30px; border-radius: 12px; text-align: center; margin-bottom: 10px; border: 4px solid #1a1a1a; box-shadow: 6px 6px 0px #1a1a1a; transition: opacity 0.25s ease; }
.app-header h1 { margin: 0 0 12px 0; font-size: 2.2rem; text-transform: uppercase; letter-spacing: 2px; color: #fbf6c7; text-shadow: 2px 2px 0px #1a1a1a; }
.app-header p { margin: 0; font-size: 0.95rem; color: #ffffff; line-height: 1.5; max-width: 750px; margin-left: auto; margin-right: auto; font-weight: 600; }

/* MAIN WORKSPACE */
.kitchen-container { display: flex; gap: 40px; width: 100%; align-items: stretch; justify-content: center; }

/* PANTRY ENGINE */
.pantry { width: 380px; display: flex; flex-direction: column; transition: opacity 0.25s ease, filter 0.25s ease; box-sizing: border-box; }
.pantry-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px 20px; align-content: space-evenly; flex-grow: 1; padding-bottom: 20px; }

.name-group { 
  width: 100%; 
  text-align: center; 
  margin-top: 10px; 
  position: relative; 
  z-index: 10; 
  padding: 15px 0; 
  background-color: #fdfaf2; 
  background-image: 
    radial-gradient(rgba(26, 26, 26, 0.03) 1px, transparent 0),
    radial-gradient(rgba(26, 26, 26, 0.02) 1px, transparent 0);
  background-size: 4px 4px, 6px 6px;
  background-position: 0 0, 2px 2px;
}

.ingredient-group { margin-bottom: 0; text-align: center; } 
.ingredient-group label { font-size: 0.95rem; color: #1a1a1a; margin-bottom: 5px; display: block; text-transform: uppercase; font-weight: 900; letter-spacing: 1px; }

/* CAROUSELS */
.carousel-container { display: flex; align-items: center; justify-content: center; gap: 10px; }
.carousel-nav { background: #fbfbf6; border-radius: 50%; width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; border: 3px solid #1a1a1a; box-shadow: 2px 2px 0px #1a1a1a; color: transparent !important; font-size: 0.8rem; cursor: pointer; transition: transform 0.05s ease, box-shadow 0.05s ease; padding: 0; position: relative; }
.carousel-nav:hover { background: #ea7316; }
.carousel-nav:active { transform: translate(2px, 2px); box-shadow: 0px 0px 0px #1a1a1a; }
.carousel-nav::before { content: ''; position: absolute; top: 50%; left: 50%; width: 7px; height: 7px; border-top: 3px solid #1a1a1a; border-right: 3px solid #1a1a1a; border-radius: 1px; transition: border-color 0.2s; }
.carousel-nav:hover::before { border-color: #ffffff; }
.carousel-container .carousel-nav:first-child::before { transform: translate(-35%, -50%) rotate(-135deg); }
.carousel-container .carousel-nav:last-child::before { transform: translate(-65%, -50%) rotate(45deg); }

.carousel-center { position: relative; width: 72px; height: 72px; }
.carousel-view { width: 100%; height: 100%; border-radius: 50%; background: #fbfbf6; border: 4px solid #1a1a1a; display: flex; justify-content: center; align-items: center; transition: transform 0.05s ease, box-shadow 0.05s ease, border-color 0.1s ease; box-shadow: 4px 4px 0px #1a1a1a; cursor: pointer; box-sizing: border-box; }
.carousel-view:hover { border-color: #ea7316; } 
.carousel-view:active { transform: translate(4px, 4px); box-shadow: 0px 0px 0px #1a1a1a; }
.carousel-view svg { width: 36px; height: 36px; max-width: 100%; max-height: 100%; object-fit: contain; } 

/* COLOR PICKER ALIGNMENTS */
.color-electron { position: absolute; top: 0px; right: -4px; width: 22px; height: 22px; border-radius: 50%; border: 3px solid #1a1a1a; box-shadow: 2px 2px 0px #1a1a1a; cursor: pointer; transition: transform 0.05s ease, box-shadow 0.05s ease; z-index: 5; }
.color-electron:hover { transform: scale(1.05); }
.color-electron:active { transform: translate(2px, 2px); box-shadow: 0px 0px 0px #1a1a1a; }

.electron-popout { display: none; position: absolute; top: 110%; left: 50%; transform: translateX(-50%); width: 116px; background: #fbfbf6; border: 4px solid #1a1a1a; border-radius: 8px; padding: 8px; box-shadow: 6px 6px 0px #1a1a1a; z-index: 20; grid-template-columns: repeat(4, 1fr); gap: 6px; justify-content: flex-start; }
.inline-swatch { width: 20px; height: 20px; border-radius: 50%; cursor: pointer; border: 2px solid #1a1a1a; transition: transform 0.1s; box-sizing: border-box;}
.inline-swatch:hover { transform: scale(1.2); box-shadow: 2px 2px 0px #1a1a1a; }

/* THE CLOSET STYLES */
.closet-wrapper { width: 100%; margin-bottom: 25px; position: relative; }

/* CLOSET CTA STYLES */
.closet-btn { 
  width: 100%; 
  background: #fbfbf6; 
  color: #000000;      
  border: 4px solid #7ae2be; 
  border-radius: 50px; 
  padding: 12px; 
  font-size: 1rem; 
  font-weight: 900; 
  text-transform: uppercase; 
  letter-spacing: 1px; 
  cursor: pointer; 
  box-shadow: 4px 4px 0px #7ae2be; 
  transition: transform 0.05s ease, box-shadow 0.05s ease, background-color 0.1s; 
}
.closet-btn:hover { 
  background: #eaffee; 
}
.closet-btn:active { 
  transform: translate(4px, 4px); 
  box-shadow: 0px 0px 0px #7ae2be; 
}

/* UPDATED CLOSET DRAWER CONTAINER STYLES */
.closet-drawer { 
  display: none; 
  grid-template-columns: repeat(3, 1fr); 
  gap: 12px; 
  background: #fbfbf6; 
  border: 4px solid #7ae2be; 
  border-radius: 12px; 
  padding: 15px; 
  margin-top: 15px; 
  box-shadow: 4px 4px 0px #7ae2be; 
}

.closet-item { width: 100%; aspect-ratio: 1; background: #ffffff; border: 3px solid #1a1a1a; border-radius: 8px; cursor: pointer; transition: transform 0.1s, box-shadow 0.1s, border-color 0.1s; display: flex; align-items: center; justify-content: center; box-shadow: 2px 2px 0px #1a1a1a; }
.closet-item:hover { border-color: #2196f3; transform: scale(1.05); }
.closet-item:active { transform: translate(2px, 2px) scale(1.05); box-shadow: 0px 0px 0px #1a1a1a; }
.closet-item svg { width: 60%; height: 60%; pointer-events: none; }

/* DYNAMIC CLOSET STATES */
.closet-item.selected { border-color: #ea7316; background-color: #fff3e0; box-shadow: 4px 4px 0px #ea7316; transform: scale(1.05); }
.closet-item.greyed-out { filter: grayscale(100%); opacity: 0.35; box-shadow: 0px 0px 0px #1a1a1a; transform: scale(0.95); }
.closet-item.greyed-out:hover { filter: grayscale(20%); opacity: 0.9; transform: scale(1.05); box-shadow: 2px 2px 0px #1a1a1a; }

/* INPUT FIELDS */
input[type="text"] { width: 100%; background: #fbfbf6; color: #1a1a1a; border: 4px solid #1a1a1a; border-radius: 50px; padding: 12px 15px; font-size: 1rem; outline: none; box-sizing: border-box; transition: 0.1s; margin: 0; text-align: center; box-shadow: 4px 4px 0px #1a1a1a; font-weight: bold; }
input[type="text"]:focus { border-color: #ea7316; box-shadow: 4px 4px 0px #ea7316; }
input[type="text"]::placeholder { color: #888; font-weight: normal; }

/* THE CUTTING BOARD SPACE */
.cutting-board-wrapper { position: relative; display: flex; flex-direction: column; width: 390px; transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.15); }
.cutting-board { position: relative; width: 100%; height: 450px; border: none !important; background: transparent !important; border-radius: 0px; overflow: visible; box-shadow: none !important; }

/* FLOATING TOY SCRAMBLER BADGE */
.loco-btn { position: absolute; bottom: 0; right: 0; width: 65px; height: 65px; border-radius: 50% !important; background-color: #fbfbf6; border: 4px solid #1a1a1a !important; box-shadow: 4px 4px 0px #1a1a1a !important; cursor: pointer; transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); display: flex; align-items: center; justify-content: center; padding: 0 !important; box-sizing: border-box; z-index: 50; }
.loco-shape { fill: #fbfbf6; stroke: #1a1a1a; stroke-width: 2.5; transition: 0.3s; }
.loco-btn svg { width: 30px; height: 30px; transition: 0.3s; }
.loco-btn:hover { width: 65px; height: 65px; background-color: #1a1a1a; transform: translate(-2px, -2px); box-shadow: 6px 6px 0px #ea7316 !important; }
.loco-btn:hover svg { transform: rotate(-15deg) scale(1.1); }
.loco-btn:hover .loco-shape { stroke: #1a1a1a; }
.loco-btn:hover .loco-circle { fill: #ffea00; }
.loco-btn:hover .loco-rect { fill: #FF008C; }
.loco-btn:hover .loco-poly { fill: #00CED1; }
.loco-btn:active { transform: translate(4px, 4px) scale(1) !important; box-shadow: 0px 0px 0px #1a1a1a !important; transition: 0.05s; }

.loco-counter { position: absolute; top: -10px; left: -10px; width: 24px; height: 24px; background-color: #fbfbf6; color: #1a1a1a; border: 3px solid #1a1a1a; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; font-weight: 900; box-shadow: 2px 2px 0px #1a1a1a; transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); pointer-events: none; z-index: 10; }
.loco-btn:hover .loco-counter { transform: scale(1.1) translate(-2px, -2px); border-color: #1a1a1a; color: #1a1a1a; }
.loco-btn.depleted { background-color: #e0dcd3; border-color: #888 !important; cursor: not-allowed; transform: none !important; box-shadow: none !important; }
.loco-btn.depleted .loco-shape { stroke: #888; }
.loco-btn.depleted .loco-counter { background-color: #e0dcd3; border-color: #888; color: #888; box-shadow: none; transform: none; }

/* POP ANIMATION EFFECT */
@keyframes earnPop { 0% { transform: scale(1); } 50% { transform: scale(1.6); background-color: #ff9800; color: #1a1a1a; border-color: #1a1a1a; box-shadow: 4px 4px 0px #1a1a1a; } 100% { transform: scale(1); } }
.pop-anim { animation: earnPop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }

/* SYSTEM ACTION PANEL */
.canvas-actions { display: flex; gap: 10px; margin-top: 0px; width: 100%; box-sizing: border-box; }
.bake-btn { background-color: #ea7316 !important; color: #ffffff; padding: 12px 10px; font-size: 1rem; font-weight: 900; border: 3px solid #1a1a1a; border-radius: 50px; cursor: pointer; transition: transform 0.05s ease, box-shadow 0.05s ease, background-color 0.1s ease; margin: 0; flex-grow: 1.2; text-align: center; box-shadow: 4px 4px 0px #1a1a1a; }
.bake-btn:hover { background-color: #ff9800 !important; }
.bake-btn:active { transform: translate(4px, 4px); box-shadow: 0px 0px 0px #1a1a1a; }

.undo-btn { background-color: #fbfbf6 !important; color: #1a1a1a; padding: 12px 10px; font-size: 1rem; font-weight: 900; border: 3px solid #1a1a1a; border-radius: 50px; cursor: pointer; transition: transform 0.05s ease, box-shadow 0.05s ease, background-color 0.1s ease, color 0.1s ease; margin: 0; flex-grow: 1; text-align: center; box-shadow: 4px 4px 0px #1a1a1a; }
.undo-btn:hover { background-color: #2196f3 !important; color: #fff; }
.undo-btn:active { transform: translate(4px, 4px); box-shadow: 0px 0px 0px #1a1a1a; }

.clear-btn { background-color: #fbfbf6 !important; color: #1a1a1a; padding: 12px 10px; font-size: 1rem; font-weight: 900; border: 3px solid #1a1a1a; border-radius: 50px; cursor: pointer; transition: transform 0.05s ease, box-shadow 0.05s ease, background-color 0.1s ease, color 0.1s ease; margin: 0; flex-grow: 1; text-align: center; box-shadow: 4px 4px 0px #1a1a1a; }
.clear-btn:hover { background-color: #d32f2f !important; color: #fff; }
.clear-btn:active { transform: translate(4px, 4px); box-shadow: 0px 0px 0px #1a1a1a; }

.disabled-btn { border-color: #aaa !important; color: #aaa !important; background-color: #e0dcd3 !important; box-shadow: 2px 2px 0px #aaa !important; cursor: not-allowed; pointer-events: none; }

/* SOFT-GATE SYSTEM ALERTS */
.action-tier { display: flex; flex-direction: column; gap: 12px; width: 100%; margin-top: 0px; }
.action-row { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; width: 100%; }
.control-btn { padding: 12px; font-size: 0.95rem; font-weight: 900; border-radius: 50px; cursor: pointer; border: 3px solid #1a1a1a; background-color: #fbfbf6; color: #1a1a1a; transition: transform 0.05s ease, box-shadow 0.05s ease; text-align: center; box-shadow: 4px 4px 0px #1a1a1a; }
.control-btn:hover { background-color: #f0ecdf; }
.control-btn:active { transform: translate(4px, 4px); box-shadow: 0px 0px 0px #1a1a1a; }
.skip-btn { background-color: #fbfbf6; border-color: #1a1a1a; color: #ea7316; }
.skip-btn:hover { background-color: #ea7316; color: #ffffff; }

.warning-text { font-size: 0.88rem; font-weight: 900; color: #1a1a1a; background-color: #ffea00; border: 3px solid #1a1a1a; padding: 14px; border-radius: 25px; line-height: 1.4; text-align: center; margin: 0; box-shadow: 4px 4px 0px #1a1a1a; }

/* OVERLAY FRAME LIGHTBOX */
.lightbox-overlay {
  position: fixed !important; top: 0 !important; left: 0 !important; width: 100vw !important; height: 100vh !important;
  background-color: rgba(253, 250, 242, 0.98) !important; z-index: 99999999 !important;
  align-items: center !important; justify-content: center !important; padding: 20px !important; box-sizing: border-box !important;
}
.lightbox-modal { display: flex !important; flex-direction: column !important; gap: 20px !important; align-items: center !important; max-width: 100% !important; }
.lightbox-canvas-box {
  background: #ffffff !important; padding: 16px !important; border-radius: 8px !important; width: 380px !important; max-width: 100% !important;
  box-shadow: 0px 25px 70px rgba(26, 22, 15, 0.22), 0px 5px 20px rgba(26, 22, 15, 0.08) !important;
}

/* START OVER CUSTOM PROMPT */
.prompt-box {
  background: #fbfbf6;
  border: 4px solid #1a1a1a;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 8px 8px 0px #1a1a1a;
  text-align: center;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.prompt-box h2 { 
  margin: 0 0 10px 0; 
  color: #ea7316; 
  font-size: 2.2rem; 
  text-transform: uppercase; 
  letter-spacing: 1px; 
  text-shadow: 2px 2px 0px #1a1a1a; 
}
.prompt-box p { 
  font-weight: 900; 
  margin-bottom: 25px; 
  color: #1a1a1a; 
  line-height: 1.4; 
  font-size: 1.05rem;
}
.trash-btn { 
  background-color: #ff1744 !important; 
  color: #ffffff !important; 
  border-color: #1a1a1a !important; 
}
.trash-btn:hover { 
  background-color: #d32f2f !important; 
}

/* --- MOBILE RESPONSIVE LAYOUT --- */
@media (max-width: 800px) {
  .kitchen-container { flex-direction: column; align-items: center; gap: 25px; }
  
  .cutting-board-wrapper { order: 1; width: 100%; max-width: 390px; position: relative; left: auto; transform: none; }
  .pantry { order: 2; width: 100%; max-width: 390px; height: auto; gap: 0px; justify-content: flex-start; }
  .pantry-grid { gap: 15px 10px; }

  .canvas-actions#editActions { 
    order: -1; 
    margin-bottom: 25px; 
  }
}

@media (max-width: 600px) {
  .app-header h1 { font-size: 1.4rem !important; }
}

@media (max-width: 450px) {
  .cutting-board { 
    transform: scale(0.85); 
    transform-origin: center top; 
    margin-bottom: -60px; 
  }
}
3. script.js
JavaScript
// 1. GLOBAL APP STATE INITIALIZATION 
const canvas = new fabric.Canvas('stickerCanvas', { width: 390, height: 450, backgroundColor: 'transparent', preserveObjectStacking: true, allowTouchScrolling: true });
const previewCanvas = new fabric.Canvas('previewCanvas', { width: 380, height: 570, selection: false });
const CX = 195; 
const CY = 225; 

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

window.togglePreview = function() {
  const box = document.getElementById('previewLightbox');
  if (box.style.display === 'none') {
    const activeObjects = canvas.getObjects().filter(o => o.rigPart); if (activeObjects.length === 0) return;
    canvas.discardActiveObject(); window.globalSelectedName = document.getElementById('stickerName').value.trim();
    let minX = 9999, minY = 9999, maxX = -9999, maxY = -9999;
    activeObjects.forEach(o => { const b = o.getBoundingRect(); minX = Math.min(minX, b.left); minY = Math.min(minY, b.top); maxX = Math.max(maxX, b.left + b.width); maxY = Math.max(maxY, b.top + b.height); });
    const pad = 25; minX = Math.max(0, minX - pad); minY = Math.max(0, minY - pad); maxX = Math.min(canvas.width, maxX + pad); maxY = Math.min(canvas.height, maxY + pad);
    const hull = calculateConvexHullPoints(activeObjects); let shield = null, guide = null;
    if (hull.length >= 3) {
      let cx = 0, cy = 0; hull.forEach(p => { cx += p.x; cy += p.y; }); cx /= hull.length; cy /= hull.length;
      shield = new fabric.Polygon(hull, { fill: '#ffffff', stroke: '#ffffff', strokeWidth: 24, strokeLineJoin: 'round', selectable: false, evented: false });
      
      guide = new fabric.Polygon(hull.map(p => { const dX = p.x - cx, dY = p.y - cy, dist = Math.sqrt(dX*dX+dY*dY); return { x: cx+(dX/dist)*(dist+12), y: cy+(dY/dist)*(dist+12) }; }), { fill: 'transparent', stroke: '#aaaaaa', strokeWidth: 2, strokeDashArray: [5, 4], strokeLineJoin: 'round', selectable: false, evented: false });
      canvas.add(shield, guide); guide.bringToFront(); shield.sendToBack(); canvas.renderAll();
    }
    
    if (guide) guide.set('visible', false); 
    canvas.renderAll();
    window.cleanPrintDataUrl = canvas.toDataURL({ left: minX, top: minY, width: maxX - minX, height: maxY - minY, format: 'png', multiplier: 2 });
    
    if (guide) guide.set('visible', true); 
    canvas.renderAll();
    
    renderPreviewSheetGrid(window.cleanPrintDataUrl, maxX - minX, maxY - minY, previewCanvas); 
    
    box.style.display = 'flex';
  } else { 
      box.style.display = 'none'; 
      const objects = canvas.getObjects();
      for(let i = objects.length -1; i >= 0; i--) {
          if(!objects[i].rigPart) canvas.remove(objects[i]);
      }
      canvas.renderAll(); 
  }
}

function renderPreviewSheetGrid(srcUrl, cWidth, cHeight, previewCanvasObj) {
    previewCanvasObj.clear();
    previewCanvasObj.setBackgroundColor('#ffffff', () => {
      const headerHeight = 95; 
      
      const headerRect = new fabric.Rect({ left: 0, top: 0, width: previewCanvasObj.width, height: headerHeight, fill: '#ea7316', selectable: false, isHeaderElement: true }); 
      previewCanvasObj.add(headerRect);
      
      const yellowLogoUrl = 'https://images.squarespace-cdn.com/content/696e90a0119f252471e6c387/a8849c53-61d0-40c1-b65f-2877d2b019b1/PasteConPaper_Horizontal-Yellow.png?content-type=image%2Fpng';
      
      fabric.Image.fromURL(yellowLogoUrl, function(logo) {
          if (logo) { 
            logo.set({ originX: 'center', originY: 'center', left: previewCanvasObj.width / 2, top: 32, selectable: false, isHeaderElement: true }); 
            logo.scaleToHeight(45); 
            previewCanvasObj.add(logo); 
          }
          const textConfig = { fontSize: 10, fontWeight: 'bold', fontFamily: 'Helvetica Neue, Arial, sans-serif', fill: '#f9f5bc', selectable: false, top: headerHeight - 20, originY: 'center', isHeaderElement: true };
          previewCanvasObj.add(new fabric.Text('www.pasteconpaper.com', { ...textConfig, left: 15, originX: 'left' }), new fabric.Text('@pasteconpaper', { ...textConfig, left: previewCanvasObj.width - 15, originX: 'right' }));
          previewCanvasObj.renderAll();
      }, { crossOrigin: 'anonymous' });

      const cols = 3;
      const rows = 3;
      const stickerGap = 16;
      const sideMargin = 20;
      const topBuffer = 15;
      const footerBuffer = 75;

      const usableWidth = previewCanvasObj.width - (sideMargin * 2);
      const gridHeight = previewCanvasObj.height - headerHeight - topBuffer - footerBuffer;

      const maxImgW = (usableWidth - (stickerGap * (cols - 1))) / cols;
      const maxImgHConstraint = (gridHeight - (stickerGap * (rows - 1))) / rows;
      
      const scaleFactor = Math.min(maxImgW / cWidth, maxImgHConstraint / cHeight) * 0.95; 
      const finalImgW = cWidth * scaleFactor;
      const finalImgH = cHeight * scaleFactor;
      
      const startX = sideMargin + (usableWidth - (cols * finalImgW + (cols - 1) * stickerGap)) / 2;
      const startY = headerHeight + topBuffer + (gridHeight - (rows * finalImgH + (rows - 1) * stickerGap)) / 2;

      let loadedCount = 0;
      for(let r = 0; r < rows; r++) {
          for(let c = 0; c < cols; c++) {
              fabric.Image.fromURL(srcUrl, function(img) {
                  img.set({ 
                      left: startX + c * (finalImgW + stickerGap), 
                      top: startY + r * (finalImgH + stickerGap), 
                      scaleX: scaleFactor / 2, 
                      scaleY: scaleFactor / 2, 
                      originX: 'left', 
                      originY: 'top', 
                      selectable: false 
                  });
                  previewCanvasObj.add(img); 
                  loadedCount++;
                  
                  if(loadedCount === rows * cols && !window.globalBypassNameSticker) {
                      const nameText = new fabric.Text(window.globalSelectedName, { fontSize: 11, fontWeight: 'bold', fontFamily: 'Helvetica Neue, Arial, sans-serif', fill: '#ff9800', originX: 'center', originY: 'center' });
                      const nameBg = new fabric.Rect({ width: window.globalSelectedName ? nameText.width + 22 : 80, height: nameText.height + 12, fill: '#ffffff', stroke: '#ff9800', strokeWidth: 1.5, rx: 10, ry: 10, originX: 'center', originY: 'center' });
                      previewCanvasObj.add(new fabric.Group([nameBg, nameText], { left: previewCanvasObj.width / 2, top: previewCanvasObj.height - 38, originX: 'center', originY: 'center', selectable: false }));
                  }
                  previewCanvasObj.renderAll();
              }, { crossOrigin: 'anonymous' });
          }
      }
    });
}

// --- LOCAL TESTING OUTPUT ENGINE ---
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

    const buttons = document.querySelectorAll('.bake-btn');
    buttons.forEach(btn => { btn.innerText = "Exporting..."; btn.style.opacity = 0.7; });

    try {
        await new Promise(resolve => setTimeout(resolve, 800)); 

        previewCanvas.setBackgroundColor(null, () => {});
        previewCanvas.getObjects().forEach(obj => {
            if (obj.isHeaderElement) obj.set('visible', false);
        });
        previewCanvas.renderAll();

        const exportedDataUrl = previewCanvas.toDataURL({ 
            format: 'png', 
            multiplier: 5 
        });

        previewCanvas.setBackgroundColor('#ffffff', () => {});
        previewCanvas.getObjects().forEach(obj => {
            if (obj.isHeaderElement) obj.set('visible', true);
        });
        previewCanvas.renderAll();
        
        const ghostLink = document.createElement('a');
        ghostLink.download = `${rawInput || 'stickeria-masterpiece'}.png`;
        ghostLink.href = exportedDataUrl;
        ghostLink.click();

        window.togglePreview();
    } catch (e) {
        console.error("Local client image asset generation failure:", e);
        alert("Something went wrong compiling the local print graphic asset file.");
    } finally {
        buttons.forEach(btn => { btn.innerText = 'Send to Kitchen'; btn.style.opacity = 1; });
    }
}

window.abortAndRename = function() { 
    document.getElementById('previewActions').innerHTML = `<button class="clear-btn" onclick="window.togglePreview()">Edit Design</button><button class="bake-btn" onclick="window.sendToKitchen()">Send to Kitchen</button>`; 
    window.togglePreview(); 
    setTimeout(() => document.getElementById('stickerName').focus(), 300); 
}

window.bypassAndPrint = function(bypass) { 
    if (bypass) { window.globalBypassNameSticker = true; } 
    renderPreviewSheetGrid(window.cleanPrintDataUrl, previewCanvas.width, previewCanvas.height, previewCanvas);
    
    setTimeout(() => {
        window.sendToKitchen();
        window.globalBypassNameSticker = false; 
    }, 400);
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

// --- NEW INTRO SCRAMBLE ---
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

// --- MAP EVERYTHING TO WINDOW ---
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

// --- INIT ---
initColorPickers(); renderCarousels(); renderCloset(); playIntroScramble();
The mobile version shows a popup window to download with the image. See attached screen shot. Is there anyway to bypass this?

Ah, the infamous iOS Safari "Data URI" popup! I know exactly what you are looking at.

Because we are generating the image directly inside the browser using a string of raw code (Base64) rather than downloading a physical file from a server, Apple’s security sandbox panics. It doesn't know how to silently download a text string, so it shows the user the entire massive block of code and asks, "Are you sure you want to download this?" We cannot completely bypass iOS asking the user what to do with the file (Apple strictly prevents silent downloads for security), but we can make it look completely professional and native!

We will use the Native Web Share API. Instead of trying to force a clunky download, we will convert the raw code into a true "File" and trigger the native iPhone/Android Share Sheet. This lets the user just tap "Save Image", "AirDrop", or text it directly to a friend, just like a real mobile app. If they are on a desktop, it will gracefully fall back to a clean, normal download without the ugly code block.

The Fix
Open your script.js file, scroll down to the window.sendToKitchen = async function() { ... } block, and replace that entire function with this updated version:

JavaScript
// --- LOCAL TESTING OUTPUT ENGINE (WITH NATIVE MOBILE SHARE) ---
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

    const buttons = document.querySelectorAll('.bake-btn');
    buttons.forEach(btn => { btn.innerText = "Exporting..."; btn.style.opacity = 0.7; });

    try {
        await new Promise(resolve => setTimeout(resolve, 800)); 

        // Hide header elements for clean export
        previewCanvas.setBackgroundColor(null, () => {});
        previewCanvas.getObjects().forEach(obj => {
            if (obj.isHeaderElement) obj.set('visible', false);
        });
        previewCanvas.renderAll();

        // Snapshot the high-res image
        const exportedDataUrl = previewCanvas.toDataURL({ 
            format: 'png', 
            multiplier: 5 
        });

        // Restore header elements to the preview screen
        previewCanvas.setBackgroundColor('#ffffff', () => {});
        previewCanvas.getObjects().forEach(obj => {
            if (obj.isHeaderElement) obj.set('visible', true);
        });
        previewCanvas.renderAll();
        
        // --- NEW: Convert Base64 to a Real File Object ---
        const res = await fetch(exportedDataUrl);
        const blob = await res.blob();
        const fileName = `${rawInput || 'stickeria-masterpiece'}.png`;
        const file = new File([blob], fileName, { type: 'image/png' });

        // --- NEW: Trigger Native Mobile Share Sheet OR Desktop Download ---
        if (navigator.canShare && navigator.canShare({ files: [file] })) {
            // Mobile: Opens the native iOS/Android share menu (Save Image, Message, etc.)
            await navigator.share({
                files: [file],
                title: fileName
            });
        } else {
            // Desktop Fallback: Clean Object URL download (Bypasses the ugly text popup)
            const blobUrl = URL.createObjectURL(blob);
            const ghostLink = document.createElement('a');
            ghostLink.download = fileName;
            ghostLink.href = blobUrl;
            ghostLink.click();
            URL.revokeObjectURL(blobUrl); // Clean up memory
        }

        window.togglePreview();
    } catch (e) {
        // If the user simply cancels the share sheet, we don't want an error alert
        if (e.name !== 'AbortError') {
            console.error("Local client image asset generation failure:", e);
            alert("Something went wrong compiling the local print graphic asset file.");
        }
    } finally {
        buttons.forEach(btn => { btn.innerText = 'Send to Kitchen'; btn.style.opacity = 1; });
    }
}
What this changes:
No More Text Matrix: By converting the canvas export into a Blob (Binary Large Object) before triggering the download, iOS recognizes it as a legitimate image file instead of a scary text string.

Native iOS Experience: It checks navigator.canShare. Because you are on an iPhone, a beautiful native menu will slide up from the bottom of your screen, letting you save it to your camera roll immediately.

Push that to GitHub, wait a minute for the build, do a hard refresh on your phone, and hit the export button. It should feel like a multi-million dollar native app now!

This is great can I get a full version of the JS code block to easily copy and replace?

Here is the complete, fully updated script.js code. This includes the new Native Mobile Share API fix, the high-res 300 DPI multiplier, the transparent background magic trick, and the intro scramble animation.

Just copy this entire block and replace the contents of your script.js file on GitHub!

JavaScript
// 1. GLOBAL APP STATE INITIALIZATION 
const canvas = new fabric.Canvas('stickerCanvas', { width: 390, height: 450, backgroundColor: 'transparent', preserveObjectStacking: true, allowTouchScrolling: true });
const previewCanvas = new fabric.Canvas('previewCanvas', { width: 380, height: 570, selection: false });
const CX = 195; 
const CY = 225; 

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

window.togglePreview = function() {
  const box = document.getElementById('previewLightbox');
  if (box.style.display === 'none') {
    const activeObjects = canvas.getObjects().filter(o => o.rigPart); if (activeObjects.length === 0) return;
    canvas.discardActiveObject(); window.globalSelectedName = document.getElementById('stickerName').value.trim();
    let minX = 9999, minY = 9999, maxX = -9999, maxY = -9999;
    activeObjects.forEach(o => { const b = o.getBoundingRect(); minX = Math.min(minX, b.left); minY = Math.min(minY, b.top); maxX = Math.max(maxX, b.left + b.width); maxY = Math.max(maxY, b.top + b.height); });
    const pad = 25; minX = Math.max(0, minX - pad); minY = Math.max(0, minY - pad); maxX = Math.min(canvas.width, maxX + pad); maxY = Math.min(canvas.height, maxY + pad);
    const hull = calculateConvexHullPoints(activeObjects); let shield = null, guide = null;
    if (hull.length >= 3) {
      let cx = 0, cy = 0; hull.forEach(p => { cx += p.x; cy += p.y; }); cx /= hull.length; cy /= hull.length;
      shield = new fabric.Polygon(hull, { fill: '#ffffff', stroke: '#ffffff', strokeWidth: 24, strokeLineJoin: 'round', selectable: false, evented: false });
      
      guide = new fabric.Polygon(hull.map(p => { const dX = p.x - cx, dY = p.y - cy, dist = Math.sqrt(dX*dX+dY*dY); return { x: cx+(dX/dist)*(dist+12), y: cy+(dY/dist)*(dist+12) }; }), { fill: 'transparent', stroke: '#aaaaaa', strokeWidth: 2, strokeDashArray: [5, 4], strokeLineJoin: 'round', selectable: false, evented: false });
      canvas.add(shield, guide); guide.bringToFront(); shield.sendToBack(); canvas.renderAll();
    }
    
    if (guide) guide.set('visible', false); 
    canvas.renderAll();
    window.cleanPrintDataUrl = canvas.toDataURL({ left: minX, top: minY, width: maxX - minX, height: maxY - minY, format: 'png', multiplier: 2 });
    
    if (guide) guide.set('visible', true); 
    canvas.renderAll();
    
    renderPreviewSheetGrid(window.cleanPrintDataUrl, maxX - minX, maxY - minY, previewCanvas); 
    
    box.style.display = 'flex';
  } else { 
      box.style.display = 'none'; 
      const objects = canvas.getObjects();
      for(let i = objects.length -1; i >= 0; i--) {
          if(!objects[i].rigPart) canvas.remove(objects[i]);
      }
      canvas.renderAll(); 
  }
}

function renderPreviewSheetGrid(srcUrl, cWidth, cHeight, previewCanvasObj) {
    previewCanvasObj.clear();
    previewCanvasObj.setBackgroundColor('#ffffff', () => {
      const headerHeight = 95; 
      
      const headerRect = new fabric.Rect({ left: 0, top: 0, width: previewCanvasObj.width, height: headerHeight, fill: '#ea7316', selectable: false, isHeaderElement: true }); 
      previewCanvasObj.add(headerRect);
      
      const yellowLogoUrl = 'https://images.squarespace-cdn.com/content/696e90a0119f252471e6c387/a8849c53-61d0-40c1-b65f-2877d2b019b1/PasteConPaper_Horizontal-Yellow.png?content-type=image%2Fpng';
      
      fabric.Image.fromURL(yellowLogoUrl, function(logo) {
          if (logo) { 
            logo.set({ originX: 'center', originY: 'center', left: previewCanvasObj.width / 2, top: 32, selectable: false, isHeaderElement: true }); 
            logo.scaleToHeight(45); 
            previewCanvasObj.add(logo); 
          }
          const textConfig = { fontSize: 10, fontWeight: 'bold', fontFamily: 'Helvetica Neue, Arial, sans-serif', fill: '#f9f5bc', selectable: false, top: headerHeight - 20, originY: 'center', isHeaderElement: true };
          previewCanvasObj.add(new fabric.Text('www.pasteconpaper.com', { ...textConfig, left: 15, originX: 'left' }), new fabric.Text('@pasteconpaper', { ...textConfig, left: previewCanvasObj.width - 15, originX: 'right' }));
          previewCanvasObj.renderAll();
      }, { crossOrigin: 'anonymous' });

      const cols = 3;
      const rows = 3;
      const stickerGap = 16;
      const sideMargin = 20;
      const topBuffer = 15;
      const footerBuffer = 75;

      const usableWidth = previewCanvasObj.width - (sideMargin * 2);
      const gridHeight = previewCanvasObj.height - headerHeight - topBuffer - footerBuffer;

      const maxImgW = (usableWidth - (stickerGap * (cols - 1))) / cols;
      const maxImgHConstraint = (gridHeight - (stickerGap * (rows - 1))) / rows;
      
      const scaleFactor = Math.min(maxImgW / cWidth, maxImgHConstraint / cHeight) * 0.95; 
      const finalImgW = cWidth * scaleFactor;
      const finalImgH = cHeight * scaleFactor;
      
      const startX = sideMargin + (usableWidth - (cols * finalImgW + (cols - 1) * stickerGap)) / 2;
      const startY = headerHeight + topBuffer + (gridHeight - (rows * finalImgH + (rows - 1) * stickerGap)) / 2;

      let loadedCount = 0;
      for(let r = 0; r < rows; r++) {
          for(let c = 0; c < cols; c++) {
              fabric.Image.fromURL(srcUrl, function(img) {
                  img.set({ 
                      left: startX + c * (finalImgW + stickerGap), 
                      top: startY + r * (finalImgH + stickerGap), 
                      scaleX: scaleFactor / 2, 
                      scaleY: scaleFactor / 2, 
                      originX: 'left', 
                      originY: 'top', 
                      selectable: false 
                  });
                  previewCanvasObj.add(img); 
                  loadedCount++;
                  
                  if(loadedCount === rows * cols && !window.globalBypassNameSticker) {
                      const nameText = new fabric.Text(window.globalSelectedName, { fontSize: 11, fontWeight: 'bold', fontFamily: 'Helvetica Neue, Arial, sans-serif', fill: '#ff9800', originX: 'center', originY: 'center' });
                      const nameBg = new fabric.Rect({ width: window.globalSelectedName ? nameText.width + 22 : 80, height: nameText.height + 12, fill: '#ffffff', stroke: '#ff9800', strokeWidth: 1.5, rx: 10, ry: 10, originX: 'center', originY: 'center', isHeaderElement: true });
                      previewCanvasObj.add(new fabric.Group([nameBg, nameText], { left: previewCanvasObj.width / 2, top: previewCanvasObj.height - 38, originX: 'center', originY: 'center', selectable: false, isHeaderElement: true }));
                  }
                  previewCanvasObj.renderAll();
              }, { crossOrigin: 'anonymous' });
          }
      }
    });
}

// --- LOCAL TESTING OUTPUT ENGINE (WITH NATIVE MOBILE SHARE) ---
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

    const buttons = document.querySelectorAll('.bake-btn');
    buttons.forEach(btn => { btn.innerText = "Exporting..."; btn.style.opacity = 0.7; });

    try {
        await new Promise(resolve => setTimeout(resolve, 800)); 

        // Hide header elements for clean export
        previewCanvas.setBackgroundColor(null, () => {});
        previewCanvas.getObjects().forEach(obj => {
            if (obj.isHeaderElement) obj.set('visible', false);
        });
        previewCanvas.renderAll();

        // Snapshot the high-res image
        const exportedDataUrl = previewCanvas.toDataURL({ 
            format: 'png', 
            multiplier: 5 
        });

        // Restore header elements to the preview screen
        previewCanvas.setBackgroundColor('#ffffff', () => {});
        previewCanvas.getObjects().forEach(obj => {
            if (obj.isHeaderElement) obj.set('visible', true);
        });
        previewCanvas.renderAll();
        
        // --- Convert Base64 to a Real File Object ---
        const res = await fetch(exportedDataUrl);
        const blob = await res.blob();
        const fileName = `${rawInput || 'stickeria-masterpiece'}.png`;
        const file = new File([blob], fileName, { type: 'image/png' });

        // --- Trigger Native Mobile Share Sheet OR Desktop Download ---
        if (navigator.canShare && navigator.canShare({ files: [file] })) {
            // Mobile: Opens the native iOS/Android share menu (Save Image, Message, etc.)
            await navigator.share({
                files: [file],
                title: fileName
            });
        } else {
            // Desktop Fallback: Clean Object URL download (Bypasses the text popup)
            const blobUrl = URL.createObjectURL(blob);
            const ghostLink = document.createElement('a');
            ghostLink.download = fileName;
            ghostLink.href = blobUrl;
            ghostLink.click();
            URL.revokeObjectURL(blobUrl); // Clean up memory
        }

        window.togglePreview();
    } catch (e) {
        // If the user simply cancels the share sheet, we don't want an error alert
        if (e.name !== 'AbortError') {
            console.error("Local client image asset generation failure:", e);
            alert("Something went wrong compiling the local print graphic asset file.");
        }
    } finally {
        buttons.forEach(btn => { btn.innerText = 'Send to Kitchen'; btn.style.opacity = 1; });
    }
}

window.abortAndRename = function() { 
    document.getElementById('previewActions').innerHTML = `<button class="clear-btn" onclick="window.togglePreview()">Edit Design</button><button class="bake-btn" onclick="window.sendToKitchen()">Send to Kitchen</button>`; 
    window.togglePreview(); 
    setTimeout(() => document.getElementById('stickerName').focus(), 300); 
}

window.bypassAndPrint = function(bypass) { 
    if (bypass) { window.globalBypassNameSticker = true; } 
    renderPreviewSheetGrid(window.cleanPrintDataUrl, previewCanvas.width, previewCanvas.height, previewCanvas);
    
    setTimeout(() => {
        window.sendToKitchen();
        window.globalBypassNameSticker = false; 
    }, 400);
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

// --- NEW INTRO SCRAMBLE ---
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

// --- MAP EVERYTHING TO WINDOW ---
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

// --- INIT ---
initColorPickers(); renderCarousels(); renderCloset(); playIntroScramble();
Back from testing with the printer. Looks like the print area is the following pixels at 300dpi. 2150px wide by 3708px tall. Can you make the necessary adjustments to the rendered PNG? That way, when I scale it to the space, it fits perfectly.

This is the exact reason we do hardware tests—there is always a difference between screen pixels and printer DPI!

A thermal dye-sub printer like the Liene S1 is incredibly precise. It expects a 300 DPI canvas that measures exactly 2150px by 3708px. If we give it that exact 1:1 pixel map, you won't have to scale, crop, or guess during printing; it will be mathematically perfect.

To achieve this without breaking your visual web UI, I have upgraded the previewCanvas "under the hood."

The Blueprint: The logical canvas is now set to exactly 1075x1854. When we hit the export button, we apply a exact multiplier: 2, which outputs precisely 2150x3708.

The Layout: I did the math to multiply every single element (the header, text sizes, margins, gaps, and borders) by 2.83x so the layout perfectly adapts to the new massive canvas dimensions.

The UI Fix: I injected a tiny CSS rule at the top of the script so this giant canvas automatically shrinks down to fit neatly inside your modal lightbox window on mobile/desktop without blowing up the screen.

Here is the finalized, 300-DPI printer-ready script.js. You just need to copy and replace your current JS file!

Updated script.js
JavaScript
// --- AUTO-INJECT CSS TO CONTAIN THE NEW MASSIVE CANVAS IN THE UI ---
const previewStyleFix = document.createElement('style');
previewStyleFix.innerHTML = `
  .lightbox-canvas-box .canvas-container { width: 100% !important; height: auto !important; aspect-ratio: 1075 / 1854; position: relative; }
  .lightbox-canvas-box canvas { width: 100% !important; height: 100% !important; position: absolute !important; top: 0; left: 0; }
`;
document.head.appendChild(previewStyleFix);

// 1. GLOBAL APP STATE INITIALIZATION 
const canvas = new fabric.Canvas('stickerCanvas', { width: 390, height: 450, backgroundColor: 'transparent', preserveObjectStacking: true, allowTouchScrolling: true });
// EXACT PRINTER ASPECT RATIO (Target 2150x3708 / 2 = 1075x1854)
const previewCanvas = new fabric.Canvas('previewCanvas', { width: 1075, height: 1854, selection: false });
const CX = 195; 
const CY = 225; 

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

window.togglePreview = function() {
  const box = document.getElementById('previewLightbox');
  if (box.style.display === 'none') {
    const activeObjects = canvas.getObjects().filter(o => o.rigPart); if (activeObjects.length === 0) return;
    canvas.discardActiveObject(); window.globalSelectedName = document.getElementById('stickerName').value.trim();
    let minX = 9999, minY = 9999, maxX = -9999, maxY = -9999;
    activeObjects.forEach(o => { const b = o.getBoundingRect(); minX = Math.min(minX, b.left); minY = Math.min(minY, b.top); maxX = Math.max(maxX, b.left + b.width); maxY = Math.max(maxY, b.top + b.height); });
    const pad = 25; minX = Math.max(0, minX - pad); minY = Math.max(0, minY - pad); maxX = Math.min(canvas.width, maxX + pad); maxY = Math.min(canvas.height, maxY + pad);
    const hull = calculateConvexHullPoints(activeObjects); let shield = null, guide = null;
    if (hull.length >= 3) {
      let cx = 0, cy = 0; hull.forEach(p => { cx += p.x; cy += p.y; }); cx /= hull.length; cy /= hull.length;
      shield = new fabric.Polygon(hull, { fill: '#ffffff', stroke: '#ffffff', strokeWidth: 24, strokeLineJoin: 'round', selectable: false, evented: false });
      
      guide = new fabric.Polygon(hull.map(p => { const dX = p.x - cx, dY = p.y - cy, dist = Math.sqrt(dX*dX+dY*dY); return { x: cx+(dX/dist)*(dist+12), y: cy+(dY/dist)*(dist+12) }; }), { fill: 'transparent', stroke: '#aaaaaa', strokeWidth: 2, strokeDashArray: [5, 4], strokeLineJoin: 'round', selectable: false, evented: false });
      canvas.add(shield, guide); guide.bringToFront(); shield.sendToBack(); canvas.renderAll();
    }
    
    if (guide) guide.set('visible', false); 
    canvas.renderAll();
    window.cleanPrintDataUrl = canvas.toDataURL({ left: minX, top: minY, width: maxX - minX, height: maxY - minY, format: 'png', multiplier: 2 });
    
    if (guide) guide.set('visible', true); 
    canvas.renderAll();
    
    renderPreviewSheetGrid(window.cleanPrintDataUrl, maxX - minX, maxY - minY, previewCanvas); 
    
    box.style.display = 'flex';
  } else { 
      box.style.display = 'none'; 
      const objects = canvas.getObjects();
      for(let i = objects.length -1; i >= 0; i--) {
          if(!objects[i].rigPart) canvas.remove(objects[i]);
      }
      canvas.renderAll(); 
  }
}

function renderPreviewSheetGrid(srcUrl, cWidth, cHeight, previewCanvasObj) {
    previewCanvasObj.clear();
    previewCanvasObj.setBackgroundColor('#ffffff', () => {
      
      // 2.83x UI SCALING FIX FOR 1075x1854 LOGICAL CANVAS
      const headerHeight = 269; 
      
      const headerRect = new fabric.Rect({ left: 0, top: 0, width: previewCanvasObj.width, height: headerHeight, fill: '#ea7316', selectable: false, isHeaderElement: true }); 
      previewCanvasObj.add(headerRect);
      
      const yellowLogoUrl = 'https://images.squarespace-cdn.com/content/696e90a0119f252471e6c387/a8849c53-61d0-40c1-b65f-2877d2b019b1/PasteConPaper_Horizontal-Yellow.png?content-type=image%2Fpng';
      
      fabric.Image.fromURL(yellowLogoUrl, function(logo) {
          if (logo) { 
            logo.set({ originX: 'center', originY: 'center', left: previewCanvasObj.width / 2, top: 91, selectable: false, isHeaderElement: true }); 
            logo.scaleToHeight(127); 
            previewCanvasObj.add(logo); 
          }
          const textConfig = { fontSize: 28, fontWeight: 'bold', fontFamily: 'Helvetica Neue, Arial, sans-serif', fill: '#f9f5bc', selectable: false, top: 212, originY: 'center', isHeaderElement: true };
          previewCanvasObj.add(new fabric.Text('www.pasteconpaper.com', { ...textConfig, left: 42, originX: 'left' }), new fabric.Text('@pasteconpaper', { ...textConfig, left: previewCanvasObj.width - 42, originX: 'right' }));
          previewCanvasObj.renderAll();
      }, { crossOrigin: 'anonymous' });

      const cols = 3;
      const rows = 3;
      const stickerGap = 45;
      const sideMargin = 57;
      const topBuffer = 42;
      const footerBuffer = 212;

      const usableWidth = previewCanvasObj.width - (sideMargin * 2);
      const gridHeight = previewCanvasObj.height - headerHeight - topBuffer - footerBuffer;

      const maxImgW = (usableWidth - (stickerGap * (cols - 1))) / cols;
      const maxImgHConstraint = (gridHeight - (stickerGap * (rows - 1))) / rows;
      
      const scaleFactor = Math.min(maxImgW / cWidth, maxImgHConstraint / cHeight) * 0.95; 
      const finalImgW = cWidth * scaleFactor;
      const finalImgH = cHeight * scaleFactor;
      
      const startX = sideMargin + (usableWidth - (cols * finalImgW + (cols - 1) * stickerGap)) / 2;
      const startY = headerHeight + topBuffer + (gridHeight - (rows * finalImgH + (rows - 1) * stickerGap)) / 2;

      let loadedCount = 0;
      for(let r = 0; r < rows; r++) {
          for(let c = 0; c < cols; c++) {
              fabric.Image.fromURL(srcUrl, function(img) {
                  img.set({ 
                      left: startX + c * (finalImgW + stickerGap), 
                      top: startY + r * (finalImgH + stickerGap), 
                      scaleX: scaleFactor / 2, 
                      scaleY: scaleFactor / 2, 
                      originX: 'left', 
                      originY: 'top', 
                      selectable: false 
                  });
                  previewCanvasObj.add(img); 
                  loadedCount++;
                  
                  if(loadedCount === rows * cols && !window.globalBypassNameSticker) {
                      const nameText = new fabric.Text(window.globalSelectedName, { fontSize: 31, fontWeight: 'bold', fontFamily: 'Helvetica Neue, Arial, sans-serif', fill: '#ff9800', originX: 'center', originY: 'center' });
                      const nameBg = new fabric.Rect({ width: window.globalSelectedName ? nameText.width + 62 : 226, height: nameText.height + 34, fill: '#ffffff', stroke: '#ff9800', strokeWidth: 4.2, rx: 28, ry: 28, originX: 'center', originY: 'center', isHeaderElement: true });
                      previewCanvasObj.add(new fabric.Group([nameBg, nameText], { left: previewCanvasObj.width / 2, top: previewCanvasObj.height - 108, originX: 'center', originY: 'center', selectable: false, isHeaderElement: true }));
                  }
                  previewCanvasObj.renderAll();
              }, { crossOrigin: 'anonymous' });
          }
      }
    });
}

// --- LOCAL TESTING OUTPUT ENGINE (WITH NATIVE MOBILE SHARE) ---
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

    const buttons = document.querySelectorAll('.bake-btn');
    buttons.forEach(btn => { btn.innerText = "Exporting..."; btn.style.opacity = 0.7; });

    try {
        await new Promise(resolve => setTimeout(resolve, 800)); 

        // Hide header elements for clean export
        previewCanvas.setBackgroundColor(null, () => {});
        previewCanvas.getObjects().forEach(obj => {
            if (obj.isHeaderElement) obj.set('visible', false);
        });
        previewCanvas.renderAll();

        // 300 DPI PRINTER SCALE: 1075x1854 * 2 = 2150x3708 EXPORT RESOLUTION
        const exportedDataUrl = previewCanvas.toDataURL({ 
            format: 'png', 
            multiplier: 2 
        });

        // Restore header elements to the preview screen
        previewCanvas.setBackgroundColor('#ffffff', () => {});
        previewCanvas.getObjects().forEach(obj => {
            if (obj.isHeaderElement) obj.set('visible', true);
        });
        previewCanvas.renderAll();
        
        // --- Convert Base64 to a Real File Object ---
        const res = await fetch(exportedDataUrl);
        const blob = await res.blob();
        const fileName = `${rawInput || 'stickeria-masterpiece'}.png`;
        const file = new File([blob], fileName, { type: 'image/png' });

        // --- Trigger Native Mobile Share Sheet OR Desktop Download ---
        if (navigator.canShare && navigator.canShare({ files: [file] })) {
            // Mobile: Opens the native iOS/Android share menu (Save Image, Message, etc.)
            await navigator.share({
                files: [file],
                title: fileName
            });
        } else {
            // Desktop Fallback: Clean Object URL download
            const blobUrl = URL.createObjectURL(blob);
            const ghostLink = document.createElement('a');
            ghostLink.download = fileName;
            ghostLink.href = blobUrl;
            ghostLink.click();
            URL.revokeObjectURL(blobUrl); 
        }

        window.togglePreview();
    } catch (e) {
        if (e.name !== 'AbortError') {
            console.error("Local client image asset generation failure:", e);
            alert("Something went wrong compiling the local print graphic asset file.");
        }
    } finally {
        buttons.forEach(btn => { btn.innerText = 'Send to Kitchen'; btn.style.opacity = 1; });
    }
}

window.abortAndRename = function() { 
    document.getElementById('previewActions').innerHTML = `<button class="clear-btn" onclick="window.togglePreview()">Edit Design</button><button class="bake-btn" onclick="window.sendToKitchen()">Send to Kitchen</button>`; 
    window.togglePreview(); 
    setTimeout(() => document.getElementById('stickerName').focus(), 300); 
}

window.bypassAndPrint = function(bypass) { 
    if (bypass) { window.globalBypassNameSticker = true; } 
    renderPreviewSheetGrid(window.cleanPrintDataUrl, previewCanvas.width, previewCanvas.height, previewCanvas);
    
    setTimeout(() => {
        window.sendToKitchen();
        window.globalBypassNameSticker = false; 
    }, 400);
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

// --- NEW INTRO SCRAMBLE ---
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

// --- MAP EVERYTHING TO WINDOW ---
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

// --- INIT ---
initColorPickers(); renderCarousels(); renderCloset(); playIntroScramble();
I have not tested the new image just yet. BUT I do want to update how the print preview looks for the customer. I have created a new background image. Is it possible to provide a JPG file where the stickers sit on top of? If so, do I need to place the image somewhere to provide a link for?

This is a fantastic design upgrade! Using a pre-designed, textured background image will make the preview look leaps and bounds more professional than flat, code-generated shapes.

To answer your questions:

Yes, it is entirely possible!

Yes, you just need to upload that exact file (make sure it is named exactly PasteConPaper_Background.jpg) directly into your GitHub repository, right next to your index.html and script.js files.

Because we already built the "Magic Trick" in the last step (which hides the header and background right before the final export), all we have to do is tag this new image as a isHeaderElement. That way, the customer gets an awesome branded preview, but your printer still gets the perfectly transparent, clean cut-file it needs.

The Fix
Because the rest of your code is perfectly stable, we only need to swap out one specific section of your script.js file.

Find the function renderPreviewSheetGrid(...) block (it starts around line 357) and replace that entire function with this new version:

JavaScript
function renderPreviewSheetGrid(srcUrl, cWidth, cHeight, previewCanvasObj) {
    previewCanvasObj.clear();
    
    // 1. Tell the canvas to load your new JPG from GitHub
    const backgroundUrl = 'PasteConPaper_Background.jpg'; 
    
    fabric.Image.fromURL(backgroundUrl, function(bgImg) {
        if (bgImg) { 
            // Scale the JPG so it perfectly fills the 1075x1854 logical canvas
            bgImg.set({ 
                originX: 'left', 
                originY: 'top', 
                left: 0, 
                top: 0, 
                scaleX: previewCanvasObj.width / bgImg.width,
                scaleY: previewCanvasObj.height / bgImg.height,
                selectable: false, 
                isHeaderElement: true // MAGIC TRICK: This tells the exporter to hide it during download!
            }); 
            previewCanvasObj.add(bgImg); 
        }

        // 2. Now that the background is loaded, map out the grid for the stickers
        const headerHeight = 269; 
        const cols = 3;
        const rows = 3;
        const stickerGap = 45;
        const sideMargin = 57;
        const topBuffer = 42;
        const footerBuffer = 212;

        const usableWidth = previewCanvasObj.width - (sideMargin * 2);
        const gridHeight = previewCanvasObj.height - headerHeight - topBuffer - footerBuffer;

        const maxImgW = (usableWidth - (stickerGap * (cols - 1))) / cols;
        const maxImgHConstraint = (gridHeight - (stickerGap * (rows - 1))) / rows;
        
        const scaleFactor = Math.min(maxImgW / cWidth, maxImgHConstraint / cHeight) * 0.95; 
        const finalImgW = cWidth * scaleFactor;
        const finalImgH = cHeight * scaleFactor;
        
        const startX = sideMargin + (usableWidth - (cols * finalImgW + (cols - 1) * stickerGap)) / 2;
        const startY = headerHeight + topBuffer + (gridHeight - (rows * finalImgH + (rows - 1) * stickerGap)) / 2;

        let loadedCount = 0;
        
        // 3. Plop the transparent stickers onto the new background
        for(let r = 0; r < rows; r++) {
            for(let c = 0; c < cols; c++) {
                fabric.Image.fromURL(srcUrl, function(img) {
                    img.set({ 
                        left: startX + c * (finalImgW + stickerGap), 
                        top: startY + r * (finalImgH + stickerGap), 
                        scaleX: scaleFactor / 2, 
                        scaleY: scaleFactor / 2, 
                        originX: 'left', 
                        originY: 'top', 
                        selectable: false 
                    });
                    previewCanvasObj.add(img); 
                    loadedCount++;
                    
                    // 4. Once all 9 stickers are drawn, add the custom Name Badge at the bottom
                    if(loadedCount === rows * cols && !window.globalBypassNameSticker) {
                        const nameText = new fabric.Text(window.globalSelectedName, { fontSize: 31, fontWeight: 'bold', fontFamily: 'Helvetica Neue, Arial, sans-serif', fill: '#ff9800', originX: 'center', originY: 'center' });
                        const nameBg = new fabric.Rect({ width: window.globalSelectedName ? nameText.width + 62 : 226, height: nameText.height + 34, fill: '#ffffff', stroke: '#ff9800', strokeWidth: 4.2, rx: 28, ry: 28, originX: 'center', originY: 'center', isHeaderElement: true });
                        previewCanvasObj.add(new fabric.Group([nameBg, nameText], { left: previewCanvasObj.width / 2, top: previewCanvasObj.height - 108, originX: 'center', originY: 'center', selectable: false, isHeaderElement: true }));
                    }
                    previewCanvasObj.renderAll();
                }, { crossOrigin: 'anonymous' });
            }
        }
    }, { crossOrigin: 'anonymous' });
}
Your Next Steps:
Upload your image to the main folder of your GitHub repository. Double-check that it is named exactly PasteConPaper_Background.jpg (capitalization matters on GitHub!).

Copy and replace the renderPreviewSheetGrid function in your script.js file with the code above.

Because you updated the Javascript, don't forget to bump the cache buster in your index.html file to <script src="script.js?v=3"></script> so your browser grabs the new update immediately.

To make it easier can I get full code blocks to easily copy and replace?

Absolutely! Here is your complete, master archive for "Drop One" containing all the latest updates—including the massive 300 DPI canvas scaling, the native mobile share sheet, the transparent cut-file output, and your brand-new PasteConPaper_Background.jpg preview wrapper.

I have already bumped the cache busters in the HTML to ?v=3 so GitHub is forced to load this fresh update immediately.

Just copy and replace these three files in your repository, make sure your new JPG is uploaded to the same folder, and you are ready to print!

1. index.html
HTML
<!DOCTYPE html>
<html lang="en">

  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta charset="UTF-8">
    <title>Build your own - Neo Brutalism</title>
    <link rel="stylesheet" href="style.css?v=3">
  </head>
    
  <body>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/fabric.js/5.3.1/fabric.min.js"></script>

<div class="app-wrapper">
  <header class="app-header">
    <h1>La Stickería</h1>
    <p>Cook up your own custom character! Mix, stretch, and spin your favorite ingredientes into a fresh sticker sheet. Let's see what's cooking in la cocina!</p>
  </header>

  <div class="kitchen-container">
    
    <div class="pantry">
      
      <div class="pantry-grid">
        <div class="ingredient-group">
          <label>Body</label>
          <div class="carousel-container">
            <button class="carousel-nav" onclick="window.swapRigElement('body', -1)">❮</button>
            <div class="carousel-center">
              <div class="carousel-view" id="bodyDisplay" onclick="window.toggleColorPicker('body', event)"></div>
              <div class="color-electron" id="electron-body" onclick="window.toggleColorPicker('body', event)"></div>
              <div class="electron-popout" id="popout-body"></div>
            </div>
            <button class="carousel-nav" onclick="window.swapRigElement('body', 1)">❯</button>
          </div>
        </div>
        
        <div class="ingredient-group">
          <label>Hair</label>
          <div class="carousel-container">
            <button class="carousel-nav" onclick="window.swapRigElement('hair', -1)">❮</button>
            <div class="carousel-center">
              <div class="carousel-view" id="hairDisplay" onclick="window.toggleColorPicker('hair', event)"></div>
              <div class="color-electron" id="electron-hair" onclick="window.toggleColorPicker('hair', event)"></div>
              <div class="electron-popout" id="popout-hair"></div>
            </div>
            <button class="carousel-nav" onclick="window.swapRigElement('hair', 1)">❯</button>
          </div>
        </div>

        <div class="ingredient-group">
          <label>Eyes</label>
          <div class="carousel-container">
            <button class="carousel-nav" onclick="window.swapRigElement('eye', -1)">❮</button>
            <div class="carousel-center">
              <div class="carousel-view" id="eyeDisplay" onclick="window.toggleColorPicker('eye', event)"></div>
              <div class="color-electron" id="electron-eye" onclick="window.toggleColorPicker('eye', event)"></div>
              <div class="electron-popout" id="popout-eye"></div>
            </div>
            <button class="carousel-nav" onclick="window.swapRigElement('eye', 1)">❯</button>
          </div>
        </div>

        <div class="ingredient-group">
          <label>Mouth</label>
          <div class="carousel-container">
            <button class="carousel-nav" onclick="window.swapRigElement('mouth', -1)">❮</button>
            <div class="carousel-center">
              <div class="carousel-view" id="mouthDisplay" onclick="window.toggleColorPicker('mouth', event)"></div>
              <div class="color-electron" id="electron-mouth" onclick="window.toggleColorPicker('mouth', event)"></div>
              <div class="electron-popout" id="popout-mouth"></div>
            </div>
            <button class="carousel-nav" onclick="window.swapRigElement('mouth', 1)">❯</button>
          </div>
        </div>

        <div class="ingredient-group">
          <label>Arms</label>
          <div class="carousel-container">
            <button class="carousel-nav" onclick="window.swapRigElement('arm', -1)">❮</button>
            <div class="carousel-center">
              <div class="carousel-view" id="armDisplay" onclick="window.toggleColorPicker('arm', event)"></div>
              <div class="color-electron" id="electron-arm" onclick="window.toggleColorPicker('arm', event)"></div>
              <div class="electron-popout" id="popout-arm"></div>
            </div>
            <button class="carousel-nav" onclick="window.swapRigElement('arm', 1)">❯</button>
          </div>
        </div>

        <div class="ingredient-group">
          <label>Legs</label>
          <div class="carousel-container">
            <button class="carousel-nav" onclick="window.swapRigElement('leg', -1)">❮</button>
            <div class="carousel-center">
              <div class="carousel-view" id="legDisplay" onclick="window.toggleColorPicker('leg', event)"></div>
              <div class="color-electron" id="electron-leg" onclick="window.toggleColorPicker('leg', event)"></div>
              <div class="electron-popout" id="popout-leg"></div>
            </div>
            <button class="carousel-nav" onclick="window.swapRigElement('leg', 1)">❯</button>
          </div>
        </div>
      </div>

      <div class="closet-wrapper">
        <button id="closetToggleBtn" class="closet-btn" onclick="window.toggleCloset()">Open Closet</button>
        <div id="closetDrawer" class="closet-drawer">
          </div>
      </div>
      
      <div class="canvas-actions" id="editActions">
        <button id="undoBtn" class="undo-btn disabled-btn" onclick="window.undo()">Undo</button>
        <button class="clear-btn" onclick="window.clearCanvas()">Start Over</button>
        <button class="bake-btn" onclick="window.togglePreview()">Preview Print</button>
      </div>

    </div>

    <div class="cutting-board-wrapper">
      <div class="cutting-board">
        <canvas id="stickerCanvas"></canvas>
        
        <button class="loco-btn" id="scrambleBtn" onclick="window.randomizeCreature()" title="El Collage Loco">
          <span id="scrambleCounter" class="loco-counter">5</span>
          <svg viewBox="0 0 40 40">
            <circle class="loco-shape loco-circle" cx="14" cy="18" r="6" />
            <rect class="loco-shape loco-rect" x="20" y="8" width="12" height="12" transform="rotate(15 26 14)" />
            <polygon class="loco-shape loco-poly" points="12,36 22,24 32,36" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
      
      <div class="name-group ingredient-group">
        <label>Name Your Masterpiece</label>
        <input type="text" id="stickerName" placeholder="e.g. El Jefe" maxlength="18" />
      </div>

    </div>
    
  </div>
</div>

<div id="previewLightbox" class="lightbox-overlay" style="display: none;">
  <div class="lightbox-modal">
    <div class="lightbox-canvas-box">
      <canvas id="previewCanvas"></canvas>
    </div>
    <div class="canvas-actions" id="previewActions">
      <button class="clear-btn" onclick="window.togglePreview()">Edit Design</button>
      <button class="bake-btn" onclick="window.sendToKitchen()">Send to Kitchen</button>
    </div>
  </div>
</div>

<div id="startOverLightbox" class="lightbox-overlay" style="display: none;">
  <div class="prompt-box">
    <h2>Scrap It?</h2>
    <p>Are you sure you want to throw this character in the trash and start fresh?</p>
    <div class="action-row">
      <button class="control-btn" onclick="window.cancelStartOver()">Nevermind</button>
      <button class="control-btn trash-btn" onclick="window.confirmStartOver()">Trash It</button>
    </div>
  </div>
</div>
    <script src="script.js?v=3"></script>

  </body>
  
</html>
2. style.css
CSS
body { 
  font-family: 'Helvetica Neue', Arial, sans-serif; 
  background-color: #fdfaf2; 
  background-image: 
    radial-gradient(rgba(26, 26, 26, 0.03) 1px, transparent 0),
    radial-gradient(rgba(26, 26, 26, 0.02) 1px, transparent 0);
  background-size: 4px 4px, 6px 6px;
  background-position: 0 0, 2px 2px;
  color: #1a1a1a; 
  margin: 0; 
  display: flex; 
  justify-content: center; 
  padding: 30px 20px; 
  overflow-x: hidden; 
}

/* APP LAYOUT */
.app-wrapper { display: flex; flex-direction: column; gap: 20px; max-width: 850px; width: 100%; position: relative; }

/* NEO-BRUTALIST HEADER */
.app-header { background-color: #ea7316; padding: 25px 30px; border-radius: 12px; text-align: center; margin-bottom: 10px; border: 4px solid #1a1a1a; box-shadow: 6px 6px 0px #1a1a1a; transition: opacity 0.25s ease; }
.app-header h1 { margin: 0 0 12px 0; font-size: 2.2rem; text-transform: uppercase; letter-spacing: 2px; color: #fbf6c7; text-shadow: 2px 2px 0px #1a1a1a; }
.app-header p { margin: 0; font-size: 0.95rem; color: #ffffff; line-height: 1.5; max-width: 750px; margin-left: auto; margin-right: auto; font-weight: 600; }

/* MAIN WORKSPACE */
.kitchen-container { display: flex; gap: 40px; width: 100%; align-items: stretch; justify-content: center; }

/* PANTRY ENGINE */
.pantry { width: 380px; display: flex; flex-direction: column; transition: opacity 0.25s ease, filter 0.25s ease; box-sizing: border-box; }
.pantry-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px 20px; align-content: space-evenly; flex-grow: 1; padding-bottom: 20px; }

.name-group { 
  width: 100%; 
  text-align: center; 
  margin-top: 10px; 
  position: relative; 
  z-index: 10; 
  padding: 15px 0; 
  background-color: #fdfaf2; 
  background-image: 
    radial-gradient(rgba(26, 26, 26, 0.03) 1px, transparent 0),
    radial-gradient(rgba(26, 26, 26, 0.02) 1px, transparent 0);
  background-size: 4px 4px, 6px 6px;
  background-position: 0 0, 2px 2px;
}

.ingredient-group { margin-bottom: 0; text-align: center; } 
.ingredient-group label { font-size: 0.95rem; color: #1a1a1a; margin-bottom: 5px; display: block; text-transform: uppercase; font-weight: 900; letter-spacing: 1px; }

/* CAROUSELS */
.carousel-container { display: flex; align-items: center; justify-content: center; gap: 10px; }
.carousel-nav { background: #fbfbf6; border-radius: 50%; width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; border: 3px solid #1a1a1a; box-shadow: 2px 2px 0px #1a1a1a; color: transparent !important; font-size: 0.8rem; cursor: pointer; transition: transform 0.05s ease, box-shadow 0.05s ease; padding: 0; position: relative; }
.carousel-nav:hover { background: #ea7316; }
.carousel-nav:active { transform: translate(2px, 2px); box-shadow: 0px 0px 0px #1a1a1a; }
.carousel-nav::before { content: ''; position: absolute; top: 50%; left: 50%; width: 7px; height: 7px; border-top: 3px solid #1a1a1a; border-right: 3px solid #1a1a1a; border-radius: 1px; transition: border-color 0.2s; }
.carousel-nav:hover::before { border-color: #ffffff; }
.carousel-container .carousel-nav:first-child::before { transform: translate(-35%, -50%) rotate(-135deg); }
.carousel-container .carousel-nav:last-child::before { transform: translate(-65%, -50%) rotate(45deg); }

.carousel-center { position: relative; width: 72px; height: 72px; }
.carousel-view { width: 100%; height: 100%; border-radius: 50%; background: #fbfbf6; border: 4px solid #1a1a1a; display: flex; justify-content: center; align-items: center; transition: transform 0.05s ease, box-shadow 0.05s ease, border-color 0.1s ease; box-shadow: 4px 4px 0px #1a1a1a; cursor: pointer; box-sizing: border-box; }
.carousel-view:hover { border-color: #ea7316; } 
.carousel-view:active { transform: translate(4px, 4px); box-shadow: 0px 0px 0px #1a1a1a; }
.carousel-view svg { width: 36px; height: 36px; max-width: 100%; max-height: 100%; object-fit: contain; } 

/* COLOR PICKER ALIGNMENTS */
.color-electron { position: absolute; top: 0px; right: -4px; width: 22px; height: 22px; border-radius: 50%; border: 3px solid #1a1a1a; box-shadow: 2px 2px 0px #1a1a1a; cursor: pointer; transition: transform 0.05s ease, box-shadow 0.05s ease; z-index: 5; }
.color-electron:hover { transform: scale(1.05); }
.color-electron:active { transform: translate(2px, 2px); box-shadow: 0px 0px 0px #1a1a1a; }

.electron-popout { display: none; position: absolute; top: 110%; left: 50%; transform: translateX(-50%); width: 116px; background: #fbfbf6; border: 4px solid #1a1a1a; border-radius: 8px; padding: 8px; box-shadow: 6px 6px 0px #1a1a1a; z-index: 20; grid-template-columns: repeat(4, 1fr); gap: 6px; justify-content: flex-start; }
.inline-swatch { width: 20px; height: 20px; border-radius: 50%; cursor: pointer; border: 2px solid #1a1a1a; transition: transform 0.1s; box-sizing: border-box;}
.inline-swatch:hover { transform: scale(1.2); box-shadow: 2px 2px 0px #1a1a1a; }

/* THE CLOSET STYLES */
.closet-wrapper { width: 100%; margin-bottom: 25px; position: relative; }

/* CLOSET CTA STYLES */
.closet-btn { 
  width: 100%; 
  background: #fbfbf6; 
  color: #000000;      
  border: 4px solid #7ae2be; 
  border-radius: 50px; 
  padding: 12px; 
  font-size: 1rem; 
  font-weight: 900; 
  text-transform: uppercase; 
  letter-spacing: 1px; 
  cursor: pointer; 
  box-shadow: 4px 4px 0px #7ae2be; 
  transition: transform 0.05s ease, box-shadow 0.05s ease, background-color 0.1s; 
}
.closet-btn:hover { 
  background: #eaffee; 
}
.closet-btn:active { 
  transform: translate(4px, 4px); 
  box-shadow: 0px 0px 0px #7ae2be; 
}

/* UPDATED CLOSET DRAWER CONTAINER STYLES */
.closet-drawer { 
  display: none; 
  grid-template-columns: repeat(3, 1fr); 
  gap: 12px; 
  background: #fbfbf6; 
  border: 4px solid #7ae2be; 
  border-radius: 12px; 
  padding: 15px; 
  margin-top: 15px; 
  box-shadow: 4px 4px 0px #7ae2be; 
}

.closet-item { width: 100%; aspect-ratio: 1; background: #ffffff; border: 3px solid #1a1a1a; border-radius: 8px; cursor: pointer; transition: transform 0.1s, box-shadow 0.1s, border-color 0.1s; display: flex; align-items: center; justify-content: center; box-shadow: 2px 2px 0px #1a1a1a; }
.closet-item:hover { border-color: #2196f3; transform: scale(1.05); }
.closet-item:active { transform: translate(2px, 2px) scale(1.05); box-shadow: 0px 0px 0px #1a1a1a; }
.closet-item svg { width: 60%; height: 60%; pointer-events: none; }

/* DYNAMIC CLOSET STATES */
.closet-item.selected { border-color: #ea7316; background-color: #fff3e0; box-shadow: 4px 4px 0px #ea7316; transform: scale(1.05); }
.closet-item.greyed-out { filter: grayscale(100%); opacity: 0.35; box-shadow: 0px 0px 0px #1a1a1a; transform: scale(0.95); }
.closet-item.greyed-out:hover { filter: grayscale(20%); opacity: 0.9; transform: scale(1.05); box-shadow: 2px 2px 0px #1a1a1a; }

/* INPUT FIELDS */
input[type="text"] { width: 100%; background: #fbfbf6; color: #1a1a1a; border: 4px solid #1a1a1a; border-radius: 50px; padding: 12px 15px; font-size: 1rem; outline: none; box-sizing: border-box; transition: 0.1s; margin: 0; text-align: center; box-shadow: 4px 4px 0px #1a1a1a; font-weight: bold; }
input[type="text"]:focus { border-color: #ea7316; box-shadow: 4px 4px 0px #ea7316; }
input[type="text"]::placeholder { color: #888; font-weight: normal; }

/* THE CUTTING BOARD SPACE */
.cutting-board-wrapper { position: relative; display: flex; flex-direction: column; width: 390px; transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.15); }
.cutting-board { position: relative; width: 100%; height: 450px; border: none !important; background: transparent !important; border-radius: 0px; overflow: visible; box-shadow: none !important; }

/* FLOATING TOY SCRAMBLER BADGE */
.loco-btn { position: absolute; bottom: 0; right: 0; width: 65px; height: 65px; border-radius: 50% !important; background-color: #fbfbf6; border: 4px solid #1a1a1a !important; box-shadow: 4px 4px 0px #1a1a1a !important; cursor: pointer; transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); display: flex; align-items: center; justify-content: center; padding: 0 !important; box-sizing: border-box; z-index: 50; }
.loco-shape { fill: #fbfbf6; stroke: #1a1a1a; stroke-width: 2.5; transition: 0.3s; }
.loco-btn svg { width: 30px; height: 30px; transition: 0.3s; }
.loco-btn:hover { width: 65px; height: 65px; background-color: #1a1a1a; transform: translate(-2px, -2px); box-shadow: 6px 6px 0px #ea7316 !important; }
.loco-btn:hover svg { transform: rotate(-15deg) scale(1.1); }
.loco-btn:hover .loco-shape { stroke: #1a1a1a; }
.loco-btn:hover .loco-circle { fill: #ffea00; }
.loco-btn:hover .loco-rect { fill: #FF008C; }
.loco-btn:hover .loco-poly { fill: #00CED1; }
.loco-btn:active { transform: translate(4px, 4px) scale(1) !important; box-shadow: 0px 0px 0px #1a1a1a !important; transition: 0.05s; }

.loco-counter { position: absolute; top: -10px; left: -10px; width: 24px; height: 24px; background-color: #fbfbf6; color: #1a1a1a; border: 3px solid #1a1a1a; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; font-weight: 900; box-shadow: 2px 2px 0px #1a1a1a; transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); pointer-events: none; z-index: 10; }
.loco-btn:hover .loco-counter { transform: scale(1.1) translate(-2px, -2px); border-color: #1a1a1a; color: #1a1a1a; }
.loco-btn.depleted { background-color: #e0dcd3; border-color: #888 !important; cursor: not-allowed; transform: none !important; box-shadow: none !important; }
.loco-btn.depleted .loco-shape { stroke: #888; }
.loco-btn.depleted .loco-counter { background-color: #e0dcd3; border-color: #888; color: #888; box-shadow: none; transform: none; }

/* POP ANIMATION EFFECT */
@keyframes earnPop { 0% { transform: scale(1); } 50% { transform: scale(1.6); background-color: #ff9800; color: #1a1a1a; border-color: #1a1a1a; box-shadow: 4px 4px 0px #1a1a1a; } 100% { transform: scale(1); } }
.pop-anim { animation: earnPop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }

/* SYSTEM ACTION PANEL */
.canvas-actions { display: flex; gap: 10px; margin-top: 0px; width: 100%; box-sizing: border-box; }
.bake-btn { background-color: #ea7316 !important; color: #ffffff; padding: 12px 10px; font-size: 1rem; font-weight: 900; border: 3px solid #1a1a1a; border-radius: 50px; cursor: pointer; transition: transform 0.05s ease, box-shadow 0.05s ease, background-color 0.1s ease; margin: 0; flex-grow: 1.2; text-align: center; box-shadow: 4px 4px 0px #1a1a1a; }
.bake-btn:hover { background-color: #ff9800 !important; }
.bake-btn:active { transform: translate(4px, 4px); box-shadow: 0px 0px 0px #1a1a1a; }

.undo-btn { background-color: #fbfbf6 !important; color: #1a1a1a; padding: 12px 10px; font-size: 1rem; font-weight: 900; border: 3px solid #1a1a1a; border-radius: 50px; cursor: pointer; transition: transform 0.05s ease, box-shadow 0.05s ease, background-color 0.1s ease, color 0.1s ease; margin: 0; flex-grow: 1; text-align: center; box-shadow: 4px 4px 0px #1a1a1a; }
.undo-btn:hover { background-color: #2196f3 !important; color: #fff; }
.undo-btn:active { transform: translate(4px, 4px); box-shadow: 0px 0px 0px #1a1a1a; }

.clear-btn { background-color: #fbfbf6 !important; color: #1a1a1a; padding: 12px 10px; font-size: 1rem; font-weight: 900; border: 3px solid #1a1a1a; border-radius: 50px; cursor: pointer; transition: transform 0.05s ease, box-shadow 0.05s ease, background-color 0.1s ease, color 0.1s ease; margin: 0; flex-grow: 1; text-align: center; box-shadow: 4px 4px 0px #1a1a1a; }
.clear-btn:hover { background-color: #d32f2f !important; color: #fff; }
.clear-btn:active { transform: translate(4px, 4px); box-shadow: 0px 0px 0px #1a1a1a; }

.disabled-btn { border-color: #aaa !important; color: #aaa !important; background-color: #e0dcd3 !important; box-shadow: 2px 2px 0px #aaa !important; cursor: not-allowed; pointer-events: none; }

/* SOFT-GATE SYSTEM ALERTS */
.action-tier { display: flex; flex-direction: column; gap: 12px; width: 100%; margin-top: 0px; }
.action-row { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; width: 100%; }
.control-btn { padding: 12px; font-size: 0.95rem; font-weight: 900; border-radius: 50px; cursor: pointer; border: 3px solid #1a1a1a; background-color: #fbfbf6; color: #1a1a1a; transition: transform 0.05s ease, box-shadow 0.05s ease; text-align: center; box-shadow: 4px 4px 0px #1a1a1a; }
.control-btn:hover { background-color: #f0ecdf; }
.control-btn:active { transform: translate(4px, 4px); box-shadow: 0px 0px 0px #1a1a1a; }
.skip-btn { background-color: #fbfbf6; border-color: #1a1a1a; color: #ea7316; }
.skip-btn:hover { background-color: #ea7316; color: #ffffff; }

.warning-text { font-size: 0.88rem; font-weight: 900; color: #1a1a1a; background-color: #ffea00; border: 3px solid #1a1a1a; padding: 14px; border-radius: 25px; line-height: 1.4; text-align: center; margin: 0; box-shadow: 4px 4px 0px #1a1a1a; }

/* OVERLAY FRAME LIGHTBOX */
.lightbox-overlay {
  position: fixed !important; top: 0 !important; left: 0 !important; width: 100vw !important; height: 100vh !important;
  background-color: rgba(253, 250, 242, 0.98) !important; z-index: 99999999 !important;
  align-items: center !important; justify-content: center !important; padding: 20px !important; box-sizing: border-box !important;
}
.lightbox-modal { display: flex !important; flex-direction: column !important; gap: 20px !important; align-items: center !important; max-width: 100% !important; }
.lightbox-canvas-box {
  background: #ffffff !important; padding: 16px !important; border-radius: 8px !important; width: 380px !important; max-width: 100% !important;
  box-shadow: 0px 25px 70px rgba(26, 22, 15, 0.22), 0px 5px 20px rgba(26, 22, 15, 0.08) !important;
}

/* START OVER CUSTOM PROMPT */
.prompt-box {
  background: #fbfbf6;
  border: 4px solid #1a1a1a;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 8px 8px 0px #1a1a1a;
  text-align: center;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.prompt-box h2 { 
  margin: 0 0 10px 0; 
  color: #ea7316; 
  font-size: 2.2rem; 
  text-transform: uppercase; 
  letter-spacing: 1px; 
  text-shadow: 2px 2px 0px #1a1a1a; 
}
.prompt-box p { 
  font-weight: 900; 
  margin-bottom: 25px; 
  color: #1a1a1a; 
  line-height: 1.4; 
  font-size: 1.05rem;
}
.trash-btn { 
  background-color: #ff1744 !important; 
  color: #ffffff !important; 
  border-color: #1a1a1a !important; 
}
.trash-btn:hover { 
  background-color: #d32f2f !important; 
}

/* --- MOBILE RESPONSIVE LAYOUT --- */
@media (max-width: 800px) {
  .kitchen-container { flex-direction: column; align-items: center; gap: 25px; }
  
  .cutting-board-wrapper { order: 1; width: 100%; max-width: 390px; position: relative; left: auto; transform: none; }
  .pantry { order: 2; width: 100%; max-width: 390px; height: auto; gap: 0px; justify-content: flex-start; }
  .pantry-grid { gap: 15px 10px; }

  .canvas-actions#editActions { 
    order: -1; 
    margin-bottom: 25px; 
  }
}

@media (max-width: 600px) {
  .app-header h1 { font-size: 1.4rem !important; }
}

@media (max-width: 450px) {
  .cutting-board { 
    transform: scale(0.85); 
    transform-origin: center top; 
    margin-bottom: -60px; 
  }
}
3. script.js
JavaScript
// --- AUTO-INJECT CSS TO CONTAIN THE NEW MASSIVE CANVAS IN THE UI ---
const previewStyleFix = document.createElement('style');
previewStyleFix.innerHTML = `
  .lightbox-canvas-box .canvas-container { width: 100% !important; height: auto !important; aspect-ratio: 1075 / 1854; position: relative; }
  .lightbox-canvas-box canvas { width: 100% !important; height: 100% !important; position: absolute !important; top: 0; left: 0; }
`;
document.head.appendChild(previewStyleFix);

// 1. GLOBAL APP STATE INITIALIZATION 
const canvas = new fabric.Canvas('stickerCanvas', { width: 390, height: 450, backgroundColor: 'transparent', preserveObjectStacking: true, allowTouchScrolling: true });
// EXACT PRINTER ASPECT RATIO (Target 2150x3708 / 2 = 1075x1854)
const previewCanvas = new fabric.Canvas('previewCanvas', { width: 1075, height: 1854, selection: false });
const CX = 195; 
const CY = 225; 

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

window.togglePreview = function() {
  const box = document.getElementById('previewLightbox');
  if (box.style.display === 'none') {
    const activeObjects = canvas.getObjects().filter(o => o.rigPart); if (activeObjects.length === 0) return;
    canvas.discardActiveObject(); window.globalSelectedName = document.getElementById('stickerName').value.trim();
    let minX = 9999, minY = 9999, maxX = -9999, maxY = -9999;
    activeObjects.forEach(o => { const b = o.getBoundingRect(); minX = Math.min(minX, b.left); minY = Math.min(minY, b.top); maxX = Math.max(maxX, b.left + b.width); maxY = Math.max(maxY, b.top + b.height); });
    const pad = 25; minX = Math.max(0, minX - pad); minY = Math.max(0, minY - pad); maxX = Math.min(canvas.width, maxX + pad); maxY = Math.min(canvas.height, maxY + pad);
    const hull = calculateConvexHullPoints(activeObjects); let shield = null, guide = null;
    if (hull.length >= 3) {
      let cx = 0, cy = 0; hull.forEach(p => { cx += p.x; cy += p.y; }); cx /= hull.length; cy /= hull.length;
      shield = new fabric.Polygon(hull, { fill: '#ffffff', stroke: '#ffffff', strokeWidth: 24, strokeLineJoin: 'round', selectable: false, evented: false });
      
      guide = new fabric.Polygon(hull.map(p => { const dX = p.x - cx, dY = p.y - cy, dist = Math.sqrt(dX*dX+dY*dY); return { x: cx+(dX/dist)*(dist+12), y: cy+(dY/dist)*(dist+12) }; }), { fill: 'transparent', stroke: '#aaaaaa', strokeWidth: 2, strokeDashArray: [5, 4], strokeLineJoin: 'round', selectable: false, evented: false });
      canvas.add(shield, guide); guide.bringToFront(); shield.sendToBack(); canvas.renderAll();
    }
    
    if (guide) guide.set('visible', false); 
    canvas.renderAll();
    window.cleanPrintDataUrl = canvas.toDataURL({ left: minX, top: minY, width: maxX - minX, height: maxY - minY, format: 'png', multiplier: 2 });
    
    if (guide) guide.set('visible', true); 
    canvas.renderAll();
    
    renderPreviewSheetGrid(window.cleanPrintDataUrl, maxX - minX, maxY - minY, previewCanvas); 
    
    box.style.display = 'flex';
  } else { 
      box.style.display = 'none'; 
      const objects = canvas.getObjects();
      for(let i = objects.length -1; i >= 0; i--) {
          if(!objects[i].rigPart) canvas.remove(objects[i]);
      }
      canvas.renderAll(); 
  }
}

function renderPreviewSheetGrid(srcUrl, cWidth, cHeight, previewCanvasObj) {
    previewCanvasObj.clear();
    
    const backgroundUrl = 'PasteConPaper_Background.jpg'; 
    
    fabric.Image.fromURL(backgroundUrl, function(bgImg) {
        if (bgImg) { 
            bgImg.set({ 
                originX: 'left', 
                originY: 'top', 
                left: 0, 
                top: 0, 
                scaleX: previewCanvasObj.width / bgImg.width,
                scaleY: previewCanvasObj.height / bgImg.height,
                selectable: false, 
                isHeaderElement: true 
            }); 
            previewCanvasObj.add(bgImg); 
        }

        const headerHeight = 269; 
        const cols = 3;
        const rows = 3;
        const stickerGap = 45;
        const sideMargin = 57;
        const topBuffer = 42;
        const footerBuffer = 212;

        const usableWidth = previewCanvasObj.width - (sideMargin * 2);
        const gridHeight = previewCanvasObj.height - headerHeight - topBuffer - footerBuffer;

        const maxImgW = (usableWidth - (stickerGap * (cols - 1))) / cols;
        const maxImgHConstraint = (gridHeight - (stickerGap * (rows - 1))) / rows;
        
        const scaleFactor = Math.min(maxImgW / cWidth, maxImgHConstraint / cHeight) * 0.95; 
        const finalImgW = cWidth * scaleFactor;
        const finalImgH = cHeight * scaleFactor;
        
        const startX = sideMargin + (usableWidth - (cols * finalImgW + (cols - 1) * stickerGap)) / 2;
        const startY = headerHeight + topBuffer + (gridHeight - (rows * finalImgH + (rows - 1) * stickerGap)) / 2;

        let loadedCount = 0;
        
        for(let r = 0; r < rows; r++) {
            for(let c = 0; c < cols; c++) {
                fabric.Image.fromURL(srcUrl, function(img) {
                    img.set({ 
                        left: startX + c * (finalImgW + stickerGap), 
                        top: startY + r * (finalImgH + stickerGap), 
                        scaleX: scaleFactor / 2, 
                        scaleY: scaleFactor / 2, 
                        originX: 'left', 
                        originY: 'top', 
                        selectable: false 
                    });
                    previewCanvasObj.add(img); 
                    loadedCount++;
                    
                    if(loadedCount === rows * cols && !window.globalBypassNameSticker) {
                        const nameText = new fabric.Text(window.globalSelectedName, { fontSize: 31, fontWeight: 'bold', fontFamily: 'Helvetica Neue, Arial, sans-serif', fill: '#ff9800', originX: 'center', originY: 'center' });
                        const nameBg = new fabric.Rect({ width: window.globalSelectedName ? nameText.width + 62 : 226, height: nameText.height + 34, fill: '#ffffff', stroke: '#ff9800', strokeWidth: 4.2, rx: 28, ry: 28, originX: 'center', originY: 'center', isHeaderElement: true });
                        previewCanvasObj.add(new fabric.Group([nameBg, nameText], { left: previewCanvasObj.width / 2, top: previewCanvasObj.height - 108, originX: 'center', originY: 'center', selectable: false, isHeaderElement: true }));
                    }
                    previewCanvasObj.renderAll();
                }, { crossOrigin: 'anonymous' });
            }
        }
    }, { crossOrigin: 'anonymous' });
}

// --- LOCAL TESTING OUTPUT ENGINE (WITH NATIVE MOBILE SHARE) ---
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

    const buttons = document.querySelectorAll('.bake-btn');
    buttons.forEach(btn => { btn.innerText = "Exporting..."; btn.style.opacity = 0.7; });

    try {
        await new Promise(resolve => setTimeout(resolve, 800)); 

        previewCanvas.setBackgroundColor(null, () => {});
        previewCanvas.getObjects().forEach(obj => {
            if (obj.isHeaderElement) obj.set('visible', false);
        });
        previewCanvas.renderAll();

        const exportedDataUrl = previewCanvas.toDataURL({ 
            format: 'png', 
            multiplier: 2 
        });

        previewCanvas.setBackgroundColor('#ffffff', () => {});
        previewCanvas.getObjects().forEach(obj => {
            if (obj.isHeaderElement) obj.set('visible', true);
        });
        previewCanvas.renderAll();
        
        const res = await fetch(exportedDataUrl);
        const blob = await res.blob();
        const fileName = `${rawInput || 'stickeria-masterpiece'}.png`;
        const file = new File([blob], fileName, { type: 'image/png' });

        if (navigator.canShare && navigator.canShare({ files: [file] })) {
            await navigator.share({
                files: [file],
                title: fileName
            });
        } else {
            const blobUrl = URL.createObjectURL(blob);
            const ghostLink = document.createElement('a');
            ghostLink.download = fileName;
            ghostLink.href = blobUrl;
            ghostLink.click();
            URL.revokeObjectURL(blobUrl); 
        }

        window.togglePreview();
    } catch (e) {
        if (e.name !== 'AbortError') {
            console.error("Local client image asset generation failure:", e);
            alert("Something went wrong compiling the local print graphic asset file.");
        }
    } finally {
        buttons.forEach(btn => { btn.innerText = 'Send to Kitchen'; btn.style.opacity = 1; });
    }
}

window.abortAndRename = function() { 
    document.getElementById('previewActions').innerHTML = `<button class="clear-btn" onclick="window.togglePreview()">Edit Design</button><button class="bake-btn" onclick="window.sendToKitchen()">Send to Kitchen</button>`; 
    window.togglePreview(); 
    setTimeout(() => document.getElementById('stickerName').focus(), 300); 
}

window.bypassAndPrint = function(bypass) { 
    if (bypass) { window.globalBypassNameSticker = true; } 
    renderPreviewSheetGrid(window.cleanPrintDataUrl, previewCanvas.width, previewCanvas.height, previewCanvas);
    
    setTimeout(() => {
        window.sendToKitchen();
        window.globalBypassNameSticker = false; 
    }, 400);
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

// --- NEW INTRO SCRAMBLE ---
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

// --- MAP EVERYTHING TO WINDOW ---
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

// --- INIT ---
initColorPickers(); renderCarousels(); renderCloset(); playIntroScramble();
I might have placed the image in the wrong place in GITHUB since it rendered a blank page. I did place the background on Squarespace. Would the link work better?



https://images.squarespace-cdn.com/content/696e90a0119f252471e6c387/5001f07a-737b-48eb-9cfd-62bcb5b4cf46/PasteConPaper_Background.jpg?content-type=image%2Fjpeg

Yes, using the Squarespace link is actually a much better and more bulletproof solution!

When you use a local file like PasteConPaper_Background.jpg, GitHub can sometimes get confused depending on exactly which folder you uploaded it to (root directory vs. an images folder, etc.).

By using the Squarespace link, you are pulling the image directly from a high-speed CDN (Content Delivery Network). Since we already know Squarespace allows cross-origin image sharing (because your yellow header logo works perfectly), this will bypass any GitHub folder issues completely.

Here is the fully updated script.js file with your new Squarespace background URL plugged right into the rendering engine.

(Note: Don't forget to bump your cache buster in your HTML file to <script src="script.js?v=4"></script> so the browser grabs this new update!)

Replace your script.js with this:
JavaScript
// --- AUTO-INJECT CSS TO CONTAIN THE NEW MASSIVE CANVAS IN THE UI ---
const previewStyleFix = document.createElement('style');
previewStyleFix.innerHTML = `
  .lightbox-canvas-box .canvas-container { width: 100% !important; height: auto !important; aspect-ratio: 1075 / 1854; position: relative; }
  .lightbox-canvas-box canvas { width: 100% !important; height: 100% !important; position: absolute !important; top: 0; left: 0; }
`;
document.head.appendChild(previewStyleFix);

// 1. GLOBAL APP STATE INITIALIZATION 
const canvas = new fabric.Canvas('stickerCanvas', { width: 390, height: 450, backgroundColor: 'transparent', preserveObjectStacking: true, allowTouchScrolling: true });
// EXACT PRINTER ASPECT RATIO (Target 2150x3708 / 2 = 1075x1854)
const previewCanvas = new fabric.Canvas('previewCanvas', { width: 1075, height: 1854, selection: false });
const CX = 195; 
const CY = 225; 

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

window.togglePreview = function() {
  const box = document.getElementById('previewLightbox');
  if (box.style.display === 'none') {
    const activeObjects = canvas.getObjects().filter(o => o.rigPart); if (activeObjects.length === 0) return;
    canvas.discardActiveObject(); window.globalSelectedName = document.getElementById('stickerName').value.trim();
    let minX = 9999, minY = 9999, maxX = -9999, maxY = -9999;
    activeObjects.forEach(o => { const b = o.getBoundingRect(); minX = Math.min(minX, b.left); minY = Math.min(minY, b.top); maxX = Math.max(maxX, b.left + b.width); maxY = Math.max(maxY, b.top + b.height); });
    const pad = 25; minX = Math.max(0, minX - pad); minY = Math.max(0, minY - pad); maxX = Math.min(canvas.width, maxX + pad); maxY = Math.min(canvas.height, maxY + pad);
    const hull = calculateConvexHullPoints(activeObjects); let shield = null, guide = null;
    if (hull.length >= 3) {
      let cx = 0, cy = 0; hull.forEach(p => { cx += p.x; cy += p.y; }); cx /= hull.length; cy /= hull.length;
      shield = new fabric.Polygon(hull, { fill: '#ffffff', stroke: '#ffffff', strokeWidth: 24, strokeLineJoin: 'round', selectable: false, evented: false });
      
      guide = new fabric.Polygon(hull.map(p => { const dX = p.x - cx, dY = p.y - cy, dist = Math.sqrt(dX*dX+dY*dY); return { x: cx+(dX/dist)*(dist+12), y: cy+(dY/dist)*(dist+12) }; }), { fill: 'transparent', stroke: '#aaaaaa', strokeWidth: 2, strokeDashArray: [5, 4], strokeLineJoin: 'round', selectable: false, evented: false });
      canvas.add(shield, guide); guide.bringToFront(); shield.sendToBack(); canvas.renderAll();
    }
    
    if (guide) guide.set('visible', false); 
    canvas.renderAll();
    window.cleanPrintDataUrl = canvas.toDataURL({ left: minX, top: minY, width: maxX - minX, height: maxY - minY, format: 'png', multiplier: 2 });
    
    if (guide) guide.set('visible', true); 
    canvas.renderAll();
    
    renderPreviewSheetGrid(window.cleanPrintDataUrl, maxX - minX, maxY - minY, previewCanvas); 
    
    box.style.display = 'flex';
  } else { 
      box.style.display = 'none'; 
      const objects = canvas.getObjects();
      for(let i = objects.length -1; i >= 0; i--) {
          if(!objects[i].rigPart) canvas.remove(objects[i]);
      }
      canvas.renderAll(); 
  }
}

function renderPreviewSheetGrid(srcUrl, cWidth, cHeight, previewCanvasObj) {
    previewCanvasObj.clear();
    
    const backgroundUrl = 'https://images.squarespace-cdn.com/content/696e90a0119f252471e6c387/5001f07a-737b-48eb-9cfd-62bcb5b4cf46/PasteConPaper_Background.jpg?content-type=image%2Fjpeg'; 
    
    fabric.Image.fromURL(backgroundUrl, function(bgImg) {
        if (bgImg) { 
            bgImg.set({ 
                originX: 'left', 
                originY: 'top', 
                left: 0, 
                top: 0, 
                scaleX: previewCanvasObj.width / bgImg.width,
                scaleY: previewCanvasObj.height / bgImg.height,
                selectable: false, 
                isHeaderElement: true 
            }); 
            previewCanvasObj.add(bgImg); 
        }

        const headerHeight = 269; 
        const cols = 3;
        const rows = 3;
        const stickerGap = 45;
        const sideMargin = 57;
        const topBuffer = 42;
        const footerBuffer = 212;

        const usableWidth = previewCanvasObj.width - (sideMargin * 2);
        const gridHeight = previewCanvasObj.height - headerHeight - topBuffer - footerBuffer;

        const maxImgW = (usableWidth - (stickerGap * (cols - 1))) / cols;
        const maxImgHConstraint = (gridHeight - (stickerGap * (rows - 1))) / rows;
        
        const scaleFactor = Math.min(maxImgW / cWidth, maxImgHConstraint / cHeight) * 0.95; 
        const finalImgW = cWidth * scaleFactor;
        const finalImgH = cHeight * scaleFactor;
        
        const startX = sideMargin + (usableWidth - (cols * finalImgW + (cols - 1) * stickerGap)) / 2;
        const startY = headerHeight + topBuffer + (gridHeight - (rows * finalImgH + (rows - 1) * stickerGap)) / 2;

        let loadedCount = 0;
        
        for(let r = 0; r < rows; r++) {
            for(let c = 0; c < cols; c++) {
                fabric.Image.fromURL(srcUrl, function(img) {
                    img.set({ 
                        left: startX + c * (finalImgW + stickerGap), 
                        top: startY + r * (finalImgH + stickerGap), 
                        scaleX: scaleFactor / 2, 
                        scaleY: scaleFactor / 2, 
                        originX: 'left', 
                        originY: 'top', 
                        selectable: false 
                    });
                    previewCanvasObj.add(img); 
                    loadedCount++;
                    
                    if(loadedCount === rows * cols && !window.globalBypassNameSticker) {
                        const nameText = new fabric.Text(window.globalSelectedName, { fontSize: 31, fontWeight: 'bold', fontFamily: 'Helvetica Neue, Arial, sans-serif', fill: '#ff9800', originX: 'center', originY: 'center' });
                        const nameBg = new fabric.Rect({ width: window.globalSelectedName ? nameText.width + 62 : 226, height: nameText.height + 34, fill: '#ffffff', stroke: '#ff9800', strokeWidth: 4.2, rx: 28, ry: 28, originX: 'center', originY: 'center', isHeaderElement: true });
                        previewCanvasObj.add(new fabric.Group([nameBg, nameText], { left: previewCanvasObj.width / 2, top: previewCanvasObj.height - 108, originX: 'center', originY: 'center', selectable: false, isHeaderElement: true }));
                    }
                    previewCanvasObj.renderAll();
                }, { crossOrigin: 'anonymous' });
            }
        }
    }, { crossOrigin: 'anonymous' });
}

// --- LOCAL TESTING OUTPUT ENGINE (WITH NATIVE MOBILE SHARE) ---
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

    const buttons = document.querySelectorAll('.bake-btn');
    buttons.forEach(btn => { btn.innerText = "Exporting..."; btn.style.opacity = 0.7; });

    try {
        await new Promise(resolve => setTimeout(resolve, 800)); 

        previewCanvas.setBackgroundColor(null, () => {});
        previewCanvas.getObjects().forEach(obj => {
            if (obj.isHeaderElement) obj.set('visible', false);
        });
        previewCanvas.renderAll();

        const exportedDataUrl = previewCanvas.toDataURL({ 
            format: 'png', 
            multiplier: 2 
        });

        previewCanvas.setBackgroundColor('#ffffff', () => {});
        previewCanvas.getObjects().forEach(obj => {
            if (obj.isHeaderElement) obj.set('visible', true);
        });
        previewCanvas.renderAll();
        
        const res = await fetch(exportedDataUrl);
        const blob = await res.blob();
        const fileName = `${rawInput || 'stickeria-masterpiece'}.png`;
        const file = new File([blob], fileName, { type: 'image/png' });

        if (navigator.canShare && navigator.canShare({ files: [file] })) {
            await navigator.share({
                files: [file],
                title: fileName
            });
        } else {
            const blobUrl = URL.createObjectURL(blob);
            const ghostLink = document.createElement('a');
            ghostLink.download = fileName;
            ghostLink.href = blobUrl;
            ghostLink.click();
            URL.revokeObjectURL(blobUrl); 
        }

        window.togglePreview();
    } catch (e) {
        if (e.name !== 'AbortError') {
            console.error("Local client image asset generation failure:", e);
            alert("Something went wrong compiling the local print graphic asset file.");
        }
    } finally {
        buttons.forEach(btn => { btn.innerText = 'Send to Kitchen'; btn.style.opacity = 1; });
    }
}

window.abortAndRename = function() { 
    document.getElementById('previewActions').innerHTML = `<button class="clear-btn" onclick="window.togglePreview()">Edit Design</button><button class="bake-btn" onclick="window.sendToKitchen()">Send to Kitchen</button>`; 
    window.togglePreview(); 
    setTimeout(() => document.getElementById('stickerName').focus(), 300); 
}

window.bypassAndPrint = function(bypass) { 
    if (bypass) { window.globalBypassNameSticker = true; } 
    renderPreviewSheetGrid(window.cleanPrintDataUrl, previewCanvas.width, previewCanvas.height, previewCanvas);
    
    setTimeout(() => {
        window.sendToKitchen();
        window.globalBypassNameSticker = false; 
    }, 400);
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

// --- NEW INTRO SCRAMBLE ---
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

// --- MAP EVERYTHING TO WINDOW ---
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

// --- INIT ---
initColorPickers(); renderCarousels(); renderCloset(); playIntroScramble();
That worked. Now let's mark this last batch of code as the latest and save. Just to help our conversation stay clean and no hallucinations start.

Consider it locked in the vault.

Marking that exact batch—with the ?v=3 cache buster, the 300 DPI printer multiplier, the transparent native share export, and the Squarespace background—as our official Drop One Master Build.

You are absolutely right to call a hard checkpoint here. Long conversation histories are the number one cause of AI hallucinations, so explicitly setting this as our clean baseline is the smartest way to manage the context window.

Go crush those Liene printer tests! Whenever you are ready to boot this back up for tweaks or to start building out Drop Two, we will use that exact master build as our undisputed starting point. Have fun in the lab!

The background showed up perfectly. Slight issue now: the name isn't being sent with the stickers.

Ah, I see exactly what happened! Our "magic trick" worked a little too well.

When I tagged the background and the header text with isHeaderElement: true so the exporter knew to hide them, I accidentally put that exact same tag on the custom Name Badge at the bottom. The system was dutifully making the name completely invisible a millisecond before the camera flashed, and then putting it right back!

I have removed the isHeaderElement: true tag from the Name Badge group. Now, when the transparent PNG exports, it will hide the branded background and URLs, but it will keep the stickers and the user's custom name perfectly intact for the Liene printer.

Here is your freshly updated, full script.js.

(Don't forget to open your index.html file and change the cache buster from ?v=3 to ?v=4 so GitHub knows to grab this fix immediately!)

script.js
JavaScript
// --- AUTO-INJECT CSS TO CONTAIN THE NEW MASSIVE CANVAS IN THE UI ---
const previewStyleFix = document.createElement('style');
previewStyleFix.innerHTML = `
  .lightbox-canvas-box .canvas-container { width: 100% !important; height: auto !important; aspect-ratio: 1075 / 1854; position: relative; }
  .lightbox-canvas-box canvas { width: 100% !important; height: 100% !important; position: absolute !important; top: 0; left: 0; }
`;
document.head.appendChild(previewStyleFix);

// 1. GLOBAL APP STATE INITIALIZATION 
const canvas = new fabric.Canvas('stickerCanvas', { width: 390, height: 450, backgroundColor: 'transparent', preserveObjectStacking: true, allowTouchScrolling: true });
// EXACT PRINTER ASPECT RATIO (Target 2150x3708 / 2 = 1075x1854)
const previewCanvas = new fabric.Canvas('previewCanvas', { width: 1075, height: 1854, selection: false });
const CX = 195; 
const CY = 225; 

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

window.togglePreview = function() {
  const box = document.getElementById('previewLightbox');
  if (box.style.display === 'none') {
    const activeObjects = canvas.getObjects().filter(o => o.rigPart); if (activeObjects.length === 0) return;
    canvas.discardActiveObject(); window.globalSelectedName = document.getElementById('stickerName').value.trim();
    let minX = 9999, minY = 9999, maxX = -9999, maxY = -9999;
    activeObjects.forEach(o => { const b = o.getBoundingRect(); minX = Math.min(minX, b.left); minY = Math.min(minY, b.top); maxX = Math.max(maxX, b.left + b.width); maxY = Math.max(maxY, b.top + b.height); });
    const pad = 25; minX = Math.max(0, minX - pad); minY = Math.max(0, minY - pad); maxX = Math.min(canvas.width, maxX + pad); maxY = Math.min(canvas.height, maxY + pad);
    const hull = calculateConvexHullPoints(activeObjects); let shield = null, guide = null;
    if (hull.length >= 3) {
      let cx = 0, cy = 0; hull.forEach(p => { cx += p.x; cy += p.y; }); cx /= hull.length; cy /= hull.length;
      shield = new fabric.Polygon(hull, { fill: '#ffffff', stroke: '#ffffff', strokeWidth: 24, strokeLineJoin: 'round', selectable: false, evented: false });
      
      guide = new fabric.Polygon(hull.map(p => { const dX = p.x - cx, dY = p.y - cy, dist = Math.sqrt(dX*dX+dY*dY); return { x: cx+(dX/dist)*(dist+12), y: cy+(dY/dist)*(dist+12) }; }), { fill: 'transparent', stroke: '#aaaaaa', strokeWidth: 2, strokeDashArray: [5, 4], strokeLineJoin: 'round', selectable: false, evented: false });
      canvas.add(shield, guide); guide.bringToFront(); shield.sendToBack(); canvas.renderAll();
    }
    
    if (guide) guide.set('visible', false); 
    canvas.renderAll();
    window.cleanPrintDataUrl = canvas.toDataURL({ left: minX, top: minY, width: maxX - minX, height: maxY - minY, format: 'png', multiplier: 2 });
    
    if (guide) guide.set('visible', true); 
    canvas.renderAll();
    
    renderPreviewSheetGrid(window.cleanPrintDataUrl, maxX - minX, maxY - minY, previewCanvas); 
    
    box.style.display = 'flex';
  } else { 
      box.style.display = 'none'; 
      const objects = canvas.getObjects();
      for(let i = objects.length -1; i >= 0; i--) {
          if(!objects[i].rigPart) canvas.remove(objects[i]);
      }
      canvas.renderAll(); 
  }
}

function renderPreviewSheetGrid(srcUrl, cWidth, cHeight, previewCanvasObj) {
    previewCanvasObj.clear();
    
    const backgroundUrl = 'https://images.squarespace-cdn.com/content/696e90a0119f252471e6c387/5001f07a-737b-48eb-9cfd-62bcb5b4cf46/PasteConPaper_Background.jpg?content-type=image%2Fjpeg'; 
    
    fabric.Image.fromURL(backgroundUrl, function(bgImg) {
        if (bgImg) { 
            bgImg.set({ 
                originX: 'left', 
                originY: 'top', 
                left: 0, 
                top: 0, 
                scaleX: previewCanvasObj.width / bgImg.width,
                scaleY: previewCanvasObj.height / bgImg.height,
                selectable: false, 
                isHeaderElement: true 
            }); 
            previewCanvasObj.add(bgImg); 
        }

        const headerHeight = 269; 
        const cols = 3;
        const rows = 3;
        const stickerGap = 45;
        const sideMargin = 57;
        const topBuffer = 42;
        const footerBuffer = 212;

        const usableWidth = previewCanvasObj.width - (sideMargin * 2);
        const gridHeight = previewCanvasObj.height - headerHeight - topBuffer - footerBuffer;

        const maxImgW = (usableWidth - (stickerGap * (cols - 1))) / cols;
        const maxImgHConstraint = (gridHeight - (stickerGap * (rows - 1))) / rows;
        
        const scaleFactor = Math.min(maxImgW / cWidth, maxImgHConstraint / cHeight) * 0.95; 
        const finalImgW = cWidth * scaleFactor;
        const finalImgH = cHeight * scaleFactor;
        
        const startX = sideMargin + (usableWidth - (cols * finalImgW + (cols - 1) * stickerGap)) / 2;
        const startY = headerHeight + topBuffer + (gridHeight - (rows * finalImgH + (rows - 1) * stickerGap)) / 2;

        let loadedCount = 0;
        
        for(let r = 0; r < rows; r++) {
            for(let c = 0; c < cols; c++) {
                fabric.Image.fromURL(srcUrl, function(img) {
                    img.set({ 
                        left: startX + c * (finalImgW + stickerGap), 
                        top: startY + r * (finalImgH + stickerGap), 
                        scaleX: scaleFactor / 2, 
                        scaleY: scaleFactor / 2, 
                        originX: 'left', 
                        originY: 'top', 
                        selectable: false 
                    });
                    previewCanvasObj.add(img); 
                    loadedCount++;
                    
                    if(loadedCount === rows * cols && !window.globalBypassNameSticker) {
                        const nameText = new fabric.Text(window.globalSelectedName, { fontSize: 31, fontWeight: 'bold', fontFamily: 'Helvetica Neue, Arial, sans-serif', fill: '#ff9800', originX: 'center', originY: 'center' });
                        // REMOVED: isHeaderElement: true from the nameBg
                        const nameBg = new fabric.Rect({ width: window.globalSelectedName ? nameText.width + 62 : 226, height: nameText.height + 34, fill: '#ffffff', stroke: '#ff9800', strokeWidth: 4.2, rx: 28, ry: 28, originX: 'center', originY: 'center' });
                        // REMOVED: isHeaderElement: true from the Group
                        previewCanvasObj.add(new fabric.Group([nameBg, nameText], { left: previewCanvasObj.width / 2, top: previewCanvasObj.height - 108, originX: 'center', originY: 'center', selectable: false }));
                    }
                    previewCanvasObj.renderAll();
                }, { crossOrigin: 'anonymous' });
            }
        }
    }, { crossOrigin: 'anonymous' });
}

// --- LOCAL TESTING OUTPUT ENGINE (WITH NATIVE MOBILE SHARE) ---
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

    const buttons = document.querySelectorAll('.bake-btn');
    buttons.forEach(btn => { btn.innerText = "Exporting..."; btn.style.opacity = 0.7; });

    try {
        await new Promise(resolve => setTimeout(resolve, 800)); 

        previewCanvas.setBackgroundColor(null, () => {});
        previewCanvas.getObjects().forEach(obj => {
            if (obj.isHeaderElement) obj.set('visible', false);
        });
        previewCanvas.renderAll();

        const exportedDataUrl = previewCanvas.toDataURL({ 
            format: 'png', 
            multiplier: 2 
        });

        previewCanvas.setBackgroundColor('#ffffff', () => {});
        previewCanvas.getObjects().forEach(obj => {
            if (obj.isHeaderElement) obj.set('visible', true);
        });
        previewCanvas.renderAll();
        
        const res = await fetch(exportedDataUrl);
        const blob = await res.blob();
        const fileName = `${rawInput || 'stickeria-masterpiece'}.png`;
        const file = new File([blob], fileName, { type: 'image/png' });

        if (navigator.canShare && navigator.canShare({ files: [file] })) {
            await navigator.share({
                files: [file],
                title: fileName
            });
        } else {
            const blobUrl = URL.createObjectURL(blob);
            const ghostLink = document.createElement('a');
            ghostLink.download = fileName;
            ghostLink.href = blobUrl;
            ghostLink.click();
            URL.revokeObjectURL(blobUrl); 
        }

        window.togglePreview();
    } catch (e) {
        if (e.name !== 'AbortError') {
            console.error("Local client image asset generation failure:", e);
            alert("Something went wrong compiling the local print graphic asset file.");
        }
    } finally {
        buttons.forEach(btn => { btn.innerText = 'Send to Kitchen'; btn.style.opacity = 1; });
    }
}

window.abortAndRename = function() { 
    document.getElementById('previewActions').innerHTML = `<button class="clear-btn" onclick="window.togglePreview()">Edit Design</button><button class="bake-btn" onclick="window.sendToKitchen()">Send to Kitchen</button>`; 
    window.togglePreview(); 
    setTimeout(() => document.getElementById('stickerName').focus(), 300); 
}

window.bypassAndPrint = function(bypass) { 
    if (bypass) { window.globalBypassNameSticker = true; } 
    renderPreviewSheetGrid(window.cleanPrintDataUrl, previewCanvas.width, previewCanvas.height, previewCanvas);
    
    setTimeout(() => {
        window.sendToKitchen();
        window.globalBypassNameSticker = false; 
    }, 400);
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

// --- NEW INTRO SCRAMBLE ---
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

// --- MAP EVERYTHING TO WINDOW ---
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

// --- INIT ---
initColorPickers(); renderCarousels(); renderCloset(); playIntroScramble();
How much of this can we finalize on GitHub, where we can create a repository of images rendered during testing? Instead of downloading something that is closer to the final step possible. Just bypassing the payment for Squarespace while we are testing.

This is actually a brilliant way to build a completely free, temporary backend for your testing phase.

Because GitHub Pages is purely a "front-end" host, it doesn't have a database to receive files. However, GitHub has a powerful REST API that allows a website to commit files directly into a repository code folder. We can hijack this API to save your rendered PNGs into a dedicated test-prints folder inside your repo.

The Reality Check: Security
You cannot hardcode a GitHub password (token) directly into your script.js file. If you push a live token to GitHub, their automated security scanners will detect it within 2 seconds and permanently revoke it to protect your account.

The Fix: I have written the code to use your browser's localStorage. The very first time you hit "Send to Kitchen" on your phone or computer, it will pop up a prompt asking for your token. It will save it securely to your specific device, meaning your repository stays safe, but you can effortlessly beam images straight to it!

Here is exactly how to set this up.

Step 1: Generate a GitHub Token
Before updating the code, you need a "key" to let the app into your repo.

Go to GitHub.com, click your profile picture (top right), and go to Settings.

Scroll all the way down the left menu and click Developer settings.

Click Personal access tokens -> Tokens (classic).

Click Generate new token (classic).

Give it a note (e.g., "Sticker App Test Printer"), set expiration to 30 days, and check the main repo checkbox (this gives it permission to write files).

Click generate and copy the string of characters. You will need to paste this into the app later.

Step 2: Update the Code
Open your script.js file on GitHub. Scroll to the bottom and replace the entire window.sendToKitchen function with this new version.

CRITICAL: You must change YOUR_GITHUB_USERNAME and YOUR_REPO_NAME in the code below to match your actual GitHub details!

JavaScript
// --- GITHUB API OUTPUT ENGINE (REPO UPLOADER) ---
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

    const buttons = document.querySelectorAll('.bake-btn');
    buttons.forEach(btn => { btn.innerText = "Sending to Repo..."; btn.style.opacity = 0.7; });

    try {
        await new Promise(resolve => setTimeout(resolve, 800)); 

        // Hide header elements for clean export
        previewCanvas.setBackgroundColor(null, () => {});
        previewCanvas.getObjects().forEach(obj => {
            if (obj.isHeaderElement) obj.set('visible', false);
        });
        previewCanvas.renderAll();

        // Snapshot the high-res image
        const exportedDataUrl = previewCanvas.toDataURL({ 
            format: 'png', 
            multiplier: 2 
        });

        // Restore header elements to the preview screen
        previewCanvas.setBackgroundColor('#ffffff', () => {});
        previewCanvas.getObjects().forEach(obj => {
            if (obj.isHeaderElement) obj.set('visible', true);
        });
        previewCanvas.renderAll();
        
        // --- GITHUB API UPLOAD LOGIC ---
        
        // 1. Check local device memory for the security token
        let githubToken = localStorage.getItem('stickeria_pat');
        if (!githubToken) {
            githubToken = prompt("Enter your GitHub Personal Access Token (PAT) to authorize saving images:");
            if (!githubToken) throw new Error("Upload aborted: No token provided.");
            localStorage.setItem('stickeria_pat', githubToken); // Save to device memory
        }

        // 2. IMPORTANT: Update these with your exact GitHub details!
        const githubUser = "YOUR_GITHUB_USERNAME"; 
        const githubRepo = "YOUR_REPO_NAME";     
        const folderPath = "test-prints";        // Will automatically create this folder

        // 3. Format the data: Remove the standard Base64 prefix so GitHub can read it
        const base64Data = exportedDataUrl.split(',')[1];
        
        // Use a timestamp so file names never overwrite each other
        const safeName = rawInput.replace(/[^a-z0-9]/gi, '_').toLowerCase() || 'test_print';
        const fileName = `${safeName}-${Date.now()}.png`;

        // 4. Beam the file directly to your GitHub repository
        const response = await fetch(`https://api.github.com/repos/${githubUser}/${githubRepo}/contents/${folderPath}/${fileName}`, {
            method: 'PUT',
            headers: {
                'Authorization': `token ${githubToken}`,
                'Accept': 'application/vnd.github.v3+json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: `Added new test print: ${fileName}`,
                content: base64Data
            })
        });

        if (!response.ok) {
            if (response.status === 401) {
                localStorage.removeItem('stickeria_pat'); // Erase bad token
                throw new Error("Invalid GitHub token. Please try again.");
            }
            throw new Error(`GitHub rejected the upload: ${response.statusText}`);
        }

        alert(`Success! Image beamed to the '${folderPath}' folder in your GitHub repo.`);
        window.togglePreview();

    } catch (e) {
        console.error("Repo upload failure:", e);
        alert(e.message);
    } finally {
        buttons.forEach(btn => { btn.innerText = 'Send to Kitchen'; btn.style.opacity = 1; });
    }
}
How this workflow will look:
Commit the code, wait a minute, and do a hard refresh.

Build a character and click Send to Kitchen.

Your browser will prompt you for a password. Paste the Token you generated in Step 1.

The button will say "Sending to Repo...".

Go to your GitHub repository page and refresh. You will see a brand new folder called test-prints. Click inside, and your transparent, 300-DPI images will be neatly stacked right there for you to download to your computer and send to the Liene printer!

I updated the pieces and can I get the full code block for easy copy and paste with the added new section.



// --- GITHUB API OUTPUT ENGINE (REPO UPLOADER) ---

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



    const buttons = document.querySelectorAll('.bake-btn');

    buttons.forEach(btn => { btn.innerText = "Sending to Repo..."; btn.style.opacity = 0.7; });



    try {

        await new Promise(resolve => setTimeout(resolve, 800)); 



        // Hide header elements for clean export

        previewCanvas.setBackgroundColor(null, () => {});

        previewCanvas.getObjects().forEach(obj => {

            if (obj.isHeaderElement) obj.set('visible', false);

        });

        previewCanvas.renderAll();



        // Snapshot the high-res image

        const exportedDataUrl = previewCanvas.toDataURL({ 

            format: 'png', 

            multiplier: 2 

        });



        // Restore header elements to the preview screen

        previewCanvas.setBackgroundColor('#ffffff', () => {});

        previewCanvas.getObjects().forEach(obj => {

            if (obj.isHeaderElement) obj.set('visible', true);

        });

        previewCanvas.renderAll();

        

        // --- GITHUB API UPLOAD LOGIC ---

        

        // 1. Check local device memory for the security token

        let githubToken = localStorage.getItem('stickeria_pat');

        if (!githubToken) {

            githubToken = prompt("Enter your GitHub Personal Access Token (PAT) to authorize saving images:");

            if (!githubToken) throw new Error("Upload aborted: No token provided.");

            localStorage.setItem('stickeria_pat', githubToken); // Save to device memory

        }



        // 2. IMPORTANT: Update these with your exact GitHub details!

        const githubUser = "Pasteconpaper"; 

        const githubRepo = "Pasteconpaper/buildyourown";     

        const folderPath = "test-prints";        // Will automatically create this folder



        // 3. Format the data: Remove the standard Base64 prefix so GitHub can read it

        const base64Data = exportedDataUrl.split(',')[1];

        

        // Use a timestamp so file names never overwrite each other

        const safeName = rawInput.replace(/[^a-z0-9]/gi, '_').toLowerCase() || 'test_print';

        const fileName = `${safeName}-${Date.now()}.png`;



        // 4. Beam the file directly to your GitHub repository

        const response = await fetch(`https://api.github.com/repos/${githubUser}/${githubRepo}/contents/${folderPath}/${fileName}`, {

            method: 'PUT',

            headers: {

                'Authorization': `token ${githubToken}`,

                'Accept': 'application/vnd.github.v3+json',

                'Content-Type': 'application/json'

            },

            body: JSON.stringify({

                message: `Added new test print: ${fileName}`,

                content: base64Data

            })

        });



        if (!response.ok) {

            if (response.status === 401) {

                localStorage.removeItem('stickeria_pat'); // Erase bad token

                throw new Error("Invalid GitHub token. Please try again.");

            }

            throw new Error(`GitHub rejected the upload: ${response.statusText}`);

        }



        alert(`Success! Image beamed to the '${folderPath}' folder in your GitHub repo.`);

        window.togglePreview();



    } catch (e) {

        console.error("Repo upload failure:", e);

        alert(e.message);

    } finally {

        buttons.forEach(btn => { btn.innerText = 'Send to Kitchen'; btn.style.opacity = 1; });

    }

}

Here is your complete, ready-to-paste script.js file with the GitHub API upload engine seamlessly integrated!

Before I hand it over, I made one tiny but critical correction to your provided snippet so it doesn't break when you try to use it:
In your variables, you had const githubRepo = "Pasteconpaper/buildyourown";. Because the API URL already pulls in the githubUser right before it, leaving it like that would have resulted in a duplicated URL error (/repos/Pasteconpaper/Pasteconpaper/buildyourown/...). I trimmed githubRepo down to just "buildyourown" so the API routes perfectly to your folder!

Here is the final, updated code:

JavaScript
// --- AUTO-INJECT CSS TO CONTAIN THE NEW MASSIVE CANVAS IN THE UI ---
const previewStyleFix = document.createElement('style');
previewStyleFix.innerHTML = `
  .lightbox-canvas-box .canvas-container { width: 100% !important; height: auto !important; aspect-ratio: 1075 / 1854; position: relative; }
  .lightbox-canvas-box canvas { width: 100% !important; height: 100% !important; position: absolute !important; top: 0; left: 0; }
`;
document.head.appendChild(previewStyleFix);

// 1. GLOBAL APP STATE INITIALIZATION 
const canvas = new fabric.Canvas('stickerCanvas', { width: 390, height: 450, backgroundColor: 'transparent', preserveObjectStacking: true, allowTouchScrolling: true });
// EXACT PRINTER ASPECT RATIO (Target 2150x3708 / 2 = 1075x1854)
const previewCanvas = new fabric.Canvas('previewCanvas', { width: 1075, height: 1854, selection: false });
const CX = 195; 
const CY = 225; 

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

window.togglePreview = function() {
  const box = document.getElementById('previewLightbox');
  if (box.style.display === 'none') {
    const activeObjects = canvas.getObjects().filter(o => o.rigPart); if (activeObjects.length === 0) return;
    canvas.discardActiveObject(); window.globalSelectedName = document.getElementById('stickerName').value.trim();
    let minX = 9999, minY = 9999, maxX = -9999, maxY = -9999;
    activeObjects.forEach(o => { const b = o.getBoundingRect(); minX = Math.min(minX, b.left); minY = Math.min(minY, b.top); maxX = Math.max(maxX, b.left + b.width); maxY = Math.max(maxY, b.top + b.height); });
    const pad = 25; minX = Math.max(0, minX - pad); minY = Math.max(0, minY - pad); maxX = Math.min(canvas.width, maxX + pad); maxY = Math.min(canvas.height, maxY + pad);
    const hull = calculateConvexHullPoints(activeObjects); let shield = null, guide = null;
    if (hull.length >= 3) {
      let cx = 0, cy = 0; hull.forEach(p => { cx += p.x; cy += p.y; }); cx /= hull.length; cy /= hull.length;
      shield = new fabric.Polygon(hull, { fill: '#ffffff', stroke: '#ffffff', strokeWidth: 24, strokeLineJoin: 'round', selectable: false, evented: false });
      
      guide = new fabric.Polygon(hull.map(p => { const dX = p.x - cx, dY = p.y - cy, dist = Math.sqrt(dX*dX+dY*dY); return { x: cx+(dX/dist)*(dist+12), y: cy+(dY/dist)*(dist+12) }; }), { fill: 'transparent', stroke: '#aaaaaa', strokeWidth: 2, strokeDashArray: [5, 4], strokeLineJoin: 'round', selectable: false, evented: false });
      canvas.add(shield, guide); guide.bringToFront(); shield.sendToBack(); canvas.renderAll();
    }
    
    if (guide) guide.set('visible', false); 
    canvas.renderAll();
    window.cleanPrintDataUrl = canvas.toDataURL({ left: minX, top: minY, width: maxX - minX, height: maxY - minY, format: 'png', multiplier: 2 });
    
    if (guide) guide.set('visible', true); 
    canvas.renderAll();
    
    renderPreviewSheetGrid(window.cleanPrintDataUrl, maxX - minX, maxY - minY, previewCanvas); 
    
    box.style.display = 'flex';
  } else { 
      box.style.display = 'none'; 
      const objects = canvas.getObjects();
      for(let i = objects.length -1; i >= 0; i--) {
          if(!objects[i].rigPart) canvas.remove(objects[i]);
      }
      canvas.renderAll(); 
  }
}

function renderPreviewSheetGrid(srcUrl, cWidth, cHeight, previewCanvasObj) {
    previewCanvasObj.clear();
    
    const backgroundUrl = 'https://images.squarespace-cdn.com/content/696e90a0119f252471e6c387/5001f07a-737b-48eb-9cfd-62bcb5b4cf46/PasteConPaper_Background.jpg?content-type=image%2Fjpeg'; 
    
    fabric.Image.fromURL(backgroundUrl, function(bgImg) {
        if (bgImg) { 
            bgImg.set({ 
                originX: 'left', 
                originY: 'top', 
                left: 0, 
                top: 0, 
                scaleX: previewCanvasObj.width / bgImg.width,
                scaleY: previewCanvasObj.height / bgImg.height,
                selectable: false, 
                isHeaderElement: true 
            }); 
            previewCanvasObj.add(bgImg); 
        }

        const headerHeight = 269; 
        const cols = 3;
        const rows = 3;
        const stickerGap = 45;
        const sideMargin = 57;
        const topBuffer = 42;
        const footerBuffer = 212;

        const usableWidth = previewCanvasObj.width - (sideMargin * 2);
        const gridHeight = previewCanvasObj.height - headerHeight - topBuffer - footerBuffer;

        const maxImgW = (usableWidth - (stickerGap * (cols - 1))) / cols;
        const maxImgHConstraint = (gridHeight - (stickerGap * (rows - 1))) / rows;
        
        const scaleFactor = Math.min(maxImgW / cWidth, maxImgHConstraint / cHeight) * 0.95; 
        const finalImgW = cWidth * scaleFactor;
        const finalImgH = cHeight * scaleFactor;
        
        const startX = sideMargin + (usableWidth - (cols * finalImgW + (cols - 1) * stickerGap)) / 2;
        const startY = headerHeight + topBuffer + (gridHeight - (rows * finalImgH + (rows - 1) * stickerGap)) / 2;

        let loadedCount = 0;
        
        for(let r = 0; r < rows; r++) {
            for(let c = 0; c < cols; c++) {
                fabric.Image.fromURL(srcUrl, function(img) {
                    img.set({ 
                        left: startX + c * (finalImgW + stickerGap), 
                        top: startY + r * (finalImgH + stickerGap), 
                        scaleX: scaleFactor / 2, 
                        scaleY: scaleFactor / 2, 
                        originX: 'left', 
                        originY: 'top', 
                        selectable: false 
                    });
                    previewCanvasObj.add(img); 
                    loadedCount++;
                    
                    if(loadedCount === rows * cols && !window.globalBypassNameSticker) {
                        const nameText = new fabric.Text(window.globalSelectedName, { fontSize: 31, fontWeight: 'bold', fontFamily: 'Helvetica Neue, Arial, sans-serif', fill: '#ff9800', originX: 'center', originY: 'center' });
                        const nameBg = new fabric.Rect({ width: window.globalSelectedName ? nameText.width + 62 : 226, height: nameText.height + 34, fill: '#ffffff', stroke: '#ff9800', strokeWidth: 4.2, rx: 28, ry: 28, originX: 'center', originY: 'center' });
                        previewCanvasObj.add(new fabric.Group([nameBg, nameText], { left: previewCanvasObj.width / 2, top: previewCanvasObj.height - 108, originX: 'center', originY: 'center', selectable: false }));
                    }
                    previewCanvasObj.renderAll();
                }, { crossOrigin: 'anonymous' });
            }
        }
    }, { crossOrigin: 'anonymous' });
}

// --- GITHUB API OUTPUT ENGINE (REPO UPLOADER) ---
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

    const buttons = document.querySelectorAll('.bake-btn');
    buttons.forEach(btn => { btn.innerText = "Sending to Repo..."; btn.style.opacity = 0.7; });

    try {
        await new Promise(resolve => setTimeout(resolve, 800)); 

        // Hide header elements for clean export
        previewCanvas.setBackgroundColor(null, () => {});
        previewCanvas.getObjects().forEach(obj => {
            if (obj.isHeaderElement) obj.set('visible', false);
        });
        previewCanvas.renderAll();

        // Snapshot the high-res image
        const exportedDataUrl = previewCanvas.toDataURL({ 
            format: 'png', 
            multiplier: 2 
        });

        // Restore header elements to the preview screen
        previewCanvas.setBackgroundColor('#ffffff', () => {});
        previewCanvas.getObjects().forEach(obj => {
            if (obj.isHeaderElement) obj.set('visible', true);
        });
        previewCanvas.renderAll();
        
        // --- GITHUB API UPLOAD LOGIC ---
        
        // 1. Check local device memory for the security token
        let githubToken = localStorage.getItem('stickeria_pat');
        if (!githubToken) {
            githubToken = prompt("Enter your GitHub Personal Access Token (PAT) to authorize saving images:");
            if (!githubToken) throw new Error("Upload aborted: No token provided.");
            localStorage.setItem('stickeria_pat', githubToken); // Save to device memory
        }

        // 2. Fixed repo variable to route correctly
        const githubUser = "Pasteconpaper"; 
        const githubRepo = "buildyourown";     
        const folderPath = "test-prints";        // Will automatically create this folder

        // 3. Format the data: Remove the standard Base64 prefix so GitHub can read it
        const base64Data = exportedDataUrl.split(',')[1];
        
        // Use a timestamp so file names never overwrite each other
        const safeName = rawInput.replace(/[^a-z0-9]/gi, '_').toLowerCase() || 'test_print';
        const fileName = `${safeName}-${Date.now()}.png`;

        // 4. Beam the file directly to your GitHub repository
        const response = await fetch(`https://api.github.com/repos/${githubUser}/${githubRepo}/contents/${folderPath}/${fileName}`, {
            method: 'PUT',
            headers: {
                'Authorization': `token ${githubToken}`,
                'Accept': 'application/vnd.github.v3+json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: `Added new test print: ${fileName}`,
                content: base64Data
            })
        });

        if (!response.ok) {
            if (response.status === 401) {
                localStorage.removeItem('stickeria_pat'); // Erase bad token
                throw new Error("Invalid GitHub token. Please try again.");
            }
            throw new Error(`GitHub rejected the upload: ${response.statusText}`);
        }

        alert(`Success! Image beamed to the '${folderPath}' folder in your GitHub repo.`);
        window.togglePreview();

    } catch (e) {
        console.error("Repo upload failure:", e);
        alert(e.message);
    } finally {
        buttons.forEach(btn => { btn.innerText = 'Send to Kitchen'; btn.style.opacity = 1; });
    }
}

window.abortAndRename = function() { 
    document.getElementById('previewActions').innerHTML = `<button class="clear-btn" onclick="window.togglePreview()">Edit Design</button><button class="bake-btn" onclick="window.sendToKitchen()">Send to Kitchen</button>`; 
    window.togglePreview(); 
    setTimeout(() => document.getElementById('stickerName').focus(), 300); 
}

window.bypassAndPrint = function(bypass) { 
    if (bypass) { window.globalBypassNameSticker = true; } 
    renderPreviewSheetGrid(window.cleanPrintDataUrl, previewCanvas.width, previewCanvas.height, previewCanvas);
    
    setTimeout(() => {
        window.sendToKitchen();
        window.globalBypassNameSticker = false; 
    }, 400);
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

// --- NEW INTRO SCRAMBLE ---
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

// --- MAP EVERYTHING TO WINDOW ---
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

// --- INIT ---
initColorPickers(); renderCarousels(); renderCloset(); playIntroScramble();
In the final deployment, what would be the best workflow for receiving the images? Should it go to a Google Drive folder? Labeled with the order number to be able to tie the image to the order? I am also asking because I have to manually upload the image to the phone or iPad app. I would require somewhere to house them all, with easy access.

Using a Google Drive folder and labeling each file with the Squarespace Order Number is absolutely the best, most frictionless workflow for your final deployment.

Because you are using an iPad or iPhone to feed the Liene printer app, Google Drive is ideal. The Google Drive iOS app handles high-res image previews beautifully and lets you save images directly to your device's Camera Roll in two taps.

To tie the image to a real Squarespace order number without making the user do anything extra, you can use a hands-off, automated pipeline.

The Ideal Production Workflow
Since your frontend app lives on a separate page (or an embed) and Squarespace handles the checkout, you need a "bridge" to pair the design with the money paid.

[Customer Designs Sticker] 
       │
       ▼ (Clicks "Add to Cart")
[App uploads image to Cloud Storage & generates a unique Design ID]
       │
       ▼ (App auto-fills a hidden Squarespace Product Form field with that ID)
[Customer Checks Out on Squarespace]
       │
       ▼ (Automation Trigger: Zapier or Make.com)
[Automation fetches image via Design ID ──> Renames it with Order Number ──> Drops it in Google Drive]
The 4 Steps to Set It Up
1. The Design Capture (Cloud Storage)
Instead of GitHub (which is great for testing but slow and limited for heavy production traffic), you will use a free/cheap cloud storage bucket like Supabase Storage or Firebase.

When the user clicks "Add to Cart," the app quietly uploads the rendered PNG to the cloud bucket.

The cloud bucket instantly returns a short, unique string called a Design ID (e.g., paste-98721).

2. Passing the Key to Squarespace
Squarespace allows you to add a Custom Product Form to items, which pops up fields like "Text to print."

Using a tiny bit of JavaScript on your site, your app will automatically inject that unique Design ID into a hidden or read-only field on that Squarespace form.

When the customer completes their purchase, Squarespace permanently links that Design ID to their order data.

3. The Automation Bridge (Zapier or Make.com)
You will use a no-code automation platform like Make.com or Zapier to do the heavy lifting in the background. You set up a simple 3-step chain:

Trigger: New Order placed in Squarespace.

Action A: Look at the order details, grab the Squarespace Order Number (e.g., #10432), and grab the Design ID from the custom form field.

Action B: Tell Google Drive to grab the file matching that Design ID, rename it to Order_10432_StickerName.png, and drop it into your main print queue folder.

4. The Kitchen Table Fulfillment (Your iPad)
Your manual routine becomes incredibly streamlined:

Open the Google Drive app on your iPad.

See a neat list of files perfectly matching your Squarespace dashboard (e.g., Order_10432, Order_10433).

Tap the three dots on the image, select Save to Photos, and open it in your printer app.

Production Setup vs. Your Current GitHub Setup
Feature	Testing Phase (Current GitHub)	Production Phase (Google Drive Engine)
Storage Choice	GitHub Repository (test-prints/)	Supabase or Firebase Storage
Authentication	Manual Security Token (PAT) prompt	Handled safely via backend api keys
Matching Method	Timestamp + Random Name	Automated via Squarespace Order Number
Fulfillment Device	Desktop computer / manual download	iPad or iPhone via Google Drive app
Would you like to focus next on how to set up the Squarespace Custom Product Form to pass data, or are you ready to look at how to hook up an automation tool like Make/Zapier?

This is great, let's remember this for future purposes. For now, can we test the Google Drive repository?

If you want me to be able to save or delete info about you, turn on the feature on the Saved info page.

Now, let's get your Google Drive test repository set up!

Bypassing GitHub to save directly to Google Drive for testing is an incredibly smart move. Since browser security (CORS) normally blocks websites from silently saving files into Google Drive directly, we are going to build a tiny, free "Webhook" using Google Apps Script.

It acts as a middleman: your website hands the image to the script, and the script safely drops it into your Drive folder.

Here is exactly how to set up this temporary testing pipeline.

Step 1: Prep Your Google Drive Folder
Go to your Google Drive and create a new folder (e.g., Sticker-Test-Prints).

Open that folder and look at the URL in your browser. It will look like this:
https://drive.google.com/drive/folders/1A2B3C4D5E...

Copy that long string of characters after /folders/. That is your Folder ID.

Step 2: Create the Webhook (Google Apps Script)
Go to script.google.com and click New Project.

Delete any code in the editor and paste this exact script:

JavaScript
function doPost(e) {
  try {
    // 1. Parse the incoming image data from the website
    var data = JSON.parse(e.postData.contents);
    
    // 2. PASTE YOUR FOLDER ID HERE
    var folderId = 'YOUR_FOLDER_ID_HERE'; 
    var folder = DriveApp.getFolderById(folderId);
    
    // 3. Decode the image string and save it as a physical PNG file
    var blob = Utilities.newBlob(Utilities.base64Decode(data.image), 'image/png', data.filename);
    var file = folder.createFile(blob);
    
    // 4. Send a success message back to the website
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success', 
      fileUrl: file.getUrl()
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error', 
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
Replace YOUR_FOLDER_ID_HERE with the ID you copied in Step 1.

Click the Save (floppy disk) icon.

Step 3: Publish the Webhook
Click the blue Deploy button in the top right corner and select New deployment.

Click the gear icon next to "Select type" and choose Web app.

Fill out the settings exactly like this:

Description: Sticker Receiver

Execute as: Me (Your email)

Who has access: Anyone (This is critical, or the site will be blocked!)

Click Deploy. Google will ask you to authorize access to your Drive. Follow the prompts (you may have to click "Advanced" -> "Go to project (unsafe)" since it's your own custom script).

Copy the Web app URL it provides. It will end in /exec.

Step 4: Update Your script.js
Back in your GitHub repository, swap out your current window.sendToKitchen function for this Google Drive version. Paste your Web app URL into the variable on line 31!

JavaScript
// --- GOOGLE DRIVE WEBHOOK OUTPUT ENGINE ---
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

    const buttons = document.querySelectorAll('.bake-btn');
    buttons.forEach(btn => { btn.innerText = "Sending to Drive..."; btn.style.opacity = 0.7; });

    try {
        await new Promise(resolve => setTimeout(resolve, 800)); 

        // Hide header elements for clean export
        previewCanvas.setBackgroundColor(null, () => {});
        previewCanvas.getObjects().forEach(obj => {
            if (obj.isHeaderElement) obj.set('visible', false);
        });
        previewCanvas.renderAll();

        // Snapshot the high-res 300 DPI image
        const exportedDataUrl = previewCanvas.toDataURL({ 
            format: 'png', 
            multiplier: 2 
        });

        // Restore header elements to the preview screen
        previewCanvas.setBackgroundColor('#ffffff', () => {});
        previewCanvas.getObjects().forEach(obj => {
            if (obj.isHeaderElement) obj.set('visible', true);
        });
        previewCanvas.renderAll();
        
        // --- GOOGLE DRIVE API UPLOAD LOGIC ---
        
        // 1. PASTE YOUR PUBLISHED GOOGLE APPS SCRIPT WEB APP URL HERE
        const googleWebAppUrl = "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec"; 

        // 2. Format the data to pass to your webhook
        const safeName = rawInput.replace(/[^a-z0-9]/gi, '_').toLowerCase() || 'test_print';
        const fileName = `${safeName}-${Date.now()}.png`;
        
        // Use text/plain to easily bypass browser CORS security checks
        const response = await fetch(googleWebAppUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain;charset=utf-8'
            },
            body: JSON.stringify({
                filename: fileName,
                image: exportedDataUrl.split(',')[1] // Strip the data uri prefix
            })
        });

        const result = await response.json();

        if (result.status === 'success') {
            alert(`Success! Image beamed directly to your Google Drive folder.`);
        } else {
            throw new Error(result.message || "Drive upload failed.");
        }

        window.togglePreview();

    } catch (e) {
        console.error("Drive upload failure:", e);
        alert(`Something went wrong saving to Google Drive. Check the console for details.`);
    } finally {
        buttons.forEach(btn => { btn.innerText = 'Send to Kitchen'; btn.style.opacity = 1; });
    }
}
Once you commit this and bump your ?v=5 cache buster in the HTML, hitting "Send to Kitchen" will silently funnel that 300 DPI image straight into your Google Drive, letting you open it directly on your iPad!

I think I did it all except adapt to the JS code. Here is the link from Google Drive. https://script.google.com/macros/s/AKfycbxSS87PwwMCmthMy4GQLhUH6qm7bsA8kcPaEPWFOcWwrru5pz66HvQX6lmAzM7utEVBxg/exec



Can I get a full code block with the link adapted to the JS code block for easy copy-and-paste?

Here is your complete, fully updated script.js file with your specific Google Apps Script Webhook URL plugged right into the engine!

Just copy this entire block and paste it directly into your script.js file on GitHub.

(Don't forget to open your index.html file and change the cache buster on the script tag from ?v=4 to ?v=5 so your browser knows to grab this new Google Drive version!)

script.js
JavaScript
// --- AUTO-INJECT CSS TO CONTAIN THE NEW MASSIVE CANVAS IN THE UI ---
const previewStyleFix = document.createElement('style');
previewStyleFix.innerHTML = `
  .lightbox-canvas-box .canvas-container { width: 100% !important; height: auto !important; aspect-ratio: 1075 / 1854; position: relative; }
  .lightbox-canvas-box canvas { width: 100% !important; height: 100% !important; position: absolute !important; top: 0; left: 0; }
`;
document.head.appendChild(previewStyleFix);

// 1. GLOBAL APP STATE INITIALIZATION 
const canvas = new fabric.Canvas('stickerCanvas', { width: 390, height: 450, backgroundColor: 'transparent', preserveObjectStacking: true, allowTouchScrolling: true });
// EXACT PRINTER ASPECT RATIO (Target 2150x3708 / 2 = 1075x1854)
const previewCanvas = new fabric.Canvas('previewCanvas', { width: 1075, height: 1854, selection: false });
const CX = 195; 
const CY = 225; 

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

window.togglePreview = function() {
  const box = document.getElementById('previewLightbox');
  if (box.style.display === 'none') {
    const activeObjects = canvas.getObjects().filter(o => o.rigPart); if (activeObjects.length === 0) return;
    canvas.discardActiveObject(); window.globalSelectedName = document.getElementById('stickerName').value.trim();
    let minX = 9999, minY = 9999, maxX = -9999, maxY = -9999;
    activeObjects.forEach(o => { const b = o.getBoundingRect(); minX = Math.min(minX, b.left); minY = Math.min(minY, b.top); maxX = Math.max(maxX, b.left + b.width); maxY = Math.max(maxY, b.top + b.height); });
    const pad = 25; minX = Math.max(0, minX - pad); minY = Math.max(0, minY - pad); maxX = Math.min(canvas.width, maxX + pad); maxY = Math.min(canvas.height, maxY + pad);
    const hull = calculateConvexHullPoints(activeObjects); let shield = null, guide = null;
    if (hull.length >= 3) {
      let cx = 0, cy = 0; hull.forEach(p => { cx += p.x; cy += p.y; }); cx /= hull.length; cy /= hull.length;
      shield = new fabric.Polygon(hull, { fill: '#ffffff', stroke: '#ffffff', strokeWidth: 24, strokeLineJoin: 'round', selectable: false, evented: false });
      
      guide = new fabric.Polygon(hull.map(p => { const dX = p.x - cx, dY = p.y - cy, dist = Math.sqrt(dX*dX+dY*dY); return { x: cx+(dX/dist)*(dist+12), y: cy+(dY/dist)*(dist+12) }; }), { fill: 'transparent', stroke: '#aaaaaa', strokeWidth: 2, strokeDashArray: [5, 4], strokeLineJoin: 'round', selectable: false, evented: false });
      canvas.add(shield, guide); guide.bringToFront(); shield.sendToBack(); canvas.renderAll();
    }
    
    if (guide) guide.set('visible', false); 
    canvas.renderAll();
    window.cleanPrintDataUrl = canvas.toDataURL({ left: minX, top: minY, width: maxX - minX, height: maxY - minY, format: 'png', multiplier: 2 });
    
    if (guide) guide.set('visible', true); 
    canvas.renderAll();
    
    renderPreviewSheetGrid(window.cleanPrintDataUrl, maxX - minX, maxY - minY, previewCanvas); 
    
    box.style.display = 'flex';
  } else { 
      box.style.display = 'none'; 
      const objects = canvas.getObjects();
      for(let i = objects.length -1; i >= 0; i--) {
          if(!objects[i].rigPart) canvas.remove(objects[i]);
      }
      canvas.renderAll(); 
  }
}

function renderPreviewSheetGrid(srcUrl, cWidth, cHeight, previewCanvasObj) {
    previewCanvasObj.clear();
    
    const backgroundUrl = 'https://images.squarespace-cdn.com/content/696e90a0119f252471e6c387/5001f07a-737b-48eb-9cfd-62bcb5b4cf46/PasteConPaper_Background.jpg?content-type=image%2Fjpeg'; 
    
    fabric.Image.fromURL(backgroundUrl, function(bgImg) {
        if (bgImg) { 
            bgImg.set({ 
                originX: 'left', 
                originY: 'top', 
                left: 0, 
                top: 0, 
                scaleX: previewCanvasObj.width / bgImg.width,
                scaleY: previewCanvasObj.height / bgImg.height,
                selectable: false, 
                isHeaderElement: true 
            }); 
            previewCanvasObj.add(bgImg); 
        }

        const headerHeight = 269; 
        const cols = 3;
        const rows = 3;
        const stickerGap = 45;
        const sideMargin = 57;
        const topBuffer = 42;
        const footerBuffer = 212;

        const usableWidth = previewCanvasObj.width - (sideMargin * 2);
        const gridHeight = previewCanvasObj.height - headerHeight - topBuffer - footerBuffer;

        const maxImgW = (usableWidth - (stickerGap * (cols - 1))) / cols;
        const maxImgHConstraint = (gridHeight - (stickerGap * (rows - 1))) / rows;
        
        const scaleFactor = Math.min(maxImgW / cWidth, maxImgHConstraint / cHeight) * 0.95; 
        const finalImgW = cWidth * scaleFactor;
        const finalImgH = cHeight * scaleFactor;
        
        const startX = sideMargin + (usableWidth - (cols * finalImgW + (cols - 1) * stickerGap)) / 2;
        const startY = headerHeight + topBuffer + (gridHeight - (rows * finalImgH + (rows - 1) * stickerGap)) / 2;

        let loadedCount = 0;
        
        for(let r = 0; r < rows; r++) {
            for(let c = 0; c < cols; c++) {
                fabric.Image.fromURL(srcUrl, function(img) {
                    img.set({ 
                        left: startX + c * (finalImgW + stickerGap), 
                        top: startY + r * (finalImgH + stickerGap), 
                        scaleX: scaleFactor / 2, 
                        scaleY: scaleFactor / 2, 
                        originX: 'left', 
                        originY: 'top', 
                        selectable: false 
                    });
                    previewCanvasObj.add(img); 
                    loadedCount++;
                    
                    if(loadedCount === rows * cols && !window.globalBypassNameSticker) {
                        const nameText = new fabric.Text(window.globalSelectedName, { fontSize: 31, fontWeight: 'bold', fontFamily: 'Helvetica Neue, Arial, sans-serif', fill: '#ff9800', originX: 'center', originY: 'center' });
                        const nameBg = new fabric.Rect({ width: window.globalSelectedName ? nameText.width + 62 : 226, height: nameText.height + 34, fill: '#ffffff', stroke: '#ff9800', strokeWidth: 4.2, rx: 28, ry: 28, originX: 'center', originY: 'center' });
                        previewCanvasObj.add(new fabric.Group([nameBg, nameText], { left: previewCanvasObj.width / 2, top: previewCanvasObj.height - 108, originX: 'center', originY: 'center', selectable: false }));
                    }
                    previewCanvasObj.renderAll();
                }, { crossOrigin: 'anonymous' });
            }
        }
    }, { crossOrigin: 'anonymous' });
}

// --- GOOGLE DRIVE WEBHOOK OUTPUT ENGINE ---
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

    const buttons = document.querySelectorAll('.bake-btn');
    buttons.forEach(btn => { btn.innerText = "Sending to Drive..."; btn.style.opacity = 0.7; });

    try {
        await new Promise(resolve => setTimeout(resolve, 800)); 

        // Hide header elements for clean export
        previewCanvas.setBackgroundColor(null, () => {});
        previewCanvas.getObjects().forEach(obj => {
            if (obj.isHeaderElement) obj.set('visible', false);
        });
        previewCanvas.renderAll();

        // Snapshot the high-res 300 DPI image
        const exportedDataUrl = previewCanvas.toDataURL({ 
            format: 'png', 
            multiplier: 2 
        });

        // Restore header elements to the preview screen
        previewCanvas.setBackgroundColor('#ffffff', () => {});
        previewCanvas.getObjects().forEach(obj => {
            if (obj.isHeaderElement) obj.set('visible', true);
        });
        previewCanvas.renderAll();
        
        // --- GOOGLE DRIVE API UPLOAD LOGIC ---
        
        // 1. GOOGLE APPS SCRIPT WEB APP URL
        const googleWebAppUrl = "https://script.google.com/macros/s/AKfycbxSS87PwwMCmthMy4GQLhUH6qm7bsA8kcPaEPWFOcWwrru5pz66HvQX6lmAzM7utEVBxg/exec"; 

        // 2. Format the data to pass to your webhook
        const safeName = rawInput.replace(/[^a-z0-9]/gi, '_').toLowerCase() || 'test_print';
        const fileName = `${safeName}-${Date.now()}.png`;
        
        // Use text/plain to easily bypass browser CORS security checks
        const response = await fetch(googleWebAppUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain;charset=utf-8'
            },
            body: JSON.stringify({
                filename: fileName,
                image: exportedDataUrl.split(',')[1] // Strip the data uri prefix
            })
        });

        const result = await response.json();

        if (result.status === 'success') {
            alert(`Success! Image beamed directly to your Google Drive folder.`);
        } else {
            throw new Error(result.message || "Drive upload failed.");
        }

        window.togglePreview();

    } catch (e) {
        console.error("Drive upload failure:", e);
        alert(`Something went wrong saving to Google Drive. Check the console for details.`);
    } finally {
        buttons.forEach(btn => { btn.innerText = 'Send to Kitchen'; btn.style.opacity = 1; });
    }
}

window.abortAndRename = function() { 
    document.getElementById('previewActions').innerHTML = `<button class="clear-btn" onclick="window.togglePreview()">Edit Design</button><button class="bake-btn" onclick="window.sendToKitchen()">Send to Kitchen</button>`; 
    window.togglePreview(); 
    setTimeout(() => document.getElementById('stickerName').focus(), 300); 
}

window.bypassAndPrint = function(bypass) { 
    if (bypass) { window.globalBypassNameSticker = true; } 
    renderPreviewSheetGrid(window.cleanPrintDataUrl, previewCanvas.width, previewCanvas.height, previewCanvas);
    
    setTimeout(() => {
        window.sendToKitchen();
        window.globalBypassNameSticker = false; 
    }, 400);
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

// --- NEW INTRO SCRAMBLE ---
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

// --- MAP EVERYTHING TO WINDOW ---
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

// --- INIT ---
initColorPickers(); renderCarousels(); renderCloset(); playIntroScramble();
I must have done something wrong on the Google Drive side of things. I tested the code on CodePen and encountered the following issues.

Ah, the classic Google Apps Script roadblock! Don't worry, you didn't break anything.

When you see that specific error in CodePen (which is usually a "CORS" or Cross-Origin error hidden in the console), it almost always means the Google Script experienced a minor hiccup and returned an HTML error page instead of the JSON data we expected. When the browser sees HTML instead of JSON, it panics and blocks the download.

Here are the three most common culprits on the Google Drive side. Please double-check these in your Google Apps Script:

1. The "New Deployment" Trap (Most Common)
In Google Apps Script, hitting "Save" does not update the live webhook! Every single time you change the code (like pasting your Folder ID), you must go to Deploy > New deployment. If you just hit save or "Manage Deployments", it is still running the old blank code.

2. The Folder ID Check
Make sure your folderId variable in the Google Script only contains the exact string of random letters and numbers, not the entire URL.

❌ var folderId = 'https://drive.google.com/drive/folders/1A2B3C...';

✅ var folderId = '1A2B3C...';

3. The "Anyone" Permission
When you create the Deployment, "Who has access" must be set to exactly "Anyone". If it is set to "Anyone with a Google Account" or "Only Myself", Google puts a hidden login screen in front of your webhook, which completely blocks CodePen from sending the image.

The Updated Javascript (With Bulletproof Fetch)
To help ensure the image gets through Google's redirects, I have beefed up the fetch request in your JS code to explicitly tell it to follow redirects (redirect: "follow").

Here is the complete, full script.js code so you can just copy and replace the whole thing. Your Google Apps Script URL is already perfectly plugged in!

JavaScript
// --- AUTO-INJECT CSS TO CONTAIN THE NEW MASSIVE CANVAS IN THE UI ---
const previewStyleFix = document.createElement('style');
previewStyleFix.innerHTML = `
  .lightbox-canvas-box .canvas-container { width: 100% !important; height: auto !important; aspect-ratio: 1075 / 1854; position: relative; }
  .lightbox-canvas-box canvas { width: 100% !important; height: 100% !important; position: absolute !important; top: 0; left: 0; }
`;
document.head.appendChild(previewStyleFix);

// 1. GLOBAL APP STATE INITIALIZATION 
const canvas = new fabric.Canvas('stickerCanvas', { width: 390, height: 450, backgroundColor: 'transparent', preserveObjectStacking: true, allowTouchScrolling: true });
// EXACT PRINTER ASPECT RATIO (Target 2150x3708 / 2 = 1075x1854)
const previewCanvas = new fabric.Canvas('previewCanvas', { width: 1075, height: 1854, selection: false });
const CX = 195; 
const CY = 225; 

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

window.togglePreview = function() {
  const box = document.getElementById('previewLightbox');
  if (box.style.display === 'none') {
    const activeObjects = canvas.getObjects().filter(o => o.rigPart); if (activeObjects.length === 0) return;
    canvas.discardActiveObject(); window.globalSelectedName = document.getElementById('stickerName').value.trim();
    let minX = 9999, minY = 9999, maxX = -9999, maxY = -9999;
    activeObjects.forEach(o => { const b = o.getBoundingRect(); minX = Math.min(minX, b.left); minY = Math.min(minY, b.top); maxX = Math.max(maxX, b.left + b.width); maxY = Math.max(maxY, b.top + b.height); });
    const pad = 25; minX = Math.max(0, minX - pad); minY = Math.max(0, minY - pad); maxX = Math.min(canvas.width, maxX + pad); maxY = Math.min(canvas.height, maxY + pad);
    const hull = calculateConvexHullPoints(activeObjects); let shield = null, guide = null;
    if (hull.length >= 3) {
      let cx = 0, cy = 0; hull.forEach(p => { cx += p.x; cy += p.y; }); cx /= hull.length; cy /= hull.length;
      shield = new fabric.Polygon(hull, { fill: '#ffffff', stroke: '#ffffff', strokeWidth: 24, strokeLineJoin: 'round', selectable: false, evented: false });
      
      guide = new fabric.Polygon(hull.map(p => { const dX = p.x - cx, dY = p.y - cy, dist = Math.sqrt(dX*dX+dY*dY); return { x: cx+(dX/dist)*(dist+12), y: cy+(dY/dist)*(dist+12) }; }), { fill: 'transparent', stroke: '#aaaaaa', strokeWidth: 2, strokeDashArray: [5, 4], strokeLineJoin: 'round', selectable: false, evented: false });
      canvas.add(shield, guide); guide.bringToFront(); shield.sendToBack(); canvas.renderAll();
    }
    
    if (guide) guide.set('visible', false); 
    canvas.renderAll();
    window.cleanPrintDataUrl = canvas.toDataURL({ left: minX, top: minY, width: maxX - minX, height: maxY - minY, format: 'png', multiplier: 2 });
    
    if (guide) guide.set('visible', true); 
    canvas.renderAll();
    
    renderPreviewSheetGrid(window.cleanPrintDataUrl, maxX - minX, maxY - minY, previewCanvas); 
    
    box.style.display = 'flex';
  } else { 
      box.style.display = 'none'; 
      const objects = canvas.getObjects();
      for(let i = objects.length -1; i >= 0; i--) {
          if(!objects[i].rigPart) canvas.remove(objects[i]);
      }
      canvas.renderAll(); 
  }
}

function renderPreviewSheetGrid(srcUrl, cWidth, cHeight, previewCanvasObj) {
    previewCanvasObj.clear();
    
    const backgroundUrl = 'https://images.squarespace-cdn.com/content/696e90a0119f252471e6c387/5001f07a-737b-48eb-9cfd-62bcb5b4cf46/PasteConPaper_Background.jpg?content-type=image%2Fjpeg'; 
    
    fabric.Image.fromURL(backgroundUrl, function(bgImg) {
        if (bgImg) { 
            bgImg.set({ 
                originX: 'left', 
                originY: 'top', 
                left: 0, 
                top: 0, 
                scaleX: previewCanvasObj.width / bgImg.width,
                scaleY: previewCanvasObj.height / bgImg.height,
                selectable: false, 
                isHeaderElement: true 
            }); 
            previewCanvasObj.add(bgImg); 
        }

        const headerHeight = 269; 
        const cols = 3;
        const rows = 3;
        const stickerGap = 45;
        const sideMargin = 57;
        const topBuffer = 42;
        const footerBuffer = 212;

        const usableWidth = previewCanvasObj.width - (sideMargin * 2);
        const gridHeight = previewCanvasObj.height - headerHeight - topBuffer - footerBuffer;

        const maxImgW = (usableWidth - (stickerGap * (cols - 1))) / cols;
        const maxImgHConstraint = (gridHeight - (stickerGap * (rows - 1))) / rows;
        
        const scaleFactor = Math.min(maxImgW / cWidth, maxImgHConstraint / cHeight) * 0.95; 
        const finalImgW = cWidth * scaleFactor;
        const finalImgH = cHeight * scaleFactor;
        
        const startX = sideMargin + (usableWidth - (cols * finalImgW + (cols - 1) * stickerGap)) / 2;
        const startY = headerHeight + topBuffer + (gridHeight - (rows * finalImgH + (rows - 1) * stickerGap)) / 2;

        let loadedCount = 0;
        
        for(let r = 0; r < rows; r++) {
            for(let c = 0; c < cols; c++) {
                fabric.Image.fromURL(srcUrl, function(img) {
                    img.set({ 
                        left: startX + c * (finalImgW + stickerGap), 
                        top: startY + r * (finalImgH + stickerGap), 
                        scaleX: scaleFactor / 2, 
                        scaleY: scaleFactor / 2, 
                        originX: 'left', 
                        originY: 'top', 
                        selectable: false 
                    });
                    previewCanvasObj.add(img); 
                    loadedCount++;
                    
                    if(loadedCount === rows * cols && !window.globalBypassNameSticker) {
                        const nameText = new fabric.Text(window.globalSelectedName, { fontSize: 31, fontWeight: 'bold', fontFamily: 'Helvetica Neue, Arial, sans-serif', fill: '#ff9800', originX: 'center', originY: 'center' });
                        const nameBg = new fabric.Rect({ width: window.globalSelectedName ? nameText.width + 62 : 226, height: nameText.height + 34, fill: '#ffffff', stroke: '#ff9800', strokeWidth: 4.2, rx: 28, ry: 28, originX: 'center', originY: 'center' });
                        previewCanvasObj.add(new fabric.Group([nameBg, nameText], { left: previewCanvasObj.width / 2, top: previewCanvasObj.height - 108, originX: 'center', originY: 'center', selectable: false }));
                    }
                    previewCanvasObj.renderAll();
                }, { crossOrigin: 'anonymous' });
            }
        }
    }, { crossOrigin: 'anonymous' });
}

// --- GOOGLE DRIVE WEBHOOK OUTPUT ENGINE ---
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

    const buttons = document.querySelectorAll('.bake-btn');
    buttons.forEach(btn => { btn.innerText = "Sending to Drive..."; btn.style.opacity = 0.7; });

    try {
        await new Promise(resolve => setTimeout(resolve, 800)); 

        // Hide header elements for clean export
        previewCanvas.setBackgroundColor(null, () => {});
        previewCanvas.getObjects().forEach(obj => {
            if (obj.isHeaderElement) obj.set('visible', false);
        });
        previewCanvas.renderAll();

        // Snapshot the high-res 300 DPI image
        const exportedDataUrl = previewCanvas.toDataURL({ 
            format: 'png', 
            multiplier: 2 
        });

        // Restore header elements to the preview screen
        previewCanvas.setBackgroundColor('#ffffff', () => {});
        previewCanvas.getObjects().forEach(obj => {
            if (obj.isHeaderElement) obj.set('visible', true);
        });
        previewCanvas.renderAll();
        
        // --- GOOGLE DRIVE API UPLOAD LOGIC ---
        
        const googleWebAppUrl = "https://script.google.com/macros/s/AKfycbxSS87PwwMCmthMy4GQLhUH6qm7bsA8kcPaEPWFOcWwrru5pz66HvQX6lmAzM7utEVBxg/exec"; 

        const safeName = rawInput.replace(/[^a-z0-9]/gi, '_').toLowerCase() || 'test_print';
        const fileName = `${safeName}-${Date.now()}.png`;
        
        // UPDATED: Added redirect: 'follow' so the browser navigates the Google routing seamlessly
        const response = await fetch(googleWebAppUrl, {
            redirect: 'follow', 
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain;charset=utf-8'
            },
            body: JSON.stringify({
                filename: fileName,
                image: exportedDataUrl.split(',')[1] 
            })
        });

        const result = await response.json();

        if (result.status === 'success') {
            alert(`Success! Image beamed directly to your Google Drive folder.`);
        } else {
            throw new Error(result.message || "Drive upload failed internally on the Google Server.");
        }

        window.togglePreview();

    } catch (e) {
        console.error("Drive upload failure:", e);
        alert(`Google Drive Upload Failed! Double-check your Apps Script Deployment settings. Make sure it is set to 'Anyone'.`);
    } finally {
        buttons.forEach(btn => { btn.innerText = 'Send to Kitchen'; btn.style.opacity = 1; });
    }
}

window.abortAndRename = function() { 
    document.getElementById('previewActions').innerHTML = `<button class="clear-btn" onclick="window.togglePreview()">Edit Design</button><button class="bake-btn" onclick="window.sendToKitchen()">Send to Kitchen</button>`; 
    window.togglePreview(); 
    setTimeout(() => document.getElementById('stickerName').focus(), 300); 
}

window.bypassAndPrint = function(bypass) { 
    if (bypass) { window.globalBypassNameSticker = true; } 
    renderPreviewSheetGrid(window.cleanPrintDataUrl, previewCanvas.width, previewCanvas.height, previewCanvas);
    
    setTimeout(() => {
        window.sendToKitchen();
        window.globalBypassNameSticker = false; 
    }, 400);
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

// --- NEW INTRO SCRAMBLE ---
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

// --- MAP EVERYTHING TO WINDOW ---
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

// --- INIT ---
initColorPickers(); renderCarousels(); renderCloset(); playIntroScramble();
Here is the new Google folder ID.



1T_GC_jie1iV-7qPGFqOfkA-ie-erXXL7?usp=drive_link



I updated the provided JS code, but GitHub still shows an issue.

I know exactly what happened here! Mixing Google Drive IDs, Apps Script URLs, and GitHub code can easily get wires crossed.

There are two tiny crossed wires causing the issue:

The ID format: Your folder ID has the ?usp=drive_link sharing tag attached to it. Google Apps Script will crash if it sees that. The actual ID is just the middle part: 1T_GC_jie1iV-7qPGFqOfkA-ie-erXXL7.

Where the ID goes: The Folder ID does not go into your GitHub code. It only goes into your hidden Google Apps Script. Your GitHub code only needs the Web App URL (the one that ends in /exec).

Here is the exact, step-by-step fix to untangle this and get your images flowing to Drive.

Step 1: Fix the Google Apps Script
Go back to script.google.com where you created the webhook and replace your code with this perfectly clean version using your exact Folder ID:

JavaScript
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    
    // THIS IS YOUR CLEAN FOLDER ID
    var folderId = '1T_GC_jie1iV-7qPGFqOfkA-ie-erXXL7'; 
    var folder = DriveApp.getFolderById(folderId);
    
    var blob = Utilities.newBlob(Utilities.base64Decode(data.image), 'image/png', data.filename);
    var file = folder.createFile(blob);
    
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success', 
      fileUrl: file.getUrl()
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error', 
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
Step 2: The "New Deployment" Rule
This is the most critical step. If you just hit "Save", Google ignores your changes.

Click the blue Deploy button in the top right.

Click New deployment (Do not click Manage Deployments).

Make sure it still says "Execute as: Me" and "Who has access: Anyone".

Click Deploy.

Copy the fresh Web app URL it gives you (it will end in /exec).

Step 3: Update GitHub (script.js)
Now, go to your script.js file on GitHub. Scroll down to around line 440 inside the window.sendToKitchen function.

Look for this specific line:

JavaScript
const googleWebAppUrl = "https://script.google.com/macros/s/.../exec"; 
Delete whatever is inside those quote marks and paste the new Web app URL you just copied from Step 2.

Do not put your Folder ID in your GitHub code. GitHub only talks to the Web App URL, and the Web App URL talks to your Folder ID.

Commit that single change to script.js, bump your cache buster in index.html to ?v=6, wait for the green checkmark on GitHub, and do a hard refresh. The bridge will be perfectly connected!

Hmmm, I'm genuinely not sure what I am doing wrong. Still getting an issue that I need to check

You stopped this response
Hmmm, I'm genuinely not sure what I am doing wrong. Still getting an issue that I need to check

Don't worry, you did absolutely nothing wrong!

What you are hitting is a notoriously annoying web security feature called CORS (Cross-Origin Resource Sharing), combined with a quirk in how Google Apps Script handles data.

When your website sends the image, Google receives it, but then it tries to "redirect" your browser to a secret Google server to send the success message. Your browser sees that redirect, panics, yells "Security Breach!", and blocks the code from finishing.

To bypass this, we are going to add a tiny line to your code: mode: 'no-cors'. This basically tells your browser: "Just drop the package off at Google's door and walk away. Don't wait for them to hand you a receipt."

Here is the exact fix. You only need to replace the window.sendToKitchen function at the very bottom of your script.js file.

Updated script.js (Just the bottom function)
JavaScript
// --- GOOGLE DRIVE WEBHOOK OUTPUT ENGINE ---
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

    const buttons = document.querySelectorAll('.bake-btn');
    buttons.forEach(btn => { btn.innerText = "Sending to Drive..."; btn.style.opacity = 0.7; });

    try {
        await new Promise(resolve => setTimeout(resolve, 800)); 

        previewCanvas.setBackgroundColor(null, () => {});
        previewCanvas.getObjects().forEach(obj => {
            if (obj.isHeaderElement) obj.set('visible', false);
        });
        previewCanvas.renderAll();

        // Snapshot the high-res 300 DPI image
        const exportedDataUrl = previewCanvas.toDataURL({ 
            format: 'png', 
            multiplier: 2 
        });

        previewCanvas.setBackgroundColor('#ffffff', () => {});
        previewCanvas.getObjects().forEach(obj => {
            if (obj.isHeaderElement) obj.set('visible', true);
        });
        previewCanvas.renderAll();
        
        // --- GOOGLE DRIVE API UPLOAD LOGIC ---
        
        const googleWebAppUrl = "https://script.google.com/macros/s/AKfycbxSS87PwwMCmthMy4GQLhUH6qm7bsA8kcPaEPWFOcWwrru5pz66HvQX6lmAzM7utEVBxg/exec"; 

        const safeName = rawInput.replace(/[^a-z0-9]/gi, '_').toLowerCase() || 'test_print';
        const fileName = `${safeName}-${Date.now()}.png`;
        
        // THE FIX: We use mode: 'no-cors' so the browser ignores Google's weird redirects
        await fetch(googleWebAppUrl, {
            method: 'POST',
            mode: 'no-cors', // <-- THE MAGIC BULLET
            headers: {
                'Content-Type': 'text/plain'
            },
            body: JSON.stringify({
                filename: fileName,
                image: exportedDataUrl.split(',')[1] 
            })
        });

        // Because of 'no-cors', we can't read Google's response. 
        // If the code reaches this line without crashing, we assume the drop-off was successful!
        alert(`Sent! Check your Google Drive folder.`);
        window.togglePreview();

    } catch (e) {
        console.error("Drive upload failure:", e);
        alert(`Something went wrong saving to Google Drive. Check the console for details.`);
    } finally {
        buttons.forEach(btn => { btn.innerText = 'Send to Kitchen'; btn.style.opacity = 1; });
    }
}
One Important Note on Google Apps Script Limits
If you replace this code, commit it, wait for the build, and hit "Send to Kitchen", the app should say "Sent! Check your Google Drive folder."

If you check your Google Drive folder and the image isn't there, it means the massive 2150x3708 PNG is exceeding Google Apps Script's free payload size limits (it caps out at around 10MB per POST request).

If that happens, just change multiplier: 2 (around line 431) to multiplier: 1 just for this Google Drive testing phase to make the file size smaller!

Give that a try and let me know if the file lands in the folder!

I might copied and pasted in the wrong place. Can I get the full JS code block for easy copy and past?

Here is the absolute full, complete, and updated script.js file from top to bottom. This includes the no-cors magic bullet for Google Drive and all the high-res printer formatting we've built.

Just clear out your entire script.js file on GitHub, paste this whole block in, and hit commit!

(And remember, bump your cache buster in index.html to <script src="script.js?v=6"></script> so your phone knows to download the new version!)

Full script.js
JavaScript
// --- AUTO-INJECT CSS TO CONTAIN THE NEW MASSIVE CANVAS IN THE UI ---
const previewStyleFix = document.createElement('style');
previewStyleFix.innerHTML = `
  .lightbox-canvas-box .canvas-container { width: 100% !important; height: auto !important; aspect-ratio: 1075 / 1854; position: relative; }
  .lightbox-canvas-box canvas { width: 100% !important; height: 100% !important; position: absolute !important; top: 0; left: 0; }
`;
document.head.appendChild(previewStyleFix);

// 1. GLOBAL APP STATE INITIALIZATION 
const canvas = new fabric.Canvas('stickerCanvas', { width: 390, height: 450, backgroundColor: 'transparent', preserveObjectStacking: true, allowTouchScrolling: true });
// EXACT PRINTER ASPECT RATIO (Target 2150x3708 / 2 = 1075x1854)
const previewCanvas = new fabric.Canvas('previewCanvas', { width: 1075, height: 1854, selection: false });
const CX = 195; 
const CY = 225; 

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

window.togglePreview = function() {
  const box = document.getElementById('previewLightbox');
  if (box.style.display === 'none') {
    const activeObjects = canvas.getObjects().filter(o => o.rigPart); if (activeObjects.length === 0) return;
    canvas.discardActiveObject(); window.globalSelectedName = document.getElementById('stickerName').value.trim();
    let minX = 9999, minY = 9999, maxX = -9999, maxY = -9999;
    activeObjects.forEach(o => { const b = o.getBoundingRect(); minX = Math.min(minX, b.left); minY = Math.min(minY, b.top); maxX = Math.max(maxX, b.left + b.width); maxY = Math.max(maxY, b.top + b.height); });
    const pad = 25; minX = Math.max(0, minX - pad); minY = Math.max(0, minY - pad); maxX = Math.min(canvas.width, maxX + pad); maxY = Math.min(canvas.height, maxY + pad);
    const hull = calculateConvexHullPoints(activeObjects); let shield = null, guide = null;
    if (hull.length >= 3) {
      let cx = 0, cy = 0; hull.forEach(p => { cx += p.x; cy += p.y; }); cx /= hull.length; cy /= hull.length;
      shield = new fabric.Polygon(hull, { fill: '#ffffff', stroke: '#ffffff', strokeWidth: 24, strokeLineJoin: 'round', selectable: false, evented: false });
      
      guide = new fabric.Polygon(hull.map(p => { const dX = p.x - cx, dY = p.y - cy, dist = Math.sqrt(dX*dX+dY*dY); return { x: cx+(dX/dist)*(dist+12), y: cy+(dY/dist)*(dist+12) }; }), { fill: 'transparent', stroke: '#aaaaaa', strokeWidth: 2, strokeDashArray: [5, 4], strokeLineJoin: 'round', selectable: false, evented: false });
      canvas.add(shield, guide); guide.bringToFront(); shield.sendToBack(); canvas.renderAll();
    }
    
    if (guide) guide.set('visible', false); 
    canvas.renderAll();
    window.cleanPrintDataUrl = canvas.toDataURL({ left: minX, top: minY, width: maxX - minX, height: maxY - minY, format: 'png', multiplier: 2 });
    
    if (guide) guide.set('visible', true); 
    canvas.renderAll();
    
    renderPreviewSheetGrid(window.cleanPrintDataUrl, maxX - minX, maxY - minY, previewCanvas); 
    
    box.style.display = 'flex';
  } else { 
      box.style.display = 'none'; 
      const objects = canvas.getObjects();
      for(let i = objects.length -1; i >= 0; i--) {
          if(!objects[i].rigPart) canvas.remove(objects[i]);
      }
      canvas.renderAll(); 
  }
}

function renderPreviewSheetGrid(srcUrl, cWidth, cHeight, previewCanvasObj) {
    previewCanvasObj.clear();
    
    const backgroundUrl = 'https://images.squarespace-cdn.com/content/696e90a0119f252471e6c387/5001f07a-737b-48eb-9cfd-62bcb5b4cf46/PasteConPaper_Background.jpg?content-type=image%2Fjpeg'; 
    
    fabric.Image.fromURL(backgroundUrl, function(bgImg) {
        if (bgImg) { 
            bgImg.set({ 
                originX: 'left', 
                originY: 'top', 
                left: 0, 
                top: 0, 
                scaleX: previewCanvasObj.width / bgImg.width,
                scaleY: previewCanvasObj.height / bgImg.height,
                selectable: false, 
                isHeaderElement: true 
            }); 
            previewCanvasObj.add(bgImg); 
        }

        const headerHeight = 269; 
        const cols = 3;
        const rows = 3;
        const stickerGap = 45;
        const sideMargin = 57;
        const topBuffer = 42;
        const footerBuffer = 212;

        const usableWidth = previewCanvasObj.width - (sideMargin * 2);
        const gridHeight = previewCanvasObj.height - headerHeight - topBuffer - footerBuffer;

        const maxImgW = (usableWidth - (stickerGap * (cols - 1))) / cols;
        const maxImgHConstraint = (gridHeight - (stickerGap * (rows - 1))) / rows;
        
        const scaleFactor = Math.min(maxImgW / cWidth, maxImgHConstraint / cHeight) * 0.95; 
        const finalImgW = cWidth * scaleFactor;
        const finalImgH = cHeight * scaleFactor;
        
        const startX = sideMargin + (usableWidth - (cols * finalImgW + (cols - 1) * stickerGap)) / 2;
        const startY = headerHeight + topBuffer + (gridHeight - (rows * finalImgH + (rows - 1) * stickerGap)) / 2;

        let loadedCount = 0;
        
        for(let r = 0; r < rows; r++) {
            for(let c = 0; c < cols; c++) {
                fabric.Image.fromURL(srcUrl, function(img) {
                    img.set({ 
                        left: startX + c * (finalImgW + stickerGap), 
                        top: startY + r * (finalImgH + stickerGap), 
                        scaleX: scaleFactor / 2, 
                        scaleY: scaleFactor / 2, 
                        originX: 'left', 
                        originY: 'top', 
                        selectable: false 
                    });
                    previewCanvasObj.add(img); 
                    loadedCount++;
                    
                    if(loadedCount === rows * cols && !window.globalBypassNameSticker) {
                        const nameText = new fabric.Text(window.globalSelectedName, { fontSize: 31, fontWeight: 'bold', fontFamily: 'Helvetica Neue, Arial, sans-serif', fill: '#ff9800', originX: 'center', originY: 'center' });
                        const nameBg = new fabric.Rect({ width: window.globalSelectedName ? nameText.width + 62 : 226, height: nameText.height + 34, fill: '#ffffff', stroke: '#ff9800', strokeWidth: 4.2, rx: 28, ry: 28, originX: 'center', originY: 'center' });
                        previewCanvasObj.add(new fabric.Group([nameBg, nameText], { left: previewCanvasObj.width / 2, top: previewCanvasObj.height - 108, originX: 'center', originY: 'center', selectable: false }));
                    }
                    previewCanvasObj.renderAll();
                }, { crossOrigin: 'anonymous' });
            }
        }
    }, { crossOrigin: 'anonymous' });
}

// --- GOOGLE DRIVE WEBHOOK OUTPUT ENGINE ---
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

    const buttons = document.querySelectorAll('.bake-btn');
    buttons.forEach(btn => { btn.innerText = "Sending to Drive..."; btn.style.opacity = 0.7; });

    try {
        await new Promise(resolve => setTimeout(resolve, 800)); 

        previewCanvas.setBackgroundColor(null, () => {});
        previewCanvas.getObjects().forEach(obj => {
            if (obj.isHeaderElement) obj.set('visible', false);
        });
        previewCanvas.renderAll();

        const exportedDataUrl = previewCanvas.toDataURL({ 
            format: 'png', 
            multiplier: 2 
        });

        previewCanvas.setBackgroundColor('#ffffff', () => {});
        previewCanvas.getObjects().forEach(obj => {
            if (obj.isHeaderElement) obj.set('visible', true);
        });
        previewCanvas.renderAll();
        
        // --- GOOGLE DRIVE API UPLOAD LOGIC ---
        
        const googleWebAppUrl = "https://script.google.com/macros/s/AKfycbxSS87PwwMCmthMy4GQLhUH6qm7bsA8kcPaEPWFOcWwrru5pz66HvQX6lmAzM7utEVBxg/exec"; 

        const safeName = rawInput.replace(/[^a-z0-9]/gi, '_').toLowerCase() || 'test_print';
        const fileName = `${safeName}-${Date.now()}.png`;
        
        // THE FIX: We use mode: 'no-cors' so the browser ignores Google's weird redirects
        await fetch(googleWebAppUrl, {
            method: 'POST',
            mode: 'no-cors', // <-- THE MAGIC BULLET
            headers: {
                'Content-Type': 'text/plain'
            },
            body: JSON.stringify({
                filename: fileName,
                image: exportedDataUrl.split(',')[1] 
            })
        });

        // Because of 'no-cors', we can't read Google's response. 
        // If the code reaches this line without crashing, we assume the drop-off was successful!
        alert(`Sent! Check your Google Drive folder.`);
        window.togglePreview();

    } catch (e) {
        console.error("Drive upload failure:", e);
        alert(`Something went wrong saving to Google Drive. Check the console for details.`);
    } finally {
        buttons.forEach(btn => { btn.innerText = 'Send to Kitchen'; btn.style.opacity = 1; });
    }
}

window.abortAndRename = function() { 
    document.getElementById('previewActions').innerHTML = `<button class="clear-btn" onclick="window.togglePreview()">Edit Design</button><button class="bake-btn" onclick="window.sendToKitchen()">Send to Kitchen</button>`; 
    window.togglePreview(); 
    setTimeout(() => document.getElementById('stickerName').focus(), 300); 
}

window.bypassAndPrint = function(bypass) { 
    if (bypass) { window.globalBypassNameSticker = true; } 
    renderPreviewSheetGrid(window.cleanPrintDataUrl, previewCanvas.width, previewCanvas.height, previewCanvas);
    
    setTimeout(() => {
        window.sendToKitchen();
        window.globalBypassNameSticker = false; 
    }, 400);
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

// --- NEW INTRO SCRAMBLE ---
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

// --- MAP EVERYTHING TO WINDOW ---
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

// --- INIT ---
initColorPickers(); renderCarousels(); renderCloset(); playIntroScramble();
I no longer get the error; however, the image does not show up in the folder. Am I missing a step or something?

This is the double-edged sword of the no-cors "magic bullet" we used!

By telling the browser to ignore Google's strict security checks (mode: 'no-cors'), we basically put a blindfold on your website. It drops the package off at Google's door, yells "Delivery!", and drives away. It says "Success!" because it successfully dropped it off, but it couldn't stick around to see if Google actually opened the package.

Because it didn't show up in the folder, Google rejected the package right after it was dropped off. This is almost always caused by one of two things: a missing permission or the file being too heavy.

Here is exactly how we figure out which one it is and fix it:

Fix 1: The "Hidden Permission" Hiccup (Most Likely)
When you pasted the code into Google Apps Script, it included a command to open your Google Drive (DriveApp.getFolderById). However, Google won't actually let the script touch your Drive until you explicitly click an "Allow" button—but webhooks can't pop up permission screens!

How to authorize it:

Go back to your Google Apps Script editor (script.google.com).

At the top of the screen, you will see a dropdown menu that says doPost.

Click the Run button right next to it.

You will get an error at the bottom of the screen (because you didn't actually send it an image)—that is totally fine! 5. What we are looking for is a popup that says "Authorization Required". Click Review Permissions, choose your account, click Advanced, and click Go to project. Allow it to access your Google Drive.

Try sending an image from your Sticker App again!

Fix 2: The "Heavy Package" Test
If the permissions are fine, the issue is that a 300 DPI, 2150x3708 transparent PNG is a massive file (often 5MB to 15MB). Google Apps Script's free tier sometimes rejects POST requests that are too heavy.

Let's test if it's a size limit:

Open your script.js file on GitHub.

Find the export section (around line 431) and change multiplier: 2 to multiplier: 0.5.

Commit the change, wait a minute, do a hard refresh on your app, and hit Send.

Check your Google Drive folder. If a small, pixelated image suddenly appears, we know the script works perfectly, but the 300 DPI file is simply too heavy for Google's free webhook limits!

Fix 3: Check the "Security Tapes" (The Executions Log)
If it still isn't working after doing both of those, Google kept a receipt of exactly why it failed.

Go to your Google Apps Script.

Look at the far-left menu bar and click the Executions icon (it looks like a bulleted list with a little play triangle).

You will see a list of every time your app tried to send an image. Look for one that says Failed.

Click on it, and it will tell you the exact error (e.g., SyntaxError: JSON Parse error or Exception: Exceeded maximum execution time).

Try Fix 1 first (hitting "Run" to trigger the permission screen). That is the culprit 9 times out of 10! Let me know what happens or if you see a specific error in the Executions log.

Hmm, ok, since Google has some strict rules. Is there a different option we can use?

You are absolutely right—Google Apps Script is notoriously strict, and its free-tier webhooks often buckle under the weight of heavy 300-DPI image files. It's a great tool for sending text, but a terrible one for sending high-res manufacturing files.

Let's ditch Google Drive for this testing phase and use the industry standard for this exact problem: Cloudinary.

Cloudinary is a professional media database. Their free tier is massive, and most importantly, they have a feature called "Unsigned Uploads". This allows your frontend JavaScript to beam heavy, high-res images directly into your Cloudinary account without any webhooks, API limits, or CORS security errors. It will give you a beautiful dashboard where you can see every sticker sheet your app generates.

Here is exactly how to set this up in 3 minutes.

Step 1: Set up the Cloudinary Vault
Go to Cloudinary.com and create a free account.

On your main dashboard, look at the top for your Cloud Name (it's usually a random mix of letters/numbers). Copy this down.

On the left menu, click Settings (the gear icon) ➔ Upload.

Scroll down to the Upload presets section and click Add upload preset.

Change the Signing Mode from Signed to Unsigned.

Give the preset a name, like sticker_test.

Click Save at the top right.

Step 2: The New JavaScript Code
Here is your complete, fully updated script.js file.

Look at line 438. You just need to paste in your Cloud Name and the Upload Preset name (sticker_test) that you just created.

JavaScript
// --- AUTO-INJECT CSS TO CONTAIN THE NEW MASSIVE CANVAS IN THE UI ---
const previewStyleFix = document.createElement('style');
previewStyleFix.innerHTML = `
  .lightbox-canvas-box .canvas-container { width: 100% !important; height: auto !important; aspect-ratio: 1075 / 1854; position: relative; }
  .lightbox-canvas-box canvas { width: 100% !important; height: 100% !important; position: absolute !important; top: 0; left: 0; }
`;
document.head.appendChild(previewStyleFix);

// 1. GLOBAL APP STATE INITIALIZATION 
const canvas = new fabric.Canvas('stickerCanvas', { width: 390, height: 450, backgroundColor: 'transparent', preserveObjectStacking: true, allowTouchScrolling: true });
// EXACT PRINTER ASPECT RATIO (Target 2150x3708 / 2 = 1075x1854)
const previewCanvas = new fabric.Canvas('previewCanvas', { width: 1075, height: 1854, selection: false });
const CX = 195; 
const CY = 225; 

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

window.togglePreview = function() {
  const box = document.getElementById('previewLightbox');
  if (box.style.display === 'none') {
    const activeObjects = canvas.getObjects().filter(o => o.rigPart); if (activeObjects.length === 0) return;
    canvas.discardActiveObject(); window.globalSelectedName = document.getElementById('stickerName').value.trim();
    let minX = 9999, minY = 9999, maxX = -9999, maxY = -9999;
    activeObjects.forEach(o => { const b = o.getBoundingRect(); minX = Math.min(minX, b.left); minY = Math.min(minY, b.top); maxX = Math.max(maxX, b.left + b.width); maxY = Math.max(maxY, b.top + b.height); });
    const pad = 25; minX = Math.max(0, minX - pad); minY = Math.max(0, minY - pad); maxX = Math.min(canvas.width, maxX + pad); maxY = Math.min(canvas.height, maxY + pad);
    const hull = calculateConvexHullPoints(activeObjects); let shield = null, guide = null;
    if (hull.length >= 3) {
      let cx = 0, cy = 0; hull.forEach(p => { cx += p.x; cy += p.y; }); cx /= hull.length; cy /= hull.length;
      shield = new fabric.Polygon(hull, { fill: '#ffffff', stroke: '#ffffff', strokeWidth: 24, strokeLineJoin: 'round', selectable: false, evented: false });
      
      guide = new fabric.Polygon(hull.map(p => { const dX = p.x - cx, dY = p.y - cy, dist = Math.sqrt(dX*dX+dY*dY); return { x: cx+(dX/dist)*(dist+12), y: cy+(dY/dist)*(dist+12) }; }), { fill: 'transparent', stroke: '#aaaaaa', strokeWidth: 2, strokeDashArray: [5, 4], strokeLineJoin: 'round', selectable: false, evented: false });
      canvas.add(shield, guide); guide.bringToFront(); shield.sendToBack(); canvas.renderAll();
    }
    
    if (guide) guide.set('visible', false); 
    canvas.renderAll();
    window.cleanPrintDataUrl = canvas.toDataURL({ left: minX, top: minY, width: maxX - minX, height: maxY - minY, format: 'png', multiplier: 2 });
    
    if (guide) guide.set('visible', true); 
    canvas.renderAll();
    
    renderPreviewSheetGrid(window.cleanPrintDataUrl, maxX - minX, maxY - minY, previewCanvas); 
    
    box.style.display = 'flex';
  } else { 
      box.style.display = 'none'; 
      const objects = canvas.getObjects();
      for(let i = objects.length -1; i >= 0; i--) {
          if(!objects[i].rigPart) canvas.remove(objects[i]);
      }
      canvas.renderAll(); 
  }
}

function renderPreviewSheetGrid(srcUrl, cWidth, cHeight, previewCanvasObj) {
    previewCanvasObj.clear();
    
    const backgroundUrl = 'https://images.squarespace-cdn.com/content/696e90a0119f252471e6c387/5001f07a-737b-48eb-9cfd-62bcb5b4cf46/PasteConPaper_Background.jpg?content-type=image%2Fjpeg'; 
    
    fabric.Image.fromURL(backgroundUrl, function(bgImg) {
        if (bgImg) { 
            bgImg.set({ 
                originX: 'left', 
                originY: 'top', 
                left: 0, 
                top: 0, 
                scaleX: previewCanvasObj.width / bgImg.width,
                scaleY: previewCanvasObj.height / bgImg.height,
                selectable: false, 
                isHeaderElement: true 
            }); 
            previewCanvasObj.add(bgImg); 
        }

        const headerHeight = 269; 
        const cols = 3;
        const rows = 3;
        const stickerGap = 45;
        const sideMargin = 57;
        const topBuffer = 42;
        const footerBuffer = 212;

        const usableWidth = previewCanvasObj.width - (sideMargin * 2);
        const gridHeight = previewCanvasObj.height - headerHeight - topBuffer - footerBuffer;

        const maxImgW = (usableWidth - (stickerGap * (cols - 1))) / cols;
        const maxImgHConstraint = (gridHeight - (stickerGap * (rows - 1))) / rows;
        
        const scaleFactor = Math.min(maxImgW / cWidth, maxImgHConstraint / cHeight) * 0.95; 
        const finalImgW = cWidth * scaleFactor;
        const finalImgH = cHeight * scaleFactor;
        
        const startX = sideMargin + (usableWidth - (cols * finalImgW + (cols - 1) * stickerGap)) / 2;
        const startY = headerHeight + topBuffer + (gridHeight - (rows * finalImgH + (rows - 1) * stickerGap)) / 2;

        let loadedCount = 0;
        
        for(let r = 0; r < rows; r++) {
            for(let c = 0; c < cols; c++) {
                fabric.Image.fromURL(srcUrl, function(img) {
                    img.set({ 
                        left: startX + c * (finalImgW + stickerGap), 
                        top: startY + r * (finalImgH + stickerGap), 
                        scaleX: scaleFactor / 2, 
                        scaleY: scaleFactor / 2, 
                        originX: 'left', 
                        originY: 'top', 
                        selectable: false 
                    });
                    previewCanvasObj.add(img); 
                    loadedCount++;
                    
                    if(loadedCount === rows * cols && !window.globalBypassNameSticker) {
                        const nameText = new fabric.Text(window.globalSelectedName, { fontSize: 31, fontWeight: 'bold', fontFamily: 'Helvetica Neue, Arial, sans-serif', fill: '#ff9800', originX: 'center', originY: 'center' });
                        const nameBg = new fabric.Rect({ width: window.globalSelectedName ? nameText.width + 62 : 226, height: nameText.height + 34, fill: '#ffffff', stroke: '#ff9800', strokeWidth: 4.2, rx: 28, ry: 28, originX: 'center', originY: 'center' });
                        previewCanvasObj.add(new fabric.Group([nameBg, nameText], { left: previewCanvasObj.width / 2, top: previewCanvasObj.height - 108, originX: 'center', originY: 'center', selectable: false }));
                    }
                    previewCanvasObj.renderAll();
                }, { crossOrigin: 'anonymous' });
            }
        }
    }, { crossOrigin: 'anonymous' });
}

// --- CLOUDINARY OUTPUT ENGINE ---
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

    const buttons = document.querySelectorAll('.bake-btn');
    buttons.forEach(btn => { btn.innerText = "Sending to Cloud..."; btn.style.opacity = 0.7; });

    try {
        await new Promise(resolve => setTimeout(resolve, 800)); 

        // Hide header elements for clean transparent export
        previewCanvas.setBackgroundColor(null, () => {});
        previewCanvas.getObjects().forEach(obj => {
            if (obj.isHeaderElement) obj.set('visible', false);
        });
        previewCanvas.renderAll();

        // Snapshot the high-res image
        const exportedDataUrl = previewCanvas.toDataURL({ 
            format: 'png', 
            multiplier: 2 
        });

        // Restore header elements to the preview screen
        previewCanvas.setBackgroundColor('#ffffff', () => {});
        previewCanvas.getObjects().forEach(obj => {
            if (obj.isHeaderElement) obj.set('visible', true);
        });
        previewCanvas.renderAll();
        
        // --- CLOUDINARY API UPLOAD LOGIC ---
        // 1. UPDATE THESE TWO VARIABLES:
        const cloudName = "u05fp6zm"; 
        const uploadPreset = "sticker_test"; 

        // 2. Build the payload
        const formData = new FormData();
        formData.append("file", exportedDataUrl);
        formData.append("upload_preset", uploadPreset);

        // 3. Beam it to Cloudinary
        const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
            method: 'POST',
            body: formData
        });

        const result = await response.json();

        if (response.ok) {
            // SUCCESS! 
            console.log("Image safely stored at:", result.secure_url);
            alert(`Success! Check your Cloudinary Dashboard.`);
        } else {
            throw new Error(result.error ? result.error.message : "Cloudinary rejected the upload.");
        }

        window.togglePreview();

    } catch (e) {
        console.error("Cloudinary upload failure:", e);
        alert(`Upload Failed: ${e.message}`);
    } finally {
        buttons.forEach(btn => { btn.innerText = 'Send to Kitchen'; btn.style.opacity = 1; });
    }
}

window.abortAndRename = function() { 
    document.getElementById('previewActions').innerHTML = `<button class="clear-btn" onclick="window.togglePreview()">Edit Design</button><button class="bake-btn" onclick="window.sendToKitchen()">Send to Kitchen</button>`; 
    window.togglePreview(); 
    setTimeout(() => document.getElementById('stickerName').focus(), 300); 
}

window.bypassAndPrint = function(bypass) { 
    if (bypass) { window.globalBypassNameSticker = true; } 
    renderPreviewSheetGrid(window.cleanPrintDataUrl, previewCanvas.width, previewCanvas.height, previewCanvas);
    
    setTimeout(() => {
        window.sendToKitchen();
        window.globalBypassNameSticker = false; 
    }, 400);
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

// --- NEW INTRO SCRAMBLE ---
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

// --- MAP EVERYTHING TO WINDOW ---
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

// --- INIT ---
initColorPickers(); renderCarousels(); renderCloset(); playIntroScramble();
Your Rot'n Mango chats aren’t used to improve our models. Gemini is AI and can make mistakes. Your privacy & GeminiOpens in a new window





