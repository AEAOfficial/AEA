exports.code = function(){     client.on('message', message => {
            if (message.content.toLowerCase() === 'flamemech') { 
              if(message.author.bot) return; 
              message.channel.send(flameMech); 
              }
	  });
const flameMech = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/flameMech.png']) 
   .setImage('attachment://flameMech.png') 
   .setTitle(' Flame Mech') 
   .setDescription(' -Area effect flamethrower\n-Can attack land only\n-High HP with self-repair\n-Can fire an underground incendiary shell') 
   .addField('Stats') 
   .addField('Price:  11000')
   .addField('Health:  5000')
   .addField('Build Speed:  60s')
   .addField('Price:  energy=1')
   .addField('Build Speed:  0.75s')
   .addField('Range:  190')
   .addField('Area Damage:  18')
   .addField('Area Damage:  0')
   .addField('Move Speed:  0.6')
   .addField('Turn Speed:  5.0')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
