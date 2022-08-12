class Sprite {
	constructor({ position, imageSrc, width, height }) {
		this.position = position;
		this.width = width;
		this.height = height;
		this.image = new Image();
		this.image.src = imageSrc;
	}

	draw() {
		c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
	}

	update() {
		this.draw();
	}
}

class Plane extends Sprite {
	constructor({ position, direction, imageSrc }) {
		super({
			position,
			imageSrc,
		});

		this.direction = direction;
		this.width = 50;
		this.height = 50;
	}

	update() {
		this.draw();
		switch (this.direction) {
			case "left":
				this.position.x -= 2;
				break;
			case "right":
				this.position.x += 2;
				break;
			case "up":
				this.position.y -= 2;
				break;
			case "down":
				this.position.y += 2;
				break;
		}
	}
}

class Sonic extends Sprite {
	constructor({ position, direction, imageSrc }) {
		super({
			position,
			imageSrc,
		});

		this.direction = direction;
		this.width = 100;
		this.height = 100;
	}

	update() {
		this.draw();
		switch (this.direction) {
			case "left":
				this.position.x -= 8;
				break;
			case "right":
				this.position.x += 8;
				break;
			case "up":
				this.position.y -= 8;
				break;
			case "down":
				this.position.y += 8;
				break;
		}
	}
}
