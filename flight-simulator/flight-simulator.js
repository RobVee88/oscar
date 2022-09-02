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
	imageSrc: "./assets/background.jpeg",
});

const player = new Player({
	position: {
		x: 0,
		y: 0,
	},
	direction: "right",
	imageSrc: "./assets/B-17/Type-1/B-17.png",
	width: 50,
	height: 50,
	speed: 5,
	autoMove: true,
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
