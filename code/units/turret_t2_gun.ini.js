exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'aeaturret_t2_gun') { 
              if(message.author.bot) return; 
              message.channel.send(AEAturret_t2_gun); 
	          }
	  });
const AEAturret_t2_gun = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/AEAturret_t2_gun.png']) 
   //.setImage('attachment://AEAturret_t2_gun.png') 
   .addField('Price:  2000','__________________')
   .addField('Health:  1100','__________________')
   .addField('Range:  250','__________________')
   .addField('Direct Damage:  44','__________________')
   .addField('Area Damage:  40','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
