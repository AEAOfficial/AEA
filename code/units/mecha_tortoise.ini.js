exports.code = function(){     client.on('message', message => {
            if (message.content.toLowerCase() === 'mechatortoise') { 
              if(message.author.bot) return; 
              message.channel.send(mechaTortoise); 
              }
	  });
const mechaTortoise = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/mechaTortoise.png']) 
   .setImage('attachment://mechaTortoise.png') 
   .setTitle(' Experiemental turtle') 
   .setDescription(' -Very heavily armed and armored but slow \n- Long range land attack \n -Can move over water \n -Can activate shell mode to repair itself and increase attack range\n- Has experimental armour-plating that reduces damage taken\n- Cannot fit in transports\n -Goes nuclear on death (Extreme nuke damage)\n- Nuke on death does less damage/range in shell mode') 
   .addField('Stats') 
   .addField('Price:  2')
   .addField('Price:  50000, uranium=2500')
   .addField('Health:  15000')
   .addField('Build Speed:  93.3s')
   .addField('Build Speed:  1')
   .addField('Build Speed:  6s')
   .addField('Range:  310')
   .addField('Area Damage:  310')
   .addField('Move Speed:  1.3')
   .addField('Move Speed:  0.3')
   .addField('Turn Speed:  0.5')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
