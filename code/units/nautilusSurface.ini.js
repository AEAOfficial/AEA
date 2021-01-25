exports.code = function(){     client.on('message', message => {
            if (message.content.toLowerCase() === 'nautilussubmarinesurface') { 
              if(message.author.bot) return; 
              message.channel.send(c_nautilusSubmarineSurface); 
              }
	  });
const c_nautilusSubmarineSurface = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/c_nautilusSubmarineSurface.png']) 
   .setImage('attachment://c_nautilusSubmarineSurface.png') 
   .addField('Move Speed:  0.3')
   .addField('Move Speed:  0.6')
   .addField('Turn Speed:  0.8')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
