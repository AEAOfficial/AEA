exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'chronoshift') { 
              if(message.author.bot) return; 
              message.channel.send(chronoshift); 
              }
const chronoshift = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/chronoshift.png']) 
   .setImage('attachment://chronoshift.png') 
   .addField('Price:  45000')
   .addField('Health:  7000')
   .setTitle(' Chronoshift') 
   .setDescription(' - Can teleport units anywhere within its radius\n- Takes 8 minutes to warm up\n- Can teleport up to 36 unit slots at once\n- Can only have 1 built at a time') 
   .addField('Stats') 
   .addField('Build Speed:  0.0001')
   .addField('Build Speed:  1')
   .addField('Price:  energy=480')
   .addField('Build Speed:  0s')
   .addField('Build Speed:  0s')
   .addField('Range:  3800')
   .addField('Direct Damage:  1')
   .addField('Move Speed:  0')
   .addField('Turn Speed:  0')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}
