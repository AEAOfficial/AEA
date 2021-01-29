exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'sabertank') { 
              if(message.author.bot) return; 
              message.channel.send(saberTank); 
	          }
	  });
const saberTank = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/saberTank.png']) 
   //.setImage('attachment://saberTank.png') 
   .setTitle(' Saber') 
   .setDescription(' -Can attack air only\n-Armed with 2 small flak cannons\n-Medium armor') 
   .addField('Stats','__________________') 
   .addField('Price:  800','__________________')
   .addField('Health:  600','__________________')
   .addField('Range:  180','__________________')
   .addField('Direct Damage:  16','__________________')
   .addField('Area Damage:  10','__________________')
   .addField('Move Speed:  0.6','__________________')
   .addField('Turn Speed:  2.1','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
