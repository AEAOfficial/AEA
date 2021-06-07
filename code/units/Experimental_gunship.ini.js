exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'typeugunship') { 
              if(message.author.bot) return; 
              message.channel.send(typeUGunship); 
	          }
	 });

const typeUGunship = new Discord.MessageEmbed()
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://camo.githubusercontent.com/7203f752f0f936475f4ac41dcd3ef9d93af9c2452176a05a1e2b081d1a255ef1/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f69636f6e732f3630363538363230323934323037393031372f34323362346662626563663162626164353566653631343638303337623334642e776562703f73697a653d313238')
   .attachFiles(['./code/units/resources/168.png']) 
   .setImage('attachment://168.png') 
   .setTitle(' Experimental Gunship') 
   .setDescription(' -Very heavily armed and armored\n-Slow\n-VERY powerful Ground attack\n-Decent anti-air\n-Can self-repair') 
   .addField('Price:  250000, uranium=15000','\u2800')
   .addField('Health:  24000','\u2800')
   .addField('Shield:  6000','\u2800')
   .addField('Range:  250','\u2800')
   .addField('Direct Damage:  30','\u2800')
   .addField('Area Damage:  200','\u2800')
   .addField('Direct Damage:  400','\u2800')
   .addField('Direct Damage:  60','\u2800')
   .addField('Area Damage:  60','\u2800')
   .addField('Direct Damage:  45','\u2800')
   .addField('Move Speed:  0.7','\u2800')
   .addField('Turn Speed:  0.4','\u2800')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://imgur.com/QMVH0Hq.png');
}