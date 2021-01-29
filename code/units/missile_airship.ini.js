exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'missileairship') { 
              if(message.author.bot) return; 
              message.channel.send(missileAirship); 
	          }
	  });
const missileAirship = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/missileAirship.png']) 
   //.setImage('attachment://missileAirship.png') 
   .setTitle(' Missile Airship') 
   .setDescription('- Can attack Air and Ground\n- Does splash damage\n- Has to reload missiles') 
   .addField('Stats','__________________') 
   .addField('Price:  3350','__________________')
   .addField('Health:  700','__________________')
   .addField('Range:  220','__________________')
   .addField('Direct Damage:  50','__________________')
   .addField('Area Damage:  47','__________________')
   .addField('Move Speed:  2.0','__________________')
   .addField('Turn Speed:  3.6','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
