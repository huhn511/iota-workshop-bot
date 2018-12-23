const { RichEmbed } = require('discord.js');

function start() {

  let start_message = new RichEmbed()
       // Set the title of the field
       .setTitle('IOTA Workshop started!')
       // Set the color of the embed
       .setColor(0x70C8B6)
       // Set the main content of the embed
       .setDescription(`
         Welcome to the IOTA Workshop!\n
         This is a Workshop with examples to help a developer work through interacting with the IOTA network.\n
         \n
         Let's beginn with cloning the Repository, paste the lines below into your terminal in your development directory:\n
         git clone https://github.com/iota-community/iota-workshop\n
         cd iota-workshop\n
         \n
         After that, execute the first example "1-hello-world.js" with nodejs:\n
         node code/1-hello-world.js
         `
       );

  return start_message;
}

module.exports = start;
