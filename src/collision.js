/**
 * Funzioni di utilità per collisioni
 * @module collision
 */

/**
 * Gestisce le collisioni tra proiettili e nemici
 * @param {Array<{x: number, y: number, width: number, height: number}>} bullets - Array dei proiettili
 * @param {Array<{x: number, y: number, width: number, height: number}>} enemies - Array dei nemici
 * @param {Function} onHit - Funzione da chiamare per aggiungere punteggio ed effetti (score, x, y)
 */
export function checkBulletEnemyCollisions(bullets, enemies, onHit) {
  for (let i = enemies.length - 1; i >= 0; i--) {
    const enemy = enemies[i];
    for (let j = bullets.length - 1; j >= 0; j--) {
      const b = bullets[j];
      if (
        b.x < enemy.x + enemy.width &&
        b.x + b.width > enemy.x &&
        b.y < enemy.y + enemy.height &&
        b.y + b.height > enemy.y
      ) {
        const hitX = enemy.x + enemy.width/2;
        const hitY = enemy.y + enemy.height/2;
        enemies.splice(i, 1);
        bullets.splice(j, 1);
        onHit(100, hitX, hitY);
        break;
      }
    }
  }
}
