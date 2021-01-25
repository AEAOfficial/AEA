exports.code = function(){     client.on('message', message => {
            if (message.content.toLowerCase() === 'extractort7') { 
              if(message.author.bot) return; 
              message.channel.send(ExtractorT7); 
              }
	  });
const ExtractorT7 = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/ExtractorT7.png']) 
   .setImage('attachment://ExtractorT7.png') 
   .setTitle(' Extractor T7') 
   .addField('Price:  25900')
   .addField('Health:  4200')
   .addField('Build Speed:  0.002')
   .addField('Price:  9900')
   .addField('Build Speed:  102.8s')
   .addField('Range:  210')
   .addField('Direct Damage:  80')
   .addField('Move Speed:  0')
   .addField('Turn Speed:  0')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
