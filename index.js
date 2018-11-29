const Discord = require('discord.js');
const client = new Discord.Client();

const config = require('./config.json');


client.on("ready", async () => {
    client.user.setActivity('https://discord.me/NightBoard', 'https://www.twitch.tv/Near');
});

client.on('guildMemberAdd', member =>{
  member.send('Oiee nenem, ta no tédio? Entra no Discord NightBoard, Super recomendo, La tem muita coisa legal, Eventos Diarios, Desafios, e muitos Chats para Interação,Uma Comunidade Gamer Bem animada, Amizades etc.. :smiling_imp::smiling_imp::heart_eyes::heart:️ https://discord.gg/9cwstfA ')
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
