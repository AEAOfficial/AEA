exports.code = function(){     client.on('message', message => {
            if (message.content.toLowerCase() === 'missile_turret') { 
              if(message.author.bot) return; 
              message.channel.send(missile_turret); 
              }
	  });
const missile_turret = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/missile_turret.png']) 
   .setImage('attachment://missile_turret.png') 
   .setTitle(' Missile Turret') 
   .setDescription(' -Can attack ground and air\n-Very long range') 
   .addField('Stats') 
   .addField('Price:  11000')
   .addField('Health:  1800')
   .addField('Build Speed:  0.0006')
   .addField('Range:  360')
   .addField('Direct Damage:  150')
   .addField('Area Damage: 80')
   .addField('Direct Damage:  0')
   .addField('Area Damage: 0')
   .addField('Move Speed:  0')
   .addField('Turn Speed:  0')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
