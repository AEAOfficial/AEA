//_____________Dont touch Zone start
exports.code = function(){
const { Client, Attachment } = require('discord.js');
const fs = require('fs');
client.setMaxListeners(0)



//_____________Dont touch Zone end
  
	
// /n for new line
// Only include picture if you have one
// Keep the footer the same
// Keep author as you
// Keep timestamp there
// Units Description 
// Note: The description has to be outside client.on({});

const e1 = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Tank')
	.setURL('')
	.attachFiles(['./resources/tank.png'])
	.setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png')
	.setDescription(' - Can attack ground only \n- Fast but low health')
	
	.addField('Stats', 'Price: $350 \n Health: 230 \n Attack: 30dmg per 1.25s \n Range: 130 \n Speed: 1.10(land) \n Build Speed: 4.8s \n InIClass: c_tank')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://tank.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
	
const e2 = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('AA Missile Tank')
	.setURL('')
	.attachFiles(['./resources/aamissiletank.png'])
	.setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png')
	.setDescription(' - Long range anti-air only missile \n- Light Shield')
	
	.addField('Stats', 'Price: $3,000 \n Health: 1,000 \n Shield: 500 \n Attack: 300dmg per 3.87s \n Range: 340 \n Speed: 0.60(land) \n Build Speed: 24.8s \n InIClass missileTankFix')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://aamissiletank.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const e3 = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Typhoon')
	.setURL('')
	.attachFiles(['./resources/typhoon.png'])
	.setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png')
	.setDescription(' - Landing assault craft \n- Fast \n- Very light Mounted machine-guns \n- Carries 4 units')
	
	.addField('Stats', 'Price: $1,000 \n Health: 300 \n Attack: 16dmg per 1.67s \n Range: 140 \n Speed: 1.60(hover) \n Build Speed: 14.5s \n InIClass EkTyphoon')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://typhoon.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const e4 = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Zephyr')
	.setURL('')
	.attachFiles(['./resources/z.png'])
	.setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png')
	.setDescription(' - Medium \n- Armed with a prototype flamethrower \n- Short range ground attack \n- Can auto-repair')
	
	.addField('Stats', 'Price: $1,500 \n Health: 800 \n Attack: 6dmg per 0.07s \n Range: 140 \n Move Speed: 1.0(land) \n Build Speed: 12.8s  \n InIClass zephyrTank')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://z.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const e5 = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Plasma Sniper')
	.setURL('')
	.attachFiles(['./resources/plasmasniper.png'])
	.setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png')
	.setDescription(' - Long range ground attack \n- Very weak armour with light shield \n- Can only hit ground')
	
	.addField('Stats', 'Price: $1,000 \n Health: 50 \n Shield: 100 \n Attack: 55dmg per 2.17s \n Range: 300 \n Speed: 0.80(land) \n Build Speed: 10.2s \n InIClass plasmaSniper')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://plasmasniper.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const e6 = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Comet') 
	.setURL('')
	.attachFiles(['./resources/comet.png'])
	.setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png')
	.setDescription(' - Fast \n- Can attack ground only \n- Light armor \n- High spread, weak vs. single targets')
	
	.addField('Stats', 'Price: $1,050 \n Health: 435 \n Attack: 50dmg per 0.02s \n Range: 150 \n Speed: 1(land) \n Build Speed: 11.1s \n InIClass cometTank')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://comet.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const e7 = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Hound APC')
	.setURL('')
	.attachFiles(['./resources/houndapc.png'])
	.setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png')
	.setDescription(' - Long Range Attack \n- Powerful in groups, but glass cannons \n- Can only attack ground')
	
	.addField('Stats', 'Price: $350 \n Health: 100 \n Range: 130 \n Speed: 1.4 \n Build Speed: 3.3s \n InIClass Hound APC')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://houndapc.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const e8 = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Heavy Tank')
	.setURL('')
	.attachFiles(['./resources/hvytank.png'])
	.setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png')
	.setDescription(' - Heavily armed \n- Can attack ground \n- Light air attack')
	
	.addField('Stats', 'Price: $800 \n Health: 600 \n Attack1: 40dmg per 1.08s \n Attack2: 17dmg per 1.08s  \n Range: 160 \n Speed: 0.80(land) \n Build Speed: 8.7s \n InIClass c_heavyTank')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://hvytank.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const e9 = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Laser Tank')
	.setURL('')
	.attachFiles(['./resources/lasertank.png'])
	.setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png')
	.setDescription(' - Can attack ground and air \n- Weak vs. multiple units \n- Powerful single shot, slow recharge')
	
	.addField('Stats', 'Price: $1,300 \n Health: 500 \n Attack: 350dmg per 6s \n Range: 220 \n Speed: 0.70(land) \n Build Speed: 22.4s \n InIClass cc_laserTank')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://lasertank.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const e10 = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Heavy Artillery')
	.setURL('')
	.attachFiles(['./resources/hvyartillery.png'])
	.setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png')
	.setDescription(' - Can attack ground only \n- Long range \n- Limited Laser defence')
	
	.addField('Stats', 'Price: $3,750 \n Health: 600 \n Attack: 155dmg per 2.08s \n Range: 320 \n Speed: 0.7(land) \n Build Speed: 20.8s \n InIClass heavyArtillery')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://hvyartillery.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const e11 = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Demo Truck')
	.setURL('')
	.attachFiles(['./resources/demotruck.png'])
	.setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png')
	.setDescription(' - Blows itself up on enemies \n- High damage and area of effect \n- Lower damage if killed before detonation \n- Light armor \n- Fast, but accelerates slowly \n- Cannot enter transports')
	
	.addField('Stats', 'Price: $2,500 \n Health: 420 \n Attack: 2000dmg per 0.50s \n Range: 9 \n Speed: 1.5(land) \n Build Speed: 24.8s \n InIClass demo_truck')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://demotruck.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const e12 = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Hover Tank')
	.setURL('')
	.attachFiles(['./resources/hovertank.png'])
	.setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png')
	.setDescription(' - Light armor \n- Able to move over water \n- Can attack air and ground')
	
	.addField('Stats', 'Price: $450 \n Health: 150 \n Attack: 23dmg per 1.08s \n Range: 140 \n Speed: 1.20(hover) \n Build Speed: 8.2s \n InIClass c_hovertank')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://hovertank.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');

const e13 = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Saber')
	.setURL('')
	.attachFiles(['./resources/saber.png'])
	.setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png')
	.setDescription(' - Can attack air only \n- Armed with 2 small flak cannons \n- Medium armor')
	
	.addField('Stats', 'Price: $800 \n Health: 600 \n Attack1: 26dmg per 0.92s \n Attack2: 26dmg per 1.46s \n Range: 200 \n Speed: 0.6(land) \n Build Speed: 12.8s \n InIClass saberTank')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://saber.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');

const e14 = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Buffalo')
	.setURL('')
	.attachFiles(['./resources/buffalo.png'])
	.setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png')
	.setDescription(' - Minigun tank \n- Can attack land & air \n- Speeds up as it fires')
	
	.addField('Stats', 'Price $2,000 \n Health: 550 \n Attack: 14dmg per 1.82s \n Range: 180 \n Speed: 0.90(land) \n Build Speed: 12.8s \n InIClass buffaloTank')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://buffalo.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');


//HERE

const e15 = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Heavy Hover Tank')
	.setURL('')
	.attachFiles(['./resources/hvyhovertank.png'])
	.setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png')
	.setDescription(' - Heavy armor\n - Able to move over water\n - Can attack subs, air and ground\n - Great for killing heavy subs')
	
	.addField('Stats', 'Price $1,100 \n Health 420 \n Attack Range 160 \n Move Speed 1 \n Build Speed 16.7s \n PrimaryDamage 40 \n SecondaryDamage 65 \n InIClass c_heavyHovertank')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://hvyhovertank.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const e16 = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Tesla Tank')
	.setURL('')
	.attachFiles(['./resources/teslatank.png'])
	.setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png')
	.setDescription(' - Heavy Armour \n- Tesla tech, good against shields \n- Can attack land and air \n- Reduced damage to buildings')
	
	.addField('Stats', ' Price $3900 \n Health 2600 \n Attack Range 170 \n Move Speed 0.6 \n Build Speed 27.8s \n PrimaryDamage 120 \n InIClass Tesla Tank')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://teslatank.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const e17 = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Scout')
	.setURL('')
	.attachFiles(['./resources/scout.png'])
	.setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png')
	.setDescription(' - Mid armor - Not cost-effective for combat \n- Can see further through fog \n- Able to move over water \n- Can attack air and ground')
	
	.addField('Stats', ' Price $500 \n Health 350 \n Attack Range 110 \n Move Speed 1.3 \n FogOfWar 25 \n Build Speed 8.3s \n PrimaryDamage 15 \n InIClass c_scout')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://scout.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const e18 = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Duster')
	.setURL('')
	.attachFiles(['./resources/duster.png'])
	.setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png')
	.setDescription(' - Medium armor \n- Ground attack \n- Armed with twin autocannons')
	
	.addField('Stats', ' Price $3500 \n Health 1100 \n Attack Range 210 \n Move Speed 0.60 \n Build Speed 20.8s \n PrimaryDamage 27 \n InIClass dusterTank')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://duster.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const e19 = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Artillery')
	.setURL('')
	.attachFiles(['./resources/artillery.png'])
	.setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png')
	.setDescription(' - Can attack ground only \n- Long range')
	
	.addField('Stats', ' Price $900 \n Health 140 \n Attack Range 290 \n Move Speed 0.90 \n Build Speed 8.3s \n InIClass c_artillery')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://artillery.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const e20 = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Combat Engineer')
	.setURL('')
	.attachFiles(['./resources/cengineer.jpg'])
	.setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png')
	.setDescription(' - Can build units and some T2 buildings \n- Can attack land, air, and subs \n- Can repair units \n- Can build Sub-turrets \n- Can only have 12 built at once')
	
	.addField('Stats', ' Price $7,400 \n Health 1,500 \n Attack Range 200 \n Move Speed 1.20 \n Build Speed 33.3s \n Income generation +$1 \n InIClass combatEngineerX')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://cengineer.jpg')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const e21 = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Siege Tank')
	.setURL('')
	.attachFiles(['./resources/siegetank.jpg'])
	.setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png')
	.setDescription(' - Advanced heavy attack tank \n - Attacks ground and air \n - Reinforced armor')
	
	.addField('Stats', ' Price $5,600 \n Health 4,000 \n Attack Range 200 \n Move Speed 0.50 \n Build Speed 33.3s \n PrimaryDamage 100 \n SecondaryDamage 15 \n InIClass siegeTankArmor')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://siegetank.jpg')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const e22 = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Achilles Tank')
	.setURL('')
	.attachFiles(['./resources/achilles.png'])
	.setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png')
	.setDescription(' - Powerful artillery cannon \n - Cannot hit air\n - Medium armour')
	
	.addField('Stats', ' Price $4,500 \n Health 900 \n Attack Range 280 \n Move Speed 0.60 \n Build Speed 33.3s \n PrimaryDamage 275 \n InIClass achillesTank')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://achilles.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const e23 = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Radar Truck')
	.setURL('')
	.attachFiles(['./resources/radartruck.pnf'])
	.setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png')
	.setDescription(' - Cannot attack \n - Can see far into the fog')
	
	.addField('Stats', ' Price $2,500 \n Health 300 \n Move Speed 0.90 \n FogOfWar 36 \n Build Speed 3.3s \n InIClass Radar Truck')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://radartruck.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');

client.on('message', message => {
try{	

//tank
    if (message.content.toLowerCase() === 'tank') {
	if(message.author.bot) return; 
	message.channel.send(e1);
    }
//missiletank
    if (message.content.toLowerCase() === 'missiletank') {
	if(message.author.bot) return; 
	message.channel.send(e2);
    }
//typhoon
    if (message.content.toLowerCase() === 'typhoon') {
	if(message.author.bot) return; 
	message.channel.send(e3);
    }
//Zephyr
    if (message.content.toLowerCase() === 'zephyr') {
	if(message.author.bot) return; 
    message.channel.send(e4);
    }
//plasmasniper 
    if (message.content.toLowerCase() === 'plasmasniper') {
	if(message.author.bot) return; 
    message.channel.send(e5);
    }
//comet
    if (message.content.toLowerCase() === 'comet') {
	if(message.author.bot) return; 
	message.channel.send(e6);
    }
//houndapc
   // if (message.content.toLowerCase() === 'houndapc') {
   // if(message.author.bot) return; 
   // message.channel.send(e7);
   // }
//Heavytank
    if (message.content.toLowerCase() === 'heavytank') {
	if(message.author.bot) return; 
	message.channel.send(e8);
    }
//Lasertank
    if (message.content.toLowerCase() === 'lasertank') {
	if(message.author.bot) return; 
	message.channel.send(e9);
    }  
//heavyartillery
    if (message.content.toLowerCase() === 'heavyartillery') {
	if(message.author.bot) return; 
	message.channel.send(e10);
    }
//Demotruck
    if (message.content.toLowerCase() === 'demotruck') {
	if(message.author.bot) return; 
	message.channel.send(e11);
    }
//hovertank
    if (message.content.toLowerCase() === 'hovertank') {
	if(message.author.bot) return; 
	message.channel.send(e12);
    }		
//saber
    if (message.content.toLowerCase() === 'saber') {
	if(message.author.bot) return; 
	message.channel.send(e13);
    }	
//buffalo
    if (message.content.toLowerCase() === 'buffalo') {
	if(message.author.bot) return; 
	message.channel.send(e14);
    }	
//Heavy hover tank	
    if (message.content.toLowerCase() === 'heavyhovertank') {
	if(message.author.bot) return; 
	message.channel.send(e15);
    }	
//tesla tank
    if (message.content.toLowerCase() === 'teslatank') {
	if(message.author.bot) return; 
	message.channel.send(e16);
    }		
//scout
    if (message.content.toLowerCase() === 'scout') {
	if(message.author.bot) return; 
	message.channel.send(e17);
    }
//duster
    if (message.content.toLowerCase() === 'duster') {
	if(message.author.bot) return; 
	message.channel.send(e18);
    }	
//artillery
    if (message.content.toLowerCase() === 'artillery') {
	if(message.author.bot) return; 
	message.channel.send(e19);
    }	
//combat engineer
    if (message.content.toLowerCase() === 'combatengineer') {
	if(message.author.bot) return; 
	message.channel.send(e20);
    }	

    if (message.content.toLowerCase() === 'siegetank') {
	if(message.author.bot) return; 
	message.channel.send(e21);
	}	

if (message.content.toLowerCase() === 'achilles') {
	if(message.author.bot) return; 
	message.channel.send(e22);
	}	

if (message.content.toLowerCase() === 'radartruck') {
	if(message.author.bot) return; 
	message.channel.send(e23);
	}	

	























//________________Dont touch Zone start
}

catch(err){
	catchErr(err, message);
   }
});
  
  
  
  

}
//________________Dont touch Zone end
