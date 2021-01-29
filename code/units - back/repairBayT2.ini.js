exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'repairbayt2') { 
              if(message.author.bot) return; 
              message.channel.send(c_repairBayT2); 
              }
const c_repairBayT2 = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/c_repairBayT2.png']) 
   .setImage('attachment://c_repairBayT2.png') 
   .addField('Price:  5000')
   .addField('Health:  3000')
   .setTitle(' Repair Bay T2') 
   .setDescription(' - Can repair units and buildings\n- Upgradeable') 
   .addField('Stats') 
   .addField('Build Speed:  32s')
   .addField('Area Damage:  -400')
   .addField('Move Speed:  0')
   .addField('Turn Speed:  0')
   .addField('Build Speed:  0s')
   .addField('Price:  energy=1')
   .addField('Build Speed:  0s')
   .addField('Price:  hp=300')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}
