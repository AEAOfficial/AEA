exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'achillestank') { 
              if(message.author.bot) return; 
              message.channel.send(achillesTank); 
	          }
	  });
const achillesTank = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/achillesTank.png']) 
   //.setImage('attachment://achillesTank.png') 
   .setTitle(' Achilles') 
   .setDescription(' - Powerful artillery cannon\n- Cannot hit air\n- Single Target\n- Medium armour') 
   .addField('Stats','__________________') 
   .addField('Price:  4500','__________________')
   .addField('Health:  900','__________________')
   .addField('Range:  280','__________________')
   .addField('Direct Damage:  275','__________________')
   .addField('Area Damage:  35','__________________')
   .addField('Move Speed:  0.6','__________________')
   .addField('Turn Speed:  2.1','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'achillestank') { 
              if(message.author.bot) return; 
              message.channel.send(achillesTank); 
	          }
	  });
const achillesTank = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/achillesTank.png']) 
   //.setImage('attachment://achillesTank.png') 
   .setTitle(' Achilles') 
   .setDescription(' - Powerful artillery cannon\n- Cannot hit air\n- Single Target\n- Medium armour') 
   .addField('Stats','__________________') 
   .addField('Price:  4500','__________________')
   .addField('Health:  900','__________________')
   .addField('Range:  280','__________________')
   .addField('Direct Damage:  275','__________________')
   .addField('Area Damage:  35','__________________')
   .addField('Move Speed:  0.6','__________________')
   .addField('Turn Speed:  2.1','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
