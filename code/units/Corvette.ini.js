exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'corvette') { 
              if(message.author.bot) return; 
              message.channel.send(Corvette); 
	          }
	  });
const Corvette = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/Corvette.png']) 
   //.setImage('attachment://Corvette.png') 
   .addField('Price:  1250','__________________')
   .addField('Health:  1500','__________________')
   .setTitle(' Corvette') 
   .setDescription(' - Equipped with a Long Range Cannon\n- Strong Anti-sub torpedos\n- Cannot hit air') 
   .addField('Stats','__________________') 
   .addField('Range:  275','__________________')
   .addField('Direct Damage:  0 #no directDamage with targetGround','__________________')
   .addField('Area Damage:  100','__________________')
   .addField('Direct Damage:  70','__________________')
   .addField('Move Speed:  0.8','__________________')
   .addField('Turn Speed:  1.0','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'corvette') { 
              if(message.author.bot) return; 
              message.channel.send(Corvette); 
	          }
	  });
const Corvette = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/Corvette.png']) 
   //.setImage('attachment://Corvette.png') 
   .addField('Price:  1250','__________________')
   .addField('Health:  1500','__________________')
   .setTitle(' Corvette') 
   .setDescription(' - Equipped with a Long Range Cannon\n- Strong Anti-sub torpedos\n- Cannot hit air') 
   .addField('Stats','__________________') 
   .addField('Range:  275','__________________')
   .addField('Direct Damage:  0 #no directDamage with targetGround','__________________')
   .addField('Area Damage:  100','__________________')
   .addField('Direct Damage:  70','__________________')
   .addField('Move Speed:  0.8','__________________')
   .addField('Turn Speed:  1.0','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
