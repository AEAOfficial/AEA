exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'titanmech') { 
              if(message.author.bot) return; 
              message.channel.send(EkTitanMech); 
	          }
	  });
const EkTitanMech = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/EkTitanMech.png']) 
   //.setImage('attachment://EkTitanMech.png') 
   .setTitle(' Titan') 
   .setDescription(' -Advanced heavy seige mech\n-Strong ground attack with long range\n-Gatling anti-tank cannon\n-Drum-fed grenade launcher\n-Guided missiles\n- Cannot fit in air transports\n-Goes nuclear on death') 
   .addField('Stats','__________________') 
   .addField('Price:  230000, uranium=11000','__________________')
   .addField('Health:  12000','__________________')
   .addField('Shield:  8000','__________________')
   .addField('Range:  350','__________________')
   .addField('Direct Damage:  50','__________________')
   .addField('Area Damage:  50','__________________')
   .addField('Direct Damage:  80','__________________')
   .addField('Area Damage:  100','__________________')
   .addField('Direct Damage:  1','__________________')
   .addField('Area Damage:  150','__________________')
   .addField('Move Speed:  0.9','__________________')
   .addField('Turn Speed:  1.5','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
