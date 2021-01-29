exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'heavytank') { 
              if(message.author.bot) return; 
              message.channel.send(heavyTank); 
	          }
	  });
const heavyTank = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/heavyTank.png']) 
   //.setImage('attachment://heavyTank.png') 
   .setTitle(' Heavy Tank') 
   .setDescription(' -Heavily armed\n-Can attack ground\n-Light air attack') 
   .addField('Stats','__________________') 
   .addField('Price:  800','__________________')
   .addField('Health:  600','__________________')
   .addField('Range:  160','__________________')
   .addField('Direct Damage:  50','__________________')
   .addField('Direct Damage:  50','__________________')
   .addField('Move Speed:  0.8','__________________')
   .addField('Turn Speed:  1.9','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
