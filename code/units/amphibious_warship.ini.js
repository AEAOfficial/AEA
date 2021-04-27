exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'warship') { 
              if(message.author.bot) return; 
              message.channel.send(warShip); 
	          }
	  });
const warShip = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/warShip.png']) 
   //.setImage('attachment://warShip.png') 
   .setTitle(' Amphibious Warship') 
   .setDescription(' - Can produce mid tier air, naval, and hover units.\n- Can repair units\n- Light defenses, mainly useable as a mobile factory.') 
   .addField('Stats','__________________') 
   .addField('Price:  16500, uranium=350','__________________')
   .addField('Health:  5500','__________________')
   .addField('Range:  275','__________________')
   .addField('Direct Damage:  50','__________________')
   .addField('Area Damage:  40','__________________')
   .addField('Direct Damage:  95','__________________')
   .addField('Move Speed:  0.6','__________________')
   .addField('Turn Speed:  0.7','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
