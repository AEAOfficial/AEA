exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'buildershipt2') { 
              if(message.author.bot) return; 
              message.channel.send(BuilderShipT2); 
              }
const BuilderShipT2 = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/BuilderShipT2.png']) 
   .setImage('attachment://BuilderShipT2.png') 
   .setDescription(' - Builds T2 buildings and sub turrets\n- Builds T3 extractors\n- Fast repair rate') 
   .addField('Stats') 
   .addField('Price:  5000')
   .addField('Health:  300')
   .addField('Build Speed:  0.0025')
   .addField('Range:  150')
   .addField('Direct Damage:  10')
   .addField('Move Speed:  0.7')
   .addField('Turn Speed:  3.1')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}