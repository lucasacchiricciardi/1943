import { bosses, spawnBoss, updateBosses, drawBosses, resetBosses } from './boss.js';
import { levels, currentLevel, nextLevel, resetLevels, getLevelConfig } from './levels.js';
import { powerUps, spawnPowerUp, updatePowerUps, drawPowerUps, resetPowerUps } from './powerups.js';
import { player, updatePlayer, setupPlayerControls } from './player.js';
import { bullets, drawBullets, updateBullets, setupBulletControls } from './bullets.js';
import { enemies, drawEnemies, updateEnemies, startEnemySpawning, stopEnemySpawning, resetEnemies } from './enemies.js';
import { checkBulletEnemyCollisions } from './collision.js';
import { gameState, drawHUD, resetGameStats, loseLife } from './hud.js';
import { assets, loadAssets } from './assets.js';
import { effects, addEffect, updateEffects, drawEffects, setExplosionAnim } from './effects.js';
import { createSpriteAnimation } from './sprite.js';

// Setup controlli e caricamento asset
let assetsReady = false;
let playerAnim;
let enemyAnims = [];
let bossAnim;
loadAssets(() => {
		setExplosionAnim(assets);
	// --- ANIMAZIONE PLAYER ---
	// Scelta: 8 frame orizzontali, 40x40 px, 8 fps. Idle/movimento, nessuna animazione verticale.
	playerAnim = createSpriteAnimation({
		image: assets.playerBlue,
		frameWidth: 40,
		frameHeight: 40,
		frameCount: 8,
		fps: 8
	});
	// --- ANIMAZIONE NEMICI ---
	// Scelta: 8 frame orizzontali, 36x36 px, 8 fps, solo prima riga. Un'animazione per ogni tipo di nemico.
	enemyAnims = [
		createSpriteAnimation({ image: assets.enemy1, frameWidth: 36, frameHeight: 36, frameCount: 8, fps: 8 }),
		createSpriteAnimation({ image: assets.enemy2, frameWidth: 36, frameHeight: 36, frameCount: 8, fps: 8 }),
		createSpriteAnimation({ image: assets.enemy3, frameWidth: 36, frameHeight: 36, frameCount: 8, fps: 8 })
	];
	// --- ANIMAZIONE BOSS ---
	// Scelta: 8 frame orizzontali, 120x215 px, 8 fps, solo prima riga.
	bossAnim = createSpriteAnimation({
		image: assets.boss,
		frameWidth: 120,
		frameHeight: Math.round(120 * 2752 / 1536),
		frameCount: 8,
		fps: 8
	});
	assetsReady = true;
});
setupPlayerControls();
setupBulletControls(player);
// Entry point del gioco

const startScreen = document.getElementById('start-screen');
const startBtn = document.getElementById('start-btn');
const gameContainer = document.getElementById('game-container');
const gameCanvas = document.getElementById('game-canvas');
const gameOverScreen = document.getElementById('game-over');
const finalScore = document.getElementById('final-score');
const restartBtn = document.getElementById('restart-btn');

function showScreen(screen) {
	startScreen.classList.add('hidden');
	gameContainer.classList.add('hidden');
	gameOverScreen.classList.add('hidden');
	screen.classList.remove('hidden');
}

// --- Scorrimento verticale dello sfondo ---
const ctx = gameCanvas.getContext('2d');
const canvasWidth = gameCanvas.width;
const canvasHeight = gameCanvas.height;

let bgOffset = 0;
const bgSpeed = 2; // pixel per frame

let bossActive = false;
let levelInProgress = true;

function drawBackground() {
	// Usa PNG di sfondo tramite asset loader centralizzato
	const bgImg = assets.bg1; // Puoi alternare bg1/bg2 per livelli diversi
	const imgHeight = bgImg.height * (canvasWidth / bgImg.width);
	const y1 = (bgOffset % imgHeight) - imgHeight;
	const y2 = (bgOffset % imgHeight);
	ctx.drawImage(bgImg, 0, y1, canvasWidth, imgHeight);
	ctx.drawImage(bgImg, 0, y2, canvasWidth, imgHeight);
}

function checkPowerUpCollision() {
	for (let i = powerUps.length - 1; i >= 0; i--) {
		const p = powerUps[i];
		if (
			p.x + 12 > player.x &&
			p.x - 12 < player.x + player.width &&
			p.y + 12 > player.y &&
			p.y - 12 < player.y + player.height
		) {
			addEffect('powerup', p.x, p.y);
			applyPowerUp(p.type);
			powerUps.splice(i, 1);
		}
	}
}

