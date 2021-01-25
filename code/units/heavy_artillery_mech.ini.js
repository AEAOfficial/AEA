exports.code = function(){     client.on('message', message => {
            if (message.content.toLowerCase() === 'heavyartillerymech') { 
              if(message.author.bot) return; 
              message.channel.send(heavyArtilleryMech); 
              }
	  });
const heavyArtilleryMech = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/heavyArtilleryMech.png']) 
   .setImage('attachment://heavyArtilleryMech.png') 
   .setTitle(' Heavy Artillery Mech') 
   .setDescription(' -Ground attack\n-Needs to deploy to fire\n-Very long range, but slow reload\n-Regenerates shield when deployed\n-Stronger vs. buildings than vs. units') 
   .addField('Stats') 
   .addField('Price:  9000')
   .addField('Health:  750')
   .addField('Build Speed:  43.8s')
   .addField('Shield:  500')
   .addField('Price:   0')
   .addField('Build Speed:  2s')
   .addField('Range:  410')
   .addField('Move Speed:  2')
   .addField('Area Damage:  125')
   .addField('Direct Damage:  0')
   .addField('Move Speed:  0.6')
   .addField('Turn Speed:  2')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
