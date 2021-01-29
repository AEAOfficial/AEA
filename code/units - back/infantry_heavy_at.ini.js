exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'heavyrpg') { 
              if(message.author.bot) return; 
              message.channel.send(heavyRPG); 
              }
const heavyRPG = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/heavyRPG.png']) 
   .setImage('attachment://heavyRPG.png') 
   .setTitle(' Heavy RPG Infantry') 
   .setDescription(' - Devastating infantry AT rocket\n- Long range\n- Can attack ground & air\n- Low health\n- Slow firing rate') 
   .addField('Stats') 
   .addField('Price:  750')
   .addField('Health:  120')
   .addField('Build Speed:  10.2s')
   .addField('Range:  280')
   .addField('Direct Damage:  1')
   .addField('Area Damage:  165')
   .addField('Move Speed:  0.7')
   .addField('Turn Speed:  7.5')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}
