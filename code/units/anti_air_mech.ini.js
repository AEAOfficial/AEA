exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'antiairmech') { 
              if(message.author.bot) return; 
              message.channel.send(antiAirMech); 
	          }
	  });
const antiAirMech = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/antiAirMech.png']) 
   //.setImage('attachment://antiAirMech.png') 
   .setTitle(' Anti-Air Mech') 
   .setDescription(' -Attacks air only\n-Area effect') 
   .addField('Stats','__________________') 
   .addField('Price:  950','__________________')
   .addField('Health:  500','__________________')
   .addField('Range:  190','__________________')
   .addField('Direct Damage:  60','__________________')
   .addField('Area Damage:  45','__________________')
   .addField('Direct Damage:  0','__________________')
   .addField('Area Damage:  0','__________________')
   .addField('Move Speed:  0.8','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'antiairmech') { 
              if(message.author.bot) return; 
              message.channel.send(antiAirMech); 
	          }
	  });
const antiAirMech = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/antiAirMech.png']) 
   //.setImage('attachment://antiAirMech.png') 
   .setTitle(' Anti-Air Mech') 
   .setDescription(' -Attacks air only\n-Area effect') 
   .addField('Stats','__________________') 
   .addField('Price:  950','__________________')
   .addField('Health:  500','__________________')
   .addField('Range:  190','__________________')
   .addField('Direct Damage:  60','__________________')
   .addField('Area Damage:  45','__________________')
   .addField('Direct Damage:  0','__________________')
   .addField('Area Damage:  0','__________________')
   .addField('Move Speed:  0.8','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
