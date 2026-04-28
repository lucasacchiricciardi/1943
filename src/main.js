import { bosses, spawnBoss, updateBosses, drawBosses, resetBosses } from './boss.js';
import { levels, currentLevel, nextLevel, resetLevels, getLevelConfig } from './levels.js';
import { powerUps, spawnPowerUp, updatePowerUps, drawPowerUps, resetPowerUps } from './powerups.js';
import { player, updatePlayer, setupPlayerControls } from './player.js';
import { bullets, drawBullets, updateBullets, setupBulletControls } from './bullets.js';
import { enemies, drawEnemies, updateEnemies, startEnemySpawning, stopEnemySpawning, resetEnemies } from './enemies.js';
import { checkBulletEnemyCollisions } from './collision.js';
import { gameState, drawHUD, resetGameStats, loseLife } from './hud.js';
import { assets, loadAssets } from './assets.js';

// Setup controlli e caricamento asset
let assetsReady = false;
loadAssets(() => {
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
	// Sfondo semplice: due rettangoli sfumati che si alternano
	const grad = ctx.createLinearGradient(0, 0, 0, canvasHeight);
	grad.addColorStop(0, '#3a6ea5');
	grad.addColorStop(1, '#b3e0ff');
	ctx.fillStyle = grad;
	ctx.fillRect(0, (bgOffset % canvasHeight) - canvasHeight, canvasWidth, canvasHeight);
	ctx.fillRect(0, (bgOffset % canvasHeight), canvasWidth, canvasHeight);
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


function gameLoop() {
	if (!assetsReady) {
		requestAnimationFrame(gameLoop);
		return;
	}
	ctx.clearRect(0, 0, canvasWidth, canvasHeight);
	drawBackground();
	updatePlayer(canvasWidth, canvasHeight);
	updateBullets();
	updateEnemies(canvasHeight, player, () => {
		loseLife();
		if (gameState.lives <= 0) endGame();
	});
	updatePowerUps(canvasHeight);
	checkBulletEnemyCollisions(bullets, enemies, (points) => {
		gameState.score += points;
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
		drawBosses(ctx, assets);
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
					bullets.splice(j, 1);
					if (boss.hp <= 0) {
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
	// --- INTEGRAZIONE SPRITE PLAYER ---
	// Sostituisce drawPlayer(ctx) con rendering sprite PNG
	ctx.save();
	const img = assets.playerBlue;
	ctx.drawImage(
		img,
		player.x,
		player.y,
		player.width,
		player.height
	);
	ctx.restore();
	// ---
	drawBullets(ctx, assets);
	drawEnemies(ctx, assets);
	drawPowerUps(ctx);
	drawHUD(ctx, canvasWidth);
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
