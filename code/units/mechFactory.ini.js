exports.code = function(){     client.on('message', message => {
            if (message.content.toLowerCase() === 'mechfactory') { 
              if(message.author.bot) return; 
              message.channel.send(mechFactory); 
              }
	  });
const mechFactory = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/mechFactory.png']) 
   .setImage('attachment://mechFactory.png') 
   .addField('Price:  1500')
   .addField('Health:  1800')
   .addField('Build Speed:  0.001')
   .addField('Price:  4000')
   .addField('Build Speed:  75.5s')
   .addField('Range:  0')
   .addField('Move Speed:  0')
   .addField('Turn Speed:  0')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
