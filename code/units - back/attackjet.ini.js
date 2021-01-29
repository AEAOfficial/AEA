exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'attackjet') { 
              if(message.author.bot) return; 
              message.channel.send(attackJet); 
              }
const attackJet = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/attackJet.png']) 
   .setImage('attachment://attackJet.png') 
   .addField('Price:  2750')
   .addField('Health:  480')
   .addField('Build Speed:  0.0007')
   .setTitle(' Attack Jet') 
   .setDescription(' -Medium armor\n-Ground attack only\n-Armed with 2 missile launchers and a machine gun') 
   .addField('Stats') 
   .addField('Range:  220')
   .addField('Direct Damage:  22')
   .addField('Area Damage:  15')
   .addField('Direct Damage:  16')
   .addField('Area Damage:  5')
   .addField('Move Speed:  1.8')
   .addField('Turn Speed:  3.6')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}
