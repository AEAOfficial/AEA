exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'creditscratesaea') { 
              if(message.author.bot) return; 
              message.channel.send(creditsCratesAEA); 
              }
const creditsCratesAEA = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/creditsCratesAEA.png']) 
   .setImage('attachment://creditsCratesAEA.png') 
   .setTitle(' Credits crate') 
   .setDescription(' - Used to trade credits with allies\n- Worth 5000 credits\n- Once placed, ask an ally to reclaim it\n- Reclaiming this box will give the taker $5000.') 
   .addField('Stats') 
   .addField('Price:  5000')
   .addField('Health:  1800')
   .addField('Build Speed:  0.001')
   .addField('Range:  0')
   .addField('Move Speed:  0')
   .addField('Turn Speed:  0')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}
