exports.code = function(){     client.on('message', message => {
            if (message.content.toLowerCase() === 'heavyinterceptor') { 
              if(message.author.bot) return; 
              message.channel.send(c_heavyInterceptor); 
              }
	  });
const c_heavyInterceptor = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/c_heavyInterceptor.png']) 
   .setImage('attachment://c_heavyInterceptor.png') 
   .setTitle(' Heavy Interceptor') 
   .setDescription(' -Fast\n-Can attack air only \n-Heavily armed with shield \n-Shield weak vs lightning') 
   .addField('Stats') 
   .addField('Price:  1200')
   .addField('Health:  40')
   .addField('Shield:  560')
   .addField('Build Speed:  0.001')
   .addField('Range:  170')
   .addField('Direct Damage:  12')
   .addField('Move Speed:  2.5')
   .addField('Turn Speed:  5.0')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
