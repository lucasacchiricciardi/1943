/**
 * HUD e stato di gioco centralizzato
 * @module hud
 */

/**
 * Stato di gioco condiviso
 * @type {{score: number, lives: number, maxLives: number}}
 */
export const gameState = {
  score: 0,
  lives: 3,
  maxLives: 3
};

/**
 * Disegna l'HUD (punteggio e vite) sul canvas
 * @param {CanvasRenderingContext2D} ctx - Il contesto canvas su cui disegnare
 * @param {number} canvasWidth - Larghezza del canvas
 */
/**
 * Disegna l'HUD (punteggio e vite) sul canvas usando sprite PNG
 * @param {CanvasRenderingContext2D} ctx - Il contesto canvas su cui disegnare
 * @param {number} canvasWidth - Larghezza del canvas
 * @param {object} assets - Oggetto asset loader centralizzato
 */
export function drawHUD(ctx, canvasWidth, assets) {
  ctx.save();
  ctx.font = '20px Segoe UI, Arial, sans-serif';
  ctx.fillStyle = '#fff';
  ctx.fillText(`Punteggio: ${gameState.score}`, 16, 32);
  // Icona vite (usa HUD set, posizione fissa, dimensione 28x28)
  const iconSize = 28;
  for (let i = 0; i < gameState.lives; i++) {
    ctx.drawImage(assets.hudSet, canvasWidth - 110 + i * (iconSize + 4), 8, iconSize, iconSize);
  }
  ctx.restore();
}

/**
 * Reimposta punteggio e vite al valore iniziale
 */
export function resetGameStats() {
  gameState.score = 0;
  gameState.lives = gameState.maxLives;
}

/**
 * Decrementa il numero di vite del giocatore
 */
export function loseLife() {
  gameState.lives--;
}
