exports.code = function(){     client.on('message', message => {
            if (message.content.toLowerCase() === 'mobileturretdeployed') { 
              if(message.author.bot) return; 
              message.channel.send(mobileTurretDeployed); 
              }
	  });
const mobileTurretDeployed = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/mobileTurretDeployed.png']) 
   .setImage('attachment://mobileTurretDeployed.png') 
   .addField('Shield:  700')
   .addField('Price:   0')
   .addField('Build Speed:  1.5s')
   .addField('Price:   0')
   .addField('Build Speed:  2s')
   .addField('Range:  280')
   .addField('Move Speed:  1.0')
   .addField('Direct Damage:  44')
   .addField('Area Damage:  51')
   .addField('Move Speed:  0')
   .addField('Turn Speed:  0')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
