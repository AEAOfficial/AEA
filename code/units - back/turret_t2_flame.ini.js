exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'aeaturret_t2_flame') { 
              if(message.author.bot) return; 
              message.channel.send(AEAc_turret_t2_flame); 
              }
const AEAc_turret_t2_flame = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/AEAc_turret_t2_flame.png']) 
   .setImage('attachment://AEAc_turret_t2_flame.png') 
   .addField('Price:  500')
   .addField('Health:  1800')
   .addField('Build Speed:  0.0008')
   .addField('Range:  180')
   .addField('Area Damage:  7')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}
