//_____________Dont touch Zone start
// Fixed Offline
exports.code = function(){
const { Client, MessageAttachment } = require('discord.js');

client.setMaxListeners(0)


//_____________Dont touch Zone end

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
let avatar = message.author.displayAvatarURL();
let attach = MessageAttachment
   const taco = message.content.split('/suggest').join('')
         var a1 = new Discord.MessageEmbed()
         	.setColor('#1500f7')
	        .setTitle(`New Suggestion from ${nickname}!`)
         	.setAuthor('AEA', client.user.displayAvatarURL())
			.setDescription(taco)
			.addField('Vote Options:','✅ or ❌')
         	.setURL('')
			.setImage(attach)
	        .setThumbnail(avatar)
         	.setTimestamp()
         	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');

//https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128
if(message.author.bot) return; 

if(message.content.toLowerCase().startsWith('/suggest')){
if (message.channel.id === '711753321106636830'){
	message.delete()
	var channel = message.member.guild.channels.cache.find(channel => channel.name === "✅-votes-❌")
	if(!channel){
		message.delete()
    	message.reply('The "✅-votes-❌" channel must exist')
	}
	
	
	else {
		message = channel.send(a1).then(embedMessage => {
			var react2 = embedMessage.react('✅')
			var react1 = embedMessage.react('❌')
			if (!react2)
			react2.remove()
			if (!react1)
			react1.remove()
		});

		
	}


	} else {
		message.delete()
		message.reply('This is not the suggestions channel!')
	
	}
	

	}


  });
}

