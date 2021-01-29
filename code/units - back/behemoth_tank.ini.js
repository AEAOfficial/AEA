exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'behemothtank') { 
              if(message.author.bot) return; 
              message.channel.send(behemothTank); 
              }
const behemothTank = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/behemothTank.png']) 
   .setImage('attachment://behemothTank.png') 
   .setTitle('Behemoth Tank') 
   .setDescription(' - Heavily armored with a shield\n- Can attack ground only\n- Medium range cannon\n- Good for leading charges') 
   .addField('Stats') 
   .addField('Health: 4000')
   .addField('Shield:  1000')
   .addField('Build Speed: 45.5s')
   .addField('Price: 5800')
   .addField('Range: 230')
   .addField('Direct Damage:  60')
   .addField('Area Damage:  60')
   .addField('Move Speed: 0.5')
   .addField('Turn Speed: 1.1')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}
