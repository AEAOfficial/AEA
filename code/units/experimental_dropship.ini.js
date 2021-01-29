exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'experimentaldropship') { 
              if(message.author.bot) return; 
              message.channel.send(experimentalDropship); 
	          }
	  });
const experimentalDropship = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/experimentalDropship.png']) 
   //.setImage('attachment://experimentalDropship.png') 
   .setTitle(' Flying Fortress') 
   .setDescription(' - Heavily Armoured\n- Can build Land Factory units\n- Anti Air\n- Can attack ground units when landed\n- Built in Fabricator\n- 12 Transport Slots\n- Can only have 8 at a time.') 
   .addField('Stats','__________________') 
   .addField('Price:  30000, uranium=1000','__________________')
   .addField('Health:  8000','__________________')
   .addField('Range:  210','__________________')
   .addField('Direct Damage:  35','__________________')
   .addField('Move Speed:  1.1','__________________')
   .addField('Turn Speed:  1.3','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
