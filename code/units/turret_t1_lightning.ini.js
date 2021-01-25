exports.code = function(){     client.on('message', message => {
            if (message.content.toLowerCase() === 'turret_t1_lightningaea') { 
              if(message.author.bot) return; 
              message.channel.send(c_turret_t1_lightningAEA); 
              }
	  });
const c_turret_t1_lightningAEA = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/c_turret_t1_lightningAEA.png']) 
   .setImage('attachment://c_turret_t1_lightningAEA.png') 
   .addField('Price:  2000')
   .addField('Health:  1500')
   .addField('Build Speed:  0.0008')
   .addField('Price:  6000')
   .addField('Build Speed:  30.0s')
   .addField('Build Speed:  0')
   .addField('Build Speed:  0')
   .addField('Range:  230')
   .addField('Direct Damage:  310')
   .addField('Direct Damage:  150')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
