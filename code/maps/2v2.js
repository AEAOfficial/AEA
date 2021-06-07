exports.code = function(){
    const { Client, MessageAttachment } = require('discord.js');
    const fs = require("fs");
    client.setMaxListeners(1000)
    const command = require('../other/command.js')
command(client, '2v2',  async message => {
    const { member, channel, content, mentions } = message
    function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
    }


  var x = getRandomInt(1, 6);
        
    
  if (x=== 1) {
        const attachment = new MessageAttachment('./resources/map/[p4]Convergence (4p)_map.png');
        message.channel.send(attachment);
        message.reply('Convergence');
    }
  if (x=== 2) {
        const attachment = new MessageAttachment('./resources/map/[p4]Desert Battle (4p)_map.PNG');
        message.channel.send(attachment);
         message.reply('Desert Battle');
    }
  if (x=== 3) {
        const attachment = new MessageAttachment('./resources/map/[p4]Dual Commanders (4p)_map.png');
        message.channel.send(attachment);
          message.reply('Dual Commanders');
    }
  if (x=== 4) {
        const attachment = new MessageAttachment('./resources/map/[p4]Depth_charges_(4p)_[by_hxyy]_map.png');
        message.channel.send(attachment);
          message.reply('Depth Charges');
    }
  if (x=== 5) {
        const attachment = new MessageAttachment('./resources/map/[p4]Magma_Island_(4p)_map.png');
        message.channel.send(attachment);
          message.reply('Magma Island');
    }
   if (x=== 6) {
        const attachment = new MessageAttachment('./resources/map/[p4]Glacier (4p)_map.png');
        message.channel.send(attachment);
          message.reply('Glacier');
    }
});
}