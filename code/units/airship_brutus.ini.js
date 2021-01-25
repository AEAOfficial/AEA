exports.code = function(){     client.on('message', message => {
            if (message.content.toLowerCase() === 'mothership') { 
              if(message.author.bot) return; 
              message.channel.send(mothership); 
              }
	  });
const mothership = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/mothership.png']) 
   .setImage('attachment://mothership.png') 
   .setTitle(' Mothership') 
   .setDescription(' - Ultimate Dropship\n- Armed with hellfire cannons and missile launchers\n- Built in fabricator\n-Carries 16 Units\n- Goes nuclear on death\n- Can only have 5 built at a time') 
   .addField('Stats') 
   .addField('Price:  150000, uranium=10000')
   .addField('Health:  15000')
   .addField('Build Speed:  123.8s')
   .addField('Range:  320')
   .addField('Direct Damage:  35')
   .addField('Area Damage:  85')
   .addField('Direct Damage:  25')
   .addField('Area Damage:  25')
   .addField('Direct Damage:  35')
   .addField('Area Damage:  55')
   .addField('Move Speed:  0.65')
   .addField('Turn Speed:  0.3')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
