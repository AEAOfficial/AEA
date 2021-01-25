exports.code = function(){     client.on('message', message => {
            if (message.content.toLowerCase() === 'stelsship') { 
              if(message.author.bot) return; 
              message.channel.send(stelsShip); 
              }
	  });
const stelsShip = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/stelsShip.png']) 
   .setImage('attachment://stelsShip.png') 
   .setTitle(' Phantom Scout') 
   .setDescription(' - Stealthy scouting drone\n- Very light attack\n- Has to be manually ordered to attack\n- Can turn invisible for 13 seconds at a time') 
   .addField('Stats') 
   .addField('Price:  4200')
   .addField('Health:  540')
   .addField('Build Speed:  18.2s')
   .addField('Build Speed:  0s')
   .addField('Price:  energy=1')
   .addField('Range:  110')
   .addField('Direct Damage:  17')
   .addField('Move Speed:  2.0')
   .addField('Turn Speed:  1.5')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
