/**
 * Funzioni di utilità per collisioni
 * @module collision
 */

/**
 * Gestisce le collisioni tra proiettili e nemici
 * @param {Array<{x: number, y: number, width: number, height: number}>} bullets - Array dei proiettili
 * @param {Array<{x: number, y: number, width: number, height: number}>} enemies - Array dei nemici
 * @param {Function} addScore - Funzione da chiamare per aggiungere punteggio
 */
export function checkBulletEnemyCollisions(bullets, enemies, addScore) {
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
        enemies.splice(i, 1);
        bullets.splice(j, 1);
        addScore(100);
        break;
      }
    }
  }
}
