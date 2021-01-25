exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'experimentalsamtank') { 
              if(message.author.bot) return; 
              message.channel.send(experimentalSamTank); 
              }
const experimentalSamTank = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/experimentalSamTank.png']) 
   .setImage('attachment://experimentalSamTank.png') 
   .setTitle(' Experimental SAM Tank') 
   .setDescription(' -Very heavily armed and armored\n-Armed with anti-air missles and flak turret\n-Can attack air only') 
   .addField('Stats') 
   .addField('Price:  28000, uranium=1000')
   .addField('Health:  6000')
   .addField('Build Speed:  83.3s')
   .addField('Range:  350')
   .addField('Direct Damage:  110')
   .addField('Area Damage:  50')
   .addField('Direct Damage:  140')
   .addField('Area Damage:  160')
   .addField('Move Speed:  0.35')
   .addField('Turn Speed:  0.7')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}
exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'cexperimentaltank') { 
              if(message.author.bot) return; 
              message.channel.send(cc_experimentalTank); 
              }
const cc_experimentalTank = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/cc_experimentalTank.png']) 
   .setImage('attachment://cc_experimentalTank.png') 
   .setTitle(' Experimental Tank') 
   .setDescription(' -Very heavily armored\n-Armed with quad cannons\n- Very Slow\n-Can attack ground\n-Light air attack') 
   .addField('Stats') 
   .addField('Price:  14000, uranium=400')
   .addField('Health:  6000')
   .addField('Build Speed:  60.0s')
   .addField('Range:  310')
   .addField('Direct Damage:  60')
   .addField('Area Damage:  175')
   .addField('Direct Damage:  60')
   .addField('Area Damage:  175')
   .addField('Area Damage:  75')
   .addField('Move Speed:  0.3')
   .addField('Turn Speed:  0.7')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}
