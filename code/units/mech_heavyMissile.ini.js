exports.code = function(){     client.on('message', message => {
            if (message.content.toLowerCase() === 'mechheavymissile') { 
              if(message.author.bot) return; 
              message.channel.send(c_mechHeavyMissile); 
              }
	  });
const c_mechHeavyMissile = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/c_mechHeavyMissile.png']) 
   .setImage('attachment://c_mechHeavyMissile.png') 
   .setTitle(' Heavy Anti-Air Mech') 
   .setDescription(' - Strong, long range air attack\n- Area splash damage\n- Weak ground attack') 
   .addField('Stats') 
   .addField('Price:  8500')
   .addField('Health:  2500')
   .addField('Build Speed:  0.0006')
   .addField('Shield:  500')
   .addField('Range:  310')
   .addField('Direct Damage:  5')
   .addField('Area Damage:  50')
   .addField('Direct Damage:  70')
   .addField('Area Damage:  45')
   .addField('Direct Damage:  200')
   .addField('Area Damage:  40')
   .addField('Direct Damage:  35')
   .addField('Move Speed:  2.9')
   .addField('Move Speed:  0.65')
   .addField('Turn Speed:  1.0')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
