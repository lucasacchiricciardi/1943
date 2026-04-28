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

/**
 * Disegna i power-up sul canvas usando sprite PNG
 * @param {CanvasRenderingContext2D} ctx - Il contesto canvas su cui disegnare
 * @param {object} assets - Oggetto asset loader centralizzato
 */
export function drawPowerUps(ctx, assets) {
  ctx.save();
  powerUps.forEach(p => {
    let sprite;
    if (p.type === 'fire') sprite = assets.powerupSet;
    else if (p.type === 'heal') sprite = assets.powerupShield;
    else if (p.type === 'bomb') sprite = assets.powerupCollect;
    else sprite = assets.powerupSet;
    ctx.drawImage(sprite, p.x - powerUpSize/2, p.y - powerUpSize/2, powerUpSize, powerUpSize);
  });
  ctx.restore();
}

export function resetPowerUps() {
  powerUps.length = 0;
}
