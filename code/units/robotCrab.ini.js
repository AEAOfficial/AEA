exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'robotcrab') { 
              if(message.author.bot) return; 
              message.channel.send(robotCrab); 
	          }
	  });
const robotCrab = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/robotCrab.png']) 
   //.setImage('attachment://robotCrab.png') 
   .setTitle(' Scout bot') 
   .setDescription(' -Can attack land and air \n -Can repair and reclaim \n- Can plant landmines\n -Can see further through fog \n -Can move over water') 
   .addField('Stats','__________________') 
   .addField('Price:  900','__________________')
   .addField('Health:  500','__________________')
   .addField('Range:  110','__________________')
   .addField('Direct Damage:  16','__________________')
   .addField('Move Speed:  3.7','__________________')
   .addField('Turn Speed:  3.5','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'robotcrab') { 
              if(message.author.bot) return; 
              message.channel.send(robotCrab); 
	          }
	  });
const robotCrab = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/robotCrab.png']) 
   //.setImage('attachment://robotCrab.png') 
   .setTitle(' Scout bot') 
   .setDescription(' -Can attack land and air \n -Can repair and reclaim \n- Can plant landmines\n -Can see further through fog \n -Can move over water') 
   .addField('Stats','__________________') 
   .addField('Price:  900','__________________')
   .addField('Health:  500','__________________')
   .addField('Range:  110','__________________')
   .addField('Direct Damage:  16','__________________')
   .addField('Move Speed:  3.7','__________________')
   .addField('Turn Speed:  3.5','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
