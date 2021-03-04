var board;

var img;

function preload() {
	//for (let i = 0; i < 5; i++) {
	img = loadImage("assets/w_0.png");
		// 		pieceImages[i] = loadImage(`assets/piece${i}.png`);
	//}
}

function setup() {
	createCanvas(600, 600);
	// createCanvas(windowWidth, windowHeight);
	board = new Board(img);
}

function mousePressed() {
	board.setPieceInHand();
}

function mouseDragged() {
	board.movePiece();
}

function mouseReleased() {
	board.dropPiece();
}

function draw() {
	background(100);
	board.draw();
}
