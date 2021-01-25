exports.code = function(){     client.on('message', message => {
            if (message.content.toLowerCase() === 'dropship') { 
              if(message.author.bot) return; 
              message.channel.send(c_dropship); 
              }
	  });
const c_dropship = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/c_dropship.png']) 
   .setImage('attachment://c_dropship.png') 
   .setTitle(' Dropship') 
   .setDescription(' -Transports up to 4 units\n-Cannot attack') 
   .addField('Stats') 
   .addField('Price:  800')
   .addField('Health:  700')
   .addField('Build Speed:  0.001')
   .addField('Range:  0')
   .addField('Move Speed:  2.3')
   .addField('Turn Speed:  1.4')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
