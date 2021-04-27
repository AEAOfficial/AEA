exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'experimentaltank') { 
              if(message.author.bot) return; 
              message.channel.send(experimentalTank); 
	          }
	  });
const experimentalTank = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/experimentalTank.png']) 
   //.setImage('attachment://experimentalTank.png') 
   .setTitle(' Experimental Tank') 
   .setDescription(' -Very heavily armored\n-Armed with quad cannons\n- Very Slow\n-Can attack ground\n-Light air attack') 
   .addField('Stats','__________________') 
   .addField('Price:  14000, uranium=400','__________________')
   .addField('Health:  6000','__________________')
   .addField('Range:  310','__________________')
   .addField('Direct Damage:  60','__________________')
   .addField('Area Damage:  175','__________________')
   .addField('Direct Damage:  60','__________________')
   .addField('Area Damage:  175','__________________')
   .addField('Area Damage:  75','__________________')
   .addField('Move Speed:  0.3','__________________')
   .addField('Turn Speed:  0.7','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
