exports.code = function(){     client.on('message', message => {
            if (message.content.toLowerCase() === 'heavyartillery') { 
              if(message.author.bot) return; 
              message.channel.send(heavyArtillery); 
              }
	  });
const heavyArtillery = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/heavyArtillery.png']) 
   .setImage('attachment://heavyArtillery.png') 
   .addField('Price:  3750')
   .addField('Health:  600')
   .addField('Build Speed:  20.8s')
   .addField('Range:  320')
   .addField('Direct Damage:  1')
   .addField('Area Damage:  140')
   .addField('Direct Damage:  1')
   .addField('Area Damage:  140')
   .addField('Move Speed:  0.7')
   .addField('Turn Speed:  1.5')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
