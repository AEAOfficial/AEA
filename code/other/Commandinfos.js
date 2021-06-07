
const { Client, MessageAttachment, RichEmbed } = require('discord.js');
const command = require('./command.js')
const fs = require('fs')
exports.code = function(){

    function Timer(){
        const Timer = setTimeout(timeup, durations[durationType]);
    


         const clist = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Info Commands')
	.setURL('')
	.setAuthor('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128')
	.setThumbnail('https://camo.githubusercontent.com/7203f752f0f936475f4ac41dcd3ef9d93af9c2452176a05a1e2b081d1a255ef1/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f69636f6e732f3630363538363230323934323037393031372f34323362346662626563663162626164353566653631343638303337623334642e776562703f73697a653d313238')
        .setDescription('command information','\u2800', false)
        .addField ('/AEAElite',false)
        .setDescription('Assigns the AEAElites Role for anyone who wishes it.')


   }

//COMMAND INFO
//AEAElite: Assigns the AEAElites Role for anyone who wishes it.

//Suggest: puts a suggestion up for a vote in white_check_mark-votes-x 

//<unit>: name of unit (no spaces), List the stats of a specified unit

//wvs <unit>:Gives weakness of a specified unit

//tipme:gives tips for AEA

//<#v#>:
1v1, 2v2, 2v3, 3v3, 4v4, 5v5, gives a random map based on playercount

//<time>: Set a timer for an amount of time
