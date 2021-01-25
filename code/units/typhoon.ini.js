exports.code = function(){     client.on('message', message => {
            if (message.content.toLowerCase() === 'ektyphoon') { 
              if(message.author.bot) return; 
              message.channel.send(EkTyphoon); 
              }
	  });
const EkTyphoon = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/EkTyphoon.png']) 
   .setImage('attachment://EkTyphoon.png') 
   .setTitle(' Typhoon') 
   .setDescription(' -Landing assault craft\n- Fast\n-Very light Mounted machine-guns\n-Carries 4 units') 
   .addField('Stats') 
   .addField('Price:  1000')
   .addField('Health:  300')
   .addField('Build Speed:  14.5s')
   .addField('Range:  140')
   .addField('Direct Damage:  8')
   .addField('Move Speed:  1.6')
   .addField('Turn Speed:  4')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
