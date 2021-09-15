exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === '/grandslambomber') { 
              if(message.author.bot) return; 
              if(message.channel.id === '711753641433759774' || message.channel.id === '606586202942079023') return; 
              message.channel.send(grandSlamBomber); 
	          }
	 });

const grandSlamBomber = new Discord.MessageEmbed()
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://camo.githubusercontent.com/7203f752f0f936475f4ac41dcd3ef9d93af9c2452176a05a1e2b081d1a255ef1/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f69636f6e732f3630363538363230323934323037393031372f34323362346662626563663162626164353566653631343638303337623334642e776562703f73697a653d313238')
   //.attachFiles(['./code/units/resources/5.png']) 
   //.setImage('attachment://5.png') 
   .addField('Price:  42000, uranium=2000','\u2800')
   .addField('Health:  6500','\u2800')
   .setTitle(' Grand Slam Bomber') 
   .setDescription(' -Very fast but slow turn\n-Heavily armored\n-Carries 1 50-ton bomb\n- Also has a quantum torpedo to attack subs\n-Takes a long time to recharge\n-Can self-repair\n-defensless vs air\n- Deals double-damage to buildings\n- Can only build 5 at a time') 
   .addField('Range:  45','\u2800')
   .addField('Area Damage:  3000','\u2800')
   .addField('Direct Damage:  3500','\u2800')
   .addField('Area Damage:  3500','\u2800')
   .addField('Move Speed:  1.7','\u2800')
   .addField('Turn Speed:  0.4','\u2800')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://imgur.com/QMVH0Hq.png');
}
