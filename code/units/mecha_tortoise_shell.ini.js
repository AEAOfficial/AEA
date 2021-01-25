exports.code = function(){     client.on('message', message => {
            if (message.content.toLowerCase() === 'mechatortoiseshell') { 
              if(message.author.bot) return; 
              message.channel.send(mechaTortoiseShell); 
              }
	  });
const mechaTortoiseShell = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/mechaTortoiseShell.png']) 
   .setImage('attachment://mechaTortoiseShell.png') 
   .setTitle(' Experiemental turtle') 
   .setDescription(' -Very heavily armed and armored but slow \n -long range land attack \n -Can move over water \n -Can activate shell mode and repair itself  \n -Goes nuclear on death (if nukes are enabled)') 
   .addField('Stats') 
   .addField('Price:  2')
   .addField('Price:  50000')
   .addField('Health:  15000')
   .addField('Build Speed:  0.00028')
   .addField('Build Speed:  1')
   .addField('Shield:  5000')
   .addField('Build Speed:  6s')
   .addField('Range:  360')
   .addField('Area Damage:  310')
   .addField('Area Damage:  350')
   .addField('Move Speed:  0.5')
   .addField('Move Speed:  0')
   .addField('Turn Speed:  0')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
