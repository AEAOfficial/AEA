exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'subturret') { 
              if(message.author.bot) return; 
              message.channel.send(SubTurret); 
              }
const SubTurret = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/SubTurret.png']) 
   .setImage('attachment://SubTurret.png') 
   .addField('Price:  1000')
   .addField('Health:  800')
   .setDescription(' - Upgradeable for more range/HP/DPS\n- Can surface to hit air units only') 
   .addField('Stats') 
   .addField('Build Speed:  0.0010')
   .addField('Price:  0')
   .addField('Build Speed:  0.02')
   .addField('Price:  2400')
   .addField('Build Speed:  0.0004')
   .addField('Range:  220')
   .addField('Direct Damage:  60')
   .addField('Move Speed:  0')
   .addField('Turn Speed:  3.1')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}
