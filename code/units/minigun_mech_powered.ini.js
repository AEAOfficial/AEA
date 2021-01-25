exports.code = function(){     client.on('message', message => {
            if (message.content.toLowerCase() === 'minigunmechpowered') { 
              if(message.author.bot) return; 
              message.channel.send(minigunMechPowered); 
              }
	  });
const minigunMechPowered = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/minigunMechPowered.png']) 
   .setImage('attachment://minigunMechPowered.png') 
   .setTitle(' Minigun Mech Enraged') 
   .setDescription(' -Ground attack\n-Fast firing\n-Speeds up as it fires\n-Has shield (weak vs. lightning)') 
   .addField('Stats') 
   .addField('Price:  5000')
   .addField('Health:  800')
   .addField('Shield:  1200')
   .addField('Build Speed:  18.3s')
   .addField('Build Speed:  0s')
   .addField('Price:  0')
   .addField('Range:  210')
   .addField('Range:  140')
   .addField('Direct Damage:  60')
   .addField('Area Damage:  60')
   .addField('Move Speed:  0.3')
   .addField('Turn Speed:  5.0')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
