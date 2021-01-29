exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'lightgunship') { 
              if(message.author.bot) return; 
              message.channel.send(c_lightGunship); 
              }
const c_lightGunship = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/c_lightGunship.png']) 
   .setImage('attachment://c_lightGunship.png') 
   .setTitle(' Light gun ship') 
   .setDescription(' -Can attack ground only\n- Very low health\n- Light guns\n- Slow') 
   .addField('Stats') 
   .addField('Price:  250')
   .addField('Health:  50')
   .addField('Build Speed:  3.3s')
   .addField('Range:  120')
   .addField('Direct Damage:  10')
   .addField('Move Speed:  1.1')
   .addField('Turn Speed:  99')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}
