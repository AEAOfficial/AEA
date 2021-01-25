exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'radar') { 
              if(message.author.bot) return; 
              message.channel.send(radar); 
              }
const radar = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/radar.png']) 
   .setImage('attachment://radar.png') 
   .addField('Price:  11000')
   .addField('Health:  750')
   .setTitle(' Radar') 
   .setDescription(' -Can see very far through fog') 
   .addField('Stats') 
   .addField('Build Speed:  0.0005')
   .addField('Range:  0')
   .addField('Move Speed:  0')
   .addField('Turn Speed:  0')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}
