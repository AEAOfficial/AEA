exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'eap') { 
              if(message.author.bot) return; 
              message.channel.send(EAP); 
	          }
	  });
const EAP = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/EAP.png']) 
   //.setImage('attachment://EAP.png') 
   .setTitle(' Z.E.U.S') 
   .setDescription(' - Experimental Tesla Hover Tank\n- Can attack ground, light A.A\n- Shoots powerful chain-lightning that bounces to other targets\n- Each new lightning branch does less damage\n- Can phase to avoid damage (cant attack while phasing)\n- Weak vs buildings\n- Strong vs shields') 
   .addField('Stats','__________________') 
   .addField('Price:  50000, uranium=2500','__________________')
   .addField('Health:  9000','__________________')
   .addField('Range:  280','__________________')
   .addField('Direct Damage:  550','__________________')
   .addField('Area Damage:  300','__________________')
   .addField('Direct Damage:  0','__________________')
   .addField('Direct Damage:  60','__________________')
   .addField('Move Speed:  0.5','__________________')
   .addField('Turn Speed:  0.8','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
