exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'plasmamech') { 
              if(message.author.bot) return; 
              message.channel.send(plasmaMech); 
	          }
	  });
const plasmaMech = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/plasmaMech.png']) 
   //.setImage('attachment://plasmaMech.png') 
   .setTitle(' Plasma Mech') 
   .setDescription(' -Attacks land & air\n-Needs to recharge after firing\n-Long range\n-Stronger vs. units than vs. buildings') 
   .addField('Stats','__________________') 
   .addField('Price:  7000','__________________')
   .addField('Health:  1200','__________________')
   .addField('Range:  320','__________________')
   .addField('Direct Damage:  135','__________________')
   .addField('Move Speed:  0.5','__________________')
   .addField('Turn Speed:  3.2','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'plasmamech') { 
              if(message.author.bot) return; 
              message.channel.send(plasmaMech); 
	          }
	  });
const plasmaMech = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/plasmaMech.png']) 
   //.setImage('attachment://plasmaMech.png') 
   .setTitle(' Plasma Mech') 
   .setDescription(' -Attacks land & air\n-Needs to recharge after firing\n-Long range\n-Stronger vs. units than vs. buildings') 
   .addField('Stats','__________________') 
   .addField('Price:  7000','__________________')
   .addField('Health:  1200','__________________')
   .addField('Range:  320','__________________')
   .addField('Direct Damage:  135','__________________')
   .addField('Move Speed:  0.5','__________________')
   .addField('Turn Speed:  3.2','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
