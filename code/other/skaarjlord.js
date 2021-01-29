//_____________Dont touch Zone start
// Fixed Offline
exports.code = function(){
const { Client, MessageAttachment } = require('discord.js');

client.setMaxListeners(0)


//_____________Dont touch Zone end
const config = require("../other/prefix.json");
client.on('ready', () => {
      
        
});

client.on("message", message => {

        if (message.content.toLowerCase() === '/aeaelite') {
                        message.member.roles.add('694316498553929778');

		}




});
 
client.on("message", message => {

let guild = client.guilds.cache.get('606586202942079017');
let member = guild.member(message.author);
let nickname = member ? member.displayName : null;
let userava = message.author;
   const taco = message.content
         const a1 = new Discord.MessageEmbed()
         	.setColor('#1500f7')
	        .setTitle('New Suggestion!')
         	.setAuthor(nickname, userava.avatarURL)
			 .setDescription(taco)
			.addField('Vote Options:','✅ or ❌')
         	
         	.setURL('')
	        .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
         	.setTimestamp()
         	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');

//https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128
 if(message.author.bot) return; 

if(message.content.toLowerCase().startsWith('/suggest')){
if (message.channel.id === '711753321106636830'){

	let channel = message.member.guild.channels.cache.find(channel => channel.name === "❌-votes-✅")
	if(!channel){

    	message.reply('The "❌-votes-✅" channel must exist')
	}
	
	
	else {
		message.member.guild.channels.cache.find(channel => channel.name === "❌-votes-✅").send(a1)
	}


	} else {


	message.reply('This is not the suggestions channel!')
	
	}
	

	}


  });
}

