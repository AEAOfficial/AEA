exports.code = function(){     client.on('message', message => {
            if (message.content.toLowerCase() === 'heavydestroyer') { 
              if(message.author.bot) return; 
              message.channel.send(heavyDestroyer); 
              }
	  });
const heavyDestroyer = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/heavyDestroyer.png']) 
   .setImage('attachment://heavyDestroyer.png') 
   .setTitle(' Heavy Destroyer') 
   .setDescription(' - Heavily armed and armored\n- Long range\n- Powerful against land\n- Has light air attack\n- Can hit subs\n- Easily maneuverable\n- Has self-regen abilities') 
   .addField('Stats') 
   .addField('Build Speed:  83.3s')
   .addField('Price:  28000, uranium:800')
   .addField('Health:  8000')
   .addField('Shield:  0')
   .addField('Range:  360')
   .addField('Direct Damage:  110')
   .addField('Direct Damage:  0 #no directDamage with targetGround')
   .addField('Area Damage:  175')
   .addField('Direct Damage:  1')
   .addField('Area Damage:  39')
   .addField('Move Speed:  0.6')
   .addField('Turn Speed:  1.2')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
