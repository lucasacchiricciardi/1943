import { enemies, spawnEnemy, updateEnemies, resetEnemies, enemyWidth, enemyHeight } from '../src/enemies.js';
import { jest } from '@jest/globals';

describe('enemies.js', () => {
  beforeEach(() => {
    resetEnemies();
  });

  it('genera un nemico in posizione casuale', () => {
    spawnEnemy(400);
    expect(enemies.length).toBe(1);
    expect(enemies[0].x).toBeGreaterThanOrEqual(0);
    expect(enemies[0].x).toBeLessThanOrEqual(400 - enemyWidth);
    expect(enemies[0].y).toBe(-enemyHeight);
  });

  it('rimuove nemico e chiama loseLife se esce dal canvas', () => {
    enemies.push({ x: 10, y: 500, width: enemyWidth, height: enemyHeight, alive: true });
    const loseLife = jest.fn();
    updateEnemies(400, { x: 0, y: 0, width: 10, height: 10 }, loseLife);
    expect(enemies.length).toBe(0);
    expect(loseLife).toHaveBeenCalled();
  });

  it('rimuove nemico e chiama loseLife se collide con player', () => {
    enemies.push({ x: 10, y: 10, width: enemyWidth, height: enemyHeight, alive: true });
    const player = { x: 10, y: 10, width: enemyWidth, height: enemyHeight };
    const loseLife = jest.fn();
    updateEnemies(400, player, loseLife);
    expect(enemies.length).toBe(0);
    expect(loseLife).toHaveBeenCalled();
  });
});
