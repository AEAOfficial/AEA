exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'turret_t1_lightningaea') { 
              if(message.author.bot) return; 
              message.channel.send(turret_t1_lightningAEA); 
	          }
	  });
const turret_t1_lightningAEA = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/turret_t1_lightningAEA.png']) 
   //.setImage('attachment://turret_t1_lightningAEA.png') 
   .addField('Price:  2000','__________________')
   .addField('Health:  1500','__________________')
   .addField('Range:  230','__________________')
   .addField('Direct Damage:  310','__________________')
   .addField('Direct Damage:  150','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
