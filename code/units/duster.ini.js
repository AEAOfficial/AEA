exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'dustertank') { 
              if(message.author.bot) return; 
              message.channel.send(dusterTank); 
	          }
	  });
const dusterTank = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/dusterTank.png']) 
   //.setImage('attachment://dusterTank.png') 
   .setTitle(' Duster') 
   .setDescription(' -Medium armour\n-Ground attack\n-Armed with twin autocannons') 
   .addField('Stats','__________________') 
   .addField('Price:  3000','__________________')
   .addField('Health:  1100','__________________')
   .addField('Range:  200','__________________')
   .addField('Direct Damage:  40','__________________')
   .addField('Area Damage:  12','__________________')
   .addField('Direct Damage:  0','__________________')
   .addField('Move Speed:  0.8','__________________')
   .addField('Turn Speed:  2.1','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'dustertank') { 
              if(message.author.bot) return; 
              message.channel.send(dusterTank); 
	          }
	  });
const dusterTank = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/dusterTank.png']) 
   //.setImage('attachment://dusterTank.png') 
   .setTitle(' Duster') 
   .setDescription(' -Medium armour\n-Ground attack\n-Armed with twin autocannons') 
   .addField('Stats','__________________') 
   .addField('Price:  3000','__________________')
   .addField('Health:  1100','__________________')
   .addField('Range:  200','__________________')
   .addField('Direct Damage:  40','__________________')
   .addField('Area Damage:  12','__________________')
   .addField('Direct Damage:  0','__________________')
   .addField('Move Speed:  0.8','__________________')
   .addField('Turn Speed:  2.1','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
