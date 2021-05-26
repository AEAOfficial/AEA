exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'experimentalspider') { 
              if(message.author.bot) return; 
              message.channel.send(experimentalSpider); 
	          }
	  });
const experimentalSpider = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/experimentalSpider.png']) 
   //.setImage('attachment://experimentalSpider.png') 
   .setTitle(' Experimental Spider AEA') 
   .setDescription(' - Support unit\n- Laser defense\n- Built in fabricator, generates Uranium\n- Can build/repair units and buildings\n- Has experimental armour-plating that reduces damage taken\n- Cannot fit in transports\n- Can build powerful experimentals\n- Can only have 5 built at once\n- Goes nuclear on death') 
   .addField('Stats','__________________') 
   .addField('Price:  2','__________________')
   .addField('Health:  10000','__________________')
   .addField('Range:  250','__________________')
   .addField('Direct Damage:  80','__________________')
   .addField('Direct Damage:  0 #no directDamage with targetGround','__________________')
   .addField('Area Damage:  160','__________________')
   .addField('Direct Damage:  190','__________________')
   .addField('Move Speed:  2.6','__________________')
   .addField('Turn Speed:  0.5','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
