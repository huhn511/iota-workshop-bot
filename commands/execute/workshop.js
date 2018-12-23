const { RichEmbed } = require('discord.js');
const iotaLibrary = require('@iota/core')

const iota = iotaLibrary.composeAPI({
  provider: 'https://nodes.devnet.thetangle.org:443'
})


function workshop(arg, message) {
  return prepareMessage(arg, message);
}


const prepareMessage = function(workshop, message) {
  var embed = new RichEmbed()
    // Set the title of the field
    .setTitle('Execute for ' + workshop)
    // Set the color of the embed
    .setColor(0x70C8B6)
    // Set the main content of the embed
    .setDescription(`
      Repository:
      https://github.com/iota-community/iota-workshop/blob/master/code/${workshop}.js\n
      \n
      node code/${workshop}.js
      ${workshop} executed...
      `
    );

    execute_workshop(workshop, message)

    return embed;
}

const prepareResponseMessageForObject = function(workshop, object){
  return new RichEmbed()
        // Set the title of the field
        .setTitle(`Response for ${workshop}:`)
        // Set the color of the embed
        .setColor(0x70C8B6)
        // Set the main content of the embed
        .setDescription(JSON.stringify(object, null, 2));
}

const prepareResponseMessageForString = function(workshop, string){
  return new RichEmbed()
        // Set the title of the field
        .setTitle(`Response for ${workshop}:`)
        // Set the color of the embed
        .setColor(0x70C8B6)
        // Set the main content of the embed
        .setDescription(string);
}

const execute_workshop = function(workshop, message){
  switch(workshop) {
    case "hello-world":
      hello_world(workshop, message)
      break;
    case "send-hello":
      send_hello(workshop, message)
      break;
    case "fetch-hello":
      fetch_hello(workshop, message)
      break;
    case "create-address":
      message.reply("not implemented yet.");
      break;
    case "check-balance":
      message.reply("not implemented yet.");
      break;
    case "send-token":
      message.reply("not implemented yet.");
      break;
    case "send-data":
      message.reply("not implemented yet.");
      break;
    case "fetch-data":
      message.reply("not implemented yet.");
      break;
    case "zmq-listen":
      message.reply("not implemented yet.");
      break;
    case "mam-public-send":
      message.reply("not implemented yet.");
      break;
    case "mam-public-fetch":
      message.reply("not implemented yet.");
      break;
    case "mam-private-send":
      message.reply("not implemented yet.");
      break;
    case "mam-private-fetch":
      message.reply("not implemented yet.");
      break;
    case "mam-public-watch":
      message.reply("not implemented yet.");
      break;
  }
}

// ********************
// ********************
//  W O R K S H O P S
// ********************
// ********************

// 1-hello-world

const hello_world = function(workshop, message){
  iota
    .getNodeInfo()
    .then(response => {

        message.reply(prepareResponseMessageForObject(workshop, response));
    })
    .catch(err => {
      console.error(err)
    })
}

//  2.1-send-hello.js

const send_hello = function(workshop, message){
  let address =
    'HEQLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORL9D'
  let seed =
    'PUEOTSEITFEVEWCWBTSIZM9NKRGJEIMXTULBACGFRQK9IMGICLBKW9TTEVSDQMGWKBXPVCBMMCXWMNPDX'

  const transfers = [
    {
      value: 0,
      address: address,
      message: 'HELLOWORLD'
    }
  ]

  iota
    .prepareTransfers(seed, transfers)
    .then(trytes => iota.sendTrytes(trytes, (depth = 3), (mwm = 9)))
    .then(bundle => {
      let hash = bundle[0].hash;

      message.reply(prepareResponseMessageForString(workshop, hash));

    })
    .catch(err => {
      console.error(err)
    })
}

// 2.2-fetch-hello.js

const fetch_hello = function(workshop, message){

  let fetch_address =
    'HELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORL9D'

  iota
    .findTransactionObjects({ addresses: [fetch_address] })
    .then(response => {
      let fetch_hello_message = new RichEmbed()
            // Set the title of the field
            .setTitle('Response for 2.1-send-hello.js')
            // Set the color of the embed
            .setColor(0x70C8B6)
            // Set the main content of the embed
            .setDescription(
              `
              Fetches Messages: ${response.length}
              See more informations here: https://devnet.thetangle.org/address/${response[0].address}
              `
            );
      message.reply(fetch_hello_message);
    })
    .catch(err => {
      console.error(err)
    })
}


module.exports = workshop;
