exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'antiairmechbuffed') { 
              if(message.author.bot) return; 
              message.channel.send(antiAirMechBuffed); 
              }
const antiAirMechBuffed = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/antiAirMechBuffed.png']) 
   .setImage('attachment://antiAirMechBuffed.png') 
   .setTitle(' Anti-Air Mech') 
   .setDescription(' -Attacks air only\n-Area effect') 
   .addField('Stats') 
   .addField('Price:  950')
   .addField('Health:  500')
   .addField('Build Speed:  12.3s')
   .addField('Range:  190')
   .addField('Direct Damage:  60')
   .addField('Area Damage:  45')
   .addField('Direct Damage:  0')
   .addField('Area Damage:  0')
   .addField('Move Speed:  0.8')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}
