exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'helicopter12') { 
              if(message.author.bot) return; 
              message.channel.send(helicopter12); 
	          }
	  });
const helicopter12 = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/helicopter12.png']) 
   //.setImage('attachment://helicopter12.png') 
   .setTitle(' Helicopter') 
   .setDescription(' - Very light air/ground attack\n- Can transport 4 infantry units\n- Can land to transport infantry') 
   .addField('Stats','__________________') 
   .addField('Price:  450','__________________')
   .addField('Health:  200','__________________')
   .addField('Range:  130','__________________')
   .addField('Direct Damage:  17','__________________')
   .addField('Move Speed:  1.8','__________________')
   .addField('Turn Speed:  6','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
