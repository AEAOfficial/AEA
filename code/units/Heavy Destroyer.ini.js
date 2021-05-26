exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'heavydestroyer') { 
              if(message.author.bot) return; 
              message.channel.send(heavyDestroyer); 
	          }
	 });

const heavyDestroyer = new Discord.MessageEmbed()
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://camo.githubusercontent.com/7203f752f0f936475f4ac41dcd3ef9d93af9c2452176a05a1e2b081d1a255ef1/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f69636f6e732f3630363538363230323934323037393031372f34323362346662626563663162626164353566653631343638303337623334642e776562703f73697a653d313238')
   .attachFiles(['./code/units/resources/54.png']) 
   .setImage('attachment://54.png') 
   .setTitle(' Heavy Destroyer') 
   .setDescription(' - Heavily armed and armored\n- Long range\n- Powerful against land\n- Has light air attack\n- Can hit subs\n- Easily maneuverable\n- Has self-regen abilities') 
   .addField('Build Speed:  83.3s','\u2800')
   .addField('Price:  28000, uranium:800','\u2800')
   .addField('Health:  8000','\u2800')
   .addField('Shield:  0','\u2800')
   .addField('Range:  360','\u2800')
   .addField('Direct Damage:  110','\u2800')
   .addField('Direct Damage:  0 #no directDamage with targetGround','\u2800')
   .addField('Area Damage:  175','\u2800')
   .addField('Direct Damage:  1','\u2800')
   .addField('Area Damage:  39','\u2800')
   .addField('Move Speed:  0.6','\u2800')
   .addField('Turn Speed:  1.2','\u2800')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://imgur.com/QMVH0Hq.png');
}
exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'heavydestroyer') { 
              if(message.author.bot) return; 
              message.channel.send(heavyDestroyer); 
	          }
	  });
const heavyDestroyer = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/heavyDestroyer.png']) 
   //.setImage('attachment://heavyDestroyer.png') 
   .setTitle(' Heavy Destroyer') 
   .setDescription(' - Heavily armed and armored\n- Long range\n- Powerful against land\n- Has light air attack\n- Can hit subs\n- Easily maneuverable\n- Has self-regen abilities') 
   .addField('Stats','__________________') 
   .addField('Build Speed:  83.3s','__________________')
   .addField('Price:  28000, uranium:800','__________________')
   .addField('Health:  8000','__________________')
   .addField('Shield:  0','__________________')
   .addField('Range:  360','__________________')
   .addField('Direct Damage:  110','__________________')
   .addField('Direct Damage:  0 #no directDamage with targetGround','__________________')
   .addField('Area Damage:  175','__________________')
   .addField('Direct Damage:  1','__________________')
   .addField('Area Damage:  39','__________________')
   .addField('Move Speed:  0.6','__________________')
   .addField('Turn Speed:  1.2','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
