
exports.code = function(){
const { Client, Attachment } = require('discord.js');
client.setMaxListeners(0)





const lynx = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Lynx')
	.setURL('')
	.attachFiles(['./resources/lynx.png'])
	.setAuthor('Anubis#5471', 'https://imgur.com/RYFFWLt.png')
	.setDescription(' - Very fast \n- Low armor \n- Ground attack')
	
	.addField('Stats', 'Price $275 \n Health 120 \n Attack Range 130 \n Move Speed 1.60 \n Build Speed 3.3s')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://lynx.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');

const lightgunship = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Light Gun Ship')
	.setURL('')
	.attachFiles(['./resources/light_gunship.png'])
	.setAuthor('Anubis#5471', 'https://imgur.com/RYFFWLt.png')
	.setDescription(' - Very weak \n- Light ground attack only \n- Slow')
	
	.addField('Stats', 'Price $250 \n Health 50 \n Attack Range 120 \n Move Speed 1.10 \n Build Speed 5.6s \n InIclass c_lightGunship')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://light_gunship.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');

const heavyinterceptor = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Heavy Interceptor')
	.setURL('')
	.attachFiles(['./resources/heavy_interceptor.png'])
	.setAuthor('Anubis#5471', 'https://imgur.com/RYFFWLt.png')
	.setDescription(' - Fast \n- Can attack air only \n- Heavily armed with shield \n- Shield weak vs lighnting \n InIclass c_heavyInterceptor')
	
	.addField('Stats', 'Price $1,200 \n Health 40 \n Attack Range 170 \n Move Speed 2.50 \n Build Speed 16.7s')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://heavy_interceptor.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const interceptor = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Interceptor')
	.setURL('')
	.attachFiles(['./resources/inteceptor.png'])
	.setAuthor('Anubis#5471', 'https://imgur.com/RYFFWLt.png')
	.setDescription(' - Fast \n- Can attack air only')
	
	.addField('Stats', 'Price $600 \n Health 250 \n Attack Range 170 \n Move Speed 2.40 \n Build Speed 8.3s \n InIclass c_interceptor')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://inteceptor.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const dropship = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Dropship')
	.setURL('')
	.attachFiles(['./resources/dropship.png'])
	.setAuthor('Anubis#5471', 'https://imgur.com/RYFFWLt.png')
	.setDescription(' - Fast \n- Can attack air only')
	
	.addField('Stats', 'Price $800 \n Health 700 \n Move Speed 2.30 \n Build Speed 16.7s \n InIclass c_dropship')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://dropship.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const gunship = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Gunship')
	.setURL('')
	.attachFiles(['./resources/gunship.png'])
	.setAuthor('Anubis#5471', 'https://imgur.com/RYFFWLt.png')
	.setDescription(' - Can attack ground only \n- Strong attack \n- Heavily armored \n InIclass c_gunship')
	
	.addField('Stats', 'Price $800 \n Health 285 \n Move Speed 1.40 \n Build Speed 8.3s')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://gunship.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const amphib = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Amphibious Jet')
	.setURL('')
	.attachFiles(['./resources/amphibious_jet.png'])
	.setAuthor('Anubis#5471', 'https://imgur.com/RYFFWLt.png')
	.setDescription(' - Shoots lightning while in air or underwater \n- Lightning weak vs grounded buildings')
	
	.addField('Stats', 'Price $1,800 \n Health 530 \n Attack Range 170 \n Move Speed 1.40 \n Build Speed 16.7s \n InIclass c_amphibiousJet')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://amphibious_jet.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const attackjet = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Attack Jet')
	.setURL('')
	.attachFiles(['./resources/attack_jet.png'])
	.setAuthor('Anubis#5471', 'https://imgur.com/RYFFWLt.png')
	.setDescription(' - Medium armor \n- Ground attack only \n- Armed with 2 missile launchers and a machine gun ')
	
	.addField('Stats', 'Price $2,750 \n Health 480 \n Attack Range 220 \n Move Speed 1.80 \n Build Speed 23.8s \n InIclass attackJet')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://attack_jet.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const bomber = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Bomber')
	.setURL('')
	.attachFiles(['./resources/bomber.png'])
	.setAuthor('Anubis#5471', 'https://imgur.com/RYFFWLt.png')
	.setDescription(' - Slightly better version of the vanilla bomber \n- Slow but tanky \n- Drops 3 bombs then has to reload \n- Anti-sub bombs (that actually do damage now')
	
	.addField('Stats', 'Price $4,000 \n Health 3000 \n Attack Range 45 \n Move Speed 0.85 \n Build Speed 66.7s \n InIclass c_bomber')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://bomber.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const missileairship = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Missile Airship')
	.setURL('')
	.attachFiles(['./resources/missile_airship.png'])
	.setAuthor('Anubis#5471', 'https://imgur.com/RYFFWLt.png')
	.setDescription(' - Attacks land and air \n- Fires missiles that do light splash \n- Has to reload after firing a few shots ')
	
	.addField('Stats', 'Price $3,000 \n Health 650 \n Attack Range 180 \n Move Speed 2 \n Build Speed 33.3s \n InIclass c_missileAirship')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://missile_airship.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const phantom = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Phantom scout')
	.setURL('')
	.attachFiles(['./resources/phantom_scout.png'])
	.setAuthor('Anubis#5471', 'https://imgur.com/RYFFWLt.png')
	.setDescription(' - Stealthy scouting drone \n- Very light attack \n- Has to be manually ordered to attack \n- Can turn invisible for 13 seconds at a time ')
	
	.addField('Stats', 'Price $5,000 \n Health 540 \n Attack Range 110 \n Move Speed 0.85 \n Build Speed 23.8s \n InIclass stelsShip')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://phantom_scout.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const apache = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Apache Helicopter')
	.setURL('')
	.attachFiles(['./resources/apache_helicopter.png'])
	.setAuthor('Anubis#5471', 'https://imgur.com/RYFFWLt.png')
	.setDescription(' - Can attack land and air \n- Heavily armed, very light armor \n- Unloads hellfire, but slow reload after barrage ')
	
	.addField('Stats', 'Price $2,750 \n Health 220 \n Attack Range 200 \n Move Speed 1.80 \n Build Speed 10.8s \n InIclass apacheHelicopter')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://apache_helicopter.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const mae1 = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('MAE-1')
	.setURL('')
	.attachFiles(['./resources/MAE-1.png'])
	.setAuthor('Anubis#5471', 'https://imgur.com/RYFFWLt.png')
	.setDescription(' - Like a builder but better \n- It's very vulnerable, but efficient \n- Can build fast and can repair units/buildings \n- Cannot build anti-air turrets \n-Cannot build more than 6 at a time')
	
	.addField('Stats', 'Price $3,525 \n Health 150 \n Attack Range 170 \n Move Speed 2.25 \n Build Speed 8.3 \n InIclass MAE-1')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://MAE-1.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const s1 = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('S-1')
	.setURL('')
	.attachFiles(['./resources/s1.png'])
	.setAuthor('Anubis#5471', 'https://imgur.com/RYFFWLt.png')
	.setDescription(' - 1 transport slot \n- Can't attack ')
	
	.addField('Stats', 'Price $1,350 \n Health 100 \n Move Speed 2.25 \n Build Speed 8.3s \n InIclass S-1')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://s1.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const S2 = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('S-2')
	.setURL('')
	.attachFiles(['./resources/s2.png'])
	.setAuthor('Anubis#5471', 'https://imgur.com/RYFFWLt.png')
	.setDescription(' - 6 pick-up slots \n- Can't attack ')
	
	.addField('Stats', 'Price $3,350 \n Health 575 \n Move Speed 1.50 \n Build Speed 8.3s \n InIclass S-2')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://s2.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const swallowtail = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Swallow Tail')
	.setURL('')
	.attachFiles(['./resources/swallowtail.png'])
	.setAuthor('Anubis#5471', 'https://imgur.com/RYFFWLt.png')
	.setDescription(' - Fast, glass cannon \n- Good home defence in groups \n- Weak armour but heavy DPS \n- Fucking swallow tails')
	
	.addField('Stats', 'Price $6,700 \n Attack Range 180 \n Health 300 \n Sheild 600 \n Move Speed 1.80 \n Build Speed 23.8 \n InIclass Swallowtail')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://swallowtail.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const heavymissileaircraft = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Heavy Missile Aircraft')
	.setURL('')
	.attachFiles(['./resources/heavy_missile_aircraft.png'])
	.setAuthor('Anubis#5471', 'https://imgur.com/RYFFWLt.png')
	.setDescription(' - Slow, Powerful, Attacks land and air ')
	
	.addField('Stats', 'Price $9,750 \n Attack Range 200 \n Health 2400 \n Move Speed 0.85 \n Build Speed 55.6 \n InIclass missileAirplane')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://heavy_missile_aircraft.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const kirov = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Kirov Bomber')
	.setURL('')
	.attachFiles(['./resources/kirov_bomber.png'])
	.setAuthor('Anubis#5471', 'https://imgur.com/RYFFWLt.png')
	.setDescription(' - Heavy aircraft \n- Armed with 30 bombs (slow reload) \n- Heavy armor \n- Can attack only land \n- Slow')
	
	.addField('Stats', 'Price $45,000 \n Attack Range 60 \n Health 24000 \n Move Speed 0.50 \n Build Speed 45.5s \n InIclass kirov')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://kirov_bomber.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const grandslam = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Grand Slam Bomber')
	.setURL('')
	.attachFiles(['./resources/grand_slam_bomber.png'])
	.setAuthor('Anubis#5471', 'https://imgur.com/RYFFWLt.png')
	.setDescription(' - Very fast but slow turn \n- Heavily armoured \n- Carries 1 50-ton bomb \n- Also has a quantum torpedo to attack subs \n- Takes a long time to recharge \n- Can self-repair \n- Defensless vs air \n - Can only build 5 at a time ')
	
	.addField('Stats', 'Price $42,000 \n Attack Range 45 \n Health 24000 \n Move Speed 1.70 \n Build Speed 83.3s \n InIclass grandSlamBomber')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://grand_slam_bomber.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const helicopter = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Helicopter')
	.setURL('')
	.attachFiles(['./resources/helicopter.png'])
	.setAuthor('Anubis#5471', 'https://imgur.com/RYFFWLt.png')
	.setDescription('- Very light air/ground attack\n - Can transport 4 infantry units\n - Landed when not actively moving')
	
	.addField('Stats', 'Price $500 \n Attack Range 130 \n Health 150 \n Move Speed 1.80 \n Build Speed 13.9 \n InIclass c_helicopter12')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://helicopter.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
	
	client.on('message', message => {
//units
try{
    if (message.content.toLowerCase() === 'lightgunship') {
	    message.channel.send(lightgunship);
    }
    if (message.content.toLowerCase() === 'heavyinterceptor') {
	    message.channel.send(heavyinterceptor);
    }
    if (message.content.toLowerCase() === 'interceptor') {
	    message.channel.send(interceptor);
    }
    if (message.content.toLowerCase() === 'dropship') {
	    message.channel.send(dropship);
    }
    if (message.content.toLowerCase() === 'gunship') {
	    message.channel.send(gunship);
    }
    if (message.content.toLowerCase() === 'amphibiousjet') {
	    message.channel.send(amphib);
    }
    if (message.content.toLowerCase() === 'attackjet') {
	    message.channel.send(attackjet);
    }
    if (message.content.toLowerCase() === 'bomber') {
	    message.channel.send(bomber);
    }
    if (message.content.toLowerCase() === 'missileairship') {
	    message.channel.send(missileairship);
    }
    if (message.content.toLowerCase() === 'phantomscout') {
	    message.channel.send(phantom);  
    }
    if (message.content.toLowerCase() === 'apachehelicopter') {
	    message.channel.send(apache);  
    }
    if (message.content.toLowerCase() === 'mae-1') {
	    message.channel.send(mae1);  
    }
    if (message.content.toLowerCase() === 's-1') {
	    message.channel.send(s1);  
    }
    if (message.content.toLowerCase() === 's-2') {
	    message.channel.send(S2);  
    }
    if (message.content.toLowerCase() === 'swallowtail') {
	    message.channel.send(swallowtail);  
    }
    if (message.content.toLowerCase() === 'heavymissileaircraft') {
	    message.channel.send(heavymissileaircraft);  
    }
    if (message.content.toLowerCase() === 'kirovbomber') {
	    message.channel.send(kirov);  
    }
    if (message.content.toLowerCase() === 'grandslambomber') {
	    message.channel.send(grandslam);  
    }
    if (message.content.toLowerCase() === 'helicopter') {
	    message.channel.send(helicopter);  
    }
 //commands 	

    //N-word delete
	if (message.content.includes('nigger') || message.content.includes('Nigger') || message.content.includes('nigga') ||message.content.includes('Nigga') || message.content.includes('NIGGER') || message.content.includes('NIGGA') || message.content.includes('nibba') || message.content.includes('NIBBA')) { 
		
		message.delete(); 
		 const attachment = new Attachment('./resources/nwordmechs.jpg');
               message.channel.send(attachment);
               message.reply('is racist');
	if(message.author.bot) return;
	}
		
    function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
    }
    if (message.content.includes('/flipcoin')) {
        var flip = getRandomInt(1, 20);
        if (flip >= 10) {
        message.reply('Tails')
            } 
        if (flip <= 10){
        message.reply('Heads')
            }
    }

    if (!message.content.includes(',') && !message.content.includes('bad') && !message.content.includes('person') && message.content.includes('rape') && message.content.includes('good') ||  message.content.includes('child porn')) {
        const attachment = new Attachment('./resources/download.jpg');
        message.channel.send(attachment);

    }

}
catch(err){
	catchErr(err, message);
   }  
});
//Dont touch Zone start
}
//Dont touch Zone end
