exports.code = function(){     client.on('message', message => {
            if (message.content.toLowerCase() === 'credit_factory') { 
              if(message.author.bot) return; 
              message.channel.send(credit_factory); 
              }
	  });
const credit_factory = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/credit_factory.png']) 
   .setImage('attachment://credit_factory.png') 
   .addField('Price:  22500')
   .addField('Health:  350')
   .setTitle(' Credit Factory') 
   .setDescription(' -Generates credits at a high rate\n -Fragile\n-Goes nuclear on death\n- Can only build 8 at a time.') 
   .addField('Stats') 
   .addField('Build Speed:  0.0005')
   .addField('Price:   22500')
   .addField('Build Speed:  .0005')
   .addField('Range:  320')
   .addField('Move Speed:  0')
   .addField('Turn Speed:  0')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
