const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
const killedMessage = document.querySelector("#killedMessage");

canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;

c.fillRect(0, 0, canvas.width, canvas.height);

let killed = false;

const background = new Sprite({
	position: {
		x: 0,
		y: 0,
	},
	width: canvas.width,
	height: canvas.height,
	imageSrc: "https://as1.ftcdn.net/v2/jpg/01/31/49/54/1000_F_131495448_pGR6VltI9OAHhFGuoQ38pcQdGs8RuJmZ.jpg",
});

const player = new Player({
	position: {
		x: 0,
		y: 0,
	},
	imageSrc: "./assets/survivor.png",
	width: 100,
	height: 100,
	speed: 10,
	autoMove: false,
});

const killer = new NPC({
	position: {
		x: 300,
		y: 500,
	},
	imageSrc: "./assets/killer.png",
	width: 100,
	height: 100,
	speed: 2,
});

function animate() {
	if (killed === false) {
		window.requestAnimationFrame(animate);
	}
	c.fillRect(0, 0, canvas.width, canvas.height);
	background.update();
	c.fillStyle = "rgba(255, 255, 255, 0.15)";
	c.fillRect(0, 0, canvas.width, canvas.height);
	player.update();
	killer.update();
	if (characterCollision({ character1: player, character2: killer })) {
		killed = true;
		killedMessage.className = "show";
	}
}

animate();
