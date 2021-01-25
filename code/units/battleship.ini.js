exports.code = function(){     client.on('message', message => {
            if (message.content.toLowerCase() === 'battleship') { 
              if(message.author.bot) return; 
              message.channel.send(c_battleShip); 
              }
	  });
const c_battleShip = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/c_battleShip.png']) 
   .setImage('attachment://c_battleShip.png') 
   .setTitle(' Battleship') 
   .setDescription(' -Medium range land attack\n- Cannot attack air or subs') 
   .addField('Stats') 
   .addField('Price:  1500')
   .addField('Health:  1200')
   .addField('Build Speed:  24.8s')
   .addField('Range:  240')
   .addField('Direct Damage:  0 #no directDamage with targetGround')
   .addField('Direct Damage:  65')
   .addField('Direct Damage:  0 #no directDamage with targetGround')
   .addField('Area Damage:  65')
   .addField('Move Speed:  0.8')
   .addField('Turn Speed:  1.8')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
