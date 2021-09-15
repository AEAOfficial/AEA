const { Message } = require('discord.js')

exports.code = function(){
  const fs = require('fs')
  const talkedRecently = new Set();
  client.on('message', (message, user) => {
    const username = message.author.username
    const filter = m => m.content;
    const collector = message.channel.createMessageCollector(filter);
    if (message.content.toLowerCase() === '/rank'){
      if(message.author.id === '242687584373964801'){
        message.channel.send(`Lemons's Rank: ♾`)
      }
      else if(message.author.username === 'Vox777') {
        message.channel.send(`Vox777's Rank: 777`)
      } else{
          let file = fs.stat(__dirname + `/db/${username}'s.txt`, (err, stats) => {
              console.log('User Read');
              if (stats == undefined) {
                message.channel.send(`${username}'s Rank: Unranked`)
              } else {
              message.channel.send(`${username}'s Rank: ${stats.size}`)
              }
          });
        }
      }
        if(message.content){
              fs.appendFileSync(__dirname + `/db/${username}'s.txt`,`✪`);
          }
  });
}
