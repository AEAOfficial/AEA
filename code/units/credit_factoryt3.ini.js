exports.code = function(){     client.on('message', message => {
            if (message.content.toLowerCase() === 'credit_factoryt3') { 
              if(message.author.bot) return; 
              message.channel.send(credit_factoryt3); 
              }
	  });
const credit_factoryt3 = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/credit_factoryt3.png']) 
   .setImage('attachment://credit_factoryt3.png') 
   .addField('Price:  67500')
   .addField('Health:  650')
   .setTitle(' Credit Factory T3') 
   .setDescription(' -Generates credits at a high rate\n -Fragile\n-Goes nuclear on death') 
   .addField('Stats') 
   .addField('Build Speed:  0.0005')
   .addField('Range:  320')
   .addField('Move Speed:  0')
   .addField('Turn Speed:  0')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
