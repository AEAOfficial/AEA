exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'heavyhovertank') { 
              if(message.author.bot) return; 
              message.channel.send(heavyHovertank); 
	          }
	  });
const heavyHovertank = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/heavyHovertank.png']) 
   //.setImage('attachment://heavyHovertank.png') 
   .setTitle(' Heavy Hovertank') 
   .setDescription(' -Heavy armor\n-Able to move over water\n-Can attack subs, air and ground\n- Great for killing heavy subs') 
   .addField('Stats','__________________') 
   .addField('Price:  1100','__________________')
   .addField('Health:  420','__________________')
   .addField('Range:  160','__________________')
   .addField('Direct Damage:  40','__________________')
   .addField('Direct Damage:  65','__________________')
   .addField('Move Speed:  1.0','__________________')
   .addField('Turn Speed:  2.5','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
