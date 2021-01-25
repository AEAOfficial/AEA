exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'converter') { 
              if(message.author.bot) return; 
              message.channel.send(converter); 
              }
const converter = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/converter.png']) 
   .setImage('attachment://converter.png') 
   .addField('Price:  20000')
   .addField('Health:  2500')
   .setTitle(' Resource Converter') 
   .setDescription(' - Can convert Uranium to Credits\n- Can convert Credits to Uranium\n- Goes Nuclear on death') 
   .addField('Stats') 
   .addField('Build Speed:  0.00025')
   .addField('Build Speed:  20s')
   .addField('Price:  10000')
   .addField('Build Speed:  20s')
   .addField('Price: uranium=2500')
   .addField('Range:  0')
   .addField('Move Speed:  0')
   .addField('Turn Speed:  0')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}
