const { Message } = require('discord.js')

exports.code = function(){
  const Keyv = require('keyv')
  const fs = require('fs')
  const talkedRecently = new Set();
  client.on('message', (message, user) => {
    const rank = '✪'
    const username = message.author.id
    if (message.content) {
      fs.appendFileSync(__dirname + `/db/${username}.txt`,`${rank}`)
    }
    if (talkedRecently.has(message.author.id)) {
            if (message.author.client) return;
            message.reply("Wait 1 minute before getting typing this command again. - " + message.author);
    } else {

        if (message.content.toLowerCase() === '/rank'){
        
          let file = fs.readFile(__dirname + `/db/${username}.txt`, function (err, data) {
            if (err) return console.log(err);
            console.log('User Read');
            message.channel.send(`Your Rank: ${data}`)
          });
          
        }
        // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 60000);
    }




  });
}
