class Board {
	constructor(img) {
		this.img = img;
		this.tiles = [];
		this.pieces = [];
		this.pieceInHand = -1;

		this.setTiles();
		this.resetPieces();
	}

	setTiles() {
		for (let i = 0; i < 8; i++) {
			for (let j = 0; j < 8; j++) {
				let c = color(0, 0, 255);
				if ((i + j) % 2 == 0) {
					c = color(240, 217, 181); // "white"
				} else {
					c = color(181, 136, 99); // "black"
				}
				this.tiles.push(new Tile(i, j, c));
			}
		}
	}

	resetPieces() {
		for (let i = 0; i < 8; i++) {
			this.pieces.push(new Piece(i, 0, img));
		}
	}

	setPieceInHand() {
		for (let i = 0; i < this.pieces.length; i++) {
			if (this.pieces[i].x < mouseX && mouseX < this.pieces[i].x + this.pieces[i].width) {
				if (this.pieces[i].y < mouseY && mouseY < this.pieces[i].y + this.pieces[i].height) {
					this.pieceInHand = i;
				}
			}
		}
	}

	movePiece() {
		if (this.pieceInHand != -1) {
			this.pieces[this.pieceInHand].x = mouseX - 25;
			this.pieces[this.pieceInHand].y = mouseY - 25;
		}
	}

	dropPiece() {
		this.pieceInHand = -1;
	}

	draw() {
		for (let i = 0; i < 64; i++) {
			//this.tiles[i] = new Tile();
			this.tiles[i].draw();
		}

		for (let i = 0; i < this.pieces.length; i++) {
			this.pieces[i].draw();
		}
	}
}
