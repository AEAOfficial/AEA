exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'invisiblesniper') { 
              if(message.author.bot) return; 
              message.channel.send(Invisiblesniper); 
	          }
	  });
const Invisiblesniper = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/Invisiblesniper.png']) 
   //.setImage('attachment://Invisiblesniper.png') 
   .setTitle(' Hidden Sniper') 
   .setDescription(' - \n -Can attack land only\n -Long range') 
   .addField('Stats','__________________') 
   .addField('Price:  1000','__________________')
   .addField('Health:  60','__________________')
   .addField('Range:  360','__________________')
   .addField('Direct Damage:  105','__________________')
   .addField('Move Speed:  0.1','__________________')
   .addField('Turn Speed:  1.0','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
