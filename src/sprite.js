// sprite.js
// Utility per gestire animazioni sprite sheet orizzontali

/**
 * Crea un oggetto animazione per uno sprite sheet orizzontale
 * @param {object} params
 * @param {HTMLImageElement} params.image - Sprite sheet
 * @param {number} params.frameWidth - Larghezza di un frame
 * @param {number} params.frameHeight - Altezza di un frame
 * @param {number} params.frameCount - Numero di frame orizzontali
 * @param {number} params.fps - Frame per secondo
 * @returns {object} Oggetto animazione
 */
export function createSpriteAnimation({ image, frameWidth, frameHeight, frameCount, fps }) {
  return {
    image,
    frameWidth,
    frameHeight,
    frameCount,
    fps,
    frame: 0,
    timer: 0,
    update(delta) {
      this.timer += delta;
      const frameDuration = 1000 / this.fps;
      while (this.timer > frameDuration) {
        this.frame = (this.frame + 1) % this.frameCount;
        this.timer -= frameDuration;
      }
    },
    draw(ctx, x, y, w, h) {
      ctx.drawImage(
        this.image,
        this.frame * this.frameWidth, 0, // x, y nel sheet
        this.frameWidth, this.frameHeight,
        x, y, w, h
      );
    }
  };
}
