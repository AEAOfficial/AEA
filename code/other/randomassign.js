exports.code = function(){
    const { Client, MessageAttachment } = require('discord.js');
    client.setMaxListeners(0)
    
    


client.on("message", message => {


    let guild = client.guilds.cache.get('606586202942079017');
    var member = guild.member(message.author);
    let nickname = member ? member.displayName : null;
    let avatar = message.member.avatarURL;
    let image = message.Attachment
       const taco = message.content
             const a1 = new Discord.MessageEmbed()
                .setColor('#1500f7')
                .setTitle('Important Announcement!')
                .setAuthor(nickname, avatar)
                .setDescription(taco)
                .setURL('https://github.com/LemonsHQ/AEA')
                .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
                .setTimestamp()
                .setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
   

    if(message.content.toLowerCase().startsWith('->')){  
        if(message.member.permissions.has("ADMINISTRATOR")){
            if(message.author.bot) return;  
            
            var channel = message.member.guild.channels.cache.find(channel => channel.name === "bot-testing")
            if(!channel){
            message.reply('The target channel _bot-testing_ must exist')
            }
            else {
                message.delete()
                function getRandomInt(min, max) {
                    min = Math.ceil(min);
                    max = Math.floor(max);
                    return Math.floor(Math.random() * (max - min)) + min;
                }
                channel.send(a1).then(embedMessage => {
                    var react1 = embedMessage.react('❌')
                    var react2 = embedMessage.react('✅')
                    if (!react1)
                        react1.remove()
                    if (!react2)
                        react2.remove()
                    if (react1)
                        var x = getRandomInt(1, 5);

                    
                });
                
            
            }
        
        
        }
        else {
            message.channel.send('You do not have this permission _ADMINISTRATOR_!')
        }
    }

});
  
client.on('messageReactionAdd', (messageReaction, user) => {
    if (!user.bot || messageReaction.bot)
    if (messageReaction.emoji.name === '✅')
    console.log('check')
    console.log(messageReaction.message.author)

})
  
  
//________________Dont touch Zone start
}
//________________Dont touch Zone end
