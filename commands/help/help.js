const { RichEmbed } = require('discord.js');

function help() {

  let embed = new RichEmbed()
        // Set the title of the field
        .setTitle('IOTA Workshop Bot Help')
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
          More Help: !help more
          `
        );

  return embed;
}

module.exports = help;
