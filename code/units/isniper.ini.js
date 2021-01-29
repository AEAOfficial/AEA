exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'isniper') { 
              if(message.author.bot) return; 
              message.channel.send(Isniper); 
	          }
	  });
const Isniper = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/Isniper.png']) 
   //.setImage('attachment://Isniper.png') 
   .setTitle(' Sniper') 
   .setDescription(' -Elite infantry \n- Must be in sniper mode to utilize full range/damage\n -Can attack land and air \n -Long range\n- Reduced damage to buildings') 
   .addField('Stats','__________________') 
   .addField('Price:  1000','__________________')
   .addField('Health:  60','__________________')
   .addField('Range:  120','__________________')
   .addField('Direct Damage:  105','__________________')
   .addField('Move Speed:  1.2','__________________')
   .addField('Turn Speed:  8.5','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
