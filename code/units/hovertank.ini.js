exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'hovertank') { 
              if(message.author.bot) return; 
              message.channel.send(hovertank); 
	          }
	  });
const hovertank = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/hovertank.png']) 
   //.setImage('attachment://hovertank.png') 
   .setTitle(' Hovertank') 
   .setDescription(' -Light armor\n-Able to move over water\n-Can attack air and ground') 
   .addField('Stats','__________________') 
   .addField('Price:  450','__________________')
   .addField('Health:  150','__________________')
   .addField('Range:  140','__________________')
   .addField('Direct Damage:  23','__________________')
   .addField('Move Speed:  1.2','__________________')
   .addField('Turn Speed:  4','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'experimentalhovertank') { 
              if(message.author.bot) return; 
              message.channel.send(experimentalHoverTank); 
	          }
	  });
const experimentalHoverTank = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/experimentalHoverTank.png']) 
   //.setImage('attachment://experimentalHoverTank.png') 
   .setTitle(' Shielded Hovertank') 
   .setDescription(' - Experimental Shielded Hover tank\n- Can hover over water\n- Has a strong shield that regenerates\n- Weak vs. lightning units\n- Beam does constant damage to air/ground') 
   .addField('Stats','__________________') 
   .addField('Price:  21000, uranium=800','__________________')
   .addField('Health:  3500','__________________')
   .addField('Shield:  5000','__________________')
   .addField('Range:  200','__________________')
   .addField('Direct Damage:  35','__________________')
   .addField('Move Speed:  0.60','__________________')
   .addField('Turn Speed:  0.7','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
