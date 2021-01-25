exports.code = function(){     client.on('message', message => {
            if (message.content.toLowerCase() === 'mooclassbattleship') { 
              if(message.author.bot) return; 
              message.channel.send(mooClassBattleship); 
              }
	  });
const mooClassBattleship = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/mooClassBattleship.png']) 
   .setImage('attachment://mooClassBattleship.png') 
   .setTitle(' Moo-class Battleship') 
   .setDescription(' -Very heavily armed and armored\n-Can self-repair\n-Can build some naval units\n-Goes nuclear on death (if nukes are enabled)') 
   .addField('Stats') 
   .addField('Price:  240000, uranium=12000')
   .addField('Health:  20000')
   .addField('Build Speed:  160.8s')
   .addField('Range:  420')
   .addField('Direct Damage:  125')
   .addField('Area Damage:  150')
   .addField('Direct Damage:  150')
   .addField('Direct Damage:  120')
   .addField('Area Damage:  60')
   .addField('Direct Damage:  300')
   .addField('Area Damage:  100')
   .addField('Direct Damage:  125')
   .addField('Area Damage:  300')
   .addField('Move Speed:  2.1')
   .addField('Move Speed:  0.5')
   .addField('Turn Speed:  0.3')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
