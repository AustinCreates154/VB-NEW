const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require(`./config.json`)
//Basic Constants

bot.on("ready", () => {
  console.log(`I am logged in as ${bot.user.tag}`)
  bot.user.setActivity('Hello there!')
})

bot.on("message", message => {
  if(message.author.id === '369256915479560192', "407035555122118664", "236256518004015105", "216472472176820225") {
   if(message.content === "vbd.shutdown") {
     message.channel.send('Shuting down')
     bot.destroy();
   }
    else {
      return;
    }
  }
});

bot.on("message", message => {
  if(message.content === "trogannnnn") {
    message.channel.send(`@Trojan#0916 go away.`)
  }
})

bot.on("message", message => {
  if(message.author.id !== '369256915479560192') {
    if(message.content === "vbd.shutdown") {
      message.channel.send('Sorry, This Command Is Developer Only.')
    }
  }
})




bot.login(process.env.BTOKEN)
