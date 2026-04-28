import { bullets, shoot, updateBullets } from '../src/bullets.js';

describe('bullets.js', () => {
  beforeEach(() => {
    bullets.length = 0;
  });

  it('aggiunge un proiettile quando si spara', () => {
    const player = { x: 50, y: 100, width: 40, height: 40 };
    shoot(player);
    expect(bullets.length).toBe(1);
    expect(bullets[0].x).toBeCloseTo(50 + 20 - 3); // centro player - metà bulletWidth
    expect(bullets[0].y).toBe(100 - 16);
  });

  it('rimuove i proiettili fuori dal canvas', () => {
    bullets.push({ x: 10, y: -20, width: 6, height: 16 });
    updateBullets();
    expect(bullets.length).toBe(0);
  });
});
