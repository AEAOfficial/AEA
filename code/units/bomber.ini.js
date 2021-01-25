exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'bomber') { 
              if(message.author.bot) return; 
              message.channel.send(c_bomber); 
              }
const c_bomber = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/c_bomber.png']) 
   .setImage('attachment://c_bomber.png') 
   .setTitle(' Bomber') 
   .setDescription(' - Heavily armed and armoured bomber\n- Slow but tanky\n- Drops 3 bombs then has to reload\n- Can hit subs (at half damage)') 
   .addField('Stats') 
   .addField('Price:  4000')
   .addField('Health:  3000')
   .addField('Build Speed:  42.8s')
   .addField('Range:  45')
   .addField('Direct Damage:  195')
   .addField('Area Damage:  370')
   .addField('Area Damage:  185')
   .addField('Move Speed:  0.8')
   .addField('Turn Speed:  1.2')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}
