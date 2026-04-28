import { checkBulletEnemyCollisions } from '../src/collision.js';
import { jest } from '@jest/globals';

describe('collision.js', () => {
  it('rimuove nemico e proiettile se collidono e aggiunge punteggio', () => {
    const bullets = [{ x: 10, y: 10, width: 6, height: 16 }];
    const enemies = [{ x: 10, y: 10, width: 36, height: 36 }];
    const addScore = jest.fn();
    checkBulletEnemyCollisions(bullets, enemies, addScore);
    expect(bullets.length).toBe(0);
    expect(enemies.length).toBe(0);
    expect(addScore).toHaveBeenCalledWith(100);
  });

  it('non rimuove nulla se non c’è collisione', () => {
    const bullets = [{ x: 100, y: 100, width: 6, height: 16 }];
    const enemies = [{ x: 10, y: 10, width: 36, height: 36 }];
    const addScore = jest.fn();
    checkBulletEnemyCollisions(bullets, enemies, addScore);
    expect(bullets.length).toBe(1);
    expect(enemies.length).toBe(1);
    expect(addScore).not.toHaveBeenCalled();
  });
});
