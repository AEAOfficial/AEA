exports.code = function(){     client.on('message', message => {
            if (message.content.toLowerCase() === 'wallt2') { 
              if(message.author.bot) return; 
              message.channel.send(wallT2); 
              }
	  });
const wallT2 = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/wallT2.png']) 
   .setImage('attachment://wallT2.png') 
   .setTitle(' Wall - T2') 
   .setDescription(' -Prevents the passage of enemy units\n-Heavily armored') 
   .addField('Stats') 
   .addField('Price:  250')
   .addField('Health:  1500')
   .addField('Build Speed:  0.0010')
   .addField('Build Speed:  2s')
   .addField('Range:  10')
   .addField('Direct Damage:  1')
   .addField('Move Speed:  0')
   .addField('Turn Speed:  0')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
