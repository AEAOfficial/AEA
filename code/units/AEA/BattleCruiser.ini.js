exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'battlecruiser') { 
              if(message.author.bot) return; 
              message.channel.send(BattleCruiser); 
	          }
	  });
const BattleCruiser = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/BattleCruiser.png']) 
   //.setImage('attachment://BattleCruiser.png') 
   .addField('Price:  9000, uranium=50','__________________')
   .addField('Health:  7000','__________________')
   .setTitle(' Battle Cruiser') 
   .setDescription('- Heavily armoured\n- Can attack attack land, air, and subs\n- Slow firing rate') 
   .addField('Stats','__________________') 
   .addField('Range:  330','__________________')
   .addField('Direct Damage:  0 #no directDamage with targetGround','__________________')
   .addField('Area Damage:  150','__________________')
   .addField('Direct Damage:  95','__________________')
   .addField('Direct Damage:  115','__________________')
   .addField('Move Speed:  0.5','__________________')
   .addField('Turn Speed:  1.0','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
