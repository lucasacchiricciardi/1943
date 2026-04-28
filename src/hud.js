// HUD e stato di gioco centralizzato
export const gameState = {
  score: 0,
  lives: 3,
  maxLives: 3
};

export function drawHUD(ctx, canvasWidth) {
  ctx.save();
  ctx.font = '20px Segoe UI, Arial, sans-serif';
  ctx.fillStyle = '#fff';
  ctx.fillText(`Punteggio: ${gameState.score}`, 16, 32);
  ctx.fillText(`Vite: ${gameState.lives}`, canvasWidth - 110, 32);
  ctx.restore();
}

export function resetGameStats() {
  gameState.score = 0;
  gameState.lives = gameState.maxLives;
}

export function loseLife() {
  gameState.lives--;
}
