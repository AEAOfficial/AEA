exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'heavymobileturretdeployed') { 
              if(message.author.bot) return; 
              message.channel.send(heavyMobileTurretDeployed); 
	          }
	 });

const heavyMobileTurretDeployed = new Discord.MessageEmbed()
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://camo.githubusercontent.com/7203f752f0f936475f4ac41dcd3ef9d93af9c2452176a05a1e2b081d1a255ef1/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f69636f6e732f3630363538363230323934323037393031372f34323362346662626563663162626164353566653631343638303337623334642e776562703f73697a653d313238')
   .attachFiles(['./code/units/resources/107.png']) 
   .setImage('attachment://107.png') 
   .setTitle(' Heavy Mobile Turret') 
   .setDescription(' -Heavily armored\n-Ground attack when undeployed\n-Deploys for extra range, anti-air and shield regen\n-Cannot attack while undeploying\n-Can release a repairing nano-burst when deployed') 
   .addField('Price:  7500','\u2800')
   .addField('Health:  2000','\u2800')
   .addField('Shield:  1600','\u2800')
   .addField('Range:  300','\u2800')
   .addField('Direct Damage:  58','\u2800')
   .addField('Area Damage:  50','\u2800')
   .addField('Direct Damage:  35','\u2800')
   .addField('Area Damage:  25','\u2800')
   .addField('Area Damage:  -200','\u2800')
   .addField('Move Speed:  1.8','\u2800')
   .addField('Turn Speed:  0','\u2800')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://imgur.com/QMVH0Hq.png');
}
