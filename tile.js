class Tile {
	constructor(x, y, c) {
		this.x = x;
		this.y = y;
		this.width = 50;
		this.height = 50;
		this.color = c;
	}

	draw() {

		fill(this.color);
		noStroke();

		rect(this.x * this.width, this.y * this.height, this.width, this.height);
	}
}
