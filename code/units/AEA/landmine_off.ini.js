exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'landmineoff') { 
              if(message.author.bot) return; 
              message.channel.send(landmineOff); 
	          }
	  });
const landmineOff = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/landmineOff.png']) 
   //.setImage('attachment://landmineOff.png') 
   .addField('Price:  900','__________________')
   .addField('Health:  10','__________________')
   .setTitle(' Landmine (auto off)') 
   .setDescription(' - Small Activation Range (Small Ring) \n- Can be Disarmed by Enemy Engineers (Middle Ring) \n- Remote Detonation From Engineers (Large Ring) \n- Does 500 damage (AOE) \n- Cannot be attacked') 
   .addField('Stats','__________________') 
   .addField('Range:  70','__________________')
   .addField('Direct Damage:  0','__________________')
   .addField('Area Damage:  500','__________________')
   .addField('Move Speed:  0','__________________')
   .addField('Turn Speed:  0','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
