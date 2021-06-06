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
        if(message.content.includes('1v2')) {
        var x = getRandomInt(1, 2);
        }
    }


    if (x===1) {
        const attachment = new MessageAttachment('./resources/map/[p3]Last_Survivor_(3p)_map.png');
        message.channel.send(attachment);
        message.reply('Last Survivor');
    }
    if (x===2) {
        const attachment = new MessageAttachment('./resources/map/[p3]Hercules_(2vs1p)_[by_uber]_map.png');
        message.channel.send(attachment);
        message.reply('Hercules');
    }
});

}