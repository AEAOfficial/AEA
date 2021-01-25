exports.code = function(){     client.on('message', message => {
            if (message.content.toLowerCase() === 'clasertank') { 
              if(message.author.bot) return; 
              message.channel.send(cc_laserTank); 
              }
	  });
const cc_laserTank = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/cc_laserTank.png']) 
   .setImage('attachment://cc_laserTank.png') 
   .setTitle(' Laser Tank') 
   .setDescription(' -Can attack ground and air\n-Weak vs. multiple units\n-Powerful single shot, slow recharge') 
   .addField('Stats') 
   .addField('Price:  1300')
   .addField('Health:  500')
   .addField('Build Speed:  22.4s')
   .addField('Range:  190')
   .addField('Direct Damage:  350')
   .addField('Move Speed:  0.9')
   .addField('Turn Speed:  1.5')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
