exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'mechfactory') { 
              if(message.author.bot) return; 
              message.channel.send(mechFactory); 
	          }
	  });
const mechFactory = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/mechFactory.png']) 
   //.setImage('attachment://mechFactory.png') 
   .addField('Price:  1500','__________________')
   .addField('Health:  1800','__________________')
   .addField('Range:  0','__________________')
   .addField('Move Speed:  0','__________________')
   .addField('Turn Speed:  0','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
