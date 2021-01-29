exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'aeaturret_t1') { 
              if(message.author.bot) return; 
              message.channel.send(AEAc_turret_t1); 
              }
const AEAc_turret_t1 = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/AEAc_turret_t1.png']) 
   .setImage('attachment://AEAc_turret_t1.png') 
   .addField('Price:  500')
   .addField('Health:  700')
   .addField('Build Speed:  0.0008')
   .addField('Price:   1500')
   .addField('Build Speed:  0.001')
   .addField('Price:   2200')
   .addField('Build Speed:  0.0004')
   .addField('Price:   500')
   .addField('Build Speed:  8.3s')
   .addField('Price:   1500')
   .addField('Build Speed:  24.8s')
   .addField('Range:  200')
   .addField('Direct Damage:  41')
   .addField('Area Damage:  40')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}
