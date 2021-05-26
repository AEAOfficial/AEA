exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'heavymobileturretdeployed') { 
              if(message.author.bot) return; 
              message.channel.send(heavyMobileTurretDeployed); 
	          }
	  });
const heavyMobileTurretDeployed = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/heavyMobileTurretDeployed.png']) 
   //.setImage('attachment://heavyMobileTurretDeployed.png') 
   .setTitle(' Heavy Mobile Turret') 
   .setDescription(' -Heavily armored\n-Ground attack when undeployed\n-Deploys for extra range, anti-air and shield regen\n-Cannot attack while undeploying\n-Can release a repairing nano-burst when deployed') 
   .addField('Stats','__________________') 
   .addField('Price:  7500','__________________')
   .addField('Health:  2000','__________________')
   .addField('Shield:  1600','__________________')
   .addField('Range:  300','__________________')
   .addField('Direct Damage:  58','__________________')
   .addField('Area Damage:  50','__________________')
   .addField('Direct Damage:  35','__________________')
   .addField('Area Damage:  25','__________________')
   .addField('Area Damage:  -200','__________________')
   .addField('Move Speed:  1.8','__________________')
   .addField('Turn Speed:  0','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
