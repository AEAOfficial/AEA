exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'combatengineerx') { 
              if(message.author.bot) return; 
              message.channel.send(combatEngineerX); 
              }
const combatEngineerX = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/combatEngineerX.png']) 
   .setImage('attachment://combatEngineerX.png') 
   .setTitle(' Combat EngineerX') 
   .setDescription('- Can build units and some T2 Buildings\n- Switches to Medic Mode for better repair abilities\n- Can attack land, air and subs\n- Can repair units\n- Can build Sub-Turrets\n- Can only have 12 built at once') 
   .addField('Stats') 
   .addField('Price:  7400')
   .addField('Health:  1500')
   .addField('Build Speed:  0.0005')
   .addField('Price:   0')
   .addField('Build Speed:  5s')
   .addField('Range:  200')
   .addField('Direct Damage:  45')
   .addField('Direct Damage:  65')
   .addField('Move Speed:  1.2')
   .addField('Turn Speed:  3.7')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}
