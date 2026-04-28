// Gestione proiettili del giocatore
export const bullets = [];
export const bulletSpeed = 8;
const bulletWidth = 6;
const bulletHeight = 16;
const bulletColor = '#fff';
let canShoot = true;
const shootDelay = 180; // ms

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

export function updateBullets() {
  for (let i = bullets.length - 1; i >= 0; i--) {
    bullets[i].y -= bulletSpeed;
    if (bullets[i].y + bullets[i].height < 0) {
      bullets.splice(i, 1);
    }
  }
}

export function drawBullets(ctx) {
  ctx.save();
  ctx.fillStyle = bulletColor;
  bullets.forEach(b => {
    ctx.fillRect(b.x, b.y, b.width, b.height);
  });
  ctx.restore();
}

export function setupBulletControls(player) {
  window.addEventListener('keydown', (e) => {
    if (e.code === 'Space') shoot(player);
  });
}
