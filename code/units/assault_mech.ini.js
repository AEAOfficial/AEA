exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'assaultmech') { 
              if(message.author.bot) return; 
              message.channel.send(assaultMech); 
	          }
	  });
const assaultMech = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/assaultMech.png']) 
   //.setImage('attachment://assaultMech.png') 
   .setTitle(' Assault Mech') 
   .setDescription(' -Heavily armed and armored\n-Can attack ground\n-Light air attack\n-Can build and buff nearby small T1 mechs\n-Can self-repair') 
   .addField('Stats','__________________') 
   .addField('Price:  20000','__________________')
   .addField('Health:  4500','__________________')
   .addField('Range:  250','__________________')
   .addField('Direct Damage:  300','__________________')
   .addField('Area Damage:  150','__________________')
   .addField('Direct Damage:  55','__________________')
   .addField('Area Damage:  15','__________________')
   .addField('Direct Damage:  26','__________________')
   .addField('Move Speed:  1.2','__________________')
   .addField('Turn Speed:  1.2','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
