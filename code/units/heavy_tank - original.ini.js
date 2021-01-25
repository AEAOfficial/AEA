exports.code = function(){     client.on('message', message => {
            if (message.content.toLowerCase() === 'heavytank') { 
              if(message.author.bot) return; 
              message.channel.send(c_heavyTank); 
              }
	  });
const c_heavyTank = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/c_heavyTank.png']) 
   .setImage('attachment://c_heavyTank.png') 
   .setTitle(' Heavy Tank') 
   .setDescription(' -Heavily armed\n-Can attack ground\n-Light air attack') 
   .addField('Stats') 
   .addField('Price:  800')
   .addField('Health:  600')
   .addField('Build Speed:  0.0013')
   .addField('Range:  160')
   .addField('Direct Damage:  50')
   .addField('Direct Damage:  50')
   .addField('Move Speed:  0.8')
   .addField('Turn Speed:  1.9')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
