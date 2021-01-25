exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 's-2') { 
              if(message.author.bot) return; 
              message.channel.send(S-2); 
              }
const S2 = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/S-2.png']) 
   .setImage('attachment://S-2.png') 
   .addField('Price:  3350')
   .addField('Health:  575')
   .setTitle(' S-2') 
   .setDescription('- 6 Pick-up slots.\n- Cant attack.') 
   .addField('Stats') 
   .addField('Build Speed:  0.002')
   .addField('Range:  9')
   .addField('Direct Damage:  250')
   .addField('Move Speed:  1.5')
   .addField('Turn Speed:  1.5')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}
