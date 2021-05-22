exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'paladinmech') { 
              if(message.author.bot) return; 
              message.channel.send(paladinMech); 
	          }
	  });
const paladinMech = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/paladinMech.png']) 
   //.setImage('attachment://paladinMech.png') 
   .setTitle(' Paladin Mech') 
   .setDescription(' -Can attack ground and air\n- Armed with light grenade launchers and a light AA flak turret\n- Shield absorbs AOE damage\n- Weak vs tesla\n- Strong VS low HP units\n- Overall decent unit for price') 
   .addField('Stats','__________________') 
   .addField('Price:  4000','__________________')
   .addField('Health:  500','__________________')
   .addField('Shield:  800','__________________')
   .addField('Range:  230','__________________')
   .addField('Direct Damage:  30','__________________')
   .addField('Area Damage:  80','__________________')
   .addField('Direct Damage:  0','__________________')
   .addField('Area Damage:  60','__________________')
   .addField('Direct Damage:  60','__________________')
   .addField('Move Speed:  2.1','__________________')
   .addField('Turn Speed:  4','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
