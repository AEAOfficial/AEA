exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'bomber') { 
              if(message.author.bot) return; 
              message.channel.send(bomber); 
	          }
	  });
const bomber = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/bomber.png']) 
   //.setImage('attachment://bomber.png') 
   .setTitle(' Bomber') 
   .setDescription(' - Heavily armed and armoured bomber\n- Slow but tanky\n- Drops 3 bombs then has to reload\n- Can hit subs (at half damage)') 
   .addField('Stats','__________________') 
   .addField('Price:  4000','__________________')
   .addField('Health:  3000','__________________')
   .addField('Range:  45','__________________')
   .addField('Direct Damage:  195','__________________')
   .addField('Area Damage:  370','__________________')
   .addField('Area Damage:  185','__________________')
   .addField('Move Speed:  0.8','__________________')
   .addField('Turn Speed:  1.2','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
