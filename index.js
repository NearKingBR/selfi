const Discord = require('discord.js');
const client = new Discord.Client();

const config = require('./config.json');


client.on("ready", async () => {
    client.user.setActivity('Google Chrome', 'https://www.twitch.tv/Near');
});

client.on('guildMemberAdd', member =>{
  member.send('.')
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
