exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'nautilussubmarine') { 
              if(message.author.bot) return; 
              message.channel.send(nautilusSubmarine); 
	          }
	  });
const nautilusSubmarine = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/nautilusSubmarine.png']) 
   //.setImage('attachment://nautilusSubmarine.png') 
   .setTitle(' Nautilus') 
   .setDescription(' -Heavily armed and armored \n -Can attack ships \n -Can surface and walk on land \n -Can attack land and air when surfaced\n- Can build a few attack units\n- Can launch a scout builder crab\n- Can transport 6 unit slots') 
   .addField('Stats','__________________') 
   .addField('Price:  15000','__________________')
   .addField('Health:  5000','__________________')
   .addField('Range:  240','__________________')
   .addField('Direct Damage:  123','__________________')
   .addField('Direct Damage:  50','__________________')
   .addField('Direct Damage:  35','__________________')
   .addField('Area Damage:  180','__________________')
   .addField('Move Speed:  0.45','__________________')
   .addField('Turn Speed:  0.8','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
