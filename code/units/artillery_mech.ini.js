exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'artillerymech') { 
              if(message.author.bot) return; 
              message.channel.send(artilleryMech); 
	          }
	  });
const artilleryMech = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/artilleryMech.png']) 
   //.setImage('attachment://artilleryMech.png') 
   .setTitle(' Artillery Mech') 
   .setDescription(' -Ground attack\n-Long range\n-Can move while firing\n-Stronger vs. buildings than vs. units') 
   .addField('Stats','__________________') 
   .addField('Price:  1400','__________________')
   .addField('Health:  650','__________________')
   .addField('Range:  290','__________________')
   .addField('Area Damage:  100','__________________')
   .addField('Area Damage:  85','__________________')
   .addField('Area Damage:  0','__________________')
   .addField('Move Speed:  0.6','__________________')
   .addField('Turn Speed:  5.0','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
