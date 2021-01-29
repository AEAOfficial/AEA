exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'warship') { 
              if(message.author.bot) return; 
              message.channel.send(warShip); 
              }
const warShip = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/warShip.png']) 
   .setImage('attachment://warShip.png') 
   .setTitle(' Amphibious Warship') 
   .setDescription(' - Can produce mid tier air, naval, and hover units.\n- Can repair units\n- Light defenses, mainly useable as a mobile factory.') 
   .addField('Stats') 
   .addField('Price:  16500, uranium=350')
   .addField('Health:  5500')
   .addField('Build Speed:  0.0003')
   .addField('Range:  275')
   .addField('Direct Damage:  50')
   .addField('Area Damage:  40')
   .addField('Direct Damage:  95')
   .addField('Move Speed:  0.7')
   .addField('Turn Speed:  1.0')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}
