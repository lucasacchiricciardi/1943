/**
 * Modulo boss base
 * @module boss
 */

/**
 * Array dei boss attivi
 * @type {Array<{x: number, y: number, width: number, height: number, hp: number, direction: number}>}
 */
export const bosses = [];
const bossColor = '#8e44ad';
const bossWidth = 80;
const bossHeight = 80;
const bossSpeed = 1.2;

/**
 * Genera un boss al centro del canvas
 * @param {number} canvasWidth - Larghezza del canvas
 */
export function spawnBoss(canvasWidth) {
  bosses.push({
    x: canvasWidth / 2 - bossWidth / 2,
    y: -bossHeight,
    width: bossWidth,
    height: bossHeight,
    hp: 30,
    direction: 1 // 1: destra, -1: sinistra
  });
}

/**
 * Aggiorna la posizione dei boss e gestisce i limiti del canvas
 * @param {number} canvasWidth - Larghezza del canvas
 * @param {number} canvasHeight - Altezza del canvas
 */
export function updateBosses(canvasWidth, canvasHeight) {
  bosses.forEach(boss => {
    boss.y += bossSpeed;
    boss.x += boss.direction * 2;
    if (boss.x <= 0 || boss.x + boss.width >= canvasWidth) boss.direction *= -1;
    if (boss.y > canvasHeight) boss.y = canvasHeight - boss.height;
  });
}

/**
 * Disegna i boss sul canvas
 * @param {CanvasRenderingContext2D} ctx - Il contesto canvas su cui disegnare
 */
export function drawBosses(ctx) {
  ctx.save();
  ctx.fillStyle = bossColor;
  bosses.forEach(boss => {
    ctx.fillRect(boss.x, boss.y, boss.width, boss.height);
  });
  ctx.restore();
}

/**
 * Svuota l'array dei boss
 */
export function resetBosses() {
  bosses.length = 0;
}
