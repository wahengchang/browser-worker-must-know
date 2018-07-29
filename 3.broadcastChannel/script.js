if ('BroadcastChannel' in window) {
	const channel = new BroadcastChannel('sample_channel');
	const send = document.querySelector(".send");
	const messageText = document.querySelector(".message-text");
	const messageContent = document.querySelector(".message-content");
	const disable = document.querySelector(".disable");

	const href = location.pathname;

	send.addEventListener("click", () => {
		channel.postMessage(href + ": " + "<span>" + messageText.value + "</span>");
		createMessage("You: " + messageText.value);
		messageText.value = "";
	}, false);

	channel.addEventListener("message", (e) => {
		createMessage(e.data);
	}, false);

	function createMessage(message) {
		let item = document.createElement("P");
		item.innerHTML = message;
		messageContent.appendChild(item);
	}

	if (disable) {
		disable.addEventListener("click", () => {
			document.querySelector(".iframe-content").style.display = "none";
		}, false);
	}
} 

else {
	document.querySelector(".content").style.display = "none";
	document.querySelector(".error").style.display = "block";
}