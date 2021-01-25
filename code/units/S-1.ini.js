exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 's-1') { 
              if(message.author.bot) return; 
              message.channel.send(S-1); 
              }
const S1 = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/S-1.png']) 
   .setImage('attachment://S-1.png') 
   .addField('Price:  1350')
   .addField('Health:  100')
   .setTitle(' S-1') 
   .setDescription('- 1 Transport slot.\n- Cant attack.') 
   .addField('Stats') 
   .addField('Build Speed:  0.002')
   .addField('Range:  9')
   .addField('Direct Damage:  250')
   .addField('Move Speed:  2.25')
   .addField('Turn Speed:  1.8')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}
