exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'antiairturret12') { 
              if(message.author.bot) return; 
              message.channel.send(c_antiAirTurret12); 
              }
const c_antiAirTurret12 = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/c_antiAirTurret12.png']) 
   .setImage('attachment://c_antiAirTurret12.png') 
   .setTitle(' SAM Turret') 
   .setDescription(' - Shoots surface to air missiles\n- Cannot atttack ground\n- Upgradeable') 
   .addField('Stats') 
   .addField('Price:  600')
   .addField('Health:  800')
   .addField('Build Speed:  0.002')
   .addField('Price:  1200')
   .addField('Build Speed:  0.001')
   .addField('Price:  3500')
   .addField('Build Speed:  0.001')
   .addField('Price:  3500')
   .addField('Build Speed:  0.001')
   .addField('Range:  250')
   .addField('Direct Damage:  60')
   .addField('Area Damage:  40')
   .addField('Move Speed:  0')
   .addField('Turn Speed:  0')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}
