exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'buffalotank') { 
              if(message.author.bot) return; 
              message.channel.send(buffaloTank); 
	          }
	  });
const buffaloTank = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/buffaloTank.png']) 
   //.setImage('attachment://buffaloTank.png') 
   .setTitle(' Buffalo') 
   .setDescription(' -Minigun tank\n-Can attack land & air\n-Speeds up as it fires') 
   .addField('Stats','__________________') 
   .addField('Price:  2000','__________________')
   .addField('Health:  700','__________________')
   .addField('Range:  200','__________________')
   .addField('Direct Damage:  14','__________________')
   .addField('Move Speed:  .9','__________________')
   .addField('Turn Speed:  2.1','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
