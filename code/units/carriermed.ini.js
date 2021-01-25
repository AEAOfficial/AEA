exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'navalcarrier') { 
              if(message.author.bot) return; 
              message.channel.send(navalCarrier); 
              }
const navalCarrier = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/navalCarrier.png']) 
   .setImage('attachment://navalCarrier.png') 
   .setTitle(' Naval Carrier') 
   .setDescription(' - Experimental Naval Carrier\n- Can make Air and Naval units\n- Built in fabricator\n- Goes nuclear on death\n- Can only have 5 at a time.') 
   .addField('Stats') 
   .addField('Price:  65000, uranium=5000')
   .addField('Health:  7500')
   .addField('Build Speed:  0.00015')
   .addField('Range:  350')
   .addField('Direct Damage:  25')
   .addField('Area Damage:  25')
   .addField('Direct Damage:  75')
   .addField('Area Damage:  75')
   .addField('Direct Damage:  95')
   .addField('Direct Damage:  14')
   .addField('Move Speed:  0.45')
   .addField('Turn Speed:  0.7')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}
