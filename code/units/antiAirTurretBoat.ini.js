exports.code = function(){     client.on('message', message => {
            if (message.content.toLowerCase() === 'antiairturretboat') { 
              if(message.author.bot) return; 
              message.channel.send(antiAirTurretBoat); 
              }
	  });
const antiAirTurretBoat = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/antiAirTurretBoat.png']) 
   .setImage('attachment://antiAirTurretBoat.png') 
   .addField('Price:  750')
   .addField('Health:  290')
   .setTitle(' Anti Air Ship') 
   .setDescription('- Equipped with an Anti Air Gun\n- Weak armour') 
   .addField('Stats') 
   .addField('Build Speed:  0.0025')
   .addField('Range:  190')
   .addField('Direct Damage:  2')
   .addField('Move Speed:  0.9')
   .addField('Turn Speed:  3.1')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
