/**
 * Modulo livelli base
 * @module levels
 */

/**
 * Array dei livelli di gioco
 * @type {Array<{name: string, enemySpawnDelay: number, boss: boolean, bossHp: number}>}
 */
export const levels = [
  {
    name: 'Livello 1',
    enemySpawnDelay: 1200,
    boss: true,
    bossHp: 30
  },
  {
    name: 'Livello 2',
    enemySpawnDelay: 900,
    boss: true,
    bossHp: 50
  }
];

/** Indice del livello corrente */
export let currentLevel = 0;

/**
 * Passa al livello successivo
 * @returns {boolean} true se esiste un nuovo livello, false se terminati
 */
export function nextLevel() {
  if (currentLevel < levels.length - 1) {
    currentLevel++;
    return true;
  }
  return false;
}

/**
 * Reimposta il livello corrente al primo
 */
export function resetLevels() {
  currentLevel = 0;
}

/**
 * Restituisce la configurazione del livello corrente
 * @returns {{name: string, enemySpawnDelay: number, boss: boolean, bossHp: number}}
 */
export function getLevelConfig() {
  return levels[currentLevel];
}
