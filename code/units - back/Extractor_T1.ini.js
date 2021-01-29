exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'extractort1') { 
              if(message.author.bot) return; 
              message.channel.send(ExtractorT1); 
              }
const ExtractorT1 = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/ExtractorT1.png']) 
   .setImage('attachment://ExtractorT1.png') 
   .setTitle(' Extractor') 
   .setDescription(' - Generates credits\n- More cost efficient than fabricators\n- Upgradeable\n- Higher tiers needed to generate Uranium\n- Uranium is needed to build many Experiemtnal units') 
   .addField('Stats') 
   .addField('Price:  700')
   .addField('Health:  800')
   .addField('Build Speed:  28s')
   .addField('Price:  1200')
   .addField('Build Speed:  27.8s')
   .addField('Range:  210')
   .addField('Direct Damage:  80')
   .addField('Move Speed:  0')
   .addField('Turn Speed:  0')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}
