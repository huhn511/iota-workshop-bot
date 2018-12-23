const { RichEmbed } = require('discord.js');

function more() {

  let embed = new RichEmbed()
        // Set the title of the field
        .setTitle('IOTA Workshop Bot Help Details')
        // Set the color of the embed
        .setColor(0x70C8B6)
        // Set the main content of the embed
        .setDescription(`
          Repository
          https://github.com/iota-community/iota-workshop\n
          Commands:
          !help [options]\n
          !execute|exec [options]\n
          \n
          Add the prefix number for specific help. \n
          Example for check balance help: !help 3.2\n
          1-hello-world.js\n
          2.1-send-hello.js\n
          2.2-fetch-hello.js\n
          3.1-create-address.js\n
          3.2-check-balance.js\n
          4-send-tokens.js\n
          5.1-send-data.js\n
          5.2-fetch-data.js\n
          6.1-zmq-listen.js\n
          6.2-zmq-message.js\n
          7.1-mam-public-send.js\n
          7.2-mam-public-fetch.js\n
          7.3-mam-private-send.js\n
          7.4-mam-private-fetch.js\n
          7.5-mam-public-watch.js\n
          `
        );

  return embed;
}

module.exports = more;
