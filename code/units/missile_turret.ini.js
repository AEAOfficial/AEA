exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'missile_turret') { 
              if(message.author.bot) return; 
              message.channel.send(missile_turret); 
	          }
	  });
const missile_turret = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/missile_turret.png']) 
   //.setImage('attachment://missile_turret.png') 
   .setTitle(' Missile Turret') 
   .setDescription(' -Can attack ground and air\n-Very long range') 
   .addField('Stats','__________________') 
   .addField('Price:  11000','__________________')
   .addField('Health:  1800','__________________')
   .addField('Range:  360','__________________')
   .addField('Direct Damage:  150','__________________')
   .addField('Area Damage: 80','__________________')
   .addField('Direct Damage:  0','__________________')
   .addField('Area Damage: 0','__________________')
   .addField('Move Speed:  0','__________________')
   .addField('Turn Speed:  0','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'missile_turret') { 
              if(message.author.bot) return; 
              message.channel.send(missile_turret); 
	          }
	  });
const missile_turret = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/missile_turret.png']) 
   //.setImage('attachment://missile_turret.png') 
   .setTitle(' Missile Turret') 
   .setDescription(' -Can attack ground and air\n-Very long range') 
   .addField('Stats','__________________') 
   .addField('Price:  11000','__________________')
   .addField('Health:  1800','__________________')
   .addField('Range:  360','__________________')
   .addField('Direct Damage:  150','__________________')
   .addField('Area Damage: 80','__________________')
   .addField('Direct Damage:  0','__________________')
   .addField('Area Damage: 0','__________________')
   .addField('Move Speed:  0','__________________')
   .addField('Turn Speed:  0','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
