exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'leviathanturret_s') { 
              if(message.author.bot) return; 
              message.channel.send(leviathanturret_S); 
	          }
	 });

const leviathanturret_S = new Discord.MessageEmbed()
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://camo.githubusercontent.com/7203f752f0f936475f4ac41dcd3ef9d93af9c2452176a05a1e2b081d1a255ef1/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f69636f6e732f3630363538363230323934323037393031372f34323362346662626563663162626164353566653631343638303337623334642e776562703f73697a653d313238')
   //.attachFiles(['./code/units/resources/156.png']) 
   //.setImage('attachment://156.png') 
   .addField('Price:  0','\u2800')
   .addField('Health:  100','\u2800')
   .addField('Range:  320','\u2800')
   .addField('Direct Damage:  0','\u2800')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://imgur.com/QMVH0Hq.png');
}
