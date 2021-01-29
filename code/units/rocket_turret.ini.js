exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'rocket_turret') { 
              if(message.author.bot) return; 
              message.channel.send(rocket_turret); 
	          }
	  });
const rocket_turret = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/rocket_turret.png']) 
   //.setImage('attachment://rocket_turret.png') 
   .setTitle(' Rocket Turret') 
   .setDescription(' -Can attack ground and air\n-Long range') 
   .addField('Stats','__________________') 
   .addField('Price:  2400','__________________')
   .addField('Health:  900','__________________')
   .addField('Range:  300','__________________')
   .addField('Direct Damage:  80','__________________')
   .addField('Area Damage:  90','__________________')
   .addField('Direct Damage:  0','__________________')
   .addField('Area Damage: 0','__________________')
   .addField('Move Speed:  0','__________________')
   .addField('Turn Speed:  0','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
