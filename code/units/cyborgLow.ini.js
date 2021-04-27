exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'cyborglow') { 
              if(message.author.bot) return; 
              message.channel.send(cyborgLow); 
	          }
	  });
const cyborgLow = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/cyborgLow.png']) 
   //.setImage('attachment://cyborgLow.png') 
   .setTitle(' Xan Commander \n[WARNING] ENERGY LOW') 
   .setDescription('- Advanced Next Gen super unit\n- Fast, agile, lightly armoured\n- Extremely powerful plasma minigun melts its enemies quickly\n- Long range ground & air attack\n- Cannot be repaired\n- Cannot fit in transports\n- Has self regen abilities\n- Can only have 1 built at a time\n- Long term usage leads to malfunction') 
   .addField('Stats','__________________') 
   .addField('Price:  21000, uranium=1000','__________________')
   .addField('Health:  1200','__________________')
   .addField('Range:  280','__________________')
   .addField('Direct Damage:  83','__________________')
   .addField('Area Damage:  83','__________________')
   .addField('Move Speed:  0.8','__________________')
   .addField('Turn Speed:  8.5','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
