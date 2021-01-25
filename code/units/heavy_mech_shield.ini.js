exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'heavymechshielded') { 
              if(message.author.bot) return; 
              message.channel.send(heavyMechShielded); 
              }
const heavyMechShielded = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/heavyMechShielded.png']) 
   .setImage('attachment://heavyMechShielded.png') 
   .addField('Shield:  900')
   .addField('Build Speed:  0s')
   .addField('Price:  0')
   .addField('Build Speed:  0s')
   .addField('Price:  energy=1')
   .addField('Build Speed:  0s')
   .addField('Move Speed:  2.4')
   .addField('Move Speed:  0.85')
   .addField('Turn Speed:  5')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}
