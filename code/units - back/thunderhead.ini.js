exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'ekthunderhead') { 
              if(message.author.bot) return; 
              message.channel.send(EkThunderhead); 
              }
const EkThunderhead = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/EkThunderhead.png']) 
   .setImage('attachment://EkThunderhead.png') 
   .setTitle(' Thunderhead') 
   .setDescription(' - Long range artillery\n- Single shot slow reload\n- Weak armour\n- Light air defense') 
   .addField('Stats') 
   .addField('Price:  6500')
   .addField('Health:  1500')
   .addField('Build Speed:  0.0003')
   .addField('Range:  420')
   .addField('Direct Damage:  1')
   .addField('Area Damage:  250')
   .addField('Direct Damage:  50')
   .addField('Move Speed:  0.8')
   .addField('Turn Speed:  1.0')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}
