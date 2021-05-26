exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'lightgunship') { 
              if(message.author.bot) return; 
              message.channel.send(lightGunship); 
	          }
	  });
const lightGunship = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/lightGunship.png']) 
   //.setImage('attachment://lightGunship.png') 
   .setTitle(' Light gun ship') 
   .setDescription(' -Can attack ground only\n- Very low health\n- Light guns\n- Slow') 
   .addField('Stats','__________________') 
   .addField('Price:  250','__________________')
   .addField('Health:  50','__________________')
   .addField('Range:  120','__________________')
   .addField('Direct Damage:  10','__________________')
   .addField('Move Speed:  1.1','__________________')
   .addField('Turn Speed:  99','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
