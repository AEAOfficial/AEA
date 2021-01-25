exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'heavymobileturrettransition2') { 
              if(message.author.bot) return; 
              message.channel.send(heavyMobileTurretTransition2); 
              }
const heavyMobileTurretTransition2 = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/heavyMobileTurretTransition2.png']) 
   .setImage('attachment://heavyMobileTurretTransition2.png') 
   .setTitle(' Heavy Mobile Turret') 
   .setDescription(' -Heavily armored\n-Ground attack when undeployed\n-Deploys for extra range, anti-air and shield regen\n-Cannot attack while undeploying\n-Can release a repairing nano-burst when deployed') 
   .addField('Stats') 
   .addField('Price:  7500')
   .addField('Health:  1400')
   .addField('Shield:  1600')
   .addField('Price:   0')
   .addField('Build Speed:  2.4s')
   .addField('Price:   0')
   .addField('Build Speed:  0.006')
   .addField('Build Speed:  0s')
   .addField('Price:  energy=1')
   .addField('Build Speed:  0s')
   .addField('Price:  hp=300')
   .addField('Build Speed:  9s')
   .addField('Price:  0')
   .addField('Range:  290')
   .addField('Direct Damage:  50')
   .addField('Area Damage:  50')
   .addField('Direct Damage:  25')
   .addField('Area Damage:  25')
   .addField('Area Damage:  -200')
   .addField('Move Speed:  1.8')
   .addField('Move Speed:  0')
   .addField('Turn Speed:  0')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}
