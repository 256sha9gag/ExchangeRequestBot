import TelegramBot from "node-telegram-bot-api";
import token from "./token.js";

const bot = new TelegramBot(token, { polling: true });

bot.on('message', msg => {
  console.log(msg);
});
