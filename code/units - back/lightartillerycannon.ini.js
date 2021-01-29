exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'turretartylight') { 
              if(message.author.bot) return; 
              message.channel.send(turretArtyLight); 
              }
const turretArtyLight = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/turretArtyLight.png']) 
   .setImage('attachment://turretArtyLight.png') 
   .setTitle(' Light Cannon') 
   .setDescription(' -Can attack ground only\n-Very long range\n-Must be ordered to fire manually\n-Needs to be reloaded manually after 5 shots') 
   .addField('Stats') 
   .addField('Price:  7500')
   .addField('Health:  1200')
   .addField('Build Speed:  0.0005')
   .addField('Price:  150')
   .addField('Build Speed:  9.8s')
   .addField('Price:  9000')
   .addField('Build Speed:  0.0005')
   .addField('Range:  390')
   .addField('Direct Damage:  500')
   .addField('Area Damage:  275')
   .addField('Move Speed:  0')
   .addField('Turn Speed:  0')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}
