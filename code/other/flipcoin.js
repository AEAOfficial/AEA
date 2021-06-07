exports.code = function(){
    const { Client, MessageAttachment } = require('discord.js');
    const fs = require("fs");
    client.setMaxListeners(1000)
    const command = require('./command.js')
command(client, 'flipcoin',  async message => {
    const { member, channel, content, mentions } = message
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }


    
        var x = getRandomInt(1, 10);
            
        
        if(x <= 5) {
            message.reply('Heads')
        }
        if(x >= 6) {
            message.reply('Tails')
        }

    }); 
}