//_____________Dont touch Zone start
// Fixed Offline
exports.code = function(){
const { Client, Attachment } = require('discord.js');

client.setMaxListeners(0)
//_____________Dont touch Zone end
const config = require("./prefix.json");

client.on("raw", event => {
	console.log(event);
	const eventName = event.t;
	if(eventName === "MESSAGE_REACTION_ADD"){
		if(event.d.message_id === "694317573583536148")
		{
			var reactionChannel = client.channels.get(event.d.channel_id);
			if(reactionChannel.message.has(event.d.message_d))
				return;
			else{
				reactionChannel.fetchMessage(event.d.message_id)
				.then(msg => {
					var msgReaction = msg.reactions.get(event.d.emoji + ":" + event.d.emoji.id);
					var user = client.users.get(event.d.user_id);
					client.emit("messageReactionAdd", msgReaction, user);
				})
				.catch(err => console.log(err));
			}
		}
	}
	else if(eventName === "MESSAGE_REACTION_REMOVE")
	{
		if(event.d.message_id === "694317573583536148")
		{
			var reactionChannel = client.channels.get(event.d.channel_id);
			if(reactionChannel.message.has(event.d.message_d))
				return;
			else{
				reactionChannel.fetchMessage(event.d.message_id)
				.then(msg => {
					var msgReaction = msg.reactions.get(event.d.emoji + ":" + event.d.emoji.id);
					var user = client.users.get(event.d.user_id);
					client.emit("messageReactionRemove", msgReaction, user);
				})
				.catch(err => console.log(err));
			}
		}
	}
});
 
client.on("messageReactionAdd",(message, user) => {
	console.log(user.username + " reacted");
	var rolename = messageReaction.emoji.name;
	var role = messageRecation.message.guild.roles.find(role => role.name.toLowerCase() === roleName.toLowerCase());
	if(role)
	{
		var member = messageReaction.message.guild.member.find(member => member.id === user.id);
		if(member)
		{
			member.addRole(role.id);
			console.log("addedrole");
		}
	}
	
});
client.on("messageReactionRemove",(message, user) => {
	var rolename = messageReaction.emoji.name;
	var role = messageRecation.message.guild.roles.find(role => role.name.toLowerCase() === roleName.toLowerCase());
	if(role)
	{
		var member = messageReaction.message.guild.member.find(member => member.id === user.id);
		if(member)
		{
			member.removeRole(role.id);
			console.log(" Removed role");
		}
	}
	
});
 
client.on("message", message => {
let guild = client.guilds.get('606586202942079017');
let member = guild.member(message.author);
let nickname = member ? member.displayName : null;
   const taco = message.content
         const a1 = new Discord.RichEmbed()
         	.setColor('#1500f7')
	        .setTitle('Announcement')
         	.setAuthor(nickname, 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128')
         	.setDescription(taco)
         	.addBlankField()
         	.setURL('')
	        .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
         	.setTimestamp()
         	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');

//https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128
 if(message.author.bot) return;  

 if(message.content.toLowerCase().endsWith('#')){

 if(message.member.roles.some(role => role.name === 'Bot Developer')){
	let channel = message.guild.channels.find(channel => channel.name === "announcements")
	if(!channel){
    	message.reply('The "annoucements" channel must exist')
	}else {
		message.guild.channels.find(channel => channel.name === "announcements").send(a1)
	}
	
     }
    }
  });
}

