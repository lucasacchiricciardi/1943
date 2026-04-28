/**
 * Gestione nemici base
 * @module enemies
 */

/**
 * Array dei nemici attivi
 * @type {Array<{x: number, y: number, width: number, height: number, alive: boolean}>}
 */
export const enemies = [];
/** Larghezza di un nemico */
export const enemyWidth = 36;
/** Altezza di un nemico */
export const enemyHeight = 36;
const enemyColor = '#e63946';
const enemySpeed = 2.5;
const enemySpawnDelay = 1200; // ms
let enemySpawnTimer;

/**
 * Genera un nuovo nemico in posizione casuale
 * @param {number} canvasWidth - Larghezza del canvas
 */
export function spawnEnemy(canvasWidth) {
  const x = Math.random() * (canvasWidth - enemyWidth);
  enemies.push({
    x,
    y: -enemyHeight,
    width: enemyWidth,
    height: enemyHeight,
    alive: true
  });
}

/**
 * Aggiorna la posizione dei nemici e gestisce le collisioni con il giocatore e l'uscita dal canvas
 * @param {number} canvasHeight - Altezza del canvas
 * @param {{x: number, y: number, width: number, height: number}} player - Il giocatore
 * @param {Function} loseLife - Funzione da chiamare quando il giocatore perde una vita
 */
export function updateEnemies(canvasHeight, player, loseLife) {
  for (let i = enemies.length - 1; i >= 0; i--) {
    const enemy = enemies[i];
    enemy.y += enemySpeed;
    // Collisione con il giocatore
    if (
      enemy.x < player.x + player.width &&
      enemy.x + enemy.width > player.x &&
      enemy.y < player.y + player.height &&
      enemy.y + enemy.height > player.y
    ) {
      enemies.splice(i, 1);
      loseLife();
      continue;
    }
    if (enemy.y > canvasHeight) {
      enemies.splice(i, 1);
      loseLife();
    }
  }
}

/**
 * Disegna i nemici sul canvas
 * @param {CanvasRenderingContext2D} ctx - Il contesto canvas su cui disegnare
 */
export function drawEnemies(ctx) {
  ctx.save();
  ctx.fillStyle = enemyColor;
  enemies.forEach(e => {
    ctx.fillRect(e.x, e.y, e.width, e.height);
  });
  ctx.restore();
}

/**
 * Avvia la generazione periodica dei nemici
 * @param {number} canvasWidth - Larghezza del canvas
 */
export function startEnemySpawning(canvasWidth) {
  if (enemySpawnTimer) clearInterval(enemySpawnTimer);
  enemySpawnTimer = setInterval(() => spawnEnemy(canvasWidth), enemySpawnDelay);
}
/**
 * Ferma la generazione dei nemici
 */
export function stopEnemySpawning() {
  if (enemySpawnTimer) clearInterval(enemySpawnTimer);
}
/**
 * Svuota l'array dei nemici
 */
export function resetEnemies() {
  enemies.length = 0;
}
