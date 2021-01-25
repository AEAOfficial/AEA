exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'gunboat') { 
              if(message.author.bot) return; 
              message.channel.send(c_gunboat); 
              }
const c_gunboat = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/c_gunboat.png']) 
   .setImage('attachment://c_gunboat.png') 
   .setTitle(' Gunboat') 
   .setDescription(' -Fast\n-Can attack ground') 
   .addField('Stats') 
   .addField('Price:  300')
   .addField('Health:  170')
   .addField('Build Speed:  0.005')
   .addField('Range:  120')
   .addField('Direct Damage:  12')
   .addField('Move Speed:  1.5')
   .addField('Turn Speed:  2.8')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}
