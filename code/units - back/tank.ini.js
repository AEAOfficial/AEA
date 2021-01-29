exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'tank') { 
              if(message.author.bot) return; 
              message.channel.send(c_tank); 
              }
const c_tank = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/c_tank.png']) 
   .setImage('attachment://c_tank.png') 
   .addField('Price:  350')
   .addField('Health:  230')
   .addField('Build Speed:  4.8s')
   .addField('Range:  130')
   .addField('Direct Damage:  30')
   .addField('Move Speed:  1.1')
   .addField('Turn Speed:  4.1')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}
