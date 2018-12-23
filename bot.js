const { Client, RichEmbed } = require('discord.js');
const client = new Client();

const commands = require('./commands');

console.log("commands", commands);
console.log("help", commands.help);

require('dotenv').config() // Loads .env

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

const iotaLibrary = require('@iota/core')

const iota = iotaLibrary.composeAPI({
  provider: 'https://nodes.devnet.thetangle.org:443'
})

client.on('message', message => {

  if (message.author.bot) return;

  const config = {
    prefix: '!'
  }
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);

  const command = args.shift().toLowerCase();
  let arg = args[0];

  if (message.content.indexOf(config.prefix) !== 0) return;

  switch (command) {
    case 'ping':
      message.reply(commands.ping());
      break;
    case 'help':
      if(!arg) {
        message.reply(commands.help.help());
        break;
      }
      switch(arg) {
        case 'more':
        message.reply(commands.help.more());
        break;
        case '1':
          message.reply(commands.help.workshop("1-hello-world"));
          break;
        case '2':
        case '2.1':
          message.reply(commands.help.workshop("2.1-send-hello"));
          break;
        case '2.2':
          message.reply(commands.help.workshop("2.2-fetch-hello"));
          break;
        case '3':
        case '3.1':
          message.reply(commands.help.workshop("3.1-create-address"));
          break;
        case '3.2':
          message.reply(commands.help.workshop("3.2-check-balance"));
          break;
        case '4':
          message.reply(commands.help.workshop("4-send-tokens"));
          break;
        case '5':
        case '5.1':
          message.reply(commands.help.workshop("5.1-send-data"));
          break;
        case '5.2':
          message.reply(commands.help.workshop("5.2-fetch-data"));
          break;
        case '6':
          message.reply(commands.help.workshop("6.1-zmq-listen"));
          break;
        case '7':
        case '7.1':
          message.reply(commands.help.workshop("7.1-mam-public-send"));
          break;
        case '7.2':
          message.reply(commands.help.workshop("7.2-mam-public-fetch"));
          break;
        case '7.3':
          message.reply(commands.help.workshop("7.3-mam-private-send"));
          break;
        case '7.4':
          message.reply(commands.help.workshop("7.4-mam-private-fetch"));
          break;
        case '7.5':
          message.reply(commands.help.workshop("7.5-mam-public-watch"));
          break;
      }
      break;
    case 'start':
      message.reply(commands.start());
      break;
    case 'execute':
    case 'exec':
      switch(arg) {
        case 'help':
          message.reply(commands.execute.help());
          break;
        case 'hello-world':
        case '1':
          message.reply(commands.execute.workshop('hello-world', message));
        break;
        case 'send-hello':
        case '2':
        case '2.1':
          message.reply(commands.execute.workshop('send-hello', message));
          break;
        case '2.2':
          message.reply(commands.execute.workshop('fetch-hello', message));
          break;
        case '3':
        case '3.1':
          message.reply(commands.execute.workshop('create-address', message));
          break;
        case '3.2':
          message.reply(commands.execute.workshop('check-balance', message));
          break;
        case '4':
          message.reply(commands.execute.workshop('send-token', message));
          break;
        case '5':
        case '5.1':
          message.reply(commands.execute.workshop('send-data', message));
          break;
        case '5.2':
          message.reply(commands.execute.workshop('fetch-data', message));
          break;
        case '6':
          message.reply(commands.execute.workshop('zmq-listen', message));
          break;
        case '7':
        case '7.1':
          message.reply(commands.execute.workshop('mam-public-send', message));
          break;
        case '7.2':
        message.reply(commands.execute.workshop('mam-public-fetch', message));
        break;
        case '7.3':
          message.reply(commands.execute.workshop('mam-private-send', message));
          break;
        case '7.4':
          message.reply(commands.execute.workshop('mam-private-fetch', message));
          break;
        case '7.5':
          message.reply(commands.execute.workshop('mam-public-watch', message));
          break;
      }
  }

})

client.login(process.env.DISCOD_BOT_KEY);
