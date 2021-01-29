exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'mechatortoiseshell') { 
              if(message.author.bot) return; 
              message.channel.send(mechaTortoiseShell); 
	          }
	  });
const mechaTortoiseShell = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/mechaTortoiseShell.png']) 
   //.setImage('attachment://mechaTortoiseShell.png') 
   .setTitle(' Experiemental turtle') 
   .setDescription(' -Very heavily armed and armored but slow \n -long range land attack \n -Can move over water \n -Can activate shell mode and repair itself  \n -Goes nuclear on death (if nukes are enabled)') 
   .addField('Stats','__________________') 
   .addField('Price:  2','__________________')
   .addField('Health:  15000','__________________')
   .addField('Shield:  5000','__________________')
   .addField('Range:  360','__________________')
   .addField('Area Damage:  310','__________________')
   .addField('Area Damage:  350','__________________')
   .addField('Move Speed:  0.5','__________________')
   .addField('Turn Speed:  0','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
