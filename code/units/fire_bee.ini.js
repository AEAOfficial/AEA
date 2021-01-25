exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'firebee') { 
              if(message.author.bot) return; 
              message.channel.send(c_fireBee); 
              }
const c_fireBee = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/c_fireBee.png']) 
   .setImage('attachment://c_fireBee.png') 
   .setTitle(' Fire bee') 
   .setDescription(' -Heavily armed \n -Can attack ground \n -Medium air attack \n -Needs to reload after firing \n -Self repair\n- Minor Nuclear detonation on death') 
   .addField('Stats') 
   .addField('Price:  11000, uranium=150')
   .addField('Health:  4900')
   .addField('Build Speed:  48.8s')
   .addField('Range:  210')
   .addField('Area Damage:  45')
   .addField('Direct Damage:  22')
   .addField('Move Speed:  1.1')
   .addField('Turn Speed:  2')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}
