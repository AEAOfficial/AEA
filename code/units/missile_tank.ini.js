exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'missiletankfix') { 
              if(message.author.bot) return; 
              message.channel.send(missileTankFix); 
	          }
	  });
const missileTankFix = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/missileTankFix.png']) 
   //.setImage('attachment://missileTankFix.png') 
   .addField('Price:  3000','__________________')
   .addField('Health:  1000','__________________')
   .addField('Shield:  500','__________________')
   .addField('Range:  340','__________________')
   .addField('Direct Damage:  100','__________________')
   .addField('Area Damage:  50','__________________')
   .addField('Move Speed:  0.6','__________________')
   .addField('Turn Speed:  2.1','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
