exports.code = function(){     client.on('message', message => {
            if (message.content.toLowerCase() === 'teslamech') { 
              if(message.author.bot) return; 
              message.channel.send(teslaMech); 
              }
	  });
const teslaMech = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/teslaMech.png']) 
   .setImage('attachment://teslaMech.png') 
   .setTitle(' Tesla Mech') 
   .setDescription(' -Land & Air Lightning attack\n- Decent Range and movement speed\n-Very strong vs. shields\n-Reduced damage vs. grounded buildings\n-Can discharge itself and sacrifice HP to deal area damage') 
   .addField('Stats') 
   .addField('Price:  6500')
   .addField('Health:  1500')
   .addField('Build Speed:  0.0006')
   .addField('Build Speed:  0s')
   .addField('Price:  energy=1, hp=250')
   .addField('Range:  250')
   .addField('Move Speed:  2.4')
   .addField('Direct Damage:  140')
   .addField('Area Damage:  520')
   .addField('Move Speed:  0.65')
   .addField('Turn Speed:  3')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
