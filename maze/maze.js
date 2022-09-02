const canvas = document.querySelector("#maze-canvas");
const c = canvas.getContext("2d");

const canvasWidth = 1000;
const canvasHeight = 650;

canvas.width = canvasWidth;
canvas.height = canvasHeight;

const maze = [
	//top row
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	//2nd row
	[1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1],
	//3rd row
	[1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1],
	//4th row
	[1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1],
	//5th row
	[1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1],
	[1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0],
	[1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1],
	[1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

const roadWidth = canvasWidth / maze[0].length;
const roadHeight = canvasHeight / maze.length;

function renderMaze(context, mazeArray) {
	// for (let i = 0; i < mazeArray.length; i++) {
	// 	for (let j = 0; j < mazeArray[i].length; j++) {
	// 		context.beginPath();

	// 		context.rect(j * roadWidth, i * roadHeight, roadWidth, roadHeight);

	// 		context.fillStyle = mazeArray[i][j] === 0 ? "white" : "#3581fc";
	// 		context.fill();

	// 		context.closePath();
	// 	}
	// }
	for (let i = 0; i < mazeArray.length; i++) {
		for (let j = 0; j < mazeArray[i].length; j++) {
			const xPos = j * roadWidth;
			const yPos = i * roadHeight;
			const borderWidth = 1;
			context.beginPath();

			context.rect(xPos, yPos, roadWidth, roadHeight);
			context.fillStyle = "black";
			context.fill();
			context.rect(xPos, yPos, roadWidth - borderWidth * 2, roadHeight - borderWidth * 2);
			context.fillStyle = mazeArray[i][j] === 0 ? "white" : "#3581fc";
			context.fill();

			//context.fillStyle = "black";
			//context.fillRect(xPos - borderThickness, yPos - borderThickness, roadWidth + borderThickness * 2, roadHeight + borderThickness * 2);

			context.closePath();
		}
	}
}
renderMaze(c, maze);

function animate() {
	window.requestAnimationFrame(animate);
	//c.fillRect(0, 0, canvas.width, canvas.height);
	//background.update();
}

animate();
