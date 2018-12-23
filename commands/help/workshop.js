const { RichEmbed } = require('discord.js');

function workshop(arg) {
  return prepareMessage(arg);
}


const prepareMessage = function(workshop) {
  var embed = new RichEmbed()
    // Set the title of the field
    .setTitle('Help for ' + workshop)
    // Set the color of the embed
    .setColor(0x70C8B6)
    // Set the main content of the embed
    .setDescription(`
      Run it in with:\n
      node ${workshop}\n
      Repository
      https://github.com/iota-community/iota-workshop/blob/master/code/${workshop}.js\n
      `
    );

    return embed;
}

module.exports = workshop;
