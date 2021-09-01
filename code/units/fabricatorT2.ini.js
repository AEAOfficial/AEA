exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'fabricatort2') { 
              if(message.author.bot) return; 
              message.channel.send(fabricatorT2); 
	          }
	 });

const fabricatorT2 = new Discord.MessageEmbed()
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://camo.githubusercontent.com/7203f752f0f936475f4ac41dcd3ef9d93af9c2452176a05a1e2b081d1a255ef1/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f69636f6e732f3630363538363230323934323037393031372f34323362346662626563663162626164353566653631343638303337623334642e776562703f73697a653d313238')
   //.attachFiles(['./code/units/resources/202.png']) 
   //.setImage('attachment://202.png') 
   .addField('Price:  4500','\u2800')
   .addField('Health:  1000','\u2800')
   .setTitle(' Fabricator T2') 
   .setDescription(' - Generates credits almost as fast as T1 extractors\n- Upgradeable up to T3\n- Upgrades increase credit generation\n- Can only have 40 built at a time.') 
   .addField('Area Damage:  450','\u2800')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://imgur.com/QMVH0Hq.png');
}
