exports.code = function(){     client.on('message', message => {
            if (message.content.toLowerCase() === 'missileairship') { 
              if(message.author.bot) return; 
              message.channel.send(c_missileAirship); 
              }
	  });
const c_missileAirship = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/c_missileAirship.png']) 
   .setImage('attachment://c_missileAirship.png') 
   .setTitle(' Missile Airship') 
   .setDescription('- Can attack Air and Ground\n- Does splash damage\n- Has to reload missiles') 
   .addField('Stats') 
   .addField('Price:  3350')
   .addField('Health:  700')
   .addField('Build Speed:  48.3s')
   .addField('Range:  220')
   .addField('Direct Damage:  50')
   .addField('Area Damage:  47')
   .addField('Move Speed:  2.0')
   .addField('Turn Speed:  3.6')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
