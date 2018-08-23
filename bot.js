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
  if(message.content === "vb!gat") {
    message.channels.get('477227426007744524').send('Trojan go away.')
  }
})




bot.login(process.env.BTOKEN)