function applyPowerUp(type) {
	switch (type) {
		case 'fire':
			// Potenzia fuoco (placeholder)
			gameState.score += 250;
			break;
		case 'heal':
			if (gameState.lives < gameState.maxLives) gameState.lives++;
			break;
		case 'bomb':
			enemies.length = 0;
			break;
	}
}


let lastFrameTime = performance.now();
function gameLoop() {
	if (!assetsReady) {
		requestAnimationFrame(gameLoop);
		return;
	}
	const now = performance.now();
	const delta = now - lastFrameTime;
	lastFrameTime = now;
	ctx.clearRect(0, 0, canvasWidth, canvasHeight);
	drawBackground();
	updatePlayer(canvasWidth, canvasHeight);
	if (playerAnim) playerAnim.update(delta);
	updateBullets();
	// Aggiorna animazioni nemici e boss
	enemyAnims.forEach(anim => anim.update(delta));
	if (bossAnim) bossAnim.update(delta);
	updateEnemies(canvasHeight, player, () => {
		addEffect('explosion', player.x + player.width/2, player.y + player.height/2);
		loseLife();
		if (gameState.lives <= 0) endGame();
	});
	updatePowerUps(canvasHeight);
	updateEffects(delta);
	checkBulletEnemyCollisions(bullets, enemies, (points, bx, by) => {
		gameState.score += points;
		addEffect('explosion', bx, by);
		// 30% di probabilità di rilascio power-up
		if (Math.random() < 0.3) {
			const lastEnemy = enemies.length ? enemies[enemies.length-1] : null;
			spawnPowerUp(
				lastEnemy ? lastEnemy.x + lastEnemy.width/2 : player.x + player.width/2,
				lastEnemy ? lastEnemy.y + lastEnemy.height/2 : player.y
			);
		}
	});
	checkPowerUpCollision();
	// Boss logic
	if (!bossActive && getLevelConfig().boss && enemies.length === 0 && levelInProgress) {
		spawnBoss(canvasWidth);
		bossActive = true;
	}
	if (bossActive) {
		updateBosses(canvasWidth, canvasHeight);
		// --- ANIMAZIONE SPRITE BOSS ---
		ctx.save();
		bosses.forEach(boss => {
			if (bossAnim) bossAnim.draw(ctx, boss.x, boss.y, boss.width, boss.height);
		});
		ctx.restore();
		// Collisioni boss-proiettili
		for (let i = bosses.length - 1; i >= 0; i--) {
			const boss = bosses[i];
			for (let j = bullets.length - 1; j >= 0; j--) {
				const b = bullets[j];
				if (
					b.x < boss.x + boss.width &&
					b.x + 6 > boss.x &&
					b.y < boss.y + boss.height &&
					b.y + 16 > boss.y
				) {
					boss.hp--;
					addEffect('hit', b.x + b.width/2, b.y);
					bullets.splice(j, 1);
					if (boss.hp <= 0) {
						addEffect('explosion', boss.x + boss.width/2, boss.y + boss.height/2);
						bosses.splice(i, 1);
						bossActive = false;
						levelInProgress = false;
						setTimeout(() => {
							if (nextLevel()) {
								startLevel();
							} else {
								endGame();
							}
						}, 1200);
					}
					break;
				}
			}
		}
	}
	// --- ANIMAZIONE SPRITE PLAYER ---
	if (playerAnim) playerAnim.draw(ctx, player.x, player.y, player.width, player.height);
	drawBullets(ctx, assets);
	// --- ANIMAZIONE SPRITE NEMICI ---
	ctx.save();
	enemies.forEach((e, i) => {
		const anim = enemyAnims[i % 3];
		anim.draw(ctx, e.x, e.y, e.width, e.height);
	});
	ctx.restore();
	drawPowerUps(ctx, assets);
	drawEffects(ctx, assets, delta);
	drawHUD(ctx, canvasWidth, assets);
	bgOffset += bgSpeed;
	if (gameState.lives > 0 && (bossActive || levelInProgress)) requestAnimationFrame(gameLoop);
}

function startLevel() {
	resetEnemies();
	resetPowerUps();
	bossActive = false;
	levelInProgress = true;
	startEnemySpawning(canvasWidth);
}

function startGame() {
	bgOffset = 0;
	player.x = canvasWidth / 2 - player.width / 2;
	player.y = canvasHeight - 80;
	bullets.length = 0;
	resetEnemies();
	resetPowerUps();
	resetBosses();
	resetLevels();
	resetGameStats();
	showScreen(gameContainer);
	startLevel();
	requestAnimationFrame(gameLoop);
}
function endGame() {
	stopEnemySpawning();
	showScreen(gameOverScreen);
	finalScore.textContent = `Punteggio finale: ${gameState.score}`;
}

startBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', startGame);

// All'avvio mostra la schermata iniziale
showScreen(startScreen);
