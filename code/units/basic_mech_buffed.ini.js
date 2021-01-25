exports.code = function(){     client.on('message', message => {
            if (message.content.toLowerCase() === 'basicmechbuffed') { 
              if(message.author.bot) return; 
              message.channel.send(basicMechBuffed); 
              }
	  });
const basicMechBuffed = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/basicMechBuffed.png']) 
   .setImage('attachment://basicMechBuffed.png') 
   .setTitle(' Basic Mech') 
   .setDescription(' -Attacks land only\n-Stronger but slower than T1 tanks') 
   .addField('Stats') 
   .addField('Price:  500')
   .addField('Health:  550')
   .addField('Build Speed:  0.0017')
   .addField('Range:  150')
   .addField('Direct Damage:  35')
   .addField('Direct Damage:  0')
   .addField('Move Speed:  0.9')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
