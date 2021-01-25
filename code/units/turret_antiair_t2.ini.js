exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'antiairturrett212') { 
              if(message.author.bot) return; 
              message.channel.send(c_antiAirTurretT212); 
              }
const c_antiAirTurretT212 = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/c_antiAirTurretT212.png']) 
   .setImage('attachment://c_antiAirTurretT212.png') 
   .addField('Price:  1800')
   .addField('Health:  1400')
   .setTitle(' SAM Turret T2') 
   .addField('Price:   9000')
   .addField('Build Speed:  0.0005')
   .addField('Build Speed:  0.0008')
   .addField('Range:  320')
   .addField('Direct Damage:  60')
   .addField('Area Damage:  40')
   .addField('Move Speed:  0')
   .addField('Turn Speed:  0')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}
