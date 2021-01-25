exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'mechfactoryt2c') { 
              if(message.author.bot) return; 
              message.channel.send(mechFactoryT2c); 
              }
const mechFactoryT2c = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/mechFactoryT2c.png']) 
   .setImage('attachment://mechFactoryT2c.png') 
   .addField('Price:  5500')
   .addField('Health:  2400')
   .setTitle(' Mech Factory T2') 
   .setDescription(' -Builds mech units\n-Mechs are often slow but strong\n-Larger T2 and T3 mechs are able to walk over cliffs') 
   .addField('Stats') 
   .addField('Build Speed:  0.001')
   .addField('Price:  8000')
   .addField('Build Speed:  120s')
   .addField('Range:  0')
   .addField('Move Speed:  0')
   .addField('Turn Speed:  0')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}
