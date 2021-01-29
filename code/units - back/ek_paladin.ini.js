exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'paladin') { 
              if(message.author.bot) return; 
              message.channel.send(Paladin); 
              }
const Paladin = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/Paladin.png']) 
   .setImage('attachment://Paladin.png') 
   .setTitle(' Paladin Mech') 
   .setDescription(' - Can attack ground and light air\n- Shields absorb splash damage\n- Weak vs Lightning\n- All around decent unit for price') 
   .addField('Stats') 
   .addField('Price:  4000')
   .addField('Health:  500')
   .addField('Build Speed:  16.7s')
   .addField('Shield:  800')
   .addField('Range:  230')
   .addField('Direct Damage:  1')
   .addField('Area Damage:  80')
   .addField('Direct Damage:  62')
   .addField('Move Speed:  0.8')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}
