exports.code = function(){     client.on('message', message => {
            if (message.content.toLowerCase() === 'rocketmech') { 
              if(message.author.bot) return; 
              message.channel.send(rocketMech); 
              }
	  });
const rocketMech = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/rocketMech.png']) 
   .setImage('attachment://rocketMech.png') 
   .setTitle(' Rocket Mech') 
   .setDescription(' -Medium armor\n-Heavily armed\n-Can attack ground and air\n-Strong vs. multiple units\n-Can overcharge itself to increase firepower and movement speed') 
   .addField('Stats') 
   .addField('Price:  6500')
   .addField('Health:  1100')
   .addField('Build Speed:  0.0005')
   .addField('Build Speed:  0s')
   .addField('Price:  energy=1')
   .addField('Range:  265')
   .addField('Area Damage:  65')
   .addField('Direct Damage:  40')
   .addField('Area Damage:  40')
   .addField('Move Speed:  2')
   .addField('Move Speed:  0.65')
   .addField('Turn Speed:  3')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
