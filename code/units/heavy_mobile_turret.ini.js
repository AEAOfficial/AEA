exports.code = function(){     client.on('message', message => {
            if (message.content.toLowerCase() === 'heavymobileturret') { 
              if(message.author.bot) return; 
              message.channel.send(heavyMobileTurret); 
              }
	  });
const heavyMobileTurret = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/heavyMobileTurret.png']) 
   .setImage('attachment://heavyMobileTurret.png') 
   .setTitle(' Heavy Mobile Turret') 
   .setDescription(' -Heavily armored\n-Ground attack when undeployed\n-Deploys for extra range, anti-air and shield regen\n-Cannot attack while undeploying\n-Can release a repairing nano-burst when deployed') 
   .addField('Stats') 
   .addField('Price:  7500')
   .addField('Health:  2000')
   .addField('Build Speed:  43.8s')
   .addField('Shield:  1600')
   .addField('Price:   0')
   .addField('Build Speed:  3.8s')
   .addField('Range:  220')
   .addField('Direct Damage:  40')
   .addField('Area Damage:  30')
   .addField('Direct Damage:  30')
   .addField('Area Damage:  30')
   .addField('Area Damage:  -200')
   .addField('Move Speed:  1.8')
   .addField('Move Speed:  0.5')
   .addField('Turn Speed:  0.95')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
