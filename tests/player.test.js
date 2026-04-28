import { player, updatePlayer } from '../src/player.js';

describe('player.js', () => {
  beforeEach(() => {
    player.x = 100;
    player.y = 100;
    player.width = 40;
    player.height = 40;
    player.speed = 5;
    player.moving = { left: false, right: false, up: false, down: false };
  });

  it('aggiorna la posizione a sinistra', () => {
    player.moving.left = true;
    updatePlayer(500, 500);
    expect(player.x).toBe(95);
  });

  it('aggiorna la posizione a destra', () => {
    player.moving.right = true;
    updatePlayer(500, 500);
    expect(player.x).toBe(105);
  });

  it('aggiorna la posizione in alto', () => {
    player.moving.up = true;
    updatePlayer(500, 500);
    expect(player.y).toBe(95);
  });

  it('aggiorna la posizione in basso', () => {
    player.moving.down = true;
    updatePlayer(500, 500);
    expect(player.y).toBe(105);
  });

  it('non esce dai bordi del canvas', () => {
    player.x = 0;
    player.moving.left = true;
    updatePlayer(500, 500);
    expect(player.x).toBe(0);
    player.x = 480;
    player.moving = { left: false, right: true, up: false, down: false };
    updatePlayer(500, 500);
    expect(player.x).toBe(460);
  });
});
