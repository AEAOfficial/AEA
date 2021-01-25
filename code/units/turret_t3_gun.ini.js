exports.code = function(){     client.on('message', message => {
            if (message.content.toLowerCase() === 'aeaturret_t3_gun') { 
              if(message.author.bot) return; 
              message.channel.send(AEAc_turret_t3_gun); 
              }
	  });
const AEAc_turret_t3_gun = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/AEAc_turret_t3_gun.png']) 
   .setImage('attachment://AEAc_turret_t3_gun.png') 
   .addField('Price:  12500')
   .addField('Health:  3500')
   .addField('Build Speed:  0.0008')
   .addField('Range:  310')
   .addField('Direct Damage:  44')
   .addField('Area Damage:  40')
   .addField('Move Speed:  0')
   .addField('Turn Speed:  0')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
