const { channel } = require('diagnostics_channel');
const { Client, MessageAttachment, RichEmbed } = require('discord.js');
global.Discord = require('discord.js');
global.client = new Discord.Client();
const fs = require('fs');
const { arch } = require('os');
const { start } = require('repl');
client.setMaxListeners(0)

const Imports = require('./code/imports.js');
  if(Imports && Client){
   		Imports.code();
    	console.log('Loading imports');
}

const Loader = require('./code/units/#LOADER.js');
  if(Loader && Client){
    Loader.code();

    console.log('Loader Initialized...')
  }
var process = require('./process.env')
process.code();

// Run locally, replace process.env.BOT_TOKEN
client.login(BOT_TOKEN);

client.on('ready', () => {
    client.user.setStatus('available')
    client.user.setPresence({
        game: {
            name: 'AEA, Type /list',
	    type: "Listening"
        }
    });
	console.log('Ready!');
});

client.on('guildMemberAdd', member => {
	const channel = member.guild.channels.cache.find(channel => channel.name === '》general')
	channel.send(`Welcome to the Official AEA Mod Pack discord server ${member}! \nCheck the archives section for all AEA downloads, and #》find-players when you’re ready to play! \nPlease check your dms for rules and more details!`);
	member.send(`\n										Rules of AEA\n
	1. No excessive toxic behavior. The server is comprised of competitive players and casual players. Respect one another it's not to much to ask.  \n
	2. Original AEA is configured and edited by Skaarjlord and horseman address all opinions and suggestions with them for AEA. \n
	3. Lithium Stargazzer is owner and creator of all BlackGuard based unit sprites and code. DO NOT ping him for balance based suggestions, all BG stat edits and balance patches are done by Horseman \n
	4. The @AEAElites role is for players who wish to be pinged when multiplayer games with 4 players or more are set up. DO NOT PING THIS ROLE UNLESS THERE ARE 3 PLAYERS READY. \n
	5. In game respect is something that's hard to define as many players are called toxic for just playing aggressively. \n
	(Definition of in game toxic behavior) \n
	Racial slurs. Calling people trash. Sabotaging teammates. throwing matches. Reclaiming allied command centers. Or TURNING OFF SHARED CONTROL AS A C CLASS OR LOWER \n
	6. DO NOT EXCESSIVELY bother the Devs or the Mods. We are busy we are fine with pings for important matters that requires our attention. And Hprseman  won't get mad if you pinged him to make a balance suggestion. \n 
	But don't ping us to edit your role which you can do yourself in 》auto-roles  or to ask us what our favorite color is. \n
	7. No Advertising. CopyPasta. Political adverts. Discriminatory or Deragatory Videos or images. Or anything that would in general be questionable to general moral guidelines. \n
	All NSFW channel related content is not regulated by Admins unless it is to degrade or bully a individual. It's also age role locked. So do not complain about what you see there. As you yourself stated you are 18years or older. And agreed to the warning signs \n
												Server Info & Tips\n
	1. The @AEA Elites role is for players who wished to be pinged when games are actively being set up. Anyone may acquire this role in #》auto-roles channel.\n
	2. Find players in #》find-players.\n
	3. If you want to further you knowledge in AEA Strategy check the #》aea-guide.\n
	4. If you want to download AEA Main or AEA Beta, you can do so in #》mod-main-download, or #》mod-beta-download.\n
	5. Type /list in the _bot_ channel for a list of bot commands!\n
	6. Any all further questions can go to horseman#0810\n`)
	member.roles.add('620321947737260063');
});

const clist = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Commands')
	.setURL('')
	.setAuthor('SkaarjLord', 'https://imgur.com/QMVH0Hq.png')
	.setThumbnail('https://camo.githubusercontent.com/7203f752f0f936475f4ac41dcd3ef9d93af9c2452176a05a1e2b081d1a255ef1/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f69636f6e732f3630363538363230323934323037393031372f34323362346662626563663162626164353566653631343638303337623334642e776562703f73697a653d313238')
    .setDescription(':pencil:Lists all comands associated with the bot:pencil:','\u2800', false)
    .addField(':warning: Use / for all commands any OTHER command won\'t work! :warning:','\u2800',false)
	.addField('=====AEA=====','\u2800',false)
    .addField('/AEAElite \n Grants access to AEA Elite role','\u2800',false)
    .addField('/<unit> \n Lists a specified units stats','\u2800',false)
	.addField('/units \n Lists all units','\u2800',false)
	.addField('/list \n Lists all units','\u2800',false)
    .addField('/wvs <unit>','\u2800',false)
    .addField('/tipme \n Give a random tip from AEA Guides','\u2800',false)
    .addField('/<#v#> \n Chooses a random map from the map pack','\u2800',false)
	.addField('/<time> \n Sets a timer for the specified amount of time','\u2800',false)
	.addField('/flipcoin \n Flips a coin for heads or tails','\u2800',false)
    .addField('/suggest \n Must run this command in #suggestions ','\u2800',false)



client.on('message', (message, user) => {

var command = '/purge';
if(message.content.startsWith(command)){




	if (!message.member.permissions.has("MANAGE_MESSAGES")) {
		message.reply('You do not have permission to do that');
		return;
	}
	const args = message.content.split(' ').slice(1);
	const amount = args.join(' ');
	if(!amount) {
		message.reply('Put a number dumbass')
	}
	if (amount > 100) return message.reply('You can`t delete more than 100 messages at once!'); 
	if (amount < 1) return message.reply('You have to delete at least 1 message!'); 
	message.channel.bulkDelete(amount)
	message.reply(`Deleted messages!`); 	
	


} 
	

client.on("message", message => {
	if (message.content.toLowerCase() === '/' && message.author.id === '242687584373964801') {
					message.member.roles.add('715721406800724038');
	}
});



/*
    //const role = client.guild.find(role => role.name === 'Member');
    //If anything
    let role = message.guild.roles.find(r => r.name === "Member");
    if(message.content){
	    if(message.author.bot) return;  
         message.guild.fetchMember(message.author).then(member => {
           message.guild.member.roles.add('620321947737260063');	
           
          });
		     
    }

*/

	if(message.content == '/units'){

		fs.readFile('./code/units/LIST.txt', 'utf8' , (err, data) => {
				if (err) {
				console.error(err)
				return
				}	
				message.channel.send(`${data.split(",").join("\n").slice(0,1513)}`)
				message.channel.send(`${data.split(",").join("\n").slice(1513)}`)
				
		})
	}

	if(message.content == '/muteall' && message.member.roles.cache.some(role => role.name === 'Developer')){
        let channel = message.member.voiceChannel;
        for (let member of channel.members) {
            member[1].setMute(true)
           
        }
    }

    if(message.content == '/unmuteall' && message.member.roles.cache.some(role => role.name === 'Developer')){
            let channel = message.member.voiceChannel;
            for (let member of channel.members) {
                member[1].setMute(false)
               
            }
        }

    if(message.content == '/stop' && client.users.get("242687584373964801")){
		message.channel.send('Shutting down...').then(m => {
        		client.destroy();
     		});
        }
    if(message.content == '/help'){
	message.channel.send(clist);
    	}    
	const attachment = new MessageAttachment('./resources/NuclearDrone.png');
    if (message.content.toLowerCase() === 'bruh') {
		message.channel.send(attachment);
    }

});
