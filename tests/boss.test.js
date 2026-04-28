import { bosses, spawnBoss, updateBosses, resetBosses } from '../src/boss.js';

describe('boss.js', () => {
  beforeEach(() => {
    resetBosses();
  });

  it('genera un boss al centro del canvas', () => {
    spawnBoss(400);
    expect(bosses.length).toBe(1);
    expect(bosses[0].x).toBe(400 / 2 - 80 / 2);
    expect(bosses[0].y).toBe(-80);
    expect(bosses[0].hp).toBe(30);
  });

  it('aggiorna la posizione del boss e inverte direzione ai bordi', () => {
    spawnBoss(400);
    const boss = bosses[0];
    boss.x = 0;
    boss.direction = -1;
    updateBosses(400, 600);
    expect(boss.direction).toBe(1);
    boss.x = 400 - boss.width;
    boss.direction = 1;
    updateBosses(400, 600);
    expect(boss.direction).toBe(-1);
  });

  it('resetBosses svuota l’array', () => {
    spawnBoss(400);
    resetBosses();
    expect(bosses.length).toBe(0);
  });
});
