exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'rocketinfantry') { 
              if(message.author.bot) return; 
              message.channel.send(rocketInfantry); 
              }
const rocketInfantry = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/rocketInfantry.png']) 
   .setImage('attachment://rocketInfantry.png') 
   .setTitle(' RPG Infantry') 
   .setDescription(' -Shoulder fired guided missile\n-Takes a few moments to reload\n- Can attack air & ground') 
   .addField('Stats') 
   .addField('Price:  190')
   .addField('Health:  45')
   .addField('Build Speed:  2.8s')
   .addField('Range:  200')
   .addField('Direct Damage:  1')
   .addField('Area Damage:  68')
   .addField('Move Speed:  0.8')
   .addField('Turn Speed:  7.5')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}
