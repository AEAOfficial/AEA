exports.code = function(){     client.on('message', message => {
            if (message.content.toLowerCase() === 'plasmamechammotest') { 
              if(message.author.bot) return; 
              message.channel.send(plasmaMechAmmoTest); 
              }
	  });
const plasmaMechAmmoTest = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/plasmaMechAmmoTest.png']) 
   .setImage('attachment://plasmaMechAmmoTest.png') 
   .setTitle(' Plasma Mech - Ammo test') 
   .setDescription(' -Attacks land & air\n-Needs to recharge after firing\n-Long range') 
   .addField('Stats') 
   .addField('Price:  7000')
   .addField('Health:  1300')
   .addField('Build Speed:  0.0006')
   .addField('Price:   0')
   .addField('Build Speed:  1')
   .addField('Price:   0')
   .addField('Build Speed:  0.03')
   .addField('Price:   0')
   .addField('Build Speed:  0.04')
   .addField('Price:   0')
   .addField('Build Speed:  0.1')
   .addField('Price:   0')
   .addField('Build Speed:  0.1')
   .addField('Range:  330')
   .addField('Direct Damage:  100')
   .addField('Move Speed:  0.6')
   .addField('Turn Speed:  3.2')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
