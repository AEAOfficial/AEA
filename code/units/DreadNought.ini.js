exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'dreadnought') { 
              if(message.author.bot) return; 
              message.channel.send(DreadNought); 
              }
const DreadNought = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/DreadNought.png']) 
   .setImage('attachment://DreadNought.png') 
   .addField('Price:  50000, uranium:2500')
   .addField('Health:  12000')
   .setTitle(' Dreadnought') 
   .setDescription(' - "Shit. Hes got a DreadNought."\n- Can go into long range cannon mode\n- Side cannons unleash hellfire upon its target\n- Can hit Air, Land, and subs\n- Can only hit subs while mobile\n- Has to reload for 40s after unloading hellfire') 
   .addField('Stats') 
   .addField('Build Speed:  98.2s')
   .addField('Price:  0')
   .addField('Build Speed:  30s')
   .addField('Range:  350')
   .addField('Direct Damage:  95')
   .addField('Direct Damage:  0 #no directDamage with targetGround')
   .addField('Area Damage:  160')
   .addField('Direct Damage:  150')
   .addField('Direct Damage:  0')
   .addField('Area Damage:  90')
   .addField('Direct Damage:  0')
   .addField('Area Damage:  120')
   .addField('Direct Damage:  70')
   .addField('Area Damage:  140')
   .addField('Move Speed:  0.5')
   .addField('Turn Speed:  0.8')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}
