exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'cyborg') { 
              if(message.author.bot) return; 
              message.channel.send(cyborg); 
              }
const cyborg = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/cyborg.png']) 
   .setImage('attachment://cyborg.png') 
   .setTitle(' Xan Commander') 
   .setDescription('- Advanced Next Gen super unit\n- Fast, agile, lightly armoured\n- Extremely powerful plasma minigun melts its enemies quickly\n- Long range ground & air attack\n- Cannot be repaired\n- Cannot fit in transports\n- Has self regen abilities\n- Can only have 1 built at a time') 
   .addField('Stats') 
   .addField('Price:  21000, uranium=1000')
   .addField('Health:  1200')
   .addField('Build Speed:  165.9s')
   .addField('Range:  280')
   .addField('Direct Damage:  83')
   .addField('Area Damage:  83')
   .addField('Move Speed:  1.4')
   .addField('Turn Speed:  8.5')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}
