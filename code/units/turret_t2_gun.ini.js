exports.code = function(){     client.on('message', message => {
            if (message.content.toLowerCase() === 'aeaturret_t2_gun') { 
              if(message.author.bot) return; 
              message.channel.send(AEAc_turret_t2_gun); 
              }
	  });
const AEAc_turret_t2_gun = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/AEAc_turret_t2_gun.png']) 
   .setImage('attachment://AEAc_turret_t2_gun.png') 
   .addField('Price:  2000')
   .addField('Health:  1100')
   .addField('Build Speed:  0.0008')
   .addField('Price:   11000')
   .addField('Build Speed:  0.0003')
   .addField('Range:  250')
   .addField('Direct Damage:  44')
   .addField('Area Damage:  40')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
