exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'infantryengineer') { 
              if(message.author.bot) return; 
              message.channel.send(infantryEngineer); 
	          }
	  });
const infantryEngineer = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/infantryEngineer.png']) 
   //.setImage('attachment://infantryEngineer.png') 
   .setTitle(' Engineer') 
   .setDescription(' - Cannot attack\n - Heals nearby units\n- Can build barracks and walls\n- Can Plant, Detonate, and Disarm mines\n- Can also see enemy mines\n- Can disarm any mine witin Small Circle\n- Can detonate own mines in Large Circle') 
   .addField('Stats','__________________') 
   .addField('Price:  500','__________________')
   .addField('Health:  80','__________________')
   .addField('Range:  800','__________________')
   .addField('Direct Damage:  7','__________________')
   .addField('Move Speed:  1.2','__________________')
   .addField('Turn Speed:  7.5','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'infantryengineer') { 
              if(message.author.bot) return; 
              message.channel.send(infantryEngineer); 
	          }
	  });
const infantryEngineer = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/infantryEngineer.png']) 
   //.setImage('attachment://infantryEngineer.png') 
   .setTitle(' Engineer') 
   .setDescription(' - Cannot attack\n - Heals nearby units\n- Can build barracks and walls\n- Can Plant, Detonate, and Disarm mines\n- Can also see enemy mines\n- Can disarm any mine witin Small Circle\n- Can detonate own mines in Large Circle') 
   .addField('Stats','__________________') 
   .addField('Price:  500','__________________')
   .addField('Health:  80','__________________')
   .addField('Range:  800','__________________')
   .addField('Direct Damage:  7','__________________')
   .addField('Move Speed:  1.2','__________________')
   .addField('Turn Speed:  7.5','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
