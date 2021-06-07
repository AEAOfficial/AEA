exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'extractor_reinforced_t5') { 
              if(message.author.bot) return; 
              message.channel.send(extractor_reinforced_t5); 
	          }
	 });

const extractor_reinforced_t5 = new Discord.MessageEmbed()
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://camo.githubusercontent.com/7203f752f0f936475f4ac41dcd3ef9d93af9c2452176a05a1e2b081d1a255ef1/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f69636f6e732f3630363538363230323934323037393031372f34323362346662626563663162626164353566653631343638303337623334642e776562703f73697a653d313238')
   .attachFiles(['./code/units/resources/185.png']) 
   .setImage('attachment://185.png') 
   .addField('Health:  3750','\u2800')
   .addField('Shield:  1250','\u2800')
   .setTitle(' Armored Extractor T5') 
   .setDescription(' - Arms extractor with tesla attack \n- Extractor shield \n- Increased HP and radar\n- Keeps current Income Generations \n- Passive Area Healing\n- Can be converted back to normal') 
   .addField('Price:  credits=-3000','\u2800')
   .addField('Direct Damage:  120','\u2800')
   .addField('Area Damage:  -25','\u2800')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://imgur.com/QMVH0Hq.png');
}