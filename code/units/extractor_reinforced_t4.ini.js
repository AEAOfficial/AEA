exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'extractor_reinforced_t4') { 
              if(message.author.bot) return; 
              message.channel.send(extractor_reinforced_t4); 
	          }
	  });
const extractor_reinforced_t4 = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/extractor_reinforced_t4.png']) 
   //.setImage('attachment://extractor_reinforced_t4.png') 
   .addField('Health:  3000','__________________')
   .addField('Shield:  1000','__________________')
   .setTitle('  Armored Extractor T4') 
   .setDescription(' - Arms extractor with tesla attack \n- Extractor shield \n- Increased HP and radar\n- Keeps current Income Generations \n- Passive Area Healing\n- Can be converted back to normal') 
   .addField('Stats','__________________') 
   .addField('Price:  credits=-1700','__________________')
   .addField('Direct Damage:  100','__________________')
   .addField('Area Damage:  -15','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
