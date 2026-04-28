import { gameState, resetGameStats, loseLife } from '../src/hud.js';

describe('hud.js', () => {
  beforeEach(() => {
    resetGameStats();
  });

  it('resetGameStats imposta vite e punteggio ai valori iniziali', () => {
    gameState.score = 1000;
    gameState.lives = 1;
    resetGameStats();
    expect(gameState.score).toBe(0);
    expect(gameState.lives).toBe(gameState.maxLives);
  });

  it('loseLife decrementa le vite', () => {
    const viteIniziali = gameState.lives;
    loseLife();
    expect(gameState.lives).toBe(viteIniziali - 1);
  });
});
