// assets.js
// Caricamento centralizzato di tutti gli asset grafici PNG per Clone 1943

export const assetPaths = {
  playerBlue: 'assets/img/Aereo Giocatore - Base Blu.png',
  playerRed: 'assets/img/Aereo Giocatore - Variante Rossa.png',
  playerYellow: 'assets/img/Aereo Giocatore - Variante Gialla.png',
  playerGreen: 'assets/img/Aereo Giocatore - Variante Verde.png',
  playerExplosion: 'assets/img/Aereo Giocatore - Esplosione.png',
  enemy1: 'assets/img/Nemico 1 (Ricognitore Piccolo).png',
  enemy2: 'assets/img/Nemico 2 (Bombardiere Medio).png',
  enemy3: 'assets/img/Nemico 3 (Intercettore Veloce).png',
  boss: 'assets/img/Boss.png',
  bulletPlayer: 'assets/img/Proiettile Giocatore.png',
  bulletEnemy: 'assets/img/Proiettile Nemico.png',
  powerupShield: 'assets/img/Icona Power-up Scudo.png',
  powerupSet: 'assets/img/Set di proiettili e icone power-up.png',
  hudSet: 'assets/img/Set Icone HUD.png',
  bossBar: 'assets/img/Barra Energia Boss.png',
  button: 'assets/img/Pulsante UI Generico.png',
  explosion: 'assets/img/Esplosione Generica.png',
  powerupCollect: 'assets/img/Effetto Raccolta Power-up.png',
  hitFlash: 'assets/img/Flash Colpo a Segno.png',
  bg1: 'assets/img/Sfondo 1 - Oceano e Isole.png',
  bg2: 'assets/img/Sfondo 2 - Base Nemica High-Tech.png'
};

export const assets = {};

export function loadAssets(callback) {
  let loaded = 0;
  const keys = Object.keys(assetPaths);
  keys.forEach(key => {
    const img = new window.Image();
    img.src = assetPaths[key];
    img.onload = () => {
      loaded++;
      if (loaded === keys.length && typeof callback === 'function') callback();
    };
    assets[key] = img;
  });
}
