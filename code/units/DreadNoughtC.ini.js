exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === '/dreadnoughtcannons') { 
              if(message.author.bot) return; 
              if(message.channel.id === '711753641433759774' || message.channel.id === '606586202942079023') return; 
              message.channel.send(DreadNoughtCannons); 
	          }
	 });

const DreadNoughtCannons = new Discord.MessageEmbed()
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://camo.githubusercontent.com/7203f752f0f936475f4ac41dcd3ef9d93af9c2452176a05a1e2b081d1a255ef1/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f69636f6e732f3630363538363230323934323037393031372f34323362346662626563663162626164353566653631343638303337623334642e776562703f73697a653d313238')
   //.attachFiles(['./code/units/resources/51.png']) 
   //.setImage('attachment://51.png') 
   .addField('Price:  50000','\u2800')
   .addField('Health:  12000','\u2800')
   .addField('Range:  630','\u2800')
   .addField('Direct Damage:  0 #no directDamage with targetGround','\u2800')
   .addField('Area Damage:  250','\u2800')
   .addField('Direct Damage:  150','\u2800')
   .addField('Direct Damage:  0','\u2800')
   .addField('Area Damage:  90','\u2800')
   .addField('Direct Damage:  0 #no directDamage with targetGround','\u2800')
   .addField('Area Damage:  120','\u2800')
   .addField('Direct Damage:  70','\u2800')
   .addField('Area Damage:  140','\u2800')
   .addField('Move Speed:  0','\u2800')
   .addField('Turn Speed:  0','\u2800')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://imgur.com/QMVH0Hq.png');
}
