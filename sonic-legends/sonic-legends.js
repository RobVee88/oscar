const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;

c.fillRect(0, 0, canvas.width, canvas.height);

const background = new Sprite({
	position: {
		x: 0,
		y: 0,
	},
	width: canvas.width,
	height: canvas.height,
	imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPUGXDWK8PkFDdXoNh-FUMyGRXP-T-ZKvNhw&usqp=CAU",
});

const player = new Sonic({
	position: {
		x: 0,
		y: 0,
	},
	direction: "right",
	imageSrc: "./assets/New Piskel.png",
});

function animate() {
	window.requestAnimationFrame(animate);
	c.fillRect(0, 0, canvas.width, canvas.height);
	background.update();
	c.fillStyle = "rgba(255, 255, 255, 0.15)";
	c.fillRect(0, 0, canvas.width, canvas.height);
	player.update();
}

animate();

window.addEventListener("keydown", (event) => {
	switch (event.key) {
		case "ArrowRight":
			player.direction = "right";
			break;
		case "ArrowLeft":
			player.direction = "left";
			break;
		case "ArrowUp":
			player.direction = "up";
			break;
		case "ArrowDown":
			player.direction = "down";
			break;
	}
});
