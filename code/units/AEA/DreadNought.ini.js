exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'dreadnought') { 
              if(message.author.bot) return; 
              message.channel.send(DreadNought); 
	          }
	  });
const DreadNought = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/DreadNought.png']) 
   //.setImage('attachment://DreadNought.png') 
   .addField('Price:  50000, uranium:2500','__________________')
   .addField('Health:  12000','__________________')
   .setTitle(' Dreadnought') 
   .setDescription(' - "Shit. Hes got a DreadNought."\n- Can go into long range cannon mode\n- Side cannons unleash hellfire upon its target\n- Can hit Air, Land, and subs\n- Can only hit subs while mobile\n- Has to reload for 40s after unloading hellfire') 
   .addField('Stats','__________________') 
   .addField('Range:  350','__________________')
   .addField('Direct Damage:  95','__________________')
   .addField('Direct Damage:  0 #no directDamage with targetGround','__________________')
   .addField('Area Damage:  160','__________________')
   .addField('Direct Damage:  150','__________________')
   .addField('Direct Damage:  0','__________________')
   .addField('Area Damage:  90','__________________')
   .addField('Direct Damage:  0','__________________')
   .addField('Area Damage:  120','__________________')
   .addField('Direct Damage:  70','__________________')
   .addField('Area Damage:  140','__________________')
   .addField('Move Speed:  0.5','__________________')
   .addField('Turn Speed:  0.8','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
