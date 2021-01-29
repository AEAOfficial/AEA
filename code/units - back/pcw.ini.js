exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'planetarycolonizationwalker') { 
              if(message.author.bot) return; 
              message.channel.send(planetaryColonizationWalker); 
              }
const planetaryColonizationWalker = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/planetaryColonizationWalker.png']) 
   .setImage('attachment://planetaryColonizationWalker.png') 
   .setTitle(' Planetary Colonization Walker') 
   .setDescription('- The Ultimate Mech\n- Can only have 2 built at a time\n - Very heavily armed and armored with shield\n- Can move over water\n- Can attack ground, air and subs\n- Can build and repair units\n- Self-repair with built-in fabricator\n- Goes nuclear on death (if nukes are enabled)') 
   .addField('Stats') 
   .addField('Price:  290000, uranium=15000')
   .addField('Health:  30000')
   .addField('Build Speed:  0.0000009')
   .addField('Shield:  20000')
   .addField('Range:  400')
   .addField('Direct Damage:  2200')
   .addField('Area Damage:  2000')
   .addField('Direct Damage:  0')
   .addField('Area Damage:  0')
   .addField('Direct Damage:  75')
   .addField('Direct Damage:  60')
   .addField('Direct Damage:  115')
   .addField('Direct Damage:  120')
   .addField('Area Damage:  90')
   .addField('Direct Damage:  175')
   .addField('Move Speed:  2')
   .addField('Move Speed:  0.2')
   .addField('Turn Speed:  0.42')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}
