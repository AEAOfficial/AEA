exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'radartruck') { 
              if(message.author.bot) return; 
              message.channel.send(RadarTruck); 
              }
const RadarTruck = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/RadarTruck.png']) 
   .setImage('attachment://RadarTruck.png') 
   .addField('Price:  2500')
   .addField('Health:  300')
   .setTitle(' Radar Truck') 
   .setDescription('- Cannot attack\n- Can see far into the fog') 
   .addField('Stats') 
   .addField('Build Speed:  0.0050')
   .addField('Range:  290')
   .addField('Move Speed:  0.9')
   .addField('Turn Speed:  1.7')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}
