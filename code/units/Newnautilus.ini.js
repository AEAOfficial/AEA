exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'nautilussubmarine') { 
              if(message.author.bot) return; 
              message.channel.send(c_nautilusSubmarine); 
              }
const c_nautilusSubmarine = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/c_nautilusSubmarine.png']) 
   .setImage('attachment://c_nautilusSubmarine.png') 
   .setTitle(' Nautilus') 
   .setDescription(' -Heavily armed and armored \n -Can attack ships \n -Can surface and walk on land \n -Can attack land and air when surfaced\n- Can build a few attack units\n- Can launch a scout builder crab\n- Can transport 6 unit slots') 
   .addField('Stats') 
   .addField('Price:  16800')
   .addField('Health:  5000')
   .addField('Build Speed:  0.0003')
   .addField('Price:   0')
   .addField('Build Speed:  1')
   .addField('Price:   0')
   .addField('Build Speed:  1.5s')
   .addField('Price:  credits=250, energy=1')
   .addField('Price:  credits=4000')
   .addField('Build Speed:  3.5s')
   .addField('Range:  240')
   .addField('Direct Damage:  123')
   .addField('Direct Damage:  50')
   .addField('Direct Damage:  35')
   .addField('Area Damage:  180')
   .addField('Move Speed:  0.45')
   .addField('Turn Speed:  0.8')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}
