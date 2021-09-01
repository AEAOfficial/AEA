exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'mobileturret') { 
              if(message.author.bot) return; 
              message.channel.send(mobileTurret); 
	          }
	 });

const mobileTurret = new Discord.MessageEmbed()
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://camo.githubusercontent.com/7203f752f0f936475f4ac41dcd3ef9d93af9c2452176a05a1e2b081d1a255ef1/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f69636f6e732f3630363538363230323934323037393031372f34323362346662626563663162626164353566653631343638303337623334642e776562703f73697a653d313238')
   //.attachFiles(['./code/units/resources/131.png']) 
   //.setImage('attachment://131.png') 
   .setTitle(' Mobile Turret') 
   .setDescription(' -Ground attack\n-Deploys for extra range and a shield') 
   .addField('Price:  3800','\u2800')
   .addField('Health:  800','\u2800')
   .addField('Range:  200','\u2800')
   .addField('Direct Damage:  40','\u2800')
   .addField('Area Damage:  49','\u2800')
   .addField('Move Speed:  1.9','\u2800')
   .addField('Turn Speed:  1.0','\u2800')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://imgur.com/QMVH0Hq.png');
}
