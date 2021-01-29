exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'heavyhovertank') { 
              if(message.author.bot) return; 
              message.channel.send(c_heavyHovertank); 
              }
const c_heavyHovertank = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/c_heavyHovertank.png']) 
   .setImage('attachment://c_heavyHovertank.png') 
   .setTitle(' Heavy Hovertank') 
   .setDescription(' -Heavy armor\n-Able to move over water\n-Can attack subs, air and ground\n- Great for killing heavy subs') 
   .addField('Stats') 
   .addField('Price:  1100')
   .addField('Health:  420')
   .addField('Build Speed:  0.0010')
   .addField('Range:  160')
   .addField('Direct Damage:  40')
   .addField('Direct Damage:  65')
   .addField('Move Speed:  1.0')
   .addField('Turn Speed:  2.5')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}
