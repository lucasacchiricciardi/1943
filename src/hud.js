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
export function drawHUD(ctx, canvasWidth) {
  ctx.save();
  ctx.font = '20px Segoe UI, Arial, sans-serif';
  ctx.fillStyle = '#fff';
  ctx.fillText(`Punteggio: ${gameState.score}`, 16, 32);
  ctx.fillText(`Vite: ${gameState.lives}`, canvasWidth - 110, 32);
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
