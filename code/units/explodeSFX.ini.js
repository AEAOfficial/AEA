exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'explodesfx') { 
              if(message.author.bot) return; 
              message.channel.send(explodeSFX); 
              }
const explodeSFX = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/explodeSFX.png']) 
   .setImage('attachment://explodeSFX.png') 
   .addField('Price:  1')
   .addField('Health:  1')
   .addField('Build Speed:  0')
   .addField('Range:  4')
   .addField('Direct Damage:  0')
   .addField('Move Speed:  99')
   .addField('Turn Speed:  9')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}
