exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'experimentalmech') { 
              if(message.author.bot) return; 
              message.channel.send(experimentalMech); 
              }
const experimentalMech = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/experimentalMech.png']) 
   .setImage('attachment://experimentalMech.png') 
   .setTitle(' Experimental Mech') 
   .setDescription(' -Very heavily armed and armored\n-Can attack ground and light air\n-Sub attack when over water\n-Very slow\n-Can self-repair\n-Can move over water') 
   .addField('Stats') 
   .addField('Price:  125000, uranium=9000')
   .addField('Health:  15000')
   .addField('Build Speed:  112.8s')
   .addField('Range:  310')
   .addField('Direct Damage:  700')
   .addField('Area Damage:  300')
   .addField('Direct Damage:  80')
   .addField('Area Damage:  30')
   .addField('Direct Damage:  45')
   .addField('Direct Damage:  95')
   .addField('Move Speed:  1.1')
   .addField('Move Speed:  0.3')
   .addField('Turn Speed:  0.8')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}
