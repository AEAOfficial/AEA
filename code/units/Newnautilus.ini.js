exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'nautilussubmarine') { 
              if(message.author.bot) return; 
              message.channel.send(nautilusSubmarine); 
	          }
	 });

const nautilusSubmarine = new Discord.MessageEmbed()
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://camo.githubusercontent.com/7203f752f0f936475f4ac41dcd3ef9d93af9c2452176a05a1e2b081d1a255ef1/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f69636f6e732f3630363538363230323934323037393031372f34323362346662626563663162626164353566653631343638303337623334642e776562703f73697a653d313238')
   //.attachFiles(['./code/units/resources/61.png']) 
   //.setImage('attachment://61.png') 
   .setTitle(' Nautilus') 
   .setDescription(' -Heavily armed and armored \n -Can attack ships \n -Can surface and walk on land \n -Can attack land and air when surfaced\n- Can build a few attack units\n- Can launch a scout builder crab\n- Can transport 6 unit slots') 
   .addField('Price:  15000','\u2800')
   .addField('Health:  5000','\u2800')
   .addField('Range:  240','\u2800')
   .addField('Direct Damage:  123','\u2800')
   .addField('Direct Damage:  50','\u2800')
   .addField('Direct Damage:  35','\u2800')
   .addField('Area Damage:  180','\u2800')
   .addField('Move Speed:  0.45','\u2800')
   .addField('Turn Speed:  0.8','\u2800')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://imgur.com/QMVH0Hq.png');
}
