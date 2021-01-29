exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'ekseleniumdived') { 
              if(message.author.bot) return; 
              message.channel.send(EkSeleniumDived); 
	          }
	  });
const EkSeleniumDived = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/EkSeleniumDived.png']) 
   //.setImage('attachment://EkSeleniumDived.png') 
   .addField('Price:  21000, uranium=500','__________________')
   .addField('Health:  4200','__________________')
   .addField('Range:  270','__________________')
   .addField('Direct Damage:  110','__________________')
   .addField('Direct Damage:  95','__________________')
   .addField('Move Speed:  0.65','__________________')
   .addField('Turn Speed:  0.75','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
