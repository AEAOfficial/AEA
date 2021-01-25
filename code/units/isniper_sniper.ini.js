exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'isniperlong') { 
              if(message.author.bot) return; 
              message.channel.send(IsniperLong); 
              }
const IsniperLong = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/IsniperLong.png']) 
   .setImage('attachment://IsniperLong.png') 
   .setTitle(' Sniper') 
   .setDescription(' -Elite infantry \n -Can switch between recon and sniper mode \n -Can attack land and air \n -Long range') 
   .addField('Stats') 
   .addField('Price:  1000')
   .addField('Health:  60')
   .addField('Build Speed:  0.0007')
   .addField('Price:   0')
   .addField('Build Speed:  0.02')
   .addField('Range:  360')
   .addField('Direct Damage:  105')
   .addField('Move Speed:  0.23')
   .addField('Turn Speed:  1.0')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}
