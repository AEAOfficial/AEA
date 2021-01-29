exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'buildership') { 
              if(message.author.bot) return; 
              message.channel.send(BuilderShip); 
              }
const BuilderShip = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/BuilderShip.png']) 
   .setImage('attachment://BuilderShip.png') 
   .addField('Price:  500')
   .addField('Health:  300')
   .addField('Build Speed:  0.0025')
   .addField('Price:  4500')
   .addField('Build Speed:  33.3s')
   .addField('Range:  150')
   .addField('Direct Damage:  10')
   .addField('Move Speed:  0.7')
   .addField('Turn Speed:  3.1')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}
