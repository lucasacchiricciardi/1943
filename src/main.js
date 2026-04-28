// --- Parametri aereo giocatore ---
const player = {
	x: canvasWidth / 2 - 20,
	y: canvasHeight - 80,
	width: 40,
	height: 40,
	speed: 5,
	color: '#ffe066',
	moving: { left: false, right: false, up: false, down: false }
};

function drawPlayer() {
	ctx.save();
	ctx.fillStyle = player.color;
	ctx.fillRect(player.x, player.y, player.width, player.height);
	ctx.restore();
}

function updatePlayer() {
	if (player.moving.left) player.x -= player.speed;
	if (player.moving.right) player.x += player.speed;
	if (player.moving.up) player.y -= player.speed;
	if (player.moving.down) player.y += player.speed;
	// Limiti bordo canvas
	player.x = Math.max(0, Math.min(canvasWidth - player.width, player.x));
	player.y = Math.max(0, Math.min(canvasHeight - player.height, player.y));
}

window.addEventListener('keydown', (e) => {
	switch (e.key) {
		case 'ArrowLeft':
		case 'a':
			player.moving.left = true;
			break;
		case 'ArrowRight':
		case 'd':
			player.moving.right = true;
			break;
		case 'ArrowUp':
		case 'w':
			player.moving.up = true;
			break;
		case 'ArrowDown':
		case 's':
			player.moving.down = true;
			break;
	}
});

window.addEventListener('keyup', (e) => {
	switch (e.key) {
		case 'ArrowLeft':
		case 'a':
			player.moving.left = false;
			break;
		case 'ArrowRight':
		case 'd':
			player.moving.right = false;
			break;
		case 'ArrowUp':
		case 'w':
			player.moving.up = false;
			break;
		case 'ArrowDown':
		case 's':
			player.moving.down = false;
			break;
	}
});
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

function drawBackground() {
	// Sfondo semplice: due rettangoli sfumati che si alternano
	const grad = ctx.createLinearGradient(0, 0, 0, canvasHeight);
	grad.addColorStop(0, '#3a6ea5');
	grad.addColorStop(1, '#b3e0ff');
	ctx.fillStyle = grad;
	ctx.fillRect(0, (bgOffset % canvasHeight) - canvasHeight, canvasWidth, canvasHeight);
	ctx.fillRect(0, (bgOffset % canvasHeight), canvasWidth, canvasHeight);
}

function gameLoop() {
	ctx.clearRect(0, 0, canvasWidth, canvasHeight);
	drawBackground();
	updatePlayer();
	drawPlayer();
	bgOffset += bgSpeed;
	requestAnimationFrame(gameLoop);
}

function startGame() {
	bgOffset = 0;
	showScreen(gameContainer);
	requestAnimationFrame(gameLoop);
}

startBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', startGame);

// All'avvio mostra la schermata iniziale
showScreen(startScreen);
