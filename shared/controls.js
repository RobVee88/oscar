window.addEventListener("keydown", (event) => {
	switch (event.key) {
		case "ArrowRight":
			if (player.autoMove) {
				player.direction = "right";
			} else {
				player.position.x += player.speed;
			}
			break;
		case "ArrowLeft":
			if (player.autoMove) {
				player.direction = "left";
			} else {
				player.position.x -= player.speed;
			}
			break;
		case "ArrowUp":
			if (player.autoMove) {
				player.direction = "up";
			} else {
				player.position.y -= player.speed;
			}
			break;
		case "ArrowDown":
			if (player.autoMove) {
				player.direction = "down";
			} else {
				player.position.y += player.speed;
			}
			break;
	}
});

const buttonLeft = document.querySelector("#buttonLeft");
const buttonRight = document.querySelector("#buttonRight");
const buttonUp = document.querySelector("#buttonUp");
const buttonDown = document.querySelector("#buttonDown");

buttonLeft.addEventListener("click", () => {
	if (player.autoMove) {
		player.direction = "left";
	} else {
		player.position.x -= player.speed;
	}
});

buttonRight.addEventListener("click", () => {
	if (player.autoMove) {
		player.direction = "right";
	} else {
		player.position.x += player.speed;
	}
});

buttonUp.addEventListener("click", () => {
	if (player.autoMove) {
		player.direction = "up";
	} else {
		player.position.y -= player.speed;
	}
});

buttonDown.addEventListener("click", () => {
	if (player.autoMove) {
		player.direction = "down";
	} else {
		player.position.y += player.speed;
	}
});
