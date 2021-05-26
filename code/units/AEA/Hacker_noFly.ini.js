exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'hackernofly') { 
              if(message.author.bot) return; 
              message.channel.send(hackerNoFly); 
	          }
	  });
const hackerNoFly = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/hackerNoFly.png']) 
   //.setImage('attachment://hackerNoFly.png') 
   .addField('Price:  3800','__________________')
   .addField('Health:  80','__________________')
   .setTitle(' Hacker') 
   .setDescription('- (Flying fortress Fix)\n- Can jump into enemy buildings/vehicles and turn them to your team\n- Slow, weak, cant attack\n- Must get melee distance to target\n- Can only have 8 built at a time') 
   .addField('Stats','__________________') 
   .addField('Range:  9','__________________')
   .addField('Direct Damage:  0','__________________')
   .addField('Move Speed:  0.8','__________________')
   .addField('Turn Speed:  8.5','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
