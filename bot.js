require("dotenv").config();
const helpers = require("./helpers");

const { Client, Intents, MessageEmbed } = require("discord.js");
const client = new Client({
  intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES"],
});
const PREFIX = "$";

client.on("ready", () => {
  console.log(`${client.user.tag} ready on the server.`);
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  if (message.content.startsWith(PREFIX)) {
    const [command, ...args] = message.content
      .trim()
      .substring(PREFIX.length)
      .split(/\s+/);
    if (command === "create") {
      if (args) {
        if (args.length > 1) {
          return message.channel.send("Please only give me one URL");
        }
        helpers.createRoomURL(message, args[0]);
      } else {
        helpers.createRoom(message);
      }
    } else if (command === "help") {
      helpers.sendHelp(message);
    }
  }
});

client.login(process.env.DISCORD_BOT_TOKEN).then(() => {
  client.user.setActivity("commands...", { type: "LISTENING" });
});
