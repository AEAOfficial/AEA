exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'hacker') { 
              if(message.author.bot) return; 
              message.channel.send(hacker); 
              }
const hacker = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/hacker.png']) 
   .setImage('attachment://hacker.png') 
   .addField('Price:  3800')
   .addField('Health:  80')
   .setTitle(' Hacker') 
   .setDescription('- Can jump into enemy buildings/vehicles and turn them to your team\n- Slow, weak, cant attack\n- Must get melee distance to target\n- Can only have 8 built at a time') 
   .addField('Stats') 
   .addField('Build Speed:  24.7s')
   .addField('Range:  9')
   .addField('Direct Damage:  0')
   .addField('Move Speed:  0.8')
   .addField('Turn Speed:  8.5')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}
