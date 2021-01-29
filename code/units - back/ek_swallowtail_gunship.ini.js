exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'swallowtail') { 
              if(message.author.bot) return; 
              message.channel.send(Swallowtail); 
              }
const Swallowtail = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/Swallowtail.png']) 
   .setImage('attachment://Swallowtail.png') 
   .addField('Price:  6900, uranium=50')
   .addField('Health:  300')
   .setTitle(' Swallow Tail') 
   .setDescription('- Fast, glass cannon\n- Good home defence in groups\n- Weak armour but heavy DPS\n- Fucking swallow tails.') 
   .addField('Stats') 
   .addField('Build Speed:  33.3s')
   .addField('Shield:  600')
   .addField('Range:  180')
   .addField('Direct Damage:  50')
   .addField('Area Damage:  30')
   .addField('Direct Damage:  18')
   .addField('Move Speed:  1.8')
   .addField('Turn Speed:  3.6')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}
