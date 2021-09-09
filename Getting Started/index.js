const Discord =  require('discord.js')
const { Client, Intents } = require('discord.js');
const client = new Client({ 
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const config = require('./config.js')
const prefix = require('./config.js').prefix

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  
});

client.on('messageCreate', message => {
  if (message.content === prefix + 'ping') {
    message.channel.send('PING: ' + client.ws.ping);
  }
});

client.login(config.token)

//NEXT I'LL TEACH YOU TO MAKE COMMANDS
