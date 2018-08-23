const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require(`./config.json`)
//Basic Constants

bot.on("ready", () => {
  console.log(`I am logged in as ${bot.user.tag}`)
  bot.user.setActivity('Hello there!')
})

bot.on("message", message => {
  if(message.author.id === '369256915479560192') {
   if(message.content === "vbd.shutdown") {
     message.channel.send('Shuting down')
     bot.destroy();
   }
  }
})

bot.login(process.env.BTOKEN)
