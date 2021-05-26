exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'apachehelicopter') { 
              if(message.author.bot) return; 
              message.channel.send(apacheHelicopter); 
	          }
	  });
const apacheHelicopter = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/apacheHelicopter.png']) 
   //.setImage('attachment://apacheHelicopter.png') 
   .setTitle(' Apache Helicopter') 
   .setDescription(' - Can attack Land and Air\n- Heavily armed, very light armour\n- Unloads hellfire, but slow reload after barrage') 
   .addField('Stats','__________________') 
   .addField('Price:  2750','__________________')
   .addField('Health:  230','__________________')
   .addField('Range:  230','__________________')
   .addField('Direct Damage:  8','__________________')
   .addField('Direct Damage:  1','__________________')
   .addField('Area Damage:  45','__________________')
   .addField('Direct Damage:  100','__________________')
   .addField('Area Damage:  60','__________________')
   .addField('Move Speed:  1.7','__________________')
   .addField('Turn Speed:  3','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
