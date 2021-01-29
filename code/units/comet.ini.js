exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'comettank') { 
              if(message.author.bot) return; 
              message.channel.send(cometTank); 
	          }
	  });
const cometTank = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/cometTank.png']) 
   //.setImage('attachment://cometTank.png') 
   .setTitle(' Comet') 
   .setDescription(' -Fast\n-Can attack ground only\n-Light armor\n-High spread, weak vs. single targets\n- Reduced damage to buildings.') 
   .addField('Stats','__________________') 
   .addField('Price:  1050','__________________')
   .addField('Health:  435','__________________')
   .addField('Range:  150','__________________')
   .addField('Direct Damage:  100','__________________')
   .addField('Area Damage:  50','__________________')
   .addField('Move Speed:  1','__________________')
   .addField('Turn Speed:  4','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
