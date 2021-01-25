exports.code = function(){     client.on('message', message => {
            if (message.content.toLowerCase() === 'mortar') { 
              if(message.author.bot) return; 
              message.channel.send(mortar); 
              }
	  });
const mortar = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/mortar.png']) 
   .setImage('attachment://mortar.png') 
   .setTitle(' Mortar') 
   .setDescription(' -Can attack ground only \n -Long range\n- Weak vs units') 
   .addField('Stats') 
   .addField('Price:  120')
   .addField('Health:  60')
   .addField('Build Speed:  3.3s')
   .addField('Range:  290')
   .addField('Area Damage:  74')
   .addField('Move Speed:  0.75')
   .addField('Turn Speed:  8.5')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
