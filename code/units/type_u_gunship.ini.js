exports.code = function(){     client.on('message', message => {
            if (message.content.toLowerCase() === 'typeugunship') { 
              if(message.author.bot) return; 
              message.channel.send(typeUGunship); 
              }
	  });
const typeUGunship = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/typeUGunship.png']) 
   .setImage('attachment://typeUGunship.png') 
   .setTitle(' Experimental Gunship') 
   .setDescription(' -Very heavily armed and armored\n-Slow\n-VERY powerful Ground attack\n-Decent anti-air\n-Can self-repair') 
   .addField('Stats') 
   .addField('Price:  250000, uranium=12000')
   .addField('Health:  24000')
   .addField('Shield:  6000')
   .addField('Build Speed:  143.8s')
   .addField('Range:  250')
   .addField('Direct Damage:  30')
   .addField('Area Damage:  200')
   .addField('Direct Damage:  400')
   .addField('Direct Damage:  60')
   .addField('Area Damage:  60')
   .addField('Direct Damage:  45')
   .addField('Move Speed:  0.8')
   .addField('Turn Speed:  0.4')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
