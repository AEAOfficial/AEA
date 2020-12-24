//Dont touch zone start
exports.code = function(){
    const { Client, Attachment } = require('discord.js');
	client.setMaxListeners(0)
	
	
//Dont touch zone end



//no no touch me there  this is my no no square




    const tlist = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Turret List')
	.setURL('')
	.setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png')
	.setDescription("A list of all turrets to be typed and displayed")
	
	.addField("Turrets", "T1Turret \n T2Turret \n T3Turret \n ArtilleryTurret \n FlameTurret \n RocketTurret \n MissileTurret  \n BunkerTurret \n LightCannon\n HeavyCannon\n T1SamTurret\n T2SamTurret\n T3SamTurret\n EMPAATurret\n FlakTurret\n subturretT1\n subturretT2\n subturretT3")
    .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setTimestamp()
    .setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
    



	
// \n Start a new line
    
    //T1turret
    const a1 = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Turret T1')
	.setURL('')
	.attachFiles(['./resources/turrett1.png'])
	.setAuthor('justasweetstrawberry[🇵🇭]#5774', 'https://imgur.com/TlX2rnJ.png')
	.setDescription(" -can only target  ground units\n-multiple upgrades")
	
	.addField("Stats", "Price $500 \n Health 120 \n Attack Range 130 \n directDamage 41 \n Build Speed 3.3s \n InIclass t1turretLand")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://turrett1.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');






     //T2turret
    const a2 = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Turret T2')
	.setURL('')
	.attachFiles(['./resources/turrett2.png'])
	.setAuthor('justasweetstrawberry[🇵🇭]#5774', 'https://imgur.com/TlX2rnJ.png')
	.setDescription(" -Can only target ground units\n-Multiple upgrades available")
	
	.addField("Stats", "Price $2,000 \n Health 1100 \n Attack Range 250 \n directDamage 42 \n Build Speed 32s \n InIclass t2gunLand")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://turrett2.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');





    //T3turret
    const a3 = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Turret T3')
	.setURL('')
	.attachFiles(['./resources/turrett3.png'])
	.setAuthor('justasweetstrawberry[🇵🇭]#5774', 'https://imgur.com/TlX2rnJ.png')
	.setDescription(" -Can only target ground units\n-Multiple upgrades available")
	
	.addField("Stats", "Price $12,500 \n Health 3200 \n Attack Range 305 \n directDamage 44 \n Build Speed 32s \n InIclass t3gunLand")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://turrett3.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');







         //Artyturret
     const a4 = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Artillery Turret')
	.setURL('')
	.attachFiles(['./resources/artilleryturret.png'])
	.setAuthor('justasweetstrawberry[🇵🇭]#5774', 'https://imgur.com/TlX2rnJ.png')
	.setDescription(" -long range and long reload")
	
	.addField("Stats", "Price $2,500 \n Health 1100 \n Attack Range 360 \n AOEdamage 150 \n Build Speed 32s \n InIclass t1arty")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://artilleryturret.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');







         //flame turret
    const a5 = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Flame Turret')
	.setURL('')
	.attachFiles(['./resources/flameturret.png'])
	.setAuthor('justasweetstrawberry[🇵🇭]#5774', 'https://imgur.com/TlX2rnJ.png')
	.setDescription(" -short range, area of attack.")
	
	.addField("Stats", "Price $1,800 \n Health 500 \n Attack Range 180 \n Build Speed 32s \n InIclass t1flameLand")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://flameturret.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');







         //rocket turret
    const a6 = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Rocket Turret')
	.setURL('')
	.attachFiles(['./resources/rocketturret.png'])
	.setAuthor('justasweetstrawberry[🇵🇭]#5774', 'https://imgur.com/TlX2rnJ.png')
	.setDescription(" -can attack ground and air. \n -long range.")
	
	.addField("Stats", "Price $2,400 \n Health 900 \n Attack Range 300 \n Build Speed 32s \n InIclass rocket_turret")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://rocketturret.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');




         //missileturret
    const a7 = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Rocket Turret T2')
	.setURL('')
	.attachFiles(['./resources/rocketturrett2.png'])
	.setAuthor('justasweetstrawberry[🇵🇭]#5774', 'https://imgur.com/TlX2rnJ.png')
	.setDescription(" -can attack ground and air. \n -long range.")
	
	.addField("Stats", "Price $11,000 \n Health 1800 \n Attack Range 360 \n Build Speed 0.0005s \n InIclass missile_turret")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://rocketturrett2.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');








         //bunkerturret
    const a8 = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Bunker Turret')
	.setURL('')
	.attachFiles(['./resources/bunkerturret.png'])
	.setAuthor('justasweetstrawberry[🇵🇭]#5774', 'https://imgur.com/TlX2rnJ.png')
	.setDescription("- Heavily armoured bunker turret\n- Near artillery range\n- Heavy damage from dual cannons")

	
	.addField("Stats", "Price $8,000 \n Health 7000 \n Attack Range 280 \n Build Speed 32s \n InIclass turret bunker")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://bunkerturret.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');






           //light cannon
    const a9 = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Light Cannon')
	.setURL('')
	.attachFiles(['./resources/lightcannon.png'])
	.setAuthor('justasweetstrawberry[🇵🇭]#5774', 'https://imgur.com/TlX2rnJ.png')
	.setDescription("-Can attack ground only\n-Very long range\n-Must be ordered to fire manually\n-Needs to be reloaded manually after 5 shots")
	
	.addField("Stats", "Price $7,500 \n Health 1200 \n Attack Range 390  \n Build Speed 0.0005s \n InIclass turretArtyLight")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://lightcannon.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');








          //heavy cannon
    const a10 = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Heavy Cannon')
	.setURL('')
	.attachFiles(['./resources/heavycannon.png'])
	.setAuthor('justasweetstrawberry[🇵🇭]#5774', 'https://imgur.com/TlX2rnJ.png')
	.setDescription("-Can attack ground only\n-Very long range\n-Must be ordered to fire manually\n-Needs to be reloaded manually after 10 shots")
	
	.addField("Stats", "Price $16,500 \n Health 2400 \n Attack Range 440  \n Build Speed 0.0005s \n InIclass turretArtyHeavy")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://heavycannon.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');






          //anti air T1
    const a11 = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('SAM Turret')
	.setURL('')
	.attachFiles(['./resources/samturret.png'])
	.setAuthor('justasweetstrawberry[🇵🇭]#5774', 'https://imgur.com/TlX2rnJ.png')
	.setDescription("-shoots surface to air missiles\n- cannot attack ground\n- upgradable")
	
	.addField("Stats", "Price $600 \n Health 800 \n Attack Range 250  \n Build Speed 0.002s \n InIclass c_antiAirTurret12")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://samturret.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128')







          //anti air T2
    const a12 = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('SAM Turret T2')
	.setURL('')
	.attachFiles(['./resources/samturrett2.png'])
	.setAuthor('justasweetstrawberry[🇵🇭]#5774', 'https://imgur.com/TlX2rnJ.png')
	.setDescription("-shoots surface to air missiles\n- cannot attack ground\n- upgradable")
	
	.addField("Stats", "Price $1,200 \n Health 1400 \n Attack Range 320  \n Build Speed 0.0008s \n InIclass c_antiAirTurretT212")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://samturrett2.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128')







          //anti air T3
    const a13 = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('SAM Turret T3')
	.setURL('')
	.attachFiles(['./resources/samturrett3.png'])
	.setAuthor('justasweetstrawberry[🇵🇭]#5774', 'https://imgur.com/TlX2rnJ.png')
	.setDescription("-shoots surface to air missiles\n- cannot attack ground\n- upgradable")
	
	.addField("Stats", "Price $9,000 \n Health 3900 \n Attack Range 400  \n Build Speed 0.002s \n InIclass c_antiAirTurretT3")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://samturrett3.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128')







          //emp aa
    const a14 = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('EMP AA Turret')
	.setURL('')
	.attachFiles(['./resources/empaa.png'])
	.setAuthor('justasweetstrawberry[🇵🇭]#5774', 'https://imgur.com/TlX2rnJ.png')
	.setDescription("- Can attack air only\n- Shoots powerful AOE EMP blasts\n- The bane of heavy interceptors\n- EMP's instantly disables enemy")
	
	.addField("Stats", "Price $3,900 \n Health  1800 \n sheild 200 \n Attack Range 330  \n Build Speed 0.002s \n InIclass shredderAATurret")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://empaa.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128')






          //flak aa
    const a15 = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('FLAK AA Turret')
	.setURL('')
	.attachFiles(['./resources/flakturret.png'])
	.setAuthor('justasweetstrawberry[🇵🇭]#5774', 'https://imgur.com/TlX2rnJ.png')
	.setDescription("- Short range heavy splash damage\n- The bane of gunships")
	
	.addField("Stats", "Price $4,100 \n Health 2700 \n sheild 1500 \n Attack Range 250  \n Build Speed 0.0008s \n InIclass c_antiAirTurretFlak")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://flakturret.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128')








          //subturret t1
    const a16 = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Sub Turret t1')
	.setURL('')
	.attachFiles(['./resources/subturret.png'])
	.setAuthor('justasweetstrawberry[🇵🇭]#5774', 'https://imgur.com/TlX2rnJ.png')
	.setDescription("- Short range heavy splash damage\n- The bane of gunships")
	
	.addField("Stats", "Price $1,000 \n Health 800 \n Attack Range 220  \n Build Speed 0.00010s \n InIclass c_antiAirTurretFlak")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage(('attachment://subturret.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'}




          //subturret t2
    const a17 = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Sub Turret t2')
	.setURL('')
	.attachFiles(['./resources/subturretT2.png'])
	.setAuthor('justasweetstrawberry[🇵🇭]#5774', 'https://imgur.com/TlX2rnJ.png')
	.setDescription("- Short range heavy splash damage\n- The bane of gunships")
	
	.addField("Stats", "Price $4100 \n Health 2700 \n sheild 1500 \n Attack Range 250  \n Build Speed 0.0008s \n InIclass c_antiAirTurretFlak")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage(('attachment://subturrett2.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128')





          //subturret t3
    const a18 = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('Sub Turret t3')
	.setURL('')
	.attachFiles(['./resources/subturrett3.png'])
	.setAuthor('justasweetstrawberry[🇵🇭]#5774', 'https://imgur.com/TlX2rnJ.png')
	.setDescription("- Short range heavy splash damage\n- The bane of gunships")
	
	.addField("Stats", "Price $4100 \n Health 2700 \n sheild 1500 \n Attack Range 250  \n Build Speed 0.0008s \n InIclass c_antiAirTurretFlak")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage (('attachment://subturrett3.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128')






	//Dont touch zone start
    client.on('message', message => {
	try{
    //Dont touch zone end




    if (message.content.toLowerCase() === 't1turret' || message.content.toLowerCase() === 'turret') {
        if(message.author.bot) return;
        message.channel.send(a1);
    }


    if (message.content.toLowerCase() === 't2turret') {
        if(message.author.bot) return;
        message.channel.send(a2);
    }


    if (message.content.toLowerCase() === 't3turret') {
        if(message.author.bot) return;
        message.channel.send(a3);
    }


if (message.content.toLowerCase() === 'artilleryturret') {
        if(message.author.bot) return;
        message.channel.send(a4);
    }



if (message.content.toLowerCase() === 'flameturret') {
        if(message.author.bot) return;
        message.channel.send(a5);
    }




    if (message.content.toLowerCase() === 'rocketturret') {
        if(message.author.bot) return;
        message.channel.send(a6);
    }


if (message.content.toLowerCase() === 'missileturret') {
        if(message.author.bot) return;
        message.channel.send(a7);
    }




    if (message.content.toLowerCase() === 'bunkerturret') {
        if(message.author.bot) return;
        message.channel.send(a8);
    }






    if (message.content.toLowerCase() === 'lightcannon') {
        if(message.author.bot) return;
        message.channel.send(a9);
    }




    if (message.content.toLowerCase() === 'heavycannon') {
        if(message.author.bot) return;
        message.channel.send(a10);
    }




    if (message.content.toLowerCase() === 't1sam' || message.content.toLowerCase() === 't1samturret' || message.content.toLowerCase() === 'samturret') {
        if(message.author.bot) return;
        message.channel.send(a11);
    }




    if (message.content.toLowerCase() === 't2sam' || message.content.toLowerCase() === 't2samturret') {
        if(message.author.bot) return;
        message.channel.send(a12);
    }



    if (message.content.toLowerCase() === 't3sam' || message.content.toLowerCase() === 't3samturret') {
        if(message.author.bot) return;
        message.channel.send(a13);
    }




    if (message.content.toLowerCase() === 'empaa' || message.content.toLowerCase() === 'empaaturret') {
        if(message.author.bot) return;
        message.channel.send(a14);
    }





    if (message.content.toLowerCase() === 'flakturret') {
        if(message.author.bot) return;
        message.channel.send(a15);
    }

    if (message.content.toLowerCase() === 'subturrett1') {
        if(message.author.bot) return;
        message.channel.send(a16);
    }

    if (message.content.toLowerCase() === 'subturrett2') {
        if(message.author.bot) return;
        message.channel.send(a17);
    }
		
		
    if (message.content.toLowerCase() === 'subturrett3') {
        if(message.author.bot) return;
        message.channel.send(a18);
    }	
		
		
		

    if (message.content.toLowerCase() === '/list turrets' || message.content.toLowerCase() === '/list turret') {
        message.channel.send(tlist);
    }











	//Dont touch zone start
	}
	catch(err){
		catchErr(err, message);
   	}    
    });
}
    //Dont touch zone end
