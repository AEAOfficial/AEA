   .setTitle(' Leviathan') 
   .setDescription(' [Deployed]\n- An Absolute Unit.\n- Can attack Ground & Air\n- VERY Heavily armed and armored\n- Can run over smaller units\n- Deploy to activate Singularity Cannon\n- Cannot attack air while deployed') 
exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === '/none') { 
              if(message.author.bot) return; 
              if(message.channel.id === '711753641433759774' || message.channel.id === '606586202942079023') return; 
              message.channel.send(NONE); 
	          }
	 });

const NONE = new Discord.MessageEmbed()
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://camo.githubusercontent.com/7203f752f0f936475f4ac41dcd3ef9d93af9c2452176a05a1e2b081d1a255ef1/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f69636f6e732f3630363538363230323934323037393031372f34323362346662626563663162626164353566653631343638303337623334642e776562703f73697a653d313238')
   //.attachFiles(['./code/units/resources/155.png']) 
   //.setImage('attachment://155.png') 
   .addField('Price:  energy=1, uranium=500','\u2800')
   .addField('Move Speed:  0','\u2800')
   .addField('Turn Speed:  0','\u2800')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://imgur.com/QMVH0Hq.png');
}
