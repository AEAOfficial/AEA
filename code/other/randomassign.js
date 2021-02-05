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
                channel.send(a1).then(embedMessage => {
                    //var react1 = embedMessage.react('❌')
                    var react2 = embedMessage.react('✅')
                    //if (!react1)
                        //react1.remove()
                    if (!react2)
                        react2.remove()
                    //if (react1)
                        

                    
                });
                
            
            }
        
        
        }
        else {
            message.channel.send('You do not have this permission _ADMINISTRATOR_!')
        }
    }

});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

client.on('messageReactionAdd', (messageReaction, user) => {
    if (user.id === '587367764474462210' || messageReaction.bot) return;
    const react1 = messageReaction.emoji.name === '✅'
    const react2 = messageReaction.emoji.name === '❌'
    if (react1){
        const { guild } = messageReaction.message
        const member = guild.members.cache.find(member => member.id === user.id);
        var x = getRandomInt(1, 3);
        if (x === 3){
            member.roles.add('806327965675028520')
        }
        if (x === 1){
            member.roles.add('806328041080750120')
        }
        if (x === 2) {
            member.roles.add('806328050656083998')
        }
    }
})
client.on('messageReactionRemove', (messageReaction, user) => {
    if (user.id === '587367764474462210' || messageReaction.bot) return;
    const react1 = messageReaction.emoji.name === '✅'
    if (react1){
        const { guild } = messageReaction.message
        const member = guild.members.cache.find(member => member.id === user.id);
        member.roles.remove('806327965675028520')
        member.roles.remove('806328041080750120')
        member.roles.remove('806328050656083998')
    }
}); 
  
//________________Dont touch Zone start
}
//________________Dont touch Zone end
