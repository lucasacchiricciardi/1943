// Gestione nemici base
export const enemies = [];
export const enemyWidth = 36;
export const enemyHeight = 36;
const enemyColor = '#e63946';
const enemySpeed = 2.5;
const enemySpawnDelay = 1200; // ms
let enemySpawnTimer;

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

export function drawEnemies(ctx) {
  ctx.save();
  ctx.fillStyle = enemyColor;
  enemies.forEach(e => {
    ctx.fillRect(e.x, e.y, e.width, e.height);
  });
  ctx.restore();
}

export function startEnemySpawning(canvasWidth) {
  if (enemySpawnTimer) clearInterval(enemySpawnTimer);
  enemySpawnTimer = setInterval(() => spawnEnemy(canvasWidth), enemySpawnDelay);
}
export function stopEnemySpawning() {
  if (enemySpawnTimer) clearInterval(enemySpawnTimer);
}
export function resetEnemies() {
  enemies.length = 0;
}
