exports.code = function(){     client.on('message', message => {
            if (message.content.toLowerCase() === 'dustertank') { 
              if(message.author.bot) return; 
              message.channel.send(dusterTank); 
              }
	  });
const dusterTank = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/dusterTank.png']) 
   .setImage('attachment://dusterTank.png') 
   .setTitle(' Duster') 
   .setDescription(' -Medium armour\n-Ground attack\n-Armed with twin autocannons') 
   .addField('Stats') 
   .addField('Price:  3000')
   .addField('Health:  1100')
   .addField('Build Speed:  24.4s')
   .addField('Range:  210')
   .addField('Direct Damage:  28')
   .addField('Area Damage:  12')
   .addField('Direct Damage:  0')
   .addField('Move Speed:  0.8')
   .addField('Turn Speed:  2.1')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
