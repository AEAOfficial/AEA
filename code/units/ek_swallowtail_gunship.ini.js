exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'swallowtail') { 
              if(message.author.bot) return; 
              message.channel.send(Swallowtail); 
	          }
	  });
const Swallowtail = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/Swallowtail.png']) 
   //.setImage('attachment://Swallowtail.png') 
   .addField('Price:  6900, uranium=50','__________________')
   .addField('Health:  300','__________________')
   .setTitle(' Swallow Tail') 
   .setDescription('- Fast, glass cannon\n- Good home defence in groups\n- Weak armour but heavy DPS\n- Fucking swallow tails.') 
   .addField('Stats','__________________') 
   .addField('Shield:  600','__________________')
   .addField('Range:  180','__________________')
   .addField('Direct Damage:  50','__________________')
   .addField('Area Damage:  30','__________________')
   .addField('Direct Damage:  18','__________________')
   .addField('Move Speed:  1.8','__________________')
   .addField('Turn Speed:  3.6','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
