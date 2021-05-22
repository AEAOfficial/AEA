exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'gunship') { 
              if(message.author.bot) return; 
              message.channel.send(gunship); 
	          }
	  });
const gunship = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/gunship.png']) 
   //.setImage('attachment://gunship.png') 
   .setTitle(' Gunship') 
   .setDescription(' - Can attack ground only\n- Strong attack\n- Heavily armored') 
   .addField('Stats','__________________') 
   .addField('Price:  800','__________________')
   .addField('Health:  260','__________________')
   .addField('Range:  140','__________________')
   .addField('Direct Damage:  35','__________________')
   .addField('Move Speed:  1.4','__________________')
   .addField('Turn Speed:  4','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'gunship') { 
              if(message.author.bot) return; 
              message.channel.send(gunship); 
	          }
	  });
const gunship = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/gunship.png']) 
   //.setImage('attachment://gunship.png') 
   .setTitle(' Gunship') 
   .setDescription(' - Can attack ground only\n- Strong attack\n- Heavily armored') 
   .addField('Stats','__________________') 
   .addField('Price:  800','__________________')
   .addField('Health:  260','__________________')
   .addField('Range:  140','__________________')
   .addField('Direct Damage:  35','__________________')
   .addField('Move Speed:  1.4','__________________')
   .addField('Turn Speed:  4','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
