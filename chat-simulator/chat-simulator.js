const chatWindow = document.getElementById("chatWindow");
const chatBox = document.getElementById("chatBox");
const chatEnter = document.getElementById("chatEnter");

const replies = ["can we be friends?", "bye", "hi", "im hungry"];
const greetings = ["Hello", "", "im a bot", "yes", "Hi", "guess  what", "", "im rich"];
const bots = ["kasper bot"];

const chat = []; //string array of chat messages; {author: string, message: string}

const updateChatWindow = () => {
	chatWindow.innerText = chat.map((message) => `${message.author}: ${message.message}`).join("\n");
	chatWindow.scrollTop = chatWindow.scrollHeight;
};

const analyseMessage = (message) => {
	if (message.toLowerCase().match(/(hey|hi|hello|yo)/)) return "greeting";
	return "reply";
};

const processReply = (reply) => {
	const randomForAuthor = Math.floor(Math.random() * (bots.length - 1 + 1));
	const randomForWait = Math.floor(Math.random() * (3 + 1)) * 1000;

	const randomAuthor = bots[randomForAuthor];
	let randomReply = "";
	let randomForReply = 0;

	if (reply === "greeting") {
		randomForReply = Math.floor(Math.random() * (greetings.length - 1 + 1));
		randomReply = greetings[randomForReply];
	} else {
		randomForReply = Math.floor(Math.random() * (replies.length - 1 + 1));
		randomReply = replies[randomForReply];
	}
	chat.push({ author: randomAuthor, message: randomReply });

	setTimeout(updateChatWindow, randomForWait);
};

const processMessage = () => {
	const message = chatBox.value;
	chat.push({ author: "player", message });
	updateChatWindow();
	const reply = analyseMessage(message);
	processReply(reply);
	chatBox.value = "";
};

chatEnter.addEventListener("click", processMessage);
chatBox.addEventListener("keypress", (e) => {
	if (e.key === "Enter") {
		processMessage();
	}
});
