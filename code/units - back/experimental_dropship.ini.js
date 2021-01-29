exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'experimentaldropship') { 
              if(message.author.bot) return; 
              message.channel.send(c_experimentalDropship); 
              }
const c_experimentalDropship = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/c_experimentalDropship.png']) 
   .setImage('attachment://c_experimentalDropship.png') 
   .setTitle(' Flying Fortress') 
   .setDescription(' - Heavily Armoured\n- Can build Land Factory units\n- Anti Air\n- Can attack ground units when landed\n- Built in Fabricator\n- 12 Transport Slots\n- Can only have 8 at a time.') 
   .addField('Stats') 
   .addField('Price:  30000, uranium=1000')
   .addField('Health:  8000')
   .addField('Build Speed:  83.3s')
   .addField('Range:  210')
   .addField('Direct Damage:  35')
   .addField('Move Speed:  1.1')
   .addField('Turn Speed:  1.3')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}
