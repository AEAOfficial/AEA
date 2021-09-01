exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'planetarycolonizationwalker') { 
              if(message.author.bot) return; 
              message.channel.send(planetaryColonizationWalker); 
	          }
	 });

const planetaryColonizationWalker = new Discord.MessageEmbed()
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://camo.githubusercontent.com/7203f752f0f936475f4ac41dcd3ef9d93af9c2452176a05a1e2b081d1a255ef1/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f69636f6e732f3630363538363230323934323037393031372f34323362346662626563663162626164353566653631343638303337623334642e776562703f73697a653d313238')
   //.attachFiles(['./code/units/resources/163.png']) 
   //.setImage('attachment://163.png') 
   .setTitle(' Planetary Colonization Walker') 
   .setDescription('- The Ultimate Mech\n- Can only have 2 built at a time\n - Very heavily armed and armored with shield\n- Can move over water\n- Can attack ground, air and subs\n- Can build and repair units\n- Self-repair with built-in fabricator\n- Goes nuclear on death (if nukes are enabled)') 
   .addField('Price:  325000, uranium=17500','\u2800')
   .addField('Health:  30000','\u2800')
   .addField('Shield:  20000','\u2800')
   .addField('Range:  400','\u2800')
   .addField('Area Damage:  100000','\u2800')
   .addField('Direct Damage:  2200','\u2800')
   .addField('Area Damage:  2000','\u2800')
   .addField('Direct Damage:  0','\u2800')
   .addField('Area Damage:  0','\u2800')
   .addField('Direct Damage:  75','\u2800')
   .addField('Direct Damage:  60','\u2800')
   .addField('Direct Damage:  115','\u2800')
   .addField('Direct Damage:  120','\u2800')
   .addField('Area Damage:  90','\u2800')
   .addField('Direct Damage:  175','\u2800')
   .addField('Move Speed:  2','\u2800')
   .addField('Turn Speed:  0.42','\u2800')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://imgur.com/QMVH0Hq.png');
}
