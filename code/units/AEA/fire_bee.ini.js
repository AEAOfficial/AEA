exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'firebee') { 
              if(message.author.bot) return; 
              message.channel.send(fireBee); 
	          }
	  });
const fireBee = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/fireBee.png']) 
   //.setImage('attachment://fireBee.png') 
   .setTitle(' Fire bee') 
   .setDescription(' -Heavily armed \n -Can attack ground \n -Medium air attack \n -Needs to reload after firing \n -Self repair\n- Minor Nuclear detonation on death') 
   .addField('Stats','__________________') 
   .addField('Price:  11000, uranium=150','__________________')
   .addField('Health:  4900','__________________')
   .addField('Range:  210','__________________')
   .addField('Area Damage:  45','__________________')
   .addField('Direct Damage:  22','__________________')
   .addField('Move Speed:  1.1','__________________')
   .addField('Turn Speed:  2','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
