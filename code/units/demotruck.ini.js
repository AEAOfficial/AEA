exports.code = function(){     client.on('message', message => {
            if (message.content.toLowerCase() === 'demo_truck') { 
              if(message.author.bot) return; 
              message.channel.send(demo_truck); 
              }
	  });
const demo_truck = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/demo_truck.png']) 
   .setImage('attachment://demo_truck.png') 
   .setTitle(' Demolition Truck') 
   .setDescription(' -Blows itself up on enemies\n-High damage and area of effect\n-Lower damage if killed before detonation\n-Light armor\n-Fast, but accelerates slowly\n-Cannot enter transports') 
   .addField('Stats') 
   .addField('Price:  2000')
   .addField('Health:  400')
   .addField('Build Speed:  16.7s')
   .addField('Range:  9')
   .addField('Direct Damage:  3500')
   .addField('Area Damage:  1500')
   .addField('Move Speed:  1.5')
   .addField('Turn Speed:  4.1')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
