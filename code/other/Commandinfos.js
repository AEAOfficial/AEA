
const { Client, MessageAttachment, RichEmbed } = require('discord.js');
const command = require('./command.js')
const fs = require('fs')
exports.code = function(){
    command(client, 'timer',  async message => {
        const { member, channel, content, mentions } = message
        const syntax = '/info <command>'
        if(message.content.endsWith('')){
            message.reply(`Please use the valid syntax: ${syntax}`)
        }
        if(message.content.endsWith('aeaelites')) {
            channel.send('Hands out a free copy of AEAElites!')
        }
    })
}


//COMMAND INFO
//AEAElite: Assigns the AEAElites Role for anyone who wishes it.

//Suggest: puts a suggestion up for a vote in white_check_mark-votes-x 

//<unit>: name of unit (no spaces), List the stats of a specified unit

//wvs <unit>:Gives weakness of a specified unit

//tipme:gives tips for AEA

//<#v#>:
//1v1, 2v2, 2v3, 3v3, 4v4, 5v5, gives a random map based on playercount

//<time>: Set a timer for an amount of time
