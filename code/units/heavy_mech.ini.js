exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === '/heavymech') { 
              if(message.author.bot) return; 
              if(message.channel.id === '711753641433759774' || message.channel.id === '606586202942079023') return; 
              message.channel.send(heavyMech); 
	          }
	 });

const heavyMech = new Discord.MessageEmbed()
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://camo.githubusercontent.com/7203f752f0f936475f4ac41dcd3ef9d93af9c2452176a05a1e2b081d1a255ef1/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f69636f6e732f3630363538363230323934323037393031372f34323362346662626563663162626164353566653631343638303337623334642e776562703f73697a653d313238')
   //.attachFiles(['./code/units/resources/104.png']) 
   //.setImage('attachment://104.png') 
   .setTitle(' Heavy Mech') 
   .setDescription(' -Heavily armored\n-Ground attack\n-Moderate damage and range\n-Can disable weapon to activate a temporary shield and self-repair') 
   .addField('Price:  6000','\u2800')
   .addField('Health:  1800','\u2800')
   .addField('Range:  250','\u2800')
   .addField('Direct Damage:  125','\u2800')
   .addField('Direct Damage:  0','\u2800')
   .addField('Move Speed:  2.1','\u2800')
   .addField('Turn Speed:  4','\u2800')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://imgur.com/QMVH0Hq.png');
}
