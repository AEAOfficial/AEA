exports.code = function(){     client.on('message', message => {
            if (message.content.toLowerCase() === 'subturretsurfaced') { 
              if(message.author.bot) return; 
              message.channel.send(SubTurretSurfaced); 
              }
	  });
const SubTurretSurfaced = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/SubTurretSurfaced.png']) 
   .setImage('attachment://SubTurretSurfaced.png') 
   .addField('Price:  1000')
   .addField('Health:  800')
   .addField('Build Speed:  0.0010')
   .addField('Price:  0')
   .addField('Build Speed:  0.05')
   .addField('Range:  250')
   .addField('Direct Damage:  60')
   .addField('Area Damage:  25')
   .addField('Move Speed:  0')
   .addField('Turn Speed:  3.1')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
