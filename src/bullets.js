/**
 * Gestione proiettili del giocatore
 * @module bullets
 */

/**
 * Array dei proiettili attivi
 * @type {Array<{x: number, y: number, width: number, height: number}>}
 */
export const bullets = [];
/** Velocità dei proiettili */
export const bulletSpeed = 8;
/** Larghezza di un proiettile */
const bulletWidth = 6;
/** Altezza di un proiettile */
const bulletHeight = 16;
/** Colore dei proiettili */
const bulletColor = '#fff';
let canShoot = true;
/** Ritardo tra uno sparo e l'altro (ms) */
const shootDelay = 180; // ms

/**
 * Spara un proiettile dal giocatore
 * @param {{x: number, y: number, width: number, height: number}} player - Il giocatore
 */
export function shoot(player) {
  if (!canShoot) return;
  bullets.push({
    x: player.x + player.width / 2 - bulletWidth / 2,
    y: player.y - bulletHeight,
    width: bulletWidth,
    height: bulletHeight
  });
  canShoot = false;
  setTimeout(() => { canShoot = true; }, shootDelay);
}

/**
 * Aggiorna la posizione dei proiettili e rimuove quelli fuori dal canvas
 */
export function updateBullets() {
  for (let i = bullets.length - 1; i >= 0; i--) {
    bullets[i].y -= bulletSpeed;
    if (bullets[i].y + bullets[i].height < 0) {
      bullets.splice(i, 1);
    }
  }
}

/**
 * Disegna i proiettili sul canvas usando sprite PNG
 * @param {CanvasRenderingContext2D} ctx - Il contesto canvas su cui disegnare
 * @param {object} assets - Oggetto asset loader centralizzato
 * @param {boolean} isEnemy - Se true, usa sprite proiettile nemico
 */
export function drawBullets(ctx, assets, isEnemy = false) {
  ctx.save();
  bullets.forEach(b => {
    const sprite = isEnemy ? assets.bulletEnemy : assets.bulletPlayer;
    ctx.drawImage(sprite, b.x, b.y, b.width, b.height);
  });
  ctx.restore();
}

/**
 * Imposta il controllo per sparare tramite la barra spaziatrice
 * @param {{x: number, y: number, width: number, height: number}} player - Il giocatore
 */
export function setupBulletControls(player) {
  window.addEventListener('keydown', (e) => {
    if (e.code === 'Space') shoot(player);
  });
}
