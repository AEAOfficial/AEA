
//_____________Dont touch Zone start
exports.code = function(){
const { Client, Attachment } = require('discord.js');
const fs = require('fs');
client.setMaxListeners(0)




//_____________Dont touch Zone end
 const e0 = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Gunboat')
	.setURL('')
	.attachFiles(['./resources/gunboat.png'])
	.setAuthor('Lemons', 'https://i.imgur.com/9wxw0Sg.png')
	.setDescription(' - Fast \n - Can attack ground')
	
	.addField('Stats', ' Price $300 \n Health 170 \n Attack Range 120 \n Move Speed 1.5 \n Build Speed 3.3s \n PrimaryDamage 12 \n InIClass c_gunboat')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://gunboat.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
 const e1 = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Underwater Probe')
	.setURL('')
	.attachFiles(['./resources/underwaterprobe.png'])
	.setAuthor('Lemons', 'https://i.imgur.com/9wxw0Sg.png')
	.setDescription(' - Very weak \n - Light torpedo attack only')
	
	.addField('Stats', ' Price $450 \n Health 80 \n Attack Range 100 \n Move Speed 0.70 \n Build Speed 3.3s \n PrimaryDamage 10 \n InIClass lightSub')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://underwaterprobe.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
 const e2 = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Missile Ship')
	.setURL('')
	.attachFiles(['./resources/missileship.png'])
	.setAuthor('Lemons', 'https://i.imgur.com/9wxw0Sg.png')
	.setDescription(' - Fast \n - Can attack ground and air and subs \n - Weak amour')
	
	.addField('Stats', ' Price $800 \n Health 450 \n Attack Range 200 \n Move Speed 1.2 \n Build Speed 6.7s \n PrimaryDamage 62 \n SecondaryDamage 42 \n InIClass c_missileShip')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://missileship.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const e3 = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('AntiAirBoat')
	.setURL('')
	.attachFiles(['./resources/antiairboat.png'])
	.setAuthor('Lemons', 'https://i.imgur.com/9wxw0Sg.png')
	.setDescription(' - Equipped with an Anti Air Gun \n - Weak armour ')
	
	.addField('Stats', ' Price $750 \n Health 270 \n Attack Range 190 \n Move Speed 0.90 \n Build Speed 6.7s \n PrimaryDamage 2 \n InIClass  antiAirTurretBoat')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://antiairboat.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const e4 = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Corvette')
	.setURL('')
	.attachFiles(['./resources/corvette.png'])
	.setAuthor('Lemons', 'https://i.imgur.com/9wxw0Sg.png')
	.setDescription(' - Equipped with an Anti Air Gun \n - Weak armour ')
	
	.addField('Stats', ' Price $1,250 \n Health 1,500 \n Attack Range 275 \n Move Speed 0.80 \n Build Speed 10.6s \n PrimaryDamage/Radius 100/40 \n SecondaryDamage 70 \n InIClass Corvette')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://corvette.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const e5 = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Frigate')
	.setURL('')
	.attachFiles(['./resources/frigate.png'])
	.setAuthor('Lemons', 'https://i.imgur.com/9wxw0Sg.png')
	.setDescription(' - Equipped with an Anti Air Gun \n - Weak armour ')
	
	.addField('Stats', ' Price $3,500 \n Health 2,000 \n Attack Range 290 \n Move Speed 0.75 \n Build Speed 15.2s \n PrimaryDamage/Radius 140/50 \n SecondaryDamage 9 \n InIClass Frigate')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://frigate.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const e6 = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Battleship')
	.setURL('')
	.attachFiles(['./resources/battleship.png'])
	.setAuthor('Lemons', 'https://i.imgur.com/9wxw0Sg.png')
	.setDescription(' - Medium range land attack \n - Cannot attack air or subs')
	
	.addField('Stats', ' Price $1,500 \n Health 1,200 \n Attack Range 240 \n Move Speed 0.80 \n Build Speed 24.8s \n PrimaryDamage 65 \n InIClass c_battleShip')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://battleship.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const e7 = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Heavy Battleship')
	.setURL('')
	.attachFiles(['./resources/hvybattleship.png'])
	.setAuthor('Lemons', 'https://i.imgur.com/9wxw0Sg.png')
	.setDescription(' - Long range land attack \n - Anti-air \n - Light anti-sub torpedos')
	
	.addField('Stats', ' Price $6,000 \n Health 4,000 \n Attack Range 290 \n Move Speed 0.70 \n Build Speed 41.7s \n PrimaryDamage 65 \n SecondaryDamage 50 \n InIClass heavyBattleship')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://hvybattleship.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const e8 = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Destroyer')
	.setURL('')
	.attachFiles(['./resources/destroyer.png'])
	.setAuthor('Lemons', 'https://i.imgur.com/9wxw0Sg.png')
	.setDescription(' - Powerful land attack \n - Anti-sub torpedoes \n - Cannot attack air')
	
	.addField('Stats', ' Price $5,000 \n Health 3,500 \n SelfRegen 0.003 \n Attack Range 280 \n Move Speed 0.50 \n Build Speed 24.8s \n PrimaryDamage 100 \n InIClass Destroyer')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://destroyer.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const e9 = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Battle Cruiser')
	.setURL('')
	.attachFiles(['./resources/battlecruiser.png'])
	.setAuthor('Lemons', 'https://i.imgur.com/9wxw0Sg.png')
	.setDescription(' - Heavily armoured\n - Can attack attack land, air, and subs\n - Slow firing rate ')
	
	.addField('Stats', ' Price $9,000 \n Health 7,000 \n SelfRegen 0.003 \n Attack Range 330 \n Move Speed 0.50 \n Build Speed 87.7s \n PrimaryAreaDamage/Radius 150/50 \n SecondaryDamage 95 \n TertiaryDamage 100 \n InIClass BattleCruiser')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://battlecruiser.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const e10 = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Thunder Head')
	.setURL('')
	.attachFiles(['./resources/thunderhead.png'])
	.setAuthor('Lemons', 'https://i.imgur.com/9wxw0Sg.png')
	.setDescription(' - Heavily armoured\n - Can attack attack land, air, and subs\n - Slow firing rate ')
	
	.addField('Stats', ' Price $6,500 \n Health 1,500 \n Attack Range 420 \n Move Speed 0.80 \n Build Speed 55.6s \n PrimaryAreaDamage/Radius 250/80 \n SecondaryDamage 50 \n InIClass EkThunderhead')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://thunderhead.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const e11 = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Attack Submarine')
	.setURL('')
	.attachFiles(['./resources/attacksubmarine.png'])
	.setAuthor('Lemons', 'https://i.imgur.com/9wxw0Sg.png')
	.setDescription(' - When underwater cannot be attacked by most units\n - Attacks in-water units\n - Can surface to also attack land and air units')
	
	.addField('Stats', ' Price $800 \n Health 260 \n Attack Range 250 \n Move Speed 0.80 \n Build Speed 16.7s \n PrimaryAreaDamage/Radius 250/80 \n SecondaryDamage 50 \n InIClass _Unknown_')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://attacksubmarine.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const e12 = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Heavy Missile Ship')
	.setURL('')
	.attachFiles(['./resources/hvymissileship.png'])
	.setAuthor('Lemons', 'https://i.imgur.com/9wxw0Sg.png')
	.setDescription(' - Can attack land & air\n- Long range')
	
	.addField('Stats', ' Price $16,000 \n Health 3,000 \n Attack Range 390 \n Move Speed 0.50 \n Build Speed 41.7s \n PrimaryDamage 30 \n SecondaryDamage 65 \n TertiaryDamage 70 \n InIClass c_heavyMissileShip')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://hvymissileship.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const e13 = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Heavy Sub')
	.setURL('')
	.attachFiles(['./resources/hvysubmarine.png'])
	.setAuthor('Lemons', 'https://i.imgur.com/9wxw0Sg.png')
	.setDescription(' - Heavily armored torpedos \n- Cannot attack units out of water')
	
	.addField('Stats', ' Price $5,500 \n Health 1,000 \n Attack Range 210 \n Move Speed 0.85 \n Build Speed 41.7s \n PrimaryDamage 95 \n SecondaryDamage 65 \n TertiaryDamage 70 \n InIClass heavySub')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://hvysubmarine.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const e14 = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Nautilus')
	.setURL('')
	.attachFiles(['./resources/nautilus.png'])
	.setAuthor('Lemons', 'https://i.imgur.com/9wxw0Sg.png')
	.setDescription(' - Heavily armed and armored \n - Can attack ships \n - Can surface and walk on land \n - Can attack land and air when surfaced \n - Can build a few attack units \n - Can launch a scout builder crab \n - Can transport 6 unit slots')
	
	.addField('Stats', ' Price $16,800 \n Health 5,000 \n Attack Range 240 \n Move Speed 0.45 \n Build Speed 55.6s \n PrimaryDamage 50 \n SecondaryDamage 35 \n InIClass nautilusSubmarine')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://nautilus.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const e15 = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Selenium')
	.setURL('')
	.attachFiles(['./resources/selenium.png'])
	.setAuthor('Lemons', 'https://i.imgur.com/9wxw0Sg.png')
	.setDescription(' - Mammoth Submarine \n - Slow but armored, heavily armed \n - Can surface and hit air/land')
	
	.addField('Stats', ' Price $21,800 \n Health 3,200 \n Attack Range 270 \n Move Speed 0.45 \n Build Speed 55.6s \n PrimaryDamage 95 \n SecondaryDamage 70 \n InIClass EkSelenium')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://selenium.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const e16 = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Recon Sub')
	.setURL('')
	.attachFiles(['./resources/reconsub.png'])
	.setAuthor('Lemons', 'https://i.imgur.com/9wxw0Sg.png')
	.setDescription(' - Can Shoot 4 Light Torpedos\n - Very Weak ')
	
	.addField('Stats', ' Price $1,800 \n Health 475 \n Attack Range 150 \n Move Speed 0.60 \n Build Speed 6.7s \n PrimaryDamage 40 \n InIClass Sub Glider')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://reconsub.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const e17 = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Amphibious Warship')
	.setURL('')
	.attachFiles(['./resources/amphibiouswarship.png'])
	.setAuthor('Lemons', 'https://i.imgur.com/9wxw0Sg.png')
	.setDescription(' - Can produce low tier air, naval, and hover units.\n- Can repair units\n- Light defenses, mainly useable as a mobile factory.')
	
	.addField('Stats', ' Price $16,500 \n Health 5,500 \n Attack Range 275 \n Move Speed 0.70 \n Build Speed 55.6s \n PrimaryDamage 50 \n SecondaryDamage 95 \n InIClass warShip')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://amphibiouswarship.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const e18 = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Dreadnought')
	.setURL('')
	.attachFiles(['./resources/dreadnought.png'])
	.setAuthor('Lemons', 'https://i.imgur.com/9wxw0Sg.png')
	.setDescription(' - Equipped with Long range cannons \n - No Defences while in Cannon mode \n - Area damage only \n - Cannot attack air \n - Strong Anti-sub torpedoes \n - Can build builder ship and Missile ship')
	
	.addField('Stats', ' Price $58,000 \n Health 12,000 \n Attack Range 350-630 \n Move Speed 0.50 \n Build Speed 87.7s \n PrimaryAreaDamage/Radius 200/60 \n SecondaryDamage 150 \n TertiaryAreaDamage/Radius 90/50 \n QuadraryAreaDamage/Radius 160/80 \n InIClass DreadNought')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://dreadnought.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
/*
Duplicate
const e19 = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Naval Carrier')
	.setURL('')
	.attachFiles(['./resources/navalcarrier.png'])
	.setAuthor('Lemons', 'https://i.imgur.com/9wxw0Sg.png')
	.setDescription(' - Experimental Naval Carrier \n - Can make Air and Naval units \n - Built in fabricator \n - Goes nuclear on death\n- Can only have 5 at a time.')
	
	.addField('Stats', ' Price $65,000 \n Health 7,500 \n Attack Range 350 \n Move Speed 0.45 \n Build Speed 111.1s \n PrimaryAreaDamage/Radius 25/30 \n SecondaryAreaDamage/Radius 75/100 \n TertiaryAreaDamage/Radius 95 \n InIClass navalCarrier')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://navalcarrier.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');


	*/
const e20 = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Target Sub')
	.setURL('')
	.attachFiles(['./resources/targetsub.png'])
	.setAuthor('Lemons', 'https://i.imgur.com/9wxw0Sg.png')
	.setDescription(' - Highly Advance Sub\n - Able to Surface and Submerge\n - Land, Air, Sea Weapons ')
	
	.addField('Stats', ' Price $3,800 \n Health 1,250 \n Attack Range 210 \n Move Speed 0.60 \n Build Speed 16.7s \n PrimaryDamage 65 \n InIClass Target Sub')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://targetsub.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const e21 = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('LRS')
	.setURL('')
	.attachFiles(['./resources/lrs.png'])
	.setAuthor('Lemons', 'https://i.imgur.com/9wxw0Sg.png')
	.setDescription(' - Long Range Attack\n - Able to Surface and Submerge\n - Land, Underwater, and Air Attack\n - Light land attack while submerged')
	
	.addField('Stats', ' Price $7,000 \n Health 1,000 \n Attack Range 200 \n Move Speed 0.60 \n Build Speed 16.7s \n PrimaryAreaDamage/Radius 100/80 \n InIClass LRS')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://lrs.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');

client.on('message', message => {
	try{









//random
//Gunboat
if (message.content.toLowerCase() === 'gunboat' && !message.author.bot) {
	message.channel.send(e0);
}
//Probe
if (message.content.toLowerCase() === 'underwaterprobe') {
	if(message.author.bot) return;
	message.channel.send(e1);
} 
//Missile Ship
if (message.content.toLowerCase() === 'missileship') {
	if(message.author.bot) return;  
	message.channel.send(e2);
}
//Anti Air Boat
if (message.content.toLowerCase() === 'antiairboat') {
	if(message.author.bot) return;  
	message.channel.send(e3);
}
//Corvette
if (message.content.toLowerCase() === 'corvette') {
	if(message.author.bot) return;  
	message.channel.send(e4);
}
//Frigate
if (message.content.toLowerCase() === 'frigate') {
	if(message.author.bot) return;  
	message.channel.send(e5);
}
//battleship
if (message.content.toLowerCase() === 'battleship') {
	if(message.author.bot) return;  
	message.channel.send(e6);
}
//Heavybattleship
if (message.content.toLowerCase() === 'heavybattleship') {
	if(message.author.bot) return;  
	message.channel.send(e7);
}
//Destroyer
if (message.content.toLowerCase() === 'destroyer') {
	if(message.author.bot) return;  
	message.channel.send(e8);
}
//BattleCruiser
if (message.content.toLowerCase() === 'battlecruiser') {
	if(message.author.bot) return;  
	message.channel.send(e9);
}
//ThunderHead
if (message.content.toLowerCase() === 'thunderhead') {
	if(message.author.bot) return;  
	message.channel.send(e10);
}
//attacksubmarine
if (message.content.toLowerCase() === 'attacksubmarine') {
	if(message.author.bot) return;  
	message.channel.send(e11);
}
//HeavyMissileShip
if (message.content.toLowerCase() === 'heavymissileship') {
	if(message.author.bot) return;  
	message.channel.send(e12);
}
//HeavySub
if (message.content.toLowerCase() === 'heavysub') {
	if(message.author.bot) return;  
	message.channel.send(e13);
}
//Nautilus
if (message.content.toLowerCase() === 'nautilus') {
	if(message.author.bot) return;  
	message.channel.send(e14);
}
//Selenium
if (message.content.toLowerCase() === 'selenium') {
	if(message.author.bot) return;  
	message.channel.send(e15);
}
//Recon Sub
if (message.content.toLowerCase() === 'reconsub') {
	if(message.author.bot) return;  
	message.channel.send(e16);
}
//Amphibiouswarship
if (message.content.toLowerCase() === 'amphibiouswarship') {
	if(message.author.bot) return;  
	message.channel.send(e17);
}
//Dreadnought
if (message.content.toLowerCase() === 'dreadnought') {
	if(message.author.bot) return;  
	message.channel.send(e18);
}
//navalcarrier
/* Duplicate
if (message.content.toLowerCase() === 'navalcarrier') {
	if(message.author.bot) return;  
	message.channel.send(e19);
}
*/
//targetsub
if (message.content.toLowerCase() === 'targetsub') {
	if(message.author.bot) return;  
	message.channel.send(e20);
}
//LRS
if (message.content.toLowerCase() === 'lrs') {
	if(message.author.bot) return;  
	message.channel.send(e21);
}






}
catch(err){
	catchErr(err, message);
   }



});
  
  
//_____________Dont touch Zone start
}
//_____________Dont touch Zone end
