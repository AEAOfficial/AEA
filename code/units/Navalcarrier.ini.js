exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'navalcarrier') { 
              if(message.author.bot) return; 
              message.channel.send(navalCarrier); 
	          }
	 });

const navalCarrier = new Discord.MessageEmbed()
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://camo.githubusercontent.com/7203f752f0f936475f4ac41dcd3ef9d93af9c2452176a05a1e2b081d1a255ef1/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f69636f6e732f3630363538363230323934323037393031372f34323362346662626563663162626164353566653631343638303337623334642e776562703f73697a653d313238')
   //.attachFiles(['./code/units/resources/47.png']) 
   //.setImage('attachment://47.png') 
   .setTitle(' Naval Carrier') 
   .setDescription(' - Experimental Naval Carrier\n- Can make Air and Naval units\n- Built in fabricator\n- Goes nuclear on death\n- Can only have 5 at a time.') 
   .addField('Price:  65000, uranium=5000','\u2800')
   .addField('Health:  7500','\u2800')
   .addField('Range:  350','\u2800')
   .addField('Direct Damage:  25','\u2800')
   .addField('Area Damage:  25','\u2800')
   .addField('Direct Damage:  75','\u2800')
   .addField('Area Damage:  75','\u2800')
   .addField('Direct Damage:  95','\u2800')
   .addField('Direct Damage:  14','\u2800')
   .addField('Move Speed:  0.45','\u2800')
   .addField('Turn Speed:  0.7','\u2800')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://imgur.com/QMVH0Hq.png');
}
