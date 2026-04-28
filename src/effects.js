// effects.js
// Gestione effetti visivi: esplosioni, colpi a segno, raccolta power-up
// Tutti gli effetti sono temporanei e vengono gestiti tramite array

/**
 * @typedef {Object} Effect
 * @property {string} type - Tipo di effetto ('explosion', 'hit', 'powerup')
 * @property {number} x - Coordinata x
 * @property {number} y - Coordinata y
 * @property {number} duration - Durata totale in ms
 * @property {number} elapsed - Tempo trascorso in ms
 */

/**
 * Array degli effetti attivi
 * @type {Effect[]}
 */
export const effects = [];

/**
 * Aggiunge un effetto visivo
 * @param {'explosion'|'hit'|'powerup'} type
 * @param {number} x
 * @param {number} y
 * @param {number} [duration=400]
 */
export function addEffect(type, x, y, duration = 400) {
  effects.push({ type, x, y, duration, elapsed: 0 });
}

/**
 * Aggiorna e rimuove gli effetti scaduti
 * @param {number} delta - ms trascorsi dall'ultimo frame
 */
export function updateEffects(delta) {
  for (let i = effects.length - 1; i >= 0; i--) {
    effects[i].elapsed += delta;
    if (effects[i].elapsed > effects[i].duration) effects.splice(i, 1);
  }
}

import { createSpriteAnimation } from './sprite.js';

// --- ANIMAZIONE ESPLOSIONE ---
// Scelta: 8 frame orizzontali, 176x176 px, 16 fps, solo prima riga.
let explosionAnim;
export function setExplosionAnim(assets) {
  explosionAnim = createSpriteAnimation({
    image: assets.explosion,
    frameWidth: 176,
    frameHeight: 176,
    frameCount: 8,
    fps: 16
  });
}

/**
 * Disegna tutti gli effetti attivi
 * @param {CanvasRenderingContext2D} ctx
 * @param {object} assets
 */
export function drawEffects(ctx, assets, delta = 16) {
  effects.forEach(e => {
    let sprite;
    if (e.type === 'explosion') {
      if (explosionAnim) {
        explosionAnim.update(delta);
        explosionAnim.draw(ctx, e.x - 88, e.y - 88, 176, 176);
        return;
      }
      sprite = assets.explosion;
    } else if (e.type === 'hit') sprite = assets.hitFlash;
    else if (e.type === 'powerup') sprite = assets.powerupCollect;
    if (sprite) {
      ctx.save();
      ctx.globalAlpha = 1 - (e.elapsed / e.duration);
      ctx.drawImage(sprite, e.x - 24, e.y - 24, 48, 48);
      ctx.restore();
    }
  });
}
