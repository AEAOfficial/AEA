exports.code = function(){     client.on('message', message => {
            if (message.content.toLowerCase() === 'gunship') { 
              if(message.author.bot) return; 
              message.channel.send(c_gunship); 
              }
	  });
const c_gunship = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/c_gunship.png']) 
   .setImage('attachment://c_gunship.png') 
   .setTitle(' Gunship') 
   .setDescription(' -Can attack ground only\n-Strong attack\n-Heavily armored') 
   .addField('Stats') 
   .addField('Price:  800')
   .addField('Health:  260')
   .addField('Build Speed:  10.8s')
   .addField('Range:  140')
   .addField('Direct Damage:  35')
   .addField('Move Speed:  1.4')
   .addField('Turn Speed:  4')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
