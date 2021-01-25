exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'robotcrabwater') { 
              if(message.author.bot) return; 
              message.channel.send(c_robotCrabWater); 
              }
const c_robotCrabWater = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/c_robotCrabWater.png']) 
   .setImage('attachment://c_robotCrabWater.png') 
   .setTitle(' Scout bot') 
   .setDescription(' -Can attack land and air \n -Can repair and reclaim \n -Can see further through fog \n -Can move over water') 
   .addField('Stats') 
   .addField('Price:  900')
   .addField('Health:  500')
   .addField('Build Speed:  16.7s')
   .addField('Build Speed:  0')
   .addField('Range:  110')
   .addField('Direct Damage:  16')
   .addField('Move Speed:  0.4')
   .addField('Move Speed:  0.9')
   .addField('Turn Speed:  3.5')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}
