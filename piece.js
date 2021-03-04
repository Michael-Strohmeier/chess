class Piece {
	constructor(x, y, img) {
		this.x = x * 50;
		this.y = y * 50;
		this.width = 50;
		this.height = 50;
    this.img = img;
	}

	draw() {
    image(this.img, this.x, this.y, 50, 50);
	}
}
