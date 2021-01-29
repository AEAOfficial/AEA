exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'mechengineer') { 
              if(message.author.bot) return; 
              message.channel.send(mechEngineer); 
	          }
	  });
const mechEngineer = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/mechEngineer.png']) 
   //.setImage('attachment://mechEngineer.png') 
   .setTitle(' Mech Engineer') 
   .setDescription(' -Heavily armored \n -Can repair buildings efficiently \n -Can build economic structures and turrets \n -Light anti-air only\n -Can only have 12 built at once') 
   .addField('Stats','__________________') 
   .addField('Price:  2','__________________')
   .addField('Health:  2500','__________________')
   .addField('Range:  220','__________________')
   .addField('Direct Damage:  100','__________________')
   .addField('Area Damage:  40','__________________')
   .addField('Move Speed:  2.9','__________________')
   .addField('Turn Speed:  1.5','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
