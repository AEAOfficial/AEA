exports.code = function(){     client.on('message', message => {
            if (message.content.toLowerCase() === 'skirmisher') { 
              if(message.author.bot) return; 
              message.channel.send(Skirmisher); 
              }
	  });
const Skirmisher = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/Skirmisher.png']) 
   .setImage('attachment://Skirmisher.png') 
   .addField('Price:  1000')
   .addField('Health:  300')
   .setDescription(' - Small mech, ground attack only\n- Weak attack but strong shields for price\n- Weak vs Lightning') 
   .addField('Stats') 
   .addField('Build Speed:  12.3s')
   .addField('Shield:  500')
   .addField('Range:  120')
   .addField('Direct Damage:  15')
   .addField('Move Speed:  1.2')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
