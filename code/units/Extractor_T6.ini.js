exports.code = function(){     client.on('message', message => {
            if (message.content.toLowerCase() === 'extractort6') { 
              if(message.author.bot) return; 
              message.channel.send(ExtractorT6); 
              }
	  });
const ExtractorT6 = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/ExtractorT6.png']) 
   .setImage('attachment://ExtractorT6.png') 
   .setTitle(' Extractor T6') 
   .addField('Price:  17900')
   .addField('Health:  3500')
   .addField('Build Speed:  0.002')
   .addField('Price:  7500')
   .addField('Build Speed:  93.3s')
   .addField('Range:  210')
   .addField('Direct Damage:  80')
   .addField('Move Speed:  0')
   .addField('Turn Speed:  0')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
