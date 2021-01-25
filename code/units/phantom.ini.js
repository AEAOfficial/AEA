exports.code = function(){     client.on('message', message => {
            if (message.content.toLowerCase() === 'phantom') { 
              if(message.author.bot) return; 
              message.channel.send(phantom); 
              }
	  });
const phantom = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/phantom.png']) 
   .setImage('attachment://phantom.png') 
   .setTitle(' Ghost') 
   .setDescription(' -Advanced armored infantry\n-Light plasma Rifles\n- Can attack ground & air\n-Advanced stealth technology\n- Renegerates health quickly') 
   .addField('Stats') 
   .addField('Price:  1800')
   .addField('Health:  150')
   .addField('Build Speed:  16.7s')
   .addField('Build Speed:  0s')
   .addField('Price:  energy=1')
   .addField('Range:  230')
   .addField('Direct Damage:  45')
   .addField('Move Speed:  1.1')
   .addField('Turn Speed:  7.5')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
