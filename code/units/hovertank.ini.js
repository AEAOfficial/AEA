exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'hovertank') { 
              if(message.author.bot) return; 
              message.channel.send(c_hovertank); 
              }
const c_hovertank = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/c_hovertank.png']) 
   .setImage('attachment://c_hovertank.png') 
   .setTitle(' Hovertank') 
   .setDescription(' -Light armor\n-Able to move over water\n-Can attack air and ground') 
   .addField('Stats') 
   .addField('Price:  450')
   .addField('Health:  150')
   .addField('Build Speed:  6.6s')
   .addField('Range:  140')
   .addField('Direct Damage:  23')
   .addField('Move Speed:  1.2')
   .addField('Turn Speed:  4')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}
exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'experimentalhovertank') { 
              if(message.author.bot) return; 
              message.channel.send(c_experimentalHoverTank); 
              }
const c_experimentalHoverTank = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/c_experimentalHoverTank.png']) 
   .setImage('attachment://c_experimentalHoverTank.png') 
   .setTitle(' Shielded Hovertank') 
   .setDescription(' - Experimental Shielded Hover tank\n- Can hover over water\n- Has a strong shield that regenerates\n- Weak vs. lightning units\n- Beam does constant damage to air/ground') 
   .addField('Stats') 
   .addField('Price:  21000, uranium=800')
   .addField('Health:  3500')
   .addField('Shield:  5000')
   .addField('Build Speed:  83.3s')
   .addField('Range:  200')
   .addField('Direct Damage:  35')
   .addField('Move Speed:  0.60')
   .addField('Turn Speed:  0.7')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}
