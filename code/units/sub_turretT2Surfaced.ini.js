exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'subturretsurfacedt2') { 
              if(message.author.bot) return; 
              message.channel.send(SubTurretSurfacedT2); 
	          }
	  });
const SubTurretSurfacedT2 = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/SubTurretSurfacedT2.png']) 
   //.setImage('attachment://SubTurretSurfacedT2.png') 
   .addField('Price:  1000','__________________')
   .addField('Health:  800','__________________')
   .addField('Range:  275','__________________')
   .addField('Direct Damage:  100','__________________')
   .addField('Area Damage:  25','__________________')
   .addField('Move Speed:  0','__________________')
   .addField('Turn Speed:  3.1','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
