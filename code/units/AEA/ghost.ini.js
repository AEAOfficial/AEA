exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'phantom') { 
              if(message.author.bot) return; 
              message.channel.send(phantom); 
	          }
	  });
const phantom = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/phantom.png']) 
   //.setImage('attachment://phantom.png') 
   .setTitle(' Ghost') 
   .setDescription(' -Advanced armored infantry\n-Light plasma Rifles\n- Can attack ground & air\n-Advanced stealth technology\n- Renegerates health quickly') 
   .addField('Stats','__________________') 
   .addField('Price:  1500','__________________')
   .addField('Health:  150','__________________')
   .addField('Range:  230','__________________')
   .addField('Direct Damage:  45','__________________')
   .addField('Move Speed:  1.1','__________________')
   .addField('Turn Speed:  7.5','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
