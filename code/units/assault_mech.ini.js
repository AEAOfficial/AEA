exports.code = function(){     client.on('message', message => {
            if (message.content.toLowerCase() === 'assaultmech') { 
              if(message.author.bot) return; 
              message.channel.send(assaultMech); 
              }
	  });
const assaultMech = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/assaultMech.png']) 
   .setImage('attachment://assaultMech.png') 
   .setTitle(' Assault Mech') 
   .setDescription(' -Heavily armed and armored\n-Can attack ground\n-Light air attack\n-Can build and buff nearby small T1 mechs\n-Can self-repair') 
   .addField('Stats') 
   .addField('Price:  20000')
   .addField('Health:  4500')
   .addField('Build Speed:  83.3s')
   .addField('Range:  250')
   .addField('Direct Damage:  300')
   .addField('Area Damage:  150')
   .addField('Direct Damage:  55')
   .addField('Area Damage:  15')
   .addField('Direct Damage:  26')
   .addField('Move Speed:  1.2')
   .addField('Move Speed:  0.4')
   .addField('Turn Speed:  1.2')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
