exports.code = function(){     client.on('message', message => {
            if (message.content.toLowerCase() === 'mechfactoryt3') { 
              if(message.author.bot) return; 
              message.channel.send(mechFactoryT3); 
              }
	  });
const mechFactoryT3 = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/mechFactoryT3.png']) 
   .setImage('attachment://mechFactoryT3.png') 
   .addField('Price:  11500')
   .addField('Health:  3100')
   .setTitle(' Mech Factory T3') 
   .setDescription(' -Builds mech units\n-Mechs are often slow but strong\n-Larger T2 and T3 mechs are able to walk over cliffs') 
   .addField('Stats') 
   .addField('Build Speed:  0.0005')
   .addField('Range:  0')
   .addField('Move Speed:  0')
   .addField('Turn Speed:  0')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
