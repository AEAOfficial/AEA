exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'destroyer') { 
              if(message.author.bot) return; 
              message.channel.send(Destroyer); 
              }
const Destroyer = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/Destroyer.png']) 
   .setImage('attachment://Destroyer.png') 
   .addField('Price:  5000')
   .addField('Health:  3500')
   .setTitle(' Destroyer') 
   .setDescription(' - Powerful land attack\n- Anti-sub torpedoes\n- Cannot attack air') 
   .addField('Stats') 
   .addField('Build Speed:  24.8s')
   .addField('Range:  280')
   .addField('Direct Damage:  0 #no directDamage with targetGround')
   .addField('Area Damage:  120')
   .addField('Direct Damage:  85')
   .addField('Direct Damage:  0')
   .addField('Area Damage:  75')
   .addField('Move Speed:  0.5')
   .addField('Turn Speed:  1.0')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}
