exports.code = function(){     client.on('message', message => {
            if (message.content.toLowerCase() === 'scout') { 
              if(message.author.bot) return; 
              message.channel.send(c_scout); 
              }
	  });
const c_scout = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/c_scout.png']) 
   .setImage('attachment://c_scout.png') 
   .setTitle(' Scout') 
   .setDescription('- Can hover over water\n- Can see far into the fog\n- Weak attack, not designed for combat.') 
   .addField('Stats') 
   .addField('Price:  500')
   .addField('Health:  350')
   .addField('Build Speed:  8.4s')
   .addField('Range:  110')
   .addField('Direct Damage:  15')
   .addField('Move Speed:  1.3')
   .addField('Turn Speed:  2.4')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
