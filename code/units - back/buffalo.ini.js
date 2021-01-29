exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'buffalotank') { 
              if(message.author.bot) return; 
              message.channel.send(buffaloTank); 
              }
const buffaloTank = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/buffaloTank.png']) 
   .setImage('attachment://buffaloTank.png') 
   .setTitle(' Buffalo') 
   .setDescription(' -Minigun tank\n-Can attack land & air\n-Speeds up as it fires') 
   .addField('Stats') 
   .addField('Price:  2000')
   .addField('Health:  700')
   .addField('Build Speed:  12.8s')
   .addField('Range:  200')
   .addField('Direct Damage:  14')
   .addField('Move Speed:  .9')
   .addField('Turn Speed:  2.1')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}