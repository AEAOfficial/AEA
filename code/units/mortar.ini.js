exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'mortar') { 
              if(message.author.bot) return; 
              message.channel.send(mortar); 
	          }
	  });
const mortar = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/mortar.png']) 
   //.setImage('attachment://mortar.png') 
   .setTitle(' Mortar') 
   .setDescription(' -Can attack ground only \n -Long range\n- Weak vs units') 
   .addField('Stats','__________________') 
   .addField('Price:  120','__________________')
   .addField('Health:  60','__________________')
   .addField('Range:  290','__________________')
   .addField('Area Damage:  74','__________________')
   .addField('Move Speed:  0.75','__________________')
   .addField('Turn Speed:  8.5','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
