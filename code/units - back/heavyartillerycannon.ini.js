exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'turretartyheavy') { 
              if(message.author.bot) return; 
              message.channel.send(turretArtyHeavy); 
              }
const turretArtyHeavy = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/turretArtyHeavy.png']) 
   .setImage('attachment://turretArtyHeavy.png') 
   .setTitle(' Heavy Cannon') 
   .setDescription(' -Can attack ground only\n-Very long range\n-Must be ordered to fire manually\n-Needs to be reloaded manually after 10 shots') 
   .addField('Stats') 
   .addField('Price:  16500')
   .addField('Health:  2400')
   .addField('Build Speed:  0.0005')
   .addField('Price:  400')
   .addField('Build Speed:  16.8s')
   .addField('Range:  440')
   .addField('Direct Damage:  500')
   .addField('Area Damage:  275')
   .addField('Move Speed:  0')
   .addField('Turn Speed:  0')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}
