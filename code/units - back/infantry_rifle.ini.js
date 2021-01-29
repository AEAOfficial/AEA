exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'rifleinfantry') { 
              if(message.author.bot) return; 
              message.channel.send(rifleInfantry); 
              }
const rifleInfantry = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/rifleInfantry.png']) 
   .setImage('attachment://rifleInfantry.png') 
   .setTitle(' Rifleman') 
   .setDescription(' -Lightly armored infantry\n-Battle-rifle\n- Can only attack ground') 
   .addField('Stats') 
   .addField('Price:  50')
   .addField('Health:  30')
   .addField('Build Speed:  1.5s')
   .addField('Range:  150')
   .addField('Direct Damage:  6')
   .addField('Move Speed:  1.0')
   .addField('Turn Speed:  7.5')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}
