exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'ektitanmech') { 
              if(message.author.bot) return; 
              message.channel.send(EkTitanMech); 
              }
const EkTitanMech = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/EkTitanMech.png']) 
   .setImage('attachment://EkTitanMech.png') 
   .setTitle(' Titan') 
   .setDescription(' -Advanced heavy seige mech\n-Strong ground attack with long range\n-Gatling anti-tank cannon\n-Drum-fed grenade launcher\n-Guided missiles\n- Cannot fit in air transports\n-Goes nuclear on death') 
   .addField('Stats') 
   .addField('Price:  230000, uranium=11000')
   .addField('Health:  12000')
   .addField('Build Speed:  0.0000009')
   .addField('Build Speed:  15000000s')
   .addField('Build Speed:  14000s')
   .addField('Price:   0')
   .addField('Build Speed:  0.006')
   .addField('Shield:  8000')
   .addField('Range:  350')
   .addField('Direct Damage:  50')
   .addField('Area Damage:  50')
   .addField('Direct Damage:  80')
   .addField('Area Damage:  100')
   .addField('Direct Damage:  1')
   .addField('Area Damage:  150')
   .addField('Move Speed:  0.9')
   .addField('Move Speed:  0.4')
   .addField('Turn Speed:  1.5')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}
