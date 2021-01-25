exports.code = function(){     client.on('message', message => {
            if (message.content.toLowerCase() === 'apachehelicopter') { 
              if(message.author.bot) return; 
              message.channel.send(apacheHelicopter); 
              }
	  });
const apacheHelicopter = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/apacheHelicopter.png']) 
   .setImage('attachment://apacheHelicopter.png') 
   .setTitle(' Apache Helicopter') 
   .setDescription(' - Can attack Land and Air\n- Heavily armed, very light armour\n- Unloads hellfire, but slow reload after barrage') 
   .addField('Stats') 
   .addField('Price:  2750')
   .addField('Health:  230')
   .addField('Build Speed:  12.8s')
   .addField('Range:  230')
   .addField('Direct Damage:  8')
   .addField('Direct Damage:  1')
   .addField('Area Damage:  45')
   .addField('Direct Damage:  100')
   .addField('Area Damage:  60')
   .addField('Move Speed:  1.7')
   .addField('Turn Speed:  3')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
