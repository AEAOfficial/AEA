exports.code = function(){     client.on('message', message => {
            if (message.content.toLowerCase() === 'helicopter12') { 
              if(message.author.bot) return; 
              message.channel.send(c_helicopter12); 
              }
	  });
const c_helicopter12 = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/c_helicopter12.png']) 
   .setImage('attachment://c_helicopter12.png') 
   .setTitle(' Helicopter') 
   .setDescription(' - Very light air/ground attack\n- Can transport 4 infantry units\n- Landed when not actively moving') 
   .addField('Stats') 
   .addField('Price:  450')
   .addField('Health:  200')
   .addField('Build Speed:  5.4s')
   .addField('Range:  130')
   .addField('Direct Damage:  17')
   .addField('Move Speed:  1.8')
   .addField('Turn Speed:  6')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
