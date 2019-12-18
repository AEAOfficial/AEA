const { Client, Attachment, RichEmbed } = require('discord.js');
global.Discord = require('discord.js');
global.client = new Discord.Client();


const Anubis = require('./coders/anubis.js');


client.setMaxListeners(45)


if(Anubis && Client){
   		 Anubis.code();
    		console.log('Anubis loaded');
}


client.login(process.env.BOT_TOKEN);
//BOT_TOKEN is the Client Secret

client.once('ready', () => {
	console.log('Ready!');
});

client.on('ready', () => {
    if (client.user.Status('Online'))
	{
	client.user.setStatus('Type /list');
	}
});

client.on('guildMemberAdd', member => {

    const channel = member.guild.channels.find(ch => ch.name === 'general');
    if (!channel) return;
    channel.send(`Welcome to AEA, ${member}!`);
    //const role = guild.roles.find(role => role.name === 'Member');
    //const member = message.mentions.members.first();
    //member.addRole(role);
});

const talkedRecently = new Set();
// Land units
const unitlist = new RichEmbed()
	.setColor('#1500f7')
	.setTitle('Units List and Commands')
	.setURL('')
	.setAuthor('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.addField('/random', '<options>', false)
	.addField('<unit>', 'name of the unit', false)
	.addField('Experimental Units', ' Experimental Mech \n Mothership \n Naval Carrier', false)
	.addField('Land Units', ' Comet \n Heavy Tank \n Hound APC \n Heavy Artillery \n Laser Tank \n Lynx \n Plasma Sniper \n Tank \n Typhoon \n Zephyr', false)
	.setDescription('Lists all units and comands \nAssociated with the bot')
	.setTimestamp()
	.setFooter('More Soon!', 'https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128');
//Exp units
const mothership = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Mothership')
	.setURL('')
	.setAuthor('LemonsHQ', 'https://cdn.discordapp.com/avatars/242687584373964801/4b20eb44bfff0b11f7447ed582fedbb2.png?size=128')
	.setDescription(" - Ultimate Carrier \n- Armed with hellfire cannons and missile launchers \n- Built in fabricator \n- Carries 16 Units \n- Goes nuclear on death")
	.addBlankField()
	.addField("Stats", "Price $150,000 \n Health 15,000 \n Attack Range 320 \n Move Speed 0.65 \n Build Speed 123.8s")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const expmech = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Experimental Mech')
	.setURL('')
	.setAuthor('LemonsHQ', 'https://cdn.discordapp.com/avatars/242687584373964801/4b20eb44bfff0b11f7447ed582fedbb2.png?size=128')
	.setDescription(" - Very heavily armed and armored \n- Can attack ground and light air \n- Sub attack when over water \n- Very slow \n - Can self-repair \n- Can move over water")
	.addBlankField()
	.addField("Stats", "Price $125,000 \n Health 15,000 \n Attack Range 310 \n Move Speed 0.30 \n Build Speed 92.4s")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const navalcarrier = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Naval Carrier')
	.setURL('')
	.setAuthor('LemonsHQ', 'https://cdn.discordapp.com/avatars/242687584373964801/4b20eb44bfff0b11f7447ed582fedbb2.png?size=128')
	.setDescription(" - Experimental Naval Carrier \n- Can make Air and Naval units \n- Built in fabricator \n- Carries 16 Units \n- Goes nuclear on death \n- Can only have 5 at a time")
	.addBlankField()
	.addField("Stats", "Price $65,000 \n Health 7,500 \n Attack Range 350 \n Move Speed 0.45 \n Build Speed 111.1s")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
//Land units
const tank = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Tank')
	.setURL('')
	.attachFiles(['./resources/tank.png'])
	.setAuthor('LemonsHQ', 'https://cdn.discordapp.com/avatars/242687584373964801/4b20eb44bfff0b11f7447ed582fedbb2.png?size=128')
	.setDescription(" - Can attack ground only \n- Fast but low health")
	.addBlankField()
	.addField("Stats", "Price $350 \n Health 230 \n Attack Range 130 \n Move Speed 1.10 \n Build Speed 4.8s")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://tank.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const typhoon = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Typhoon')
	.setURL('')
	.attachFiles(['./resources/typhoon.png'])
	.setAuthor('LemonsHQ', 'https://cdn.discordapp.com/avatars/242687584373964801/4b20eb44bfff0b11f7447ed582fedbb2.png?size=128')
	.setDescription(" - Landing assault craft \n- Fast \n- Very light Mounted machine-guns \n- Carries 4 units")
	.addBlankField()
	.addField("Stats", "Price $2,500 \n Health 300 \n Attack Range 140 \n Move Speed 1.6 \n Build Speed 33.3s")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://typhoon.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const zephyr = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Zephyr')
	.setURL('')
	.attachFiles(['./resources/z.png'])
	.setAuthor('LemonsHQ', 'https://cdn.discordapp.com/avatars/242687584373964801/4b20eb44bfff0b11f7447ed582fedbb2.png?size=128')
	.setDescription(" - Medium \n- Armed with a prototype flamethrower \n- Short range ground attack \n- Can auto-repair")
	.addBlankField()
	.addField("Stats", "Price $1,750 \n Health 900 \n Attack Range 140 \n Move Speed 1.0 \n Build Speed 19.6s")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://z.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const plasmasniper = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Plasma Sniper')
	.setURL('')
	.attachFiles(['./resources/plasmasniper.png'])
	.setAuthor('LemonsHQ', 'https://cdn.discordapp.com/avatars/242687584373964801/4b20eb44bfff0b11f7447ed582fedbb2.png?size=128')
	.setDescription(" - Long range ground attack \n- Very weak armour with light shield \n- Can only hit ground")
	.addBlankField()
	.addField("Stats", "Price $1,600 \n Health 100 \n Shield 300 \n Attack Range 300 \n Move Speed 0.8 \n Build Speed 18.5s")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://plasmasniper.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const comet = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Comet')
	.setURL('')
	.attachFiles(['./resources/comet.png'])
	.setAuthor('LemonsHQ', 'https://cdn.discordapp.com/avatars/242687584373964801/4b20eb44bfff0b11f7447ed582fedbb2.png?size=128')
	.setDescription(" - Fast \n- Can attack ground only \n- Light armor \n- High spread, weak vs. single targets")
	.addBlankField()
	.addField("Stats", "Price $950 \n Health 450 \n Attack Range 150 \n Move Speed 1 \n Build Speed 11.1s")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://comet.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const houndapc = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Hound APC')
	.setURL('')
	.attachFiles(['./resources/houndapc.png'])
	.setAuthor('LemonsHQ', 'https://cdn.discordapp.com/avatars/242687584373964801/4b20eb44bfff0b11f7447ed582fedbb2.png?size=128')
	.setDescription(" - Long Range Attack \n- Powerful in groups, but glass cannons \n- Can only attack ground")
	.addBlankField()
	.addField("Stats", "Price $350 \n Health 100 \n Attack Range 130 \n Move Speed 1.4 \n Build Speed 3.3s")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://houndapc.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const heavytank = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Heavy Tank')
	.setURL('')
	.attachFiles(['./resources/hvytank.png'])
	.setAuthor('LemonsHQ', 'https://cdn.discordapp.com/avatars/242687584373964801/4b20eb44bfff0b11f7447ed582fedbb2.png?size=128')
	.setDescription(" - Heavily armed \n- Can attack ground \n- Light air attack")
	.addBlankField()
	.addField("Stats", "Price $800 \n Health 600 \n Attack Range 160 \n Move Speed 0.8 \n Build Speed 10.7s")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://hvytank.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const lasertank = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Laser Tank')
	.setURL('')
	.attachFiles(['./resources/lasertank.png'])
	.setAuthor('LemonsHQ', 'https://cdn.discordapp.com/avatars/242687584373964801/4b20eb44bfff0b11f7447ed582fedbb2.png?size=128')
	.setDescription(" - Can attack ground and air \n- Weak vs. multiple units \n- Powerful single shot, slow recharge")
	.addBlankField()
	.addField("Stats", "Price $1,300 \n Health 400 \n Attack Range 220 \n Move Speed 0.7 \n Build Speed 12.8s")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://lasertank.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const heavyartillery = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Heavy Artillery')
	.setURL('')
	.attachFiles(['./resources/hvyartillery.png'])
	.setAuthor('LemonsHQ', 'https://cdn.discordapp.com/avatars/242687584373964801/4b20eb44bfff0b11f7447ed582fedbb2.png?size=128')
	.setDescription(" - Can attack ground only \n- Long range \n- Limited Laser defence")
	.addBlankField()
	.addField("Stats", "Price $3,200 \n Health 600 \n Attack Range 310 \n Move Speed 0.7 \n Build Speed 24.8s")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://hvyartillery.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');

client.on('message', (message, user) => {
//timer future implementation
if(message.content === 'Timer'){
	message.reply('Timer set for 5 seconds');
	client.setInterveral(function(){
		message.reply('Times Up');
	}, 5000);
}

if(message.content == '/muteAll' && message.member.roles.some(role => role.name === 'Developer') && client.users.get("242687584373964801")){
        let channel = message.member.voiceChannel;
        for (let member of channel.members) {
            member[1].setMute(true)
           
        }
    }

    else
    {
        // do nothing
    }

    if(message.content == '/unmuteAll' && message.member.roles.some(role => role.name === 'Developer')){
            let channel = message.member.voiceChannel;
            for (let member of channel.members) {
                member[1].setMute(false)
               
            }
        }
    
        else
        {
            // do nothing
        }
    if(message.content == '/list'){
	message.channel.send(unitlist);
    	}
        else
        {
            // do nothing
        }



    if (message.content == 'stop' && client.users.get("242687584373964801") && message.member.roles.some(role => role.name === 'Developer')){
    //process.exit();
    }
    else{
        // Do notta
    }


    const attachment = new Attachment('./resources/NuclearDrone.png');

    if (message.content.includes('bruh')) {
   message.channel.send(attachment);
    }



//#############################Units############################################
    if (message.content === 'Mothership' ||  message.content === 'mothership') {
	message.channel.send(mothership);
    }

    if (message.content === 'Titan' ||  message.content === 'titan') {

        message.reply(`
        Titan
        - Advanced heavy seige mech
        - Strong ground attack with long range
        - Gatling anti-tank cannon
        - Drum-fed grenade launcher
        - Guided missiles
        - Cannot fit in air transports
        - Goes nuclear on death

        Price $250,000
        Health 12,000
        Shield 8,000
        Attack Range 350
        Move Speed 0.4
        Build Speed Varies`);
    }

    if (message.content === 'Naval Carrier' ||  message.content === 'naval carrier' || message.content === 'navalcarrier') {
	mesage.channel.send(navalcarrier);
    }

    if (message.content === 'King Kriptor' ||  message.content === 'king kriptor' || message.content === 'king Kriptor' || message.content === 'King kriptor' || message.content === 'kriptor King') {

    message.reply(`
        King Kriptor
        - Very heavily armed and armored but slow 
        - Heavy AOE cannons for ground attack 
        - Powerful shoulder mounted A.A turrets
        - Can move over water -Can self-repair 
        - Goes nuclear on death (if nukes are enabled)
        
        Price $175,000
        Health 20,000
        Attack Range 290
        Speed: 0.30
        Build Speed 124.6s`);
    }

    if (message.content === 'Experimental Mech' ||  message.content === 'experimental mech' || message.content === 'Experimental mech' || message.content === 'experimental Mech' || message.content === 'Mech Experimental') {
	message.channel.send(expmech);
    }

    if (message.content === 'Experimental Spider' ||  message.content === 'experimental spider' || message.content === 'Experimental spider' || message.content === 'experimental Spider' || message.content === 'Spider Experimental') {

        message.reply(`
        Experimental Spider
        - Support unit 
        - Laser defense 
        - Built in fabricator 
        - Can build/repair units and buildings 
        - Cannot fit in transports 
        - Can build powerful experimentals 
        - Can only have 5 built at once 
        - Goes nuclear on death
        
        Price $70,000
        Health 10,000
        Attack Range 250
        Speed: 0.30
        Build Speed 83.3s`);
    }

    if (message.content === 'Experimental Gunship' ||  message.content === 'experimental gunship' || message.content === 'Experimental gunship' || message.content === 'experimental Spider' || message.content === 'Gunship Experimental') {
        const attachment = new Attachment('./resources/expgunship.png');

        if (message.content === 'Experimental Gunship' ||  message.content === 'experimental gunship' || message.content === 'Experimental gunship' || message.content === 'experimental Spider' || message.content === 'Gunship Experimental') {
        message.channel.send(attachment);
        }
          message.reply(`
        Experimental Gunship
        - Very heavily armed and armored 
        - Slow 
        - VERY powerful Ground attack 
        - Decent anti-air 
        - Can self-repair

        Price $250,000
        Health 24,000
        Attack Range 250
        Speed: 0.80
        Build Speed 143.8s`);
    }

    if (message.content === 'experimental sam tank' ||  message.content === 'Experimental SAM Tank') {

        message.reply(`
        Experimental SAM Tank
        - Very heavily armored
        - Armed with anti-air missles and flak turret
        - Can attack air only

        Price $24,000
        Health 6,000
        Attack Range 350
        Move Speed 0.4
        Build Speed 60s`);
    }

    if (message.content === 'Phantom scout' ||  message.content === 'Phantomscout' || message.content === 'phantomScout' || message.content === 'phantom Scout' || message.content === 'phantom scout') {

        message.reply(`
        Phantom Scout
        - Stealthy scouting drone
        - Very light attack
        - Has to be manually ordered to attack
        - Can turn invisible for 13 seconds at a time

        Price $5,000
        Health 540
        Attack Range 110
        Move Speed 2.0
        Build Speed 23.8s`);
    }

    if (message.content === 'Apache Helicopter' || message.content === 'Apachehelicopter' || message.content === 'apacheHelicopter' || message.content === 'apache Helicopter' || message.content === 'Apache helicopter') {
        const attachment = new Attachment('./resources/apachehelicopter.png');

        if (message.content === 'Apache Helicopter' || message.content === 'Apachehelicopter' || message.content === 'apacheHelicopter' || message.content === 'apache Helicopter' || message.content === 'Apache helicopter') {
        message.channel.send(attachment);
        }
        message.reply(`
        Apache Helicopter
        - Can attack Land and Air
        - Heavily armed, very light armour
        - Unloads hellfire, but slow reload after barrage

        Price $2,750
        Health 220
        Attack Range 200
        Move Speed  1.8
        Build Speed 10.8s`);
    }

    if (message.content === 'Nautilus' ||  message.content === 'nautilus') {

        message.reply(`
        Nautilus
        - Heavily armed and armored
        - Can attack ships
        - Can surface and walk on land
        - Can attack land and air when surfaced
        - Can build a few attack units
        - Can launch a scout builder crab
        - Can transport 10 unit slots

        Price $16,000
        Health 5,000
        Attack Range 240
        Move Speed  0.45
        Build Speed 55.6s`);
    }

    if (message.content === 'Selenium' ||  message.content === 'selenium') {

        message.reply(`
        Selenium
        - Mammoth Submarine
        - Slow but armored, heavily armed
        - Can surface and hit air/land

        Price $21,000
        Health 3,200
        Attack Range 290
        Move Speed  0.8
        Build Speed 55.6s`);
    }

    if (message.content === 'Thunderhead' ||  message.content === 'thunderhead' || message.content === 'Thunder head' || message.content === 'thunder head' || message.content === 'thunder Head' || message.content === 'Thunder head') {
        const attachment = new Attachment('./resources/thunderhead.png');

        if (message.content === 'Thunderhead' ||  message.content === 'thunderhead' || message.content === 'Thunder head' || message.content === 'thunder head' || message.content === 'thunder Head' || message.content === 'Thunder head') {
        message.channel.send(attachment);
        }
        message.reply(`
        Thunder Head
        - Long range artillery
        - Single shot slow reload
        - Weak armour
        - Light air defense

        Price $6,500
        Health 1,500
        Attack Range 420
        Move Speed  0.8
        Build Speed 55.6s`);
    }

    if (message.content === 'Typhon' ||  message.content === 'Typhoon' || message.content === 'typhoon') {
	message.channel.send(typhoon);
    }

    if (message.content === 'Anti Air Ship' ||  message.content === 'Anti air ship' || message.content === 'anti air ship' || message.content === 'anti air Ship') {
        const attachment = new Attachment('./resources/antiairboat.png');

        if (message.content === 'Anti Air Ship' ||  message.content === 'Anti air ship' || message.content === 'anti air ship' || message.content === 'anti air Ship') {
        message.channel.send(attachment);
        }
        message.reply(`
        Anti Air Ship
        - Equipped with an Anti Air Gun
        - Weak armour 

        Price $750
        Health 200
        Attack Range 190
        Move Speed  0.9
        Build Speed 6.7s`);
    }

    if (message.content === 'battleship cruiser' ||  message.content === 'Battle cruiser' || message.content === 'battle cruiser' || message.content === 'battlecruiser') {
        const attachment = new Attachment('./resources/battlecruiser.png');

        if (message.content === 'battleship cruiser' ||  message.content === 'Battle cruiser' || message.content === 'battle cruiser' || message.content === 'battlecruiser') {
        message.channel.send(attachment);
        }
        message.reply(`
        Battle Cruiser
        - Heavily armoured
        - Can attack attack land, air, and subs
        - Slow firing rate 

        Price $9,000
        Health 7,000
        Attack Range 330
        Move Speed  0.5
        Build Speed 87.7s`);
    }

    if (message.content === 'battleship' ||  message.content === 'Battleship' || message.content === 'battle ship' || message.content === 'battleship' || message.content === 'BattleShip') {
        const attachment = new Attachment('./resources/battleship.png');

        if (message.content === 'battleship' ||  message.content === 'Battleship' || message.content === 'battle ship' || message.content === 'battleship' || message.content === 'BattleShip') {
        message.channel.send(attachment);
        }
        message.reply(`
        Battleship
        - Medium range land attack
        - Cannot attack air or subs

        Price $1,500
        Health 1,200
        Attack Range 240
        Move Speed  0.8
        Build Speed 41.7s`);
    }

    if (message.content === 'buildership' ||  message.content === 'Buildership' || message.content === 'builderShip' || message.content === 'builder Ship' || message.content === 'Builder ship') {
        const attachment = new Attachment('./resources/buildership.png');

        if (message.content === 'buildership' ||  message.content === 'Buildership' || message.content === 'builderShip' || message.content === 'builder Ship' || message.content === 'Builder ship') {
        message.channel.send(attachment);
        }
        message.reply(`
        Builder Ship
        - It builds... 
          while being in the water

        Price $500
        Health 300
        Attack Range 150
        Move Speed  0.7
        Build Speed 6.7s`);
    }

    if (message.content === 'combat engineer' ||  message.content === 'Combatengineer' || message.content === 'combat Engineer' || message.content === 'combatEngineer' || message.content === 'Combat Engineer') {

        message.reply(`
        Combat Engineer
        - Can build units and some T2 Buildings
        - Can attack land, air and subs
        - Can repair units
        - Can build Sub-Turrets
        - Can only have 12 built at once

        Price $7,400
        Health 1,500
        Attack Range 200
        Move Speed  1.2
        Build Speed 33.3s`);
    }

    if (message.content === 'corvette' ||  message.content === 'Corvette' || message.content === 'corvet' || message.content === 'Corvet') {
        const attachment = new Attachment('./resources/corvette.png');

        if (message.content === 'corvette' ||  message.content === 'Corvette' || message.content === 'corvet' || message.content === 'Corvet') {
        message.channel.send(attachment);
        }
        message.reply(`
        Corvette
        - Equipped with a Long Range Cannon
        - Strong Anti-sub torpedos
        - Cannot hit air

        Price $1,250
        Health 1,500
        Attack Range 275
        Move Speed  0.8
        Build Speed 10.6s`);
    }

    if (message.content === 'demo truck' ||  message.content === 'Demo truck' || message.content === 'demoTruck' || message.content === 'demo Truck') {
        const attachment = new Attachment('./resources/demotruck.png');

        if (message.content === 'demo truck' ||  message.content === 'Demo truck' || message.content === 'demoTruck' || message.content === 'demo Truck') {
        message.channel.send(attachment);
        }
        message.reply(`
        Demolition Truck
        - Blows itself up on enemies
        - High damage and area of effect
        - Lower damage if killed before detonation
        - Light armor
        - Fast, but accelerates slowly
        - Cannot enter transports

        Price $2,500
        Health 420
        Attack Range 9
        Move Speed  1.5
        Build Speed 41.7s`);
    }

    if (message.content === 'Destroyer' ||  message.content === 'destroyer' || message.content === 'Destroyer ship' || message.content === 'destroyer Ship') {
        const attachment = new Attachment('./resources/destroyer.png');

        if (message.content === 'Destroyer' ||  message.content === 'destroyer' || message.content === 'Destroyer ship' || message.content === 'destroyer Ship') {
        message.channel.send(attachment);
        }
        message.reply(`
        Destroyer
        - Powerful land attack
        - Anti-sub torpedoes
        - Cannot attack air

        Price $5,000
        Health 3,500
        Attack Range 290
        Move Speed  0.6
        Build Speed 24.8s`);
    }

    if (message.content === 'Dreadnought' ||  message.content === 'dreadnought') {
        const attachment = new Attachment('./resources/dreadnought.png');

        if (message.content === 'Dreadnought' ||  message.content === 'dreadnought') {
        message.channel.send(attachment);
        }
        message.reply(`
        Dreadnought
        - Equipped with Long range cannons
        - No Defences while in Cannon mode
        - Area damage only
        - Cannot attack air
        - Strong Anti-sub torpedoes
        - Can build builder ship and Missile ship 

        Price $58,000
        Health 12,000
        Attack Range 350
        Attack Range Deployed 630
        Move Speed  0.5
        Build Speed 87.7s`);
    }

    if (message.content === 'Dropship' ||  message.content === 'dropship') {
        const attachment = new Attachment('./resources/dropship.png');

        if (message.content === 'Dropship' ||  message.content === 'dropship') {
        message.channel.send(attachment);
        }
        message.reply(`
        Dropship
        - Transports up to 4 units
        - Cannot attack

        Price $800
        Health 700
        Attack Range 0
        Move Speed  2.3
        Build Speed 16.7s`);
    }

    if (message.content === 'Frigate' ||  message.content === 'frigate') {
        const attachment = new Attachment('./resources/frigate.png');

        if (message.content === 'Frigate' ||  message.content === 'frigate') {
        message.channel.send(attachment);
        }
        message.reply(`
        Frigate
        - Equipped with a Long Range Cannon
        - Cannot hit subs
        - Anti Air Turret 

        Price $3,500
        Health 2,000
        Attack Range 350
        Move Speed 0.75
        Build Speed 15.2s`);
    }

    if (message.content === 'Gunboat' ||  message.content === 'gunboat' || message.content === 'gun boat' || message.content === 'Gun boat') {
        const attachment = new Attachment('./resources/gunboat.png');

        if (message.content === 'Gunboat' ||  message.content === 'gunboat' || message.content === 'gun boat' || message.content === 'Gun boat') {
        message.channel.send(attachment);
        }
        message.reply(`
        Gunboat
        - Fast
        - Can attack ground

        Price $300
        Health 170
        Attack Range 120
        Move Speed 1.5
        Build Speed 3.3s`);
    }

    if (message.content === 'Gunship' ||  message.content === 'gunship' || message.content === 'gun ship' || message.content === 'Gun ship') {
        const attachment = new Attachment('./resources/gunship.png');

        if (message.content === 'Gunship' ||  message.content === 'gunship' || message.content === 'gun ship' || message.content === 'Gun ship') {
        message.channel.send(attachment);
        }
        message.reply(`
        Gunship
        - Can attack ground only
        - trong attack
        - Heavily armored

        Price $800
        Health 285
        Attack Range 140
        Move Speed 1.5
        Build Speed 8.3s`);
    }

    if (message.content === 'heavy hover tank' ||  message.content === 'heavyhovertank' || message.content === 'Heavy Hover Tank' || message.content === 'HeavyHoverTank') {
        const attachment = new Attachment('./resources/hvyhovertank.png');

        if (message.content === 'heavy hover tank' ||  message.content === 'heavyhovertank' || message.content === 'Heavy Hover Tank' || message.content === 'HeavyHoverTank') {
        message.channel.send(attachment);
        }
        message.reply(`
        Heavy Hover Tank
        - Heavy armor
        - Able to move over water
        - Can attack subs, air and ground
        - Great for killing heavy subs

        Price $1,100
        Health 420
        Attack Range 160
        Move Speed 1.0
        Build Speed 16.7s`);
    }

    if (message.content === 'heavy tank' ||  message.content === 'heavytank' || message.content === 'Heavy Tank' || message.content === 'HeavyTank') {
	message.channel.send(heavytank);
    }

    if (message.content === 'tank' ||  message.content === 'Tank') {
	message.channel.send(tank);
    }

    if (message.content === 'Kirov' ||  message.content === 'kirov') {
        const attachment = new Attachment('./resources/kirov.png');

        if (message.content === 'Kirov' ||  message.content === 'kirov') {
        message.channel.send(attachment);
        }
        message.reply(`
        Kirov Bomber
        - Heavy aircraft
        - Armed with 30 bombs (slow reload)
        - Heavy Armor
        - Can attack only land
        - Slow
					
        Price $45,000
        Health 24,000
        Attack Range 60
        Move Speed 1.10
        Build Speed 45.5s`);
    }

    if (message.content === 'laser tank' ||  message.content === 'lasertank' || message.content === 'Laser Tank' || message.content === 'LaserTank') {
	message.channel.send(lasertank);
    }

    if (message.content === 'heavy interceptor' ||  message.content === 'heavyinterceptor' || message.content === 'Heavy Interceptor' || message.content === 'HeavyInterceptor' || message.content === 'Heavy Intercept' || message.content === 'heavy intercept' || message.content === 'heavyintercept' || message.content === 'HeavyIntercept') {
        const attachment = new Attachment('./resources/hvyinterceptor.png');

        if (message.content === 'heavy interceptor' ||  message.content === 'heavyinterceptor' || message.content === 'Heavy Interceptor' || message.content === 'HeavyInterceptor' || message.content === 'Heavy Intercept' || message.content === 'heavy intercept' || message.content === 'heavyintercept' || message.content === 'HeavyIntercept') {
        message.channel.send(attachment);
        }
        message.reply(`
        Heavy Interceptor
        - Fast
        - Can attack air only
        - Heavily armed with shield
        - Shield weak vs lightning

        Price $1,200
        Health 40
        Shield 560
        Attack Range 170
        Move Speed 2.5
        Build Speed 16.7s`);
    }

    if (message.content === 'heavy missile ship' ||  message.content === 'heavymissileship' || message.content === 'Heavy Missile Ship' || message.content === 'HeavyMissileShip' || message.content === 'heavy missile ship' || message.content === 'heavymissileship' || message.content === 'Heavy Missile S' || message.content === 'HeavyMissileS') {
        const attachment = new Attachment('./resources/hvymissileship.png');

        if (message.content === 'heavy missile ship' ||  message.content === 'heavymissileship' || message.content === 'Heavy Missile Ship' || message.content === 'HeavyMissileShip' || message.content === 'heavy missile ship' || message.content === 'heavymissileship' || message.content === 'Heavy Missile S' || message.content === 'HeavyMissileS') {
        message.channel.send(attachment);
        }
        message.reply(`
        Heavy Missile Ship
        - Can attack land & air
        - Long range

        Price $16,000
        Health 3,000
        Attack Range 170
        Move Speed 0.5
        Build Speed 41.7s`);
    }

    if (message.content === 'hover tank' ||  message.content === 'hovertank' || message.content === 'Hover Tank' || message.content === 'HoverTank' || message.content === 'Hover tank' || message.content === 'hover Tank') {
        const attachment = new Attachment('./resources/hovertank.png');

        if (message.content === 'hover tank' ||  message.content === 'hovertank' || message.content === 'Hover Tank' || message.content === 'HoverTank' || message.content === 'Hover tank' || message.content === 'hover Tank') {
        message.channel.send(attachment);
        }
        message.reply(`
        Hover Tank
        - Light armor
        - Able to move over water
        - Can attack air and ground

        Price $450
        Health 150
        Attack Range 140
        Move Speed 1.2
        Build Speed 8.3s`);
    }
    if (message.content === 'LRS' ||  message.content === 'lrs') {
        const attachment = new Attachment('./resources/lrs.png');

        if (message.content === 'lrs' || message.content === 'LRS') {
        message.channel.send(attachment);
        }
        message.reply(`
        LRS
        - Long Range Attack
        - Able to Surface and Submerge
        - Land, Underwater, and Air Attack
        - Light land attack while submerged

        Price $7,750
        Health 1,000
        Attack Range 200
        Move Speed 0.6
        Build Speed 16.7s`);
    }
	
    if (message.content === 'Hound Apc' ||  message.content === 'hound apc' || message.content === 'Hound APC') {
	message.channel.send(houndapc);
    }
	
    if (message.content === 'Comet' ||  message.content === 'comet') {
	message.channel.send(comet);
    }
	
    if (message.content === 'Heavy Artillery' ||  message.content === 'heavy artillery' || message.content === 'HeavyArtillery' || message.content === 'heavyartillery') {
	message.channel.send(heavyartillery);
    }
	
    if (message.content === 'Missile Tank' ||  message.content === 'missile tank' || message.content === 'MissileTank' || message.content === 'missiletank') {
        const attachment = new Attachment('./resources/aamissiletank.png');

        if (message.content === 'Missile Tank' ||  message.content === 'missile tank' || message.content === 'MissileTank' || message.content === 'missiletank') {
        message.channel.send(attachment);
        }
        message.reply(`
        AA Missile Tank
        - Long range anti-air only missile
        - Light Shield

        Price $2,500
        Health 1100
        Shield 700
        Attack Range 340
        Move Speed 0.6
        Build Speed 24.8s`);
    }
	
    if (message.content === 'Plasma Sniper' ||  message.content === 'plasma sniper' || message.content === 'PlasmaSniper' || message.content === 'plasmasniper') {
        message.channel.send(plasmasniper);
    }
	
    if (message.content === 'Zephyr' ||  message.content === 'zephyr') {
        message.channel.send(zephyr);
    }

// Ubers Mechs

    if (message.content === 'Assault Mech' ||  message.content === 'AssaultMech' || message.content === 'assault mech' || message.content === 'assaultmech') {

        const attachment = new Attachment('./resources/assaultmech.png');

        if (message.content === 'Assault Mech' ||  message.content === 'AssaultMech' || message.content === 'assault mech' || message.content === 'assaultmech') {
        message.channel.send(attachment);
        }
        message.reply(`
        Assault Mech
        - Heavily armed and armored
        - Can attack ground
        - Light air attack
        - Can build and buff nearby small T1 mechs
        - Can self-repair

        Price $20,000
        Health 4,800
        Attack Range 250
        Move Speed 0.4
        Build Speed 52.1s`);
    }

    if (message.content === 'heavy artillery mech' ||  message.content === 'heavyartillerymech' || message.content === 'Heavy Artillery Mech' || message.content === 'HeavyArtilleryMech') {

        const attachment = new Attachment('./resources/hvyartmech.png');

        if (message.content === 'heavy artillery mech' ||  message.content === 'heavyartillerymech' || message.content === 'Heavy Artillery Mech' || message.content === 'HeavyArtilleryMech') {
        message.channel.send(attachment);
        }
        message.reply(`
        Heavy Artillery Mech
        - Ground attack
        - Needs to deploy to fire
        - Very long range, but slow reload
        - Regenerates shield when deployed
        - Stronger vs. buildings than vs. units

        Price $9,000
        Health 750
        Attack Range 410
        Move Speed 0.6
        Build Speed 33.3s

        Heavy Artillery Mech Deployed

        Shield 500
        Move Speed 0
        Build Speed 2s`);
    }

    if (message.content === 'Heavy Mech' ||  message.content === 'HeavyMech' || message.content === 'heavy mech' || message.content === 'heavymech') {

        const attachment = new Attachment('./resources/hvymech.png');

        if (message.content === 'Heavy Mech' ||  message.content === 'HeavyMech' || message.content === 'heavy mech' || message.content === 'heavymech') {
        message.channel.send(attachment);
        }
        message.reply(`
        Heavy Mech
        - Heavily armored
        - Ground attack
        - Moderate damage and range
        - Can disable weapon to activate 
        a temporary shield and self-repair

        Price $5,000
        Health 2,000
        Attack Range 250
        Move Speed 0.7
        Build Speed 18.3s

        Activate Shield
        - Adds a 900HP shield for 8 seconds
        - Regenerates 400HP
        - Slightly increases movement speed
        - Unable to attack while shield is active
        
        Shield 900
        Move Speed 0.85
        Build Speed 0s`);
    }

    if (message.content === 'Heavy Mobile Turret' ||  message.content === 'HeavyMobileTurret' || message.content === 'heavy mobile turret' || message.content === 'heavymobileturret') {

        const attachment = new Attachment('./resources/hvymobileturret.png');

        if (message.content === 'Heavy Mobile Turret' ||  message.content === 'HeavyMobileTurret' || message.content === 'heavy mobile turret' || message.content === 'heavymobileturret') {
        message.channel.send(attachment);
        }
        message.reply(`
        Heavy Mobile Turret
        -Heavily armored
        -Ground attack when undeployed
        -Deploys for extra range, anti-air and shield regen
        -Cannot attack while undeploying
        -Can release a repairing nano-burst when deployed

        Price $8,000
        Health 1,400
        Attack Range 220
        Move Speed 0.5
        Build Speed 33.3s`);
    }
});
