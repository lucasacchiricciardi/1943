// Modulo power-up
export const powerUps = [];
const powerUpTypes = ['fire', 'heal', 'bomb'];
const powerUpColors = { fire: '#ff9800', heal: '#4caf50', bomb: '#00bcd4' };
const powerUpSize = 24;
const powerUpSpeed = 2;

export function spawnPowerUp(x, y) {
  // Tipo casuale
  const type = powerUpTypes[Math.floor(Math.random() * powerUpTypes.length)];
  powerUps.push({ x, y, type });
}

export function updatePowerUps(canvasHeight) {
  for (let i = powerUps.length - 1; i >= 0; i--) {
    powerUps[i].y += powerUpSpeed;
    if (powerUps[i].y > canvasHeight) {
      powerUps.splice(i, 1);
    }
  }
}

export function drawPowerUps(ctx) {
  ctx.save();
  powerUps.forEach(p => {
    ctx.fillStyle = powerUpColors[p.type];
    ctx.beginPath();
    ctx.arc(p.x, p.y, powerUpSize / 2, 0, 2 * Math.PI);
    ctx.fill();
  });
  ctx.restore();
}

export function resetPowerUps() {
  powerUps.length = 0;
}
