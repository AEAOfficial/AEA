exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'xan') { 
              if(message.author.bot) return; 
              message.channel.send(xan); 
	          }
	 });

const xan = new Discord.MessageEmbed()
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://camo.githubusercontent.com/7203f752f0f936475f4ac41dcd3ef9d93af9c2452176a05a1e2b081d1a255ef1/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f69636f6e732f3630363538363230323934323037393031372f34323362346662626563663162626164353566653631343638303337623334642e776562703f73697a653d313238')
   //.attachFiles(['./code/units/resources/76.png']) 
   //.setImage('attachment://76.png') 
   .setTitle(' Xan Commander') 
   .setDescription('- Advanced Next Gen super unit\n- Fast, agile, lightly armoured\n- Has a Jetpack that consumes battery with extended usage\n- Cannot attack while flying\n- Extremely powerful plasma minigun melts its enemies quickly\n- Long range ground & air attack\n- Cannot be repaired\n- Cannot fit in transports\n- Has self regen abilities\n- Can only have 1 built at a time\n- Long term usage leads to malfunction') 
   .addField('Price:  21000, uranium=1000','\u2800')
   .addField('Health:  1200','\u2800')
   .addField('Range:  280','\u2800')
   .addField('Direct Damage:  83','\u2800')
   .addField('Area Damage:  83','\u2800')
   .addField('Move Speed:  1.4','\u2800')
   .addField('Turn Speed:  8.5','\u2800')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://imgur.com/QMVH0Hq.png');
}
