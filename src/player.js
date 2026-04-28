/**
 * Parametri e funzioni per il giocatore
 * @module player
 */

/**
 * Oggetto che rappresenta il giocatore
 * @type {{x: number, y: number, width: number, height: number, speed: number, color: string, moving: {left: boolean, right: boolean, up: boolean, down: boolean}}}
 */
export const player = {
  x: 220,
  y: 560,
  width: 40,
  height: 40,
  speed: 5,
  color: '#ffe066',
  moving: { left: false, right: false, up: false, down: false }
};

/**
 * Disegna il giocatore sul canvas
 * @param {CanvasRenderingContext2D} ctx - Il contesto canvas su cui disegnare
 */
export function drawPlayer(ctx) {
  ctx.save();
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.width, player.height);
  ctx.restore();
}

/**
 * Aggiorna la posizione del giocatore in base all'input e ai limiti del canvas
 * @param {number} canvasWidth - Larghezza del canvas
 * @param {number} canvasHeight - Altezza del canvas
 */
export function updatePlayer(canvasWidth, canvasHeight) {
  if (player.moving.left) player.x -= player.speed;
  if (player.moving.right) player.x += player.speed;
  if (player.moving.up) player.y -= player.speed;
  if (player.moving.down) player.y += player.speed;
  // Limiti bordo canvas
  player.x = Math.max(0, Math.min(canvasWidth - player.width, player.x));
  player.y = Math.max(0, Math.min(canvasHeight - player.height, player.y));
}

/**
 * Imposta i listener per il controllo del giocatore tramite tastiera
 */
export function setupPlayerControls() {
  window.addEventListener('keydown', (e) => {
    switch (e.key) {
      case 'ArrowLeft':
      case 'a':
        player.moving.left = true;
        break;
      case 'ArrowRight':
      case 'd':
        player.moving.right = true;
        break;
      case 'ArrowUp':
      case 'w':
        player.moving.up = true;
        break;
      case 'ArrowDown':
      case 's':
        player.moving.down = true;
        break;
    }
  });
  window.addEventListener('keyup', (e) => {
    switch (e.key) {
      case 'ArrowLeft':
      case 'a':
        player.moving.left = false;
        break;
      case 'ArrowRight':
      case 'd':
        player.moving.right = false;
        break;
      case 'ArrowUp':
      case 'w':
        player.moving.up = false;
        break;
      case 'ArrowDown':
      case 's':
        player.moving.down = false;
        break;
    }
  });
}
