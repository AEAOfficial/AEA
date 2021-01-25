exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'sushimaki') { 
              if(message.author.bot) return; 
              message.channel.send(sushimaki); 
              }
const sushimaki = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/sushimaki.png']) 
   .setImage('attachment://sushimaki.png') 
   .setTitle(' King Kriptor') 
   .setDescription(' -Very heavily armed and armored but slow\n- Has experimental armor\n- Heavy AOE cannons for ground attack\n- Powerful shoulder mounted A.A turrets\n-Can move over water\n-Can self-repair\n-Goes nuclear on death (if nukes are enabled)') 
   .addField('Stats') 
   .addField('Price:  175000, uranium=7500')
   .addField('Health:  18000')
   .addField('Build Speed:  124.6s')
   .addField('Range:  320')
   .addField('Direct Damage:  120')
   .addField('Direct Damage:  60')
   .addField('Area Damage:  90')
   .addField('Direct Damage:  400')
   .addField('Area Damage:  600')
   .addField('Move Speed:  0.9')
   .addField('Move Speed:  0.30')
   .addField('Turn Speed:  1.0')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}
