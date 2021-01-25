exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'antiairturretflak') { 
              if(message.author.bot) return; 
              message.channel.send(c_antiAirTurretFlak); 
              }
const c_antiAirTurretFlak = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/c_antiAirTurretFlak.png']) 
   .setImage('attachment://c_antiAirTurretFlak.png') 
   .addField('Price:  4100')
   .setTitle(' Flak Turret') 
   .setDescription(' - Short range heavy splash damage\n- The bane of gunships') 
   .addField('Stats') 
   .addField('Health:  2700')
   .addField('Shield:  1500')
   .addField('Build Speed:  0.0008')
   .addField('Range:  250')
   .addField('Direct Damage:  120')
   .addField('Area Damage:  100')
   .addField('Move Speed:  0')
   .addField('Turn Speed:  0')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}
exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'antiairturretflak') { 
              if(message.author.bot) return; 
              message.channel.send(antiAirTurretFlak); 
              }
const antiAirTurretFlak = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/antiAirTurretFlak.png']) 
   .setImage('attachment://antiAirTurretFlak.png') 
   .addField('Price:  4600')
   .addField('Health:  2200')
   .addField('Shield:  800')
   .addField('Build Speed:  0.002')
   .addField('Price:   5000')
   .addField('Build Speed:  0.0005')
   .addField('Range:  200')
   .addField('Direct Damage:  60')
   .addField('Area Damage:  80')
   .addField('Move Speed:  0')
   .addField('Turn Speed:  0')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}
