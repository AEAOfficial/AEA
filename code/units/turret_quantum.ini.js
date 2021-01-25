exports.code = function(){     client.on('message', message => {
            if (message.content.toLowerCase() === 'quantumturret') { 
              if(message.author.bot) return; 
              message.channel.send(quantumTurret); 
              }
	  });
const quantumTurret = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/quantumTurret.png']) 
   .setImage('attachment://quantumTurret.png') 
   .setTitle(' Quantum turret') 
   .setDescription(' -Heavily armed with shield \n-Shoots 4 very high splash damage torpedoes\n- Long reload between shots\n- Shield units can absorb splash damage\n- Can attack ground/air/underwater\n -Goes nuclear on death (if nukes are enabled)') 
   .addField('Stats') 
   .addField('Price:  24000, uranium=1000')
   .addField('Health:  2000')
   .addField('Shield:  2000')
   .addField('Build Speed:  0.0004')
   .addField('Range:  250')
   .addField('Direct Damage:  400')
   .addField('Area Damage:  400')
   .addField('Move Speed:  0')
   .addField('Turn Speed:  0')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
