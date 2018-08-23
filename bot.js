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
    else {
      return;
    }
  }
});

bot.on("message", message => {
  const args = message.content.split(" ").slice(1);

  if (message.content === "vbd.eval") {
    if(message.author.id !== config.ownerID) return;
    try {
      const code = args.join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }
});

bot.login(process.env.BTOKEN)
