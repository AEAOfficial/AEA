exports.code = function(){
    const { Client, Attachment } = require('discord.js');
    const fs = require('fs');
    client.setMaxListeners(0)

    const e1 = new Discord.MessageEmbed()  
        .setColor('#1500f7')
        .setTitle('Fire bee')
        .setURL('')
        .attachFiles(['./resources/firebee.png'])
        .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png')
        .setDescription(' - Heavily armed \n - Can attack ground \n - Medium air attack \n - Needs to reload after firing \n - Self repair')
        
        .addField('Stats', 'Price $12,000 \n Health 4,900 \n Attack Range 210 \n Move Speed 1.10 \n Build Speed 24.7s \n PrimaryDamage 22 \n SecondaryAreaDamage/Radius 45/40 \n InIclass  c_fireBee')
        .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
        .setImage('attachment://firebee.png')
        .setTimestamp()
        .setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
        
    const e2 = new Discord.MessageEmbed()  
        .setColor('#1500f7')
        .setTitle('Apocolypse Tank')
        .setURL('')
        .attachFiles(['./resources/expmam.png'])
        .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png')
        .setDescription(' - Very heavily armored \n - Armed with twin cannons and rocket launchers \n - Can attack ground and air \n - Can self repair')
        
        .addField('Stats', 'Price $8,000 \n Health 3,000 \n Attack Range 230 \n Move Speed 0.50 \n Build Speed 20.8s \n PrimaryAreaDamage/Radius 60/50 \n SecondaryAreaDamage/Radius 20/65 \n InIclass specMammothTank')
        .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
        .setImage('attachment://expmam.png')
        .setTimestamp()
        .setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
        
    const e3 = new Discord.MessageEmbed()  
        .setColor('#1500f7')
        .setTitle('Experimental Tank')
        .setURL('')
        .attachFiles(['./resources/exptank.png'])
        .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png')
        .setDescription(' - Very heavily armored \n - Armed with quad cannons \n - Can attack ground \n - Light air attack \n - High range')
        
        .addField('Stats', 'Price $16,800 \n Health 6,000 \n Attack Range 310 \n Move Speed 0.40 \n Build Speed 60.0s \n PrimaryAreaDamage/Radius 60/65 \n SecondaryDamage 75 \n InIclass cc_experimentalTank')
        .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
        .setImage('attachment://exptank.png')
        .setTimestamp()
        .setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
    
    const e4 = new Discord.MessageEmbed()  
        .setColor('#1500f7')
        .setTitle('Experimental Sam Tank')
        .setURL('')
        .attachFiles(['./resources/expsamtank.png'])
        .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png')
        .setDescription(' - Very heavily armed and armored\n - Armed with anti-air missles and flak turret\n - Can attack air only')
        
        .addField('Stats', 'Price $28,000 \n Health 6,000 \n Max Attack Range 350 \n Move Speed 0.40 \n Build Speed 60.0s \n PrimaryDamage 110 \n SecondaryAreaDamage/Radius 160/120 \n InIclass experimentalSamTank')
        .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
        .setImage('attachment://expsamtank.png')
        .setTimestamp()
        .setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
        
    const e5 = new Discord.MessageEmbed()  
        .setColor('#1500f7')
        .setTitle('Science Vessel')
        .setURL('')
        .attachFiles(['./resources/scienceves.png'])
        .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png')
        .setDescription(' - Constructs and repairs experimental units\n - Can shoot a quantum torpedo when energy is full \n - Builds expensive quantum turrets \n - Goes nuclear on death (if nukes are enabled) \n - Consumes credits \n - Flying')
        
        .addField('Stats', 'Price $35,000 \n Health 1,000 \n Max Attack Range 250 \n Move Speed 1.20 \n Build Speed 83.3s \n PrimaryAreaDamage/Radius 400/180 \n InIclass scienceVessel')
        .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
        .setImage('attachment://scienceves.png')
        .setTimestamp()
        .setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');

    const e6 = new Discord.MessageEmbed()  
        .setColor('#1500f7')
        .setTitle('Shielded Hovertank')
        .setURL('')
        .attachFiles(['./resources/exphovertank.png'])
        .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png')
        .setDescription(' - Very heavily armed with shield\n - Can attack ground and air \n - Able to move over water')
        
        .addField('Stats', 'Price $21,000 \n Health 3,500 \n Shield 5,000 \n Attack Range 180 \n Move Speed 0.60 \n Build Speed 83.3s \n PrimaryDamage Unknown \n InIclass Unknown')
        .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
        .setImage('attachment://exphovertank.png')
        .setTimestamp()
        .setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
        
    const e7 = new Discord.MessageEmbed()  
        .setColor('#1500f7')
        .setTitle('Nuclear Drone')
        .setURL('')
        .attachFiles(['./resources/NuclearDrone.png'])
        .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png')
        .setDescription(' - Nuclear drone, an unmanned shuttle that has 50T nuclear warhead inside of it\'s hull.\n - Easy to destroy\n- Good for air spam control\n - Can only have 2 built at a time.\n- Bruh.')
        
        .addField('Stats', 'Price $28,000 \n Health 2500 \n Attack Range 9 \n Move Speed 1.75 \n Build Speed 21.3s \n PrimaryAreaDamage/Radius 2500/225 \n InIclass NuclearDrone')
        .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
        .setImage('attachment://NuclearDrone.png')
        .setTimestamp()
        .setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
    
    const mothership = new Discord.MessageEmbed()
        .setColor('#1500f7')
        .setTitle('Mothership')
        .setURL('')
        .attachFiles(['./resources/expmother.png'])
        .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png')
        .setDescription(' - Ultimate Carrier \n- Armed with hellfire cannons and missile launchers \n- Built in fabricator \n- Carries 16 Units \n- Goes nuclear on death')
        
        .addField('Stats', 'Price $150,000 \n Health 15,000 \n Attack Range 320 \n Move Speed 0.65 \n Build Speed 123.8s')
        .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
        .setImage('attachment://expmother.png')
        .setTimestamp()
        .setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');  

    const expmech = new Discord.MessageEmbed()
        .setColor('#1500f7')
        .setTitle('Experimental Mech')
        .setURL('')
        .attachFiles(['./resources/expmech.png'])
        .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png')
        .setDescription(' - Very heavily armed and armored \n- Can attack ground and light air \n- Sub attack when over water \n- Very slow \n - Can self-repair \n- Can move over water')
        
        .addField('Stats', 'Price $125,000 U: 7,500\n Health 15,000 \n Attack Range 310 \n Move Speed 0.30 \n Build Speed 92.4s')
        .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
        .setImage('attachment://expmech.png')
        .setTimestamp()
        .setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');

    const titan = new Discord.MessageEmbed()
        .setColor('#1500f7')
        .setTitle('Titan')
        .setURL('')
        .attachFiles(['./resources/exptitan.png'])
        .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png')
        .setDescription(' - Advanced heavy seige mech \n- Strong ground attack with long range \n- Gatling anti-tank cannon \n- Drum-fed grenade launcher \n- Guided missiles \n- Cannot fit in air transports \n- Goes nuclear on death \n- Can walk on water')
        
        .addField('Stats', 'Price $250,000 U: 12,500\n Health 12,000 \n Shield 8,000 \n Attack Range 350 \n Move Speed 0.4 \n Build Speed Varies')
        .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
        .setTimestamp()
        .setImage('attachment://exptitan.png')
        .setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
        
    const expspider = new Discord.MessageEmbed()
        .setColor('#1500f7')
        .setTitle('Experimental Spider')
        .setURL('')
        .attachFiles(['./resources/expspider.png'])
        .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png')
        .setDescription(' - Support unit \n- Laser defense \n- Built in fabricator \n- Can build/repair units and buildings \n- Cannot fit in transports \n- Can build powerful experimentals \n- Can only have 5 built at once \n- Goes nuclear on death \n - Can walk on water')
        
        .addField('Stats', 'Price $70,000 U:5000 \n Health 10,000 \n Attack Range 250 \n Move Speed 0.30 \n Build Speed 83.3s')
        .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
        .setImage('attachment://expspider.png')
        .setTimestamp()
        .setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');

    const navalcarrier = new Discord.MessageEmbed()
        .setColor('#1500f7')
        .setTitle('Naval Carrier')
        .setURL('')
        .attachFiles(['./resources/navalcarrier.png'])
        .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png')
        .setDescription(' - Experimental Naval Carrier \n- Can make Air and Naval units \n- Built in fabricator \n- Carries 16 Units \n- Goes nuclear on death \n- Can only have 5 at a time')
        
        .addField('Stats', 'Price $65,000 U: 5000\n Health 7,500 \n Attack Range 350 \n Move Speed 0.45 \n Build Speed 111.1s \n PrimaryAreaDamage/Radius 25/30 \n SecondaryAreaDamage/Radius 75/100 \n TertiaryAreaDamage/Radius 95 \n InIClass navalCarrier')
        .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
        .setImage('attachment://navalcarrier.png')
        .setTimestamp()
        .setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
    
    const flyingfortress = new Discord.MessageEmbed()
        .setColor('#1500f7')
        .setTitle('Flying Fortress')
        .setURL('')
        .attachFiles(['./resources/expfortress.png'])
        .setAuthor('Vox777#2661', 'https://i.imgur.com/kFsKZrD.png')
        .setDescription(' - Heavily Armoured \n - Can build Land Factory units \n - Anti Air \n - Can attack ground units when landed \n - Built in Fabricator \n - 12 Transport Slots \n - Can only have 8 at a time \n - Useful for transporting experimental mechs across a large area')
        
        .addField('Stats', 'Price $30,000 \n Health 8,000 \n Attack Range 210 \n Move Speed 1.1 \n Build Speed 50.5s \n Income $8 \n Direct damage: 35x2/.42s')
        .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
        .setImage('attachment://expfortress.png')
        .setTimestamp()
        .setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');

    client.on('message', message => {
        try{
            //firebee
            if (message.content.toLowerCase() === 'firebee') {
                if(message.author.bot) return; 
                message.channel.send(e1);
            }
            //mammoth tank
            if (message.content.toLowerCase() === 'apocalypsetank') {
                if(message.author.bot) return; 
                message.channel.send(e2);
            }
            //Experimental Tank
            if (message.content.toLowerCase() === 'experimentaltank' || message.content.toLowerCase() === 'exptank') {
                if(message.author.bot) return; 
                message.channel.send(e3);
            }
             //Experimental Sam Tank
             if (message.content.toLowerCase() === 'experimentalsamtank' || message.content.toLowerCase() === 'expsamtank') {
                if(message.author.bot) return; 
                message.channel.send(e4);
            }   
             //Science Vessel
             if (message.content.toLowerCase() === 'sciencevessel') {
                if(message.author.bot) return; 
                message.channel.send(e5);
            } 
             //Exp hovertank
             if (message.content.toLowerCase() === 'shieldedhovertank' ) {
                if(message.author.bot) return; 
                message.channel.send(e6);
            }      
             //nuke drone
             if (message.content.toLowerCase() === 'nucleardrone' || message.content.toLowerCase() === 'nukedrone') {
                if(message.author.bot) return; 
                message.channel.send(e7);
            }       
            //mothership
            if (message.content.toLowerCase() === 'mothership') {
                if(message.author.bot) return; 
                message.channel.send(mothership);
            } 
            //Experimental Mech
            if (message.content.toLowerCase() === 'experimentalmech' || message.content.toLowerCase() === 'expmech') {
                if(message.author.bot) return; 
                message.channel.send(expmech);
            } 
            //Titan
            if (message.content.toLowerCase() === 'titan') {
                if(message.author.bot) return; 
                message.channel.send(titan);
            }
            
            //Exp spider
            if (message.content.toLowerCase() === 'expspider' || message.content.toLowerCase() === 'experimentalspider') {
                if(message.author.bot) return; 
                message.channel.send(expspider);
            } 

            //Naval Carrier
            if (message.content.toLowerCase() === 'navalcarrier') {
                if(message.author.bot) return; 
                message.channel.send(navalcarrier);
            } 
            
            //Flying Fortress
            if (message.content.toLowerCase() === 'flyingfortress') {
                if(message.author.bot) return; 
                message.channel.send(flyingfortress);
            } 
        }
        catch(err){
            catchErr(err, message);
           }
});
  
  
  
  
//________________Dont touch Zone start
}
//________________Dont touch Zone end
