exports.code = function(){     client.on('message', message => {
            if (message.content.toLowerCase() === 'ekselenium') { 
              if(message.author.bot) return; 
              message.channel.send(EkSelenium); 
              }
	  });
const EkSelenium = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/EkSelenium.png']) 
   .setImage('attachment://EkSelenium.png') 
   .setTitle(' Selenium') 
   .setDescription(' - Mammoth Submarine\n-Slow but armored, heavily armed\n- Can surface and hit air/land') 
   .addField('Stats') 
   .addField('Price:  21000, uranium=500')
   .addField('Health:  4200')
   .addField('Build Speed:  0.0003')
   .addField('Price:   0')
   .addField('Build Speed:  5s')
   .addField('Range:  290')
   .addField('Direct Damage:  95')
   .addField('Direct Damage:  70')
   .addField('Area Damage:  180')
   .addField('Move Speed:  0.8')
   .addField('Turn Speed:  1.5')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
