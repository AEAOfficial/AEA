exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'grandslambomber') { 
              if(message.author.bot) return; 
              message.channel.send(grandSlamBomber); 
              }
const grandSlamBomber = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/grandSlamBomber.png']) 
   .setImage('attachment://grandSlamBomber.png') 
   .addField('Price:  42000, uranium=1000')
   .addField('Health:  6500')
   .addField('Build Speed:  0.0002')
   .setTitle(' Grand Slam Bomber') 
   .setDescription(' -Very fast but slow turn\n-Heavily armored\n-Carries 1 50-ton bomb\n- Also has a quantum torpedo to attack subs\n-Takes a long time to recharge\n-Can self-repair\n-defensless vs air\n- Can only build 5 at a time') 
   .addField('Stats') 
   .addField('Range:  45')
   .addField('Area Damage:  3000')
   .addField('Direct Damage:  3500')
   .addField('Area Damage:  3500')
   .addField('Move Speed:  1.7')
   .addField('Turn Speed:  0.4')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}
