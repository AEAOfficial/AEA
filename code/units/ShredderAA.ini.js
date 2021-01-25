exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'shredderaaturret') { 
              if(message.author.bot) return; 
              message.channel.send(shredderAATurret); 
              }
const shredderAATurret = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/shredderAATurret.png']) 
   .setImage('attachment://shredderAATurret.png') 
   .setTitle(' EMP A.A') 
   .setDescription(' - Can attack air only\n- Shoots powerful AOE EMP blasts\n- The bane of heavy interceptors\n- EMPs instantly disables enemy shields') 
   .addField('Stats') 
   .addField('Price:  3900')
   .addField('Health:  1800')
   .addField('Shield:  200')
   .addField('Build Speed:  0.002')
   .addField('Range:  330')
   .addField('Direct Damage:  10')
   .addField('Area Damage:  15')
   .addField('Move Speed:  0')
   .addField('Turn Speed:  0')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}
