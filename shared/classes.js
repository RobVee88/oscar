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

class Player extends Sprite {
	constructor({ position, direction, imageSrc, speed, width, height, autoMove }) {
		super({
			position,
			imageSrc,
		});

		this.direction = direction;
		this.width = width;
		this.height = height;
		this.speed = speed;
		this.autoMove = autoMove;
	}

	update() {
		this.draw();
		if (this.autoMove) {
			switch (this.direction) {
				case "left":
					this.position.x -= this.speed;
					break;
				case "right":
					this.position.x += this.speed;
					break;
				case "up":
					this.position.y -= this.speed;
					break;
				case "down":
					this.position.y += this.speed;
					break;
			}
		}
	}
}

class NPC extends Sprite {
	constructor({ position, imageSrc, speed, width, height }) {
		super({
			position,
			imageSrc,
		});

		this.width = width;
		this.height = height;
		this.speed = speed;
		this.delayCounter = 0;
		this.direction = 0;
	}

	update() {
		this.draw();
		this.delayCounter++;
		if (this.delayCounter >= 100) {
			this.direction = Math.floor(Math.random() * 4);
			this.delayCounter = 0;
		} else {
			if (player.position.x > this.position.x) {
				this.direction = 1;
			} else if (player.position.x < this.position.x) {
				this.direction = 0;
			} else if (player.position.y < this.position.y) {
				this.direction = 2;
			} else {
				this.direction = 3;
			}
		}
		switch (this.direction) {
			case 0:
				this.position.x -= this.speed;
				break;
			case 1:
				this.position.x += this.speed;
				break;
			case 2:
				this.position.y -= this.speed;
				break;
			case 3:
				this.position.y += this.speed;
				break;
		}
	}
}
