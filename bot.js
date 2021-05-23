const { Client, MessageAttachment, RichEmbed } = require('discord.js');
global.Discord = require('discord.js');
global.client = new Discord.Client();

client.setMaxListeners(0)

const Imports = require('./code/imports.js');
  if(Imports && Client){
   		Imports.code();
    	console.log('Loading imports');
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
	member.send(`\n										Rules\n
	1. No excessive toxic behavior. This server is comprised of both competitive players and casual players. Coexistence isn't much to ask.\n
	2. Do not beg or complain for features to be changed, added, or removed.\n
	3. Do not spam ping roles, or other members.\n
	4. ONLY ping the AEA elites if you have at least 2 players already, and an available host.\n
	5. ONLY ping the @Hosts role if you have at least 2 players already gathered.\n
	6. Do not sabotage or cheat anyone in a game, such actions will get you banned or punished.\n
	7. Be respectful. Especially to the @Dev Team Alpha. We work for free, and make content for you to enjoy. Don't take us for granted, and just be a decent human being.\n
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
	.setAuthor('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128')
	.setThumbnail('https://camo.githubusercontent.com/7203f752f0f936475f4ac41dcd3ef9d93af9c2452176a05a1e2b081d1a255ef1/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f69636f6e732f3630363538363230323934323037393031372f34323362346662626563663162626164353566653631343638303337623334642e776562703f73697a653d313238')
    .addField(':warning: Use / for all commands any OTHER command won\'t work! :warning:')
	.addField('/AEAElite', false)
	.addField('/suggest', ':warning:\nMust be in the suggestions channel!:warning:', false)
	.addField('/<unit>', false)
	.addField('/wvs <unit>', 'Gives weakness of specific unit', false)
	.addField('/tipme', false)
	.addField('/<#v#>', '1v1, 2v2, 2v3, 3v3, 4v4, 5v5 \n Gives a random map based on playercount', false)
	.addField('/flipcoin', false)
	.addField('<time>', 'Set a timer for an amount of time \n (Max: 10m)', false)
	.setDescription(':pencil:Lists all comands associated with the bot:pencil:')
	.setTimestamp()
	.setFooter('More Soon!', 'https://camo.githubusercontent.com/7203f752f0f936475f4ac41dcd3ef9d93af9c2452176a05a1e2b081d1a255ef1/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f69636f6e732f3630363538363230323934323037393031372f34323362346662626563663162626164353566653631343638303337623334642e776562703f73697a653d313238');

/*
const llist = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Land Units List')
	.setURL('')
	.setAuthor('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128')
	.setThumbnail('https://camo.githubusercontent.com/7203f752f0f936475f4ac41dcd3ef9d93af9c2452176a05a1e2b081d1a255ef1/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f69636f6e732f3630363538363230323934323037393031372f34323362346662626563663162626164353566653631343638303337623334642e776562703f73697a653d313238')
	.addField('Land Units', 'Artillery \n Achilles \n Buffalo \n CombatEngineer  \n Comet \n DemoTruck \n HeavyTank \n HeavyArtillery \n HoverTank \n HeavyHoverTank \n LaserTank \n MissileTank \n PlasmaSniper \n SiegeTank \n Scout \n Saber \n Tank \n Typhoon \n TeslaTank \n Zephyr', false)
	.setDescription('Lists all land units')
	.setTimestamp()
	.setFooter('More Soon!', 'https://camo.githubusercontent.com/7203f752f0f936475f4ac41dcd3ef9d93af9c2452176a05a1e2b081d1a255ef1/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f69636f6e732f3630363538363230323934323037393031372f34323362346662626563663162626164353566653631343638303337623334642e776562703f73697a653d313238');
const alist = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Air Units List')
	.setURL('')
	.setAuthor('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128')
	.setThumbnail('https://camo.githubusercontent.com/7203f752f0f936475f4ac41dcd3ef9d93af9c2452176a05a1e2b081d1a255ef1/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f69636f6e732f3630363538363230323934323037393031372f34323362346662626563663162626164353566653631343638303337623334642e776562703f73697a653d313238')
	.addField('Air Units', 'ApacheHelicopter \n Amphibious Jet \n AttackJet \n Bomber \n Dropship \n Gunship \n GrandSlamBomber \n HeavyInterceptor \n HeavyMissileAircraft \n Helicopter \n Interceptor \n Kirov \n LightGunship \n MissileAirship \n MAE-1 \n PhantomScout \n S-1 \n S-2 \n SwallowTail', false)
	.setDescription('Lists all air units')
	.setTimestamp()
	.setFooter('More Soon!', 'https://camo.githubusercontent.com/7203f752f0f936475f4ac41dcd3ef9d93af9c2452176a05a1e2b081d1a255ef1/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f69636f6e732f3630363538363230323934323037393031372f34323362346662626563663162626164353566653631343638303337623334642e776562703f73697a653d313238');
const wlist = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Sea Units List')
	.setURL('')
	.setAuthor('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128')
	.setThumbnail('https://camo.githubusercontent.com/7203f752f0f936475f4ac41dcd3ef9d93af9c2452176a05a1e2b081d1a255ef1/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f69636f6e732f3630363538363230323934323037393031372f34323362346662626563663162626164353566653631343638303337623334642e776562703f73697a653d313238')
	.addField('Sea Units', 'AntiAirBoat \nAmphibiousWarship \nAttackSubmarine \nBattleCruiser\nBattleship \nCorvette \nDestroyer \nDreadnought \nFrigate \nGunboat \nHeavyMissileShip \nHeavyBattleship \nHeavysub \nLRS \nMissileship \nNautilus \nNavalCarrier \nReconsub \nSelenium \nTargetsub \nThunderHead', false)
	.setDescription('Lists all sea units')
	.setTimestamp()
	.setFooter('More Soon!', 'https://camo.githubusercontent.com/7203f752f0f936475f4ac41dcd3ef9d93af9c2452176a05a1e2b081d1a255ef1/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f69636f6e732f3630363538363230323934323037393031372f34323362346662626563663162626164353566653631343638303337623334642e776562703f73697a653d313238');
const EXlist = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Experimental Units List')
	.setURL('')
	.setAuthor('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128')
	.setThumbnail('https://camo.githubusercontent.com/7203f752f0f936475f4ac41dcd3ef9d93af9c2452176a05a1e2b081d1a255ef1/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f69636f6e732f3630363538363230323934323037393031372f34323362346662626563663162626164353566653631343638303337623334642e776562703f73697a653d313238')
	.addField('Experimental Units', 'Firebee \n Mammothtank \nExperimentalTank \nExperimentalSamTank \n ScienceVessel \n ShieldedHovertank \n Nukedrone \n Mothership \n ExperimentalMech \n ExperimentalSpider \n NavalCarrier \n FlyingFortress', false)
	.setDescription('Lists all experimental units')
	.setTimestamp()
	.setFooter('More Soon!', 'https://camo.githubusercontent.com/7203f752f0f936475f4ac41dcd3ef9d93af9c2452176a05a1e2b081d1a255ef1/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f69636f6e732f3630363538363230323934323037393031372f34323362346662626563663162626164353566653631343638303337623334642e776562703f73697a653d313238');
const mlist = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Mech Units List')
	.setURL('')
	.setAuthor('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128')
	.setThumbnail('https://camo.githubusercontent.com/7203f752f0f936475f4ac41dcd3ef9d93af9c2452176a05a1e2b081d1a255ef1/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f69636f6e732f3630363538363230323934323037393031372f34323362346662626563663162626164353566653631343638303337623334642e776562703f73697a653d313238')
	.addField('Mech Units', 'ArtilleryMech \n AntiairMech \n AssaultMech \n BasicMech \n FlameMech \n HeavyMech \n HeavyMobileTurret \n HeavyArtilleryMech \n LightminigunMech \n MinigunMech \n PaladinMech \n PlasmaMech \n RocketMech \n Skirmisher \n MechEngineer', false)
	.setDescription('Lists all mech units')
	.setTimestamp()
	.setFooter('More Soon!', 'https://camo.githubusercontent.com/7203f752f0f936475f4ac41dcd3ef9d93af9c2452176a05a1e2b081d1a255ef1/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f69636f6e732f3630363538363230323934323037393031372f34323362346662626563663162626164353566653631343638303337623334642e776562703f73697a653d313238');
*/


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
	



//if(message.content == "/give" && client.users.get("242687584373964801") ){
//	message.guild.fetchMember('242687584373964801').then(member => {
//		member.addRole('692034330108887123');	
//	});
//}

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

    if (message.content == '/st' && client.users.get("242687584373964801") && message.member.roles.cache.some(role => role.name === 'Developer')){
    //process.exit();
    }
    
    
	const attachment = new MessageAttachment('./resources/NuclearDrone.png');
    if (message.content.toLowerCase() === 'bruh') {
		message.channel.send(attachment);
    }


	if (message.content.toLowerCase() === 'hi' || message.content.toLowerCase() === 'hey'){
		message.member.roles.add('620321947737260063');
	}



});
