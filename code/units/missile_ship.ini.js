exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'missileship') { 
              if(message.author.bot) return; 
              message.channel.send(c_missileShip); 
              }
const c_missileShip = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/c_missileShip.png']) 
   .setImage('attachment://c_missileShip.png') 
   .setTitle(' Missile Ship') 
   .setDescription(' - Fast\n- Can attack ground and air and subs\n- Weak amour') 
   .addField('Stats') 
   .addField('Price:  800')
   .addField('Health:  450')
   .addField('Build Speed:  6.7s')
   .addField('Range:  200')
   .addField('Direct Damage:  62')
   .addField('Direct Damage:  42')
   .addField('Move Speed:  1.2')
   .addField('Turn Speed:  1.9')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}
