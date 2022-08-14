function characterCollision({ character1, character2 }) {
	return (
		character1.position.x >= character2.position.x &&
		character1.position.x <= character2.position.x + character2.width &&
		character1.position.y >= character2.position.y &&
		character1.position.y <= character2.position.y + character2.height
	);
}
