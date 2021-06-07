
exports.code = function(){

      
client.on("message", message => {

        if (message.content.toLowerCase().startsWith('/aeaguide')){
            const tbl = new Discord.MessageEmbed()
	            .setColor('#1500f7')
	            .setTitle('AEA HandBook')
	            //.setURL('')
                .setAuthor('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128')
                .setThumbnail('https://camo.githubusercontent.com/7203f752f0f936475f4ac41dcd3ef9d93af9c2452176a05a1e2b081d1a255ef1/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f69636f6e732f3630363538363230323934323037393031372f34323362346662626563663162626164353566653631343638303337623334642e776562703f73697a653d313238')
                .addField('Table of Contents', 'All the chapters of the AEA Handbook \n - - OVERVIEW - - \n - - EARLY GAME - - \n - - MID GAME - - \n - - END GAME - - \n - - Other - -', false)
                .setTimestamp()
                .setFooter('More Soon!', 'https://camo.githubusercontent.com/7203f752f0f936475f4ac41dcd3ef9d93af9c2452176a05a1e2b081d1a255ef1/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f69636f6e732f3630363538363230323934323037393031372f34323362346662626563663162626164353566653631343638303337623334642e776562703f73697a653d313238');
                
                message.guild.channels.create('Handbook', {
                    type: 'text',
                    permissionOverwrites: [
                        {
                            id: message.guild.roles.everyone,
                            false: ['VIEW_CHANNEL']
                        },
                        {
                            id: message.author.id,
                            true: ['VIEW_CHANNEL']
                        },
                    ],
                    
                }).then((channel) => {
                const Id = '780305043969540137'
                channel.setParent(Id)
                channel.updateOverwrite(message.author.id, { VIEW_CHANNEL: true });
                channel.send(tbl);
               /* channel.send({embed: tbl}).then(embed => {
                   embed.react('❌');
                   embed.react('➡');
                })*/

            })


        }
        // Trying to implement channel deletion. Next is the /next page feature.
            if (message.content.toLowerCase('/exitb')){
                            
                }
            

    });

}
