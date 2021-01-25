exports.code = function(){     client.on('message', message => {
            if (message.content.toLowerCase() === 'stelsship2') { 
              if(message.author.bot) return; 
              message.channel.send(stelsShip2); 
              }
	  });
const stelsShip2 = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/stelsShip2.png']) 
   .setImage('attachment://stelsShip2.png') 
   .setTitle(' Phantom Scout') 
   .setDescription(' - Stealthy scouting drone\n- Cannot attack\n- Can turn invisible for 5 seconds') 
   .addField('Stats') 
   .addField('Price:  4200')
   .addField('Health:  540')
   .addField('Build Speed:  0.0025')
   .addField('Build Speed:  0s')
   .addField('Price:  0')
   .addField('Build Speed:  0s')
   .addField('Price:  0')
   .addField('Range:  50')
   .addField('Area Damage:  45')
   .addField('Move Speed:  2.0')
   .addField('Turn Speed:  1.5')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
