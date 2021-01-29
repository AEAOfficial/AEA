exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'mae-1') { 
              if(message.author.bot) return; 
              message.channel.send(MAE-1); 
              }
const MAE1 = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/MAE-1.png']) 
   .setImage('attachment://MAE-1.png') 
   .addField('Price:  3525')
   .addField('Health:  150')
   .addField('Shield:  100')
   .setTitle(' MAE-1') 
   .setDescription(' -Like a builder but better. \n- Its very vulnerable, but efficient. \n- Can build fast and can repair units/buildings \n- Cannot build anti-air turrets\n- Cannot build more than 6 at a time.') 
   .addField('Stats') 
   .addField('Build Speed:  0.002')
   .addField('Range:  170')
   .addField('Direct Damage:  30')
   .addField('Move Speed:  2.25')
   .addField('Turn Speed:  3.5')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}
