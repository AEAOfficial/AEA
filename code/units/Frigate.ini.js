exports.code = function(){     client.on('message', message => {
            if (message.content.toLowerCase() === 'frigate') { 
              if(message.author.bot) return; 
              message.channel.send(Frigate); 
              }
	  });
const Frigate = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/Frigate.png']) 
   .setImage('attachment://Frigate.png') 
   .addField('Price:  3500')
   .addField('Health:  2000')
   .setTitle(' Frigate') 
   .setDescription(' - Equipped with a Long Range Cannon\n- Cannot hit subs\n- Anti Air Turret') 
   .addField('Stats') 
   .addField('Build Speed:  0.0011')
   .addField('Range:  290')
   .addField('Direct Damage:  0 #no directDamage with targetGround')
   .addField('Area Damage:  140')
   .addField('Direct Damage:  9')
   .addField('Move Speed:  0.75')
   .addField('Turn Speed:  1.0')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
