exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'battlecruiser') { 
              if(message.author.bot) return; 
              message.channel.send(BattleCruiser); 
              }
const BattleCruiser = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/BattleCruiser.png']) 
   .setImage('attachment://BattleCruiser.png') 
   .addField('Price:  9000')
   .addField('Health:  7000')
   .setTitle(' Battle Cruiser') 
   .setDescription('- Heavily armoured\n- Can attack attack land, air, and subs\n- Slow firing rate') 
   .addField('Stats') 
   .addField('Build Speed:  0.00019')
   .addField('Range:  330')
   .addField('Direct Damage:  0 #no directDamage with targetGround')
   .addField('Area Damage:  150')
   .addField('Direct Damage:  95')
   .addField('Direct Damage:  115')
   .addField('Move Speed:  0.5')
   .addField('Turn Speed:  1.0')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}
