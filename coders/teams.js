//_____________Dont touch Zone start
exports.code = function(){
    const { Client, Attachment } = require('discord.js');
    client.setMaxListeners(0)
    
      
    client.on("message", message => {
        client.guilds.get('606586202942079017').channels.get('651205041356537891').fetchMessage('699060018007375935');
        var Team1 = ["","","","",""];
        if (message.content.toLowerCase().startsWith('/team')){
            
            var counts = 0;
            var counta = 0;
            var countb = 0;
            var countc = 0;
            var countd = 0;
            let sclass = message.guild.roles.find(role => role.name === "S - Class");
            let aclass = message.guild.roles.find(role => role.name === "A - Class");
            let bclass = message.guild.roles.find(role => role.name === "B - Class");
            let cclass = message.guild.roles.find(role => role.name === "C - Class");
            let dclass = message.guild.roles.find(role => role.name === "D - Class");

                if (message.member.roles.some(role => role.name === 'S - Class')){
                    
                    counts++
                }
                if(message.member.roles.some(role => role.name === 'A - Class')){
                  
                    counta++
                }
                if(message.member.roles.some(role => role.name === 'B - Class')){
                    B = message.author.displayName;
                    countb++
                }
                if(message.member.roles.some(role => role.name === 'C - Class')){
                   
                    countc++
                }
                if(message.member.roles.some(role => role.name === 'D - Class')){
                    
                    countd++
                }
                if(counts < 0 && !counts == 0){
                    var S = message.author.displayName;
                    Team1[0] = message.author.displayName;
                }
                if(counta < 0 && !counta == 0){
                    var A = message.author.displayName;
                    Team1[1] = message.author.displayName;
                }
                if(countb < 0 && !countb == 0){
                    var B = message.author.displayName;
                    Team1[2] = message.author.displayName;
                }
                if(countc < 0 && !countc == 0){
                    var C = message.author.displayName;
                    Team1[3] = message.author.displayName;
                }
                if(countd < 0 && !countd == 0){
                    var D = message.author.displayName;
                    Team1[4] = message.author.displayName;
                }
                message.channel.send('Teams:' + Team1)
            }
    if(message.content.toLowerCase().startsWith('/teams')){
        if(counts < 0 && !counts == 0){
            var S = message.author.displayName;
            Team1[0] = message.author.displayName;
        }
        if(counta < 0 && !counta == 0){
            var A = message.author.displayName;
            Team1[1] = message.author.displayName;
        }
        if(countb < 0 && !countb == 0){
            var B = message.author.displayName;
            Team1[2] = message.author.displayName;
        }
        if(countc < 0 && !countc == 0){
            var C = message.author.displayName;
            Team1[3] = message.author.displayName;
        }
        if(countd < 0 && !countd == 0){
            var D = message.author.displayName;
            Team1[4] = message.author.displayName;
        }
        message.channel.send('Teams:' + Team1)
    }

        
});

}
//________________Dont touch Zone end
