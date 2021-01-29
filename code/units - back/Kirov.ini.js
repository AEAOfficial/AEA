exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'kirov') { 
              if(message.author.bot) return; 
              message.channel.send(kirov); 
              }
const kirov = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/kirov.png']) 
   .setImage('attachment://kirov.png') 
   .addField('Price:  45000, uranium=1500')
   .addField('Health:  24000')
   .setTitle(' Kirov Bomber') 
   .setDescription(' -Heavy aircraft\n-Armed with 30 bombs (slow reload)\n-Heavy Armor\n-Can attack only land\n-Slow') 
   .addField('Stats') 
   .addField('Build Speed:  83.3s')
   .addField('Range:  60')
   .addField('Direct Damage:  1')
   .addField('Area Damage:  300')
   .addField('Direct Damage:  1')
   .addField('Area Damage:  40')
   .addField('Move Speed:  0.5')
   .addField('Turn Speed:  0.75')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}
