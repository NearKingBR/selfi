const Discord = require('discord.js');
const client = new Discord.Client();

const fs = require('fs');
const config = require('./config.json');


client.on('guildMemberAdd', member =>{
  member.send('Oiee nenem, ta no tédio? Entra no Discord Crazy-Life, Super recomendo, La muita coisa legal, Eventos Diarios, Desafios, e muitos Chats para Interação, Amizades etc.. :smiling_imp::smiling_imp::heart_eyes::heart:️ https://discord.gg/KRNw3BH ')
});

client.on('ready', () => {
	client.user.setActivity(`amor pro Near` , 'https://www.twitch.tv/monstercat');

});

client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
 
  try {
    let commandFile = require(`./comando/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    
console.error(err);
  }
 
});

client.login(process.env.BOT_TOKEN);
