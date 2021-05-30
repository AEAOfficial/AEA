const { Message } = require('discord.js')

exports.code = function(){
  const fs = require('fs')
  const talkedRecently = new Set();
  client.on('message', (message, user) => {
    const username = message.author.username
    const filter = m => m.content;
    const collector = message.channel.createMessageCollector(filter);
    if(message.content){
        fs.appendFileSync(__dirname + `/db/${username}'s.txt`,`✪`);
    }
          
        
      

    if (message.content.toLowerCase() === '/rank'){
      let file = fs.stat(__dirname + `/db/${username}'s.txt`, (err, stats) => {
          console.log('User Read');
          if (stats == undefined) {
            message.channel.send(`${username}'s Rank: Unranked`)
          } else {
          message.channel.send(`${username}'s Rank: ${stats.size}`)
          }
      });
      if (message.mentions.members.first()){
        let file = fs.stat(__dirname + `/db/${mention.username}'s.txt`, (err, stats) => {
          console.log('User Read');
          if (stats == undefined) {
            message.channel.send(`${mention.username}'s Rank: Unranked`)
          } else {
          message.channel.send(`${mention.username}'s Rank: ${stats.size}`)
          }
        });  
      }
    }
  });
}
