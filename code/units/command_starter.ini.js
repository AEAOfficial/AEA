exports.code = function(){     client.on('message', message => {
            if (message.content.toLowerCase() === 'commandcenteraea') { 
              if(message.author.bot) return; 
              message.channel.send(commandCenterAEA); 
              }
	  });
const commandCenterAEA = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/commandCenterAEA.png']) 
   .setImage('attachment://commandCenterAEA.png') 
   .setTitle(' Command Center') 
   .setDescription(' -Creates Builders and Scouts\n-Attacks land and air') 
   .addField('Stats') 
   .addField('Price:  5000')
   .addField('Health:  5000')
   .addField('Build Speed:  0.005')
   .addField('Range:  280')
   .addField('Direct Damage:  240')
   .addField('Area Damage:  120')
   .addField('Move Speed:  0')
   .addField('Turn Speed:  0')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
