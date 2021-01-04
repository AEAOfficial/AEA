exports.code = function(){
    const { Client, MessageAttachment } = require('discord.js');
    const fs = require("fs");
    client.setMaxListeners(1000)

client.on("message", message => {

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
    }

	if(message.content.startsWith('/')){
        if(message.content.includes('2v2')) {
        var x = getRandomInt(1, 13);
        }
    }
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
        const attachment = new MessageAttachment('./resources/map/[p4]Depth charges (4p) [by hxyy]_map.png');
        message.channel.send(attachment);
          message.reply('Depth Charges');
    }
  if (x=== 5) {
        const attachment = new MessageAttachment('./resources/map/[p4]Desert (4p)_map.png');
        message.channel.send(attachment);
          message.reply('Desert');
    }
  if (x=== 6) {
        const attachment = new MessageAttachment('./resources/map/[p4]Ice Lake (4p) [by hxyy]_map.png');
        message.channel.send(attachment);
          message.reply('Ice Lake');
    }
  if (x=== 7) {
        const attachment = new MessageAttachment('./resources/map/[p4]Island freeze (4p) [by hxyy]_map.png');
        message.channel.send(attachment);
          message.reply('Island Freeze');
    }
  if (x=== 8) {
        const attachment = new MessageAttachment('./resources/map/[p4]Islands (4p)_map.png');
        message.channel.send(attachment);
          message.reply('Islands');
    }
  if (x=== 9) {
        const attachment = new MessageAttachment('./resources/map/[p4]Lava Maze (4p)_map.png');
        message.channel.send(attachment);
          message.reply('Lava Maze');
    }
  if (x=== 10) {
        const attachment = new MessageAttachment('./resources/map/[p4]Lava Vortex (4p)_map.png');
        message.channel.send(attachment);
          message.reply('Lava Vortex');
    }
  if (x=== 11) {
        const attachment = new MessageAttachment('./resources/map/[p4]Magma Island (4p)_map.png');
        message.channel.send(attachment);
          message.reply('Magma Island');
    }
   if (x=== 12) {
        const attachment = new MessageAttachment('./resources/map/[p4]Glacier (4p)_map.png');
        message.channel.send(attachment);
          message.reply('Glacier');
    }
   if (x=== 13) {
        const attachment = new MessageAttachment('./resources/map/[p4]Nuclear war (4p) [by hxyy]_map.png');
        message.channel.send(attachment);
          message.reply('Nuclear War');
    }
});
}