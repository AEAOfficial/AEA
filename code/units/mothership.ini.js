exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'mothership') { 
              if(message.author.bot) return; 
              message.channel.send(mothership); 
	          }
	 });

const mothership = new Discord.MessageEmbed()
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://camo.githubusercontent.com/7203f752f0f936475f4ac41dcd3ef9d93af9c2452176a05a1e2b081d1a255ef1/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f69636f6e732f3630363538363230323934323037393031372f34323362346662626563663162626164353566653631343638303337623334642e776562703f73697a653d313238')
   .attachFiles(['./code/units/resources/158.png']) 
   .setImage('attachment://158.png') 
   .setTitle(' Mothership') 
   .setDescription(' - The Ultimate Carrier\n- Rapid build T3 Mobile Mech Factory\n- Can transport up to 16 unit slots\n- Can attack air when flying\n- Ground & Air attack while landed\n- Built in fabricator\n- Very powerful long range attack\n- Can only have 5 built at a time.') 
   .addField('Price:  150000, uranium=10000','\u2800')
   .addField('Health:  18000','\u2800')
   .addField('Range:  320','\u2800')
   .addField('Direct Damage:  55','\u2800')
   .addField('Area Damage:  85','\u2800')
   .addField('Direct Damage:  35','\u2800')
   .addField('Area Damage:  25','\u2800')
   .addField('Direct Damage:  75','\u2800')
   .addField('Area Damage:  55','\u2800')
   .addField('Move Speed:  0.7','\u2800')
   .addField('Turn Speed:  0.3','\u2800')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://imgur.com/QMVH0Hq.png');
}
