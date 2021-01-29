exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'zephyrtank') { 
              if(message.author.bot) return; 
              message.channel.send(zephyrTank); 
	          }
	  });
const zephyrTank = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/zephyrTank.png']) 
   //.setImage('attachment://zephyrTank.png') 
   .setTitle(' Zephyr') 
   .setDescription(' -Medium armor\n-Armed with a prototype flamethrower\n-Short range ground attack\n- Does slightly less damage to buildings\n-Can auto-repair') 
   .addField('Stats','__________________') 
   .addField('Price:  1500','__________________')
   .addField('Health:  800','__________________')
   .addField('Range:  140','__________________')
   .addField('Area Damage:  6','__________________')
   .addField('Move Speed:  1.2','__________________')
   .addField('Turn Speed:  2.1','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
