exports.code = function(){
    const { Client, Attachment } = require('discord.js');
    const fs = require('fs');
    client.setMaxListeners(0)


    
    /* Embeds go here
    */

    //Xan Commander
   const xancommander = new Discord.MessageEmbed()  
   .setColor('#1500f7')
   .setTitle('Xan Commander')
   .setURL('')
   .attachFiles(['./resources/xancommander.png'])
   .setAuthor('Vox777#2661', 'https://i.imgur.com/kFsKZrD.png')
   .setDescription('- Advanced Next Gen super unit\n- Fast, agile, lightly armoured\n- Extremely powerful plasma minigun melts its enemies quickly\n- Long range ground & air attack\n- Cannot be repaired\n- Cannot fit in transports\n- Has self regen abilities\n- Can only have 1 built at a time\n vunerable to long ranged units like the experimental tank')
   
   .addField('Stats', 'Price $21,000 \n Health 1,500 \n Attack Range 280 \n Move Speed 1.40 \n Build Speed 165.9s \n PrimaryDamage 22 \n SecondaryAreaDamage/Radius 83/20 \n InIclass  c_xancommander')
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .setImage('attachment://xancommander.png')
   .setTimestamp()
   .setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');

   //Ghost
   const ghost = new Discord.MessageEmbed()  
   .setColor('#1500f7')
   .setTitle('Ghost')
   .setURL('')
   .attachFiles(['./resources/ghost.png'])
   .setAuthor('Vox777#2661', 'https://i.imgur.com/kFsKZrD.png')
   .setDescription('-Advanced armored infantry\n-Light plasma Rifles\n- Can attack ground & air\n-Advanced stealth technology\n- Renegerates health quickly')
   
   .addField('Stats', 'Price $1,800 \n Health 150 \n Attack Range 230 \n Move Speed 1.10 \n Build Speed 16.7s \n PrimaryDamage 45 \n SecondaryAreaDamage/Radius 0/0 \n InIclass  c_ghost')
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .setImage('attachment://ghost.png')
   .setTimestamp()
   .setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');



   /*
   This was your error
   client.on('message', message => {
       
    */



    client.on('message', message => {
        try{









        //Xan commander
			if (message.content.toLowerCase() === 'xancommander') {
				if(message.author.bot) return; 
				message.channel.send(xancommander);
			}
            //Ghost
            if (message.content.toLowerCase() === 'ghost') {
                if(message.author.bot) return; 
                message.channel.send(ghost);
            }










            

        }
        catch(err){
            catchErr(err, message);
           }
    });

}