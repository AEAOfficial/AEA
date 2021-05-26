
exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'experimentallandfactory') { 
              if(message.author.bot) return; 
              message.channel.send(experimentalLandFactory); 
	          }
	  });
const experimentalLandFactory = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/experimentalLandFactory.png']) 
   //.setImage('attachment://experimentalLandFactory.png') 
    .setTitle(' Leviathan') 
   .setDescription(' - An Absolute Unit.\n- Can attack Ground & Air\n- VERY Heavily armed and armored\n- Can run over smaller units\n- Deploy to activate Singularity Cannon\n- Cannot attack air while deployed') 
   .addField('Stats','__________________') 
   .addField('Price:  195000, uranium=9000','__________________')
   .addField('Health:  18000','__________________')
   .addField('Area Damage:  100000','__________________')
   .addField('Range:  320','__________________')
   .addField('Direct Damage:  55','__________________')
   .addField('Direct Damage:  70','__________________')
   .addField('Area Damage:  180','__________________')
   .addField('Move Speed:  0.4','__________________')
   .addField('Turn Speed:  0.6','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
