
const { Client, MessageAttachment, RichEmbed } = require('discord.js');
global.Discord = require('discord.js');
global.client = new Discord.Client();

client.setMaxListeners(0)

const Imports = require('./code/imports.js');
  if(Imports && Client){
   		Imports.code();
    		console.log('Loading imports');
  }

client.login(process.env.BOT_TOKEN);

client.once('ready', () => {
	console.log('Ready!');
});

client.on('ready', () => {
    client.user.setStatus('available')
    client.user.setPresence({
        game: {
            name: 'AEA, Type /list',
	    type: "Listening"
        }
    });
});

client.on('guildMemberAdd', member => {

    const channel = member.guild.channels.find(ch => ch.name === 'general');
    if (!channel) return;
    channel.send(`Welcome to AEA, ${member}!`);

    //const member = message.mentions.members.first();
    //member.addRole(role);
});

const talkedRecently = new Set();
// Land units
const clist = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Commands')
	.setURL('')
	.setAuthor('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128')
	.setThumbnail('https://camo.githubusercontent.com/7203f752f0f936475f4ac41dcd3ef9d93af9c2452176a05a1e2b081d1a255ef1/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f69636f6e732f3630363538363230323934323037393031372f34323362346662626563663162626164353566653631343638303337623334642e776562703f73697a653d313238')
	.addField('/AEAElite', 'Assigns the AEAElites Role for anyone who wishes it...', false)
	.addField('/<Suggestion>', 'Puts a suggestion up for a vote in ❌-votes-✅ \n Must be in the suggestions channel!', false)
	.addField('/list', 'Land, Air, Water, or Exp \n Lists all the units In a specified category', false)
	.addField('<unit>', 'name of the unit (nospaces) \n Lists the stats of a specified unit ', false)
	.addField('/wvs <unit>', 'Gives weaknesses of a specified unit', false)
	.addField('/tipme', 'Gives Tips For AEA', false)
	//.addField('/teams2', 'A team organizer (still needs testing)', false)
	.addField('/<#v#>', '1v1, 2v2, 2v3, 3v3, 4v4, 5v5 \n Gives a random map based on playercount', false)
	.addField('/flipcoin', 'Heads or Tails?', false)
	.addField('<time>', 'Set a timer for an amount of time \n (Max: 10m)', false)

	//.addField('a', '<announcementtext>', false)
	.setDescription('Lists all comands associated with the bot')
	.setTimestamp()
	.setFooter('More Soon!', 'https://camo.githubusercontent.com/7203f752f0f936475f4ac41dcd3ef9d93af9c2452176a05a1e2b081d1a255ef1/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f69636f6e732f3630363538363230323934323037393031372f34323362346662626563663162626164353566653631343638303337623334642e776562703f73697a653d313238');
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



client.on('message', (message, user) => {
if(message.content == '/purge'){
	const msgArray = message.content.split(' ');
	const args = msgArray.slice(1);
	if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send('You do not have perms to do that');
	
	let delAmount;

	if (isNaN(args[0]) || parseInt(args[0]) <= 0) { return message.reply('Please put a number!') }
	
	if(parseInt(args[0]) > 99){
		return message.reply('You cannot delete more than 100 message'); 
         }
} else{
	delAmount = parseInt(args[0]); 

	channel.bulkDelete(delAmount + 1, true); 
	message.reply(`Deleted ${delAmount} messages`); 	
}



//if(message.content == "/give" && client.users.get("242687584373964801") ){
//	message.guild.fetchMember('242687584373964801').then(member => {
//		member.addRole('692034330108887123');	
//	});
}

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
    if(message.content == '/list'){
	message.channel.send(clist);
    	}

    if(message.content == '/list Land' || message.content == '/list land'){
	message.channel.send(llist);
    	}

    if(message.content == '/list Mech' || message.content == '/list mech'){
	message.channel.send(mlist);
    	}

    if(message.content == '/list Air' || message.content == '/list air'){
	message.channel.send(alist);
    	}

    if(message.content == '/list Water' || message.content == '/list water'){
	message.channel.send(wlist);
    	}

    if(message.content == '/list Exp' || message.content == '/list exp'){
	message.channel.send(EXlist);
    	}
       


    if (message.content == '/stop' && client.users.get("242687584373964801") && message.member.roles.cache.some(role => role.name === 'Developer')){
    //process.exit();
    }
    
    
	const attachment = new MessageAttachment('./resources/NuclearDrone.png');
    if (message.content.toLowerCase() === 'bruh') {
		message.channel.send(attachment);
    }




});
