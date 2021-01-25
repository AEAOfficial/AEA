exports.code = function(){     client.on('message', message => {
            if (message.content.toLowerCase() === 'heavybattleship') { 
              if(message.author.bot) return; 
              message.channel.send(c_heavyBattleship); 
              }
	  });
const c_heavyBattleship = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/c_heavyBattleship.png']) 
   .setImage('attachment://c_heavyBattleship.png') 
   .setTitle(' Heavy Battleship') 
   .setDescription(' - Long range\n- Can attack Land, Air & Subs\n- Decent HP and DPS') 
   .addField('Stats') 
   .addField('Price:  6000')
   .addField('Health:  4000')
   .addField('Build Speed:  33.3s')
   .addField('Range:  290')
   .addField('Direct Damage:  0 #no directDamage with targetGround')
   .addField('Area Damage:  110')
   .addField('Direct Damage:  0 #no directDamage with targetGround')
   .addField('Area Damage:  110')
   .addField('Direct Damage:  65')
   .addField('Direct Damage:  95')
   .addField('Move Speed:  0.7')
   .addField('Turn Speed:  1.0')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
