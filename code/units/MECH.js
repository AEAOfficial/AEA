//Dont touch Zone start
exports.code = function(){
    const { Client, Attachment } = require('discord.js');
    const fs = require('fs');
    client.setMaxListeners(0)
//Dont touch Zone end

    const e1 = new Discord.MessageEmbed()  
        .setColor('#1500f7')
        .setTitle('Basic Mech')
        .setURL('')
        .attachFiles(['./resources/basicmech.png'])
        .setAuthor('Anubis#5471', 'https://imgur.com/RYFFWLt.png.png')
        .setDescription(' - Attacks land only \n- Stronger but slower than T1 tanks')
         
        .addField('Stats', 'Price $550 \n Health 500 \n Attack Range 130 \n Move Speed 0.80 \n Build Speed 9.8s \n PrimaryDamage 23 \n InIclass basicMech')
        .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
        .setImage('attachment://basicmech.png')
        .setTimestamp()
        .setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
        
    const e2 = new Discord.MessageEmbed() 
        .setColor('#1500f7')
        .setTitle('Artillery Mech') 
        .setURL('')
        .attachFiles(['./resources/artillerymech.png'])
        .setAuthor('Anubis#5471', 'https://imgur.com/RYFFWLt.png')
        .setDescription(' - Ground attack \n- Long range \n- Can move while firing \n- Stronger vs buildings than vs units')
        
        .addField('Stats', 'Price $1,500 \n Health 500 \n Attack Range 290 \n FogOfWar 20 \n Move Speed 0.60 \n Build Speed 16.7s \n PrimaryAreaDamage/Radius 85/45 \n InIclass artilleryMech')
        .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
        .setImage('attachment://artillerymech.png')
        .setTimestamp()
        .setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
    const e3 = new Discord.MessageEmbed()
        .setColor('#1500f7')
        .setTitle('Mobile Turret')
        .setURL('')
        .attachFiles(['./resources/mobileturret.png'])
        .setAuthor('Anubis#5471', 'https://imgur.com/RYFFWLt.png')
        .setDescription(' - Ground attack \n- Deploys for extra range and a shield')
        
        .addField('Stats', 'Price $3,500 \n Health 800 \n Attack Range 200 \n FogOfWar 20 \n Move Speed 0.50 \n Build Speed 21.7s \n PrimaryDamage 80 \n InIclass mobileTurret')
        .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
        .setImage('attachment://mobileturret.png')
        .setTimestamp()
        .setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
    const e4 = new Discord.MessageEmbed()
        .setColor('#1500f7')
        .setTitle('Anti Air Mech')
        .setURL('')
        .attachFiles(['./resources/antiairmech.png'])
        .setAuthor('Anubis#5471', 'https://imgur.com/RYFFWLt.png')
        .setDescription(' - Attacks air only \n- Area affect \n- Can not attack land ')
        
        .addField('Stats', 'Price $850 \n Health 500 \n Attack Range 190 \n Move Speed 0.80 \n Build Speed 9.8s \n PrimaryDamage 70 \n InIclass antiAirMech')
        .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
        .setImage('attachment://antiairmech.png')
        .setTimestamp()
        .setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
    const e5 = new Discord.MessageEmbed()
        .setColor('#1500f7')
        .setTitle('Light Minigun Mech')
        .setURL('')
        .attachFiles(['./resources/lightminigunmech.png'])
        .setAuthor('Anubis#5471', 'https://imgur.com/RYFFWLt.png')
        .setDescription(' - Can attack air and ground \n- Burst-fire attack')
        
        .addField('Stats', 'Price $1,000 \n Health 500 \n Attack Range 140 \n Move Speed 0.80 \n Build Speed 9.8s \n PrimaryDamage 4 \n InIclass lightMinigunMech')
        .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
        .setImage('attachment://lightminigunmech.png')
        .setTimestamp()
        .setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
    const e6 = new Discord.MessageEmbed()
        .setColor('#1500f7')
        .setTitle('Heavy Mech')
        .setURL('')
        .attachFiles(['./resources/heavymech.png'])
        .setAuthor('Anubis#5471', 'https://imgur.com/RYFFWLt.png')
        .setDescription(' - Ground attack \n- Heavily armored \n- Moderate damage and range \n- Can disable weapon to activate a temporary shield and self-repair')
        
        .addField('Stats', 'Price $5,000 \n Health 2,000 \n HealthRegen 0.8415 \n Shield 900 \n ShieldRegen 0 \n Attack Range 250 \n FogOfWar 20 \n Move Speed 0.70 \n Build Speed 18.3s \n PrimaryDamage 125 \n InIclass heavyMech')
        .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
        .setImage('attachment://heavymech.png')
        .setTimestamp()
        .setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
    const e7 = new Discord.MessageEmbed()
        .setColor('#1500f7')
        .setTitle('Minigun Mech')
        .setURL('')
        .attachFiles(['./resources/minigunmech.png'])
        .setAuthor('Anubis#5471', 'https://imgur.com/RYFFWLt.png')
        .setDescription(' - Ground attack \n- Fast firing \n- Speeds up as it fires \n- Has shield (weak against lightning) ')
        
        .addField('Stats', 'Price $5,000 \n Health 800\n Shield 1000 \n ShieldRegen 0.08 \n Attack Range 210 \n FogOfWar 20 \n Move Speed 0.60 \n Build Speed 27.8s \n PrimaryDamage 60 \n InIclass minigunMech')
        .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
        .setImage('attachment://minigunmech.png')
        .setTimestamp()
        .setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
    const e8 = new Discord.MessageEmbed()
        .setColor('#1500f7')
        .setTitle('Tesla Mech')
        .setURL('')
        .attachFiles(['./resources/teslamech.png'])
        .setAuthor('Anubis#5471', 'https://imgur.com/RYFFWLt.png')
        .setDescription(' - Land & air lightning attack \n- Decent range and movement speed \n- Very strong vs shields \n- Reduced damage vs grounded buildings \n- Can discharge itself and sacrifice HP to deal area damage')
        
        .addField('Stats', 'Price $6,500 \n Health 1,500 \n Attack Range 250 \n FogOfWar 20 \n Move Speed 0.60 \n Build Speed 27.8s \n PrimaryDamage 140 \n SecondaryAreaDamage/Radius 520/170 \n InIclass teslaMech')
        .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
        .setImage('attachment://teslamech.png')
        .setTimestamp()
        .setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
    const e9 = new Discord.MessageEmbed()
        .setColor('#1500f7')
        .setTitle('Paladin Mech')
        .setURL('')
        .attachFiles(['./resources/paladinmech.png'])
        .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png')
        .setDescription(' - Can attack ground and light air \n- Shields absorb splash damage \n- All around decent unit for price')
        
        .addField('Stats', 'Price $4,000 \n Health 500 \n Shield 800 \n ShieldRegen 0.25 \n Attack Range 240 \n FogOfWar 20 \n Move Speed 0.75 \n Build Speed 16.7s \n PrimaryAreaDamage/Radius 80/30 \n SecondaryDamage 62 \n InIclass Paladin')
        .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
        .setImage('attachment://paladinmech.png')
        .setTimestamp()
        .setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
    const e10 = new Discord.MessageEmbed()
        .setColor('#1500f7')
        .setTitle('Flame Mech')
        .setURL('')
        .attachFiles(['./resources/flamemech.png'])
        .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png')
        .setDescription(' - Area effect flamethrower \n - Can attack land only \n - High HP with self-repair \n - Can fire an underground incendiary shell')
        
        .addField('Stats', 'Price $12,000 \n Health 5,000 \n HealthRegen 0.08 \n Attack Range 180 \n Move Speed 0.60 \n Build Speed 27.8s \n PrimaryAreaDamage/Radius 18/80 SecondaryAreaDamage/Radius 70-110/100 \n InIclass flameMech')
        .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
        .setImage('attachment://flamemech.png')
        .setTimestamp()
        .setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
    const e11 = new Discord.MessageEmbed()
        .setColor('#1500f7')
        .setTitle('Plasma Mech')
        .setURL('')
        .attachFiles(['./resources/plasmamech.png'])
        .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png')
        .setDescription(' - Attacks land & air \n - Needs to recharge after firing \n - Long range \n - Stronger vs. units than vs. buildings')
        
        .addField('Stats', 'Price $7,000 \n Health 1,300 \n HealthRegen 0.08 \n Attack Range 320 \n FogOfWar 20 \n Move Speed 0.60 \n Build Speed 33.3s \n PrimaryDamage 150 \n InIclass plasmaMech')
        .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
        .setImage('attachment://plasmamech.png')
        .setTimestamp()
        .setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
    const e12 = new Discord.MessageEmbed()
        .setColor('#1500f7')
        .setTitle('Heavy Artillery Mech')
        .setURL('')
        .attachFiles(['./resources/hvyartmech.png'])
        .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png')
        .setDescription(' - Ground attack \n - Needs to deploy to fire \n - Very long range, but slow reload \n - Regenerates shield when deployed \n - Stronger vs. buildings than vs. units')
        
        .addField('Stats', 'Price $9,000 \n Health 750 \n HealthRegen 0.08 \n Shield 500 \n ShieldRegen 0 - 0.275 \n Attack Range 410 \n FogOfWar 23 - 28 \n Move Speed 0.60 \n Build Speed 33.3s \n PrimaryAreaDamage/Radius 125/65 \n InIclass heavyArtilleryMech')
        .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
        .setImage('attachment://hvyartmech.png')
        .setTimestamp()
        .setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
    const e13 = new Discord.MessageEmbed()
        .setColor('#1500f7')
        .setTitle('Rocket Mech')
        .setURL('')
        .attachFiles(['./resources/rocketmech.png'])
        .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png')
        .setDescription(' - Medium armor \n - Heavily armed \n - Can attack ground and air \n - Strong vs. multiple units \n - Can overcharge itself to increase firepower and movement speed')
        
        .addField('Stats', 'Price $6,500 \n Health 1,100 \n Attack Range 265 \n FogOfWar 20 \n Move Speed 0.60 \n Build Speed 33.3s \n PrimaryAreaDamage/Radius 65/75 \n SecondaryAreaDamage/Radius 40/75 \n InIclass rocketMech')
        .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
        .setImage('attachment://rocketmech.png')
        .setTimestamp()
        .setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
    const e14 = new Discord.MessageEmbed()
        .setColor('#1500f7')
        .setTitle('Heavy Mobile Turret')
        .setURL('')
        .attachFiles(['./resources/hvymobileturret.png'])
        .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png')
        .setDescription(' - Heavily armored \n - Ground attack when undeployed \n - Deploys for extra range, anti-air and shield regen \n - Cannot attack while undeploying \n - Can release a repairing nano-burst when deployed')
        
        .addField('Stats', 'Price $8,000 \n Health 1,400 \n Shield 0-1600 \n ShieldRegen 0 - 0.3 \n UnitHealArea/Radius 0/0 - 200/220 \n Attack Range 220 - 300 \n FogOfWar 20 \n Move Speed 0.60 \n Build Speed 33.3s \n PrimaryAreaDamage/Radius 40 - 50 \n SecondaryAreaDamage/Radius 30 -25 \n InIclass rocketMech')
        .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
        .setImage('attachment://hvymobileturret.png')
        .setTimestamp()
        .setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
    const e15 = new Discord.MessageEmbed()
        .setColor('#1500f7')
        .setTitle('Assault Mech')
        .setURL('')
        .attachFiles(['./resources/assaultmech.png'])
        .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png')
        .setDescription(' - Heavily armed and armored \n - Can attack ground \n - Light air attack \n - Can build and buff nearby small T1 mechs \n - Can self-repair')
        
        .addField('Stats', 'Price $20,000 \n Health 4,800 \n Attack Range 250 \n FogOfWar 20 \n Move Speed 0.60 \n Build Speed 33.3s \n PrimaryAreaDamage/Radius 500/75 \n SecondaryAreaDamage/Radius 15/40 \n TertiaryDamage 26 \n InIclass assaultMech')
        .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
        .setImage('attachment://assaultmech.png')
        .setTimestamp()
        .setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
//add mech eng

        client.on('message', message => {
            try{





            //basicmech
                if (message.content.toLowerCase() === 'basicmech') {
					if(message.author.bot) return; 
                    message.channel.send(e1);
                }
            //artillerymech
                if (message.content.toLowerCase() === 'artillerymech') {
					if(message.author.bot) return; 
                    message.channel.send(e2);
                }
            //mobileturret
                if (message.content.toLowerCase() === 'mobileturret') {
					if(message.author.bot) return; 
                    message.channel.send(e3);
                }
            //antiairmech
                if (message.content.toLowerCase() === 'antiairmech') {
					if(message.author.bot) return; 
                    message.channel.send(e4);
                }
            //lightminigunmech
                if (message.content.toLowerCase() === 'lightminigunmech') {
					if(message.author.bot) return; 
                    message.channel.send(e5);
                } 
            //heavymech
                if(message.content.toLowerCase() === 'heavymech'){
					if(message.author.bot) return; 
                    message.channel.send(e6);
                }
            //minigunmech
                if(message.content.toLowerCase() === 'minigunmech'){
					if(message.author.bot) return; 
                    message.channel.send(e7);
                }
            //teslamech
                if (message.content.toLowerCase() === 'teslamech') {
					if(message.author.bot) return; 
                    message.channel.send(e8);
                } 
            //Paladin
            if (message.content.toLowerCase() === 'paladinmech') {
                if(message.author.bot) return; 
                message.channel.send(e9);
            }  
            //FlameMech
            if (message.content.toLowerCase() === 'flamemech') {
                if(message.author.bot) return; 
                message.channel.send(e10);
            }   
            //PlasmaMech
            if (message.content.toLowerCase() === 'plasmamech') {
                if(message.author.bot) return; 
                message.channel.send(e11);
            }  
            //Heavy Art Mech
            if (message.content.toLowerCase() === 'heavyartillerymech') {
                if(message.author.bot) return; 
                message.channel.send(e12);
            }  
            //RocketMech
            if (message.content.toLowerCase() === 'rocketmech') {
                if(message.author.bot) return; 
                message.channel.send(e13);
            }  
            //Heavy Mobile Turret
            if (message.content.toLowerCase() === 'heavymobileturret') {
                if(message.author.bot) return; 
                message.channel.send(e14);
            }  
            //Assault Mech
            if (message.content.toLowerCase() === 'assaultmech') {
                if(message.author.bot) return; 
                message.channel.send(e15);
            }  




        }
        catch(err){
            catchErr(err, message);
           }



            });
}