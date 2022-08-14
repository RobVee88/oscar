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

const player = new Player({
	position: {
		x: 0,
		y: 0,
	},
	imageSrc: "./assets/New Piskel.png",
	width: 100,
	height: 100,
	speed: 50,
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
