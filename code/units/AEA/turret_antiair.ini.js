exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'antiairturret12') { 
              if(message.author.bot) return; 
              message.channel.send(antiAirTurret12); 
	          }
	  });
const antiAirTurret12 = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/antiAirTurret12.png']) 
   //.setImage('attachment://antiAirTurret12.png') 
   .setTitle(' SAM Turret') 
   .setDescription(' - Shoots surface to air missiles\n- Cannot attack ground\n- Upgradeable') 
   .addField('Stats','__________________') 
   .addField('Price:  600','__________________')
   .addField('Health:  800','__________________')
   .addField('Range:  250','__________________')
   .addField('Direct Damage:  60','__________________')
   .addField('Area Damage:  40','__________________')
   .addField('Move Speed:  0','__________________')
   .addField('Turn Speed:  0','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
