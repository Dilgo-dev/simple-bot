import { Client, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";

dotenv.config();

const client = new Client({ 
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ] 
});

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag} but it's new`);
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  if (message.content.toLowerCase() === "ping") {
    message.reply("pong");
  }

  if (message.content.toLowerCase() === "!react") {
    message.react("👍");
  }
});

client.login(process.env.TOKEN);
