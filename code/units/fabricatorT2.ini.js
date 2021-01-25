exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'fabricatort2') { 
              if(message.author.bot) return; 
              message.channel.send(c_fabricatorT2); 
              }
const c_fabricatorT2 = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/c_fabricatorT2.png']) 
   .setImage('attachment://c_fabricatorT2.png') 
   .addField('Price:  4200')
   .addField('Health:  1000')
   .setTitle(' Fabricator T2') 
   .setDescription(' - Generates credits almost as fast as T1 extractors\n- Upgradeable up to T3\n- Upgrades increase credit generation\n- Can only have 40 built at a time.') 
   .addField('Stats') 
   .addField('Build Speed:  0.0004')
   .addField('Price:   5000')
   .addField('Build Speed:  60s')
   .addField('Area Damage:  450')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}
