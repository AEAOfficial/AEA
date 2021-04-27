exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'clasertank') { 
              if(message.author.bot) return; 
              message.channel.send(claserTank); 
	          }
	  });
const claserTank = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/claserTank.png']) 
   //.setImage('attachment://claserTank.png') 
   .setTitle(' Laser Tank') 
   .setDescription(' -Can attack ground and air\n-Weak vs. multiple units\n-Powerful single shot, slow recharge') 
   .addField('Stats','__________________') 
   .addField('Price:  1200','__________________')
   .addField('Health:  500','__________________')
   .addField('Range:  190','__________________')
   .addField('Direct Damage:  450','__________________')
   .addField('Move Speed:  0.9','__________________')
   .addField('Turn Speed:  1.5','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
