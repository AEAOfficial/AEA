exports.code = function(){     client.on('message', message => {
            if (message.content.toLowerCase() === 'builder') { 
              if(message.author.bot) return; 
              message.channel.send(builder); 
              }
	  });
const builder = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/builder.png']) 
   .setImage('attachment://builder.png') 
   .addField('Price:  700')
   .addField('Health:  500')
   .setTitle(' Mega Builder') 
   .setDescription(' -Like a builder but better\n-From the example mod') 
   .addField('Stats') 
   .addField('Shield:  100')
   .addField('Build Speed:  0.001')
   .addField('Range:  110')
   .addField('Direct Damage:  15')
   .addField('Move Speed:  3.4')
   .addField('Move Speed:  1.2')
   .addField('Turn Speed:  3.5')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
