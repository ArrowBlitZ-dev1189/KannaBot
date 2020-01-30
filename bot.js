const Discord = require("discord.js");
const client = new Discord.Client(); 

client.login("NjcyMTE0NTMwNzk2Njk5NjU5.XjHIMA.DX1YuRa4MHbvxBa7XrHDWc5BZiM");

// client is an instance of Discord.Client
client.on("message", (message) => {
if(message.content == "hi"){ // Check if content of message is "!ping"
		message.channel.send("Hi Kage! <3"); // Call .send() on the channel object the message was sent in
	}
});