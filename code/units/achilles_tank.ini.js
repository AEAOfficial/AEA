exports.code = function(){     client.on('message', message => {
            if (message.content.toLowerCase() === 'achillestank') { 
              if(message.author.bot) return; 
              message.channel.send(achillesTank); 
              }
	  });
const achillesTank = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/achillesTank.png']) 
   .setImage('attachment://achillesTank.png') 
   .setTitle(' Achilles') 
   .setDescription(' - Powerful artillery cannon\n- Cannot hit air\n- Single Target\n- Medium armour') 
   .addField('Stats') 
   .addField('Price:  4500')
   .addField('Health:  900')
   .addField('Build Speed:  33.3s')
   .addField('Range:  280')
   .addField('Direct Damage:  275')
   .addField('Area Damage:  35')
   .addField('Move Speed:  0.6')
   .addField('Turn Speed:  2.1')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
