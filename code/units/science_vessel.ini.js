exports.code = function(){     client.on('message', message => {
            if (message.content.toLowerCase() === 'sciencevessel') { 
              if(message.author.bot) return; 
              message.channel.send(scienceVessel); 
              }
	  });
const scienceVessel = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/scienceVessel.png']) 
   .setImage('attachment://scienceVessel.png') 
   .addField('Price:  35000, uranium=5000')
   .addField('Health:  1000')
   .addField('Shield:  1000')
   .setTitle(' Science vessel') 
   .setDescription(' - Constructs and repairs experimental units\n- Can shoot a quantum torpedo when energy is full \n- Builds expensive quantum turrets \n- Goes nuclear on death (if nukes are enabled) \n- Consumes credits, generates Uranium') 
   .addField('Stats') 
   .addField('Build Speed:  0.0002')
   .addField('Range:  250')
   .addField('Direct Damage:  400')
   .addField('Area Damage:  400')
   .addField('Move Speed:  1.2')
   .addField('Turn Speed:  2.5')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
