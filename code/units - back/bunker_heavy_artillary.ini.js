exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'turretbunker2') { 
              if(message.author.bot) return; 
              message.channel.send(TurretBunker2); 
              }
const TurretBunker2 = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/TurretBunker2.png']) 
   .setImage('attachment://TurretBunker2.png') 
   .setTitle(' Heavy Bunker Turret') 
   .setDescription(' - Heavily armoured bunker turret\n- Artillery range\n- Heavy damage from dual cannons') 
   .addField('Stats') 
   .addField('Price:  12000')
   .addField('Health:  8000')
   .addField('Build Speed:  0.00025')
   .addField('Range:  320')
   .addField('Direct Damage:  0 #no directDamage with targetGround')
   .addField('Area Damage:  185')
   .addField('Direct Damage:  0 #no directDamage with targetGround')
   .addField('Area Damage:  170')
   .addField('Move Speed:  0')
   .addField('Turn Speed:  0')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}
