const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require(`./config.json`)
//Basic Constants

bot.on("ready", () => {
  console.log(`I am logged in as ${bot.user.tag}`)
  bot.user.setActivity('Hello there!')
})

bot.login(process.evl.BTOKEN)
