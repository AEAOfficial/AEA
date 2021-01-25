exports.code = function(){     client.on('message', message => {
            if (message.content.toLowerCase() === 'mobileturret') { 
              if(message.author.bot) return; 
              message.channel.send(mobileTurret); 
              }
	  });
const mobileTurret = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/mobileTurret.png']) 
   .setImage('attachment://mobileTurret.png') 
   .setTitle(' Mobile Turret') 
   .setDescription(' -Ground attack\n-Deploys for extra range and a shield') 
   .addField('Stats') 
   .addField('Price:  3800')
   .addField('Health:  800')
   .addField('Build Speed:  21.7s')
   .addField('Price:   0')
   .addField('Build Speed:  2s')
   .addField('Range:  200')
   .addField('Direct Damage:  40')
   .addField('Area Damage:  49')
   .addField('Move Speed:  1.9')
   .addField('Move Speed:  0.5')
   .addField('Turn Speed:  1.0')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
