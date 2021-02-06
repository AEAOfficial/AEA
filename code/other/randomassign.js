exports.code = function(){
    const { Client, MessageAttachment, CategoryChannel } = require('discord.js');
    client.setMaxListeners(0)
    
    


client.on("message", message => {


    let guild = client.guilds.cache.get('606586202942079017');
    var member = guild.member(message.author);
    let nickname = member ? member.displayName : null;
    let avatar = message.author.displayAvatarURL();
    let image = message.Attachment
       const taco = message.content.replace('->','').replace('@here','').replace('@everyone','').trimLeft()
             const a1 = new Discord.MessageEmbed()
                .setColor('#1500f7')
                .setTitle(`***_New AEA Tournament_*** !!!`)
                .addField(`This Tournament is Hosted by:`,`${nickname} \n\n`)
                .setAuthor('AEA', client.user.displayAvatarURL())
                .setImage('')
                .setDescription(`React below with the ✅ to be assigned a team! \nSpecific Tournament info, rules, are listed below! \n -------------------------------------------- \n \`\`\` ${taco} \`\`\``)
                .setURL('')
                .setThumbnail(client.user.displayAvatarURL())
                .setTimestamp(Date.now())
                .setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
                

    if(message.content.toLowerCase().startsWith('->')){  
        if(message.member.permissions.has("ADMINISTRATOR")){
            if(message.author.bot) return;  
            
            var channel = message.member.guild.channels.cache.find(channel => channel.name === "》tournaments")
            if(!channel){
            message.reply('The target channel _》tournaments_ must exist')
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
    if (react1){
        
        const { guild } = messageReaction.message
        const member = guild.members.cache.find(member => member.id === user.id);
        const channel = guild.channels.cache.find(channel => channel.name === '》sign-logs')
        if (!channel){
            const channel = guild.channels.cache.find(channel => channel.name === 'bot-errors')
            channel.send('No _》sign-logs_ channel found!')
        }
        else {
            channel.send(`${member} has signed up!`);
            user.send(`You have signed up, ${member}!`)
        }

        var x = getRandomInt(1, 6);
        if (x === 1 || x === 2){
            member.roles.add('806327965675028520')
            user.send(`You are Team 1!`)
        }
        if (x === 3 || x === 4){
            member.roles.add('806328041080750120')
            user.send(`You are Team 2!`)
        }
        if (x === 5 || x === 6) {
            member.roles.add('806328050656083998')
            user.send(`You are Team 3!`)
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
        const channel = guild.channels.cache.find(channel => channel.name === '》sign-logs')
        if (!channel){
            const channel = guild.channels.cache.find(channel => channel.name === 'bot-errors')
            channel.send('No _》sign-logs_ channel found!')
        }
        else {
            channel.send(`${member} has unsigned!`);
            user.send(`You have unsigned, ${member}!`)
        }
    }
}); 
  


//________________Dont touch Zone start
}
//________________Dont touch Zone end
