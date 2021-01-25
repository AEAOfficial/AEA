exports.code = function(){     client.on('message', message => {
            if (message.content.toLowerCase() === 'heavymissileship') { 
              if(message.author.bot) return; 
              message.channel.send(c_heavyMissileShip); 
              }
	  });
const c_heavyMissileShip = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/c_heavyMissileShip.png']) 
   .setImage('attachment://c_heavyMissileShip.png') 
   .addField('Price:  15000')
   .addField('Health:  3000')
   .setTitle(' Heavy Missile Ship') 
   .setDescription(' - Can attack land & air\n- Long range') 
   .addField('Stats') 
   .addField('Build Speed:  0.0004')
   .addField('Shield:  100')
   .addField('Range:  390')
   .addField('Direct Damage:  30')
   .addField('Direct Damage:  65')
   .addField('Direct Damage:  70')
   .addField('Area Damage:  180')
   .addField('Move Speed:  0.5')
   .addField('Turn Speed:  0.8')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
