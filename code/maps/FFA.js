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
        if(message.content.includes('ffa')) {
        var x = getRandomInt(1, 11);
        }
    }


    if (x===1) {
        const attachment = new MessageAttachment('./resources/map/[p3]King_of_the_Middle_(3p)_map.png');
        message.channel.send(attachment);
        message.reply('King of the Middle');
    }
    if (x===2) {
        const attachment = new MessageAttachment('./resources/map/p3Forestry_Creek_3p_map.png');
        message.channel.send(attachment);
        message.reply('Forestry Creek');
    }
    if (x===3) {
        const attachment = new MessageAttachment('./resources/map/p4Cold_Corners_4p_map.png');
        message.channel.send(attachment);
        message.reply('Cold Corners');
    }
    if (x===4) {
        const attachment = new MessageAttachment('./resources/map/[p4]Islands_(4p)_map.png');
        message.channel.send(attachment);
        message.reply('Islands');
    }
    if (x===5) {
        const attachment = new MessageAttachment('./resources/map/[p4]Ice_Lake_(4p)_[by_hxyy]_map.png');
        message.channel.send(attachment);
        message.reply('Ice Lake');
    }
    if (x===6) {
        const attachment = new MessageAttachment('./resources/map/[p4]Island_freeze_(4p)_[by_hxyy]_map.png');
        message.channel.send(attachment);
        message.reply('Island Freeze');
    }
    if (x===7) {
        const attachment = new MessageAttachment('./resources/map/[p4]Lava_Vortex_(4p)_map.png');
        message.channel.send(attachment);
        message.reply('Lava Vortex');
    }
    if (x===8) {
        const attachment = new MessageAttachment('./resources/map/[p4]Nuclear_war_(4p)_[by_hxyy]_map.png');
        message.channel.send(attachment);
        message.reply('Nuclear War');
    }
    if (x===9) {
        const attachment = new MessageAttachment('./resources/map/[p4]Desert_(4p)_map.png');
        message.channel.send(attachment);
        message.reply('Desert');
    }
    if (x===10) {
        const attachment = new MessageAttachment('./resources/map/[p4]Depth_charges_(4p)_[by_hxyy]_map.png');
        message.channel.send(attachment);
        message.reply('Depth Charges');
    }
    if (x===11) {
        const attachment = new MessageAttachment('./resources/map/[p4]Lava_Maze_(4p)_map.png');
        message.channel.send(attachment);
        message.reply('Lava Maze');
    }
});

}