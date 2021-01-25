exports.code = function(){     client.on('message', message => {
            if (message.content.toLowerCase() === 'missileairplane') { 
              if(message.author.bot) return; 
              message.channel.send(missileAirplane); 
              }
	  });
const missileAirplane = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/missileAirplane.png']) 
   .setImage('attachment://missileAirplane.png') 
   .addField('Price:  9750, uranium=100')
   .addField('Health:  2200')
   .addField('Build Speed:  0.0003')
   .setTitle(' Heavy Missile Aircraft') 
   .setDescription(' -Slow, Powerful, Attacks Land/Air') 
   .addField('Stats') 
   .addField('Range:  200')
   .addField('Direct Damage:  110')
   .addField('Area Damage:  75')
   .addField('Move Speed:  0.80')
   .addField('Turn Speed:  3.5')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
