//_____________Dont touch Zone start
exports.code = function(){
const { Client, Attachment } = require('discord.js');
client.setMaxListeners(0)


command(client, 'timer', message => {

      if(message.content === '10s'){
      var Timer10s = setTimeout(timeup, 10000);
      message.reply('Timer started for 10 seconds')
      Timer10s;
      }
      if(message.content === '1m'){
      var Timer1m = setTimeout(timeup, 60000);
      message.reply('Timer Started for 1 minute')
      Timer1m;
      }
      if(message.content === '2m'){
      var Timer2m = setTimeout(timeup, 80000);
      message.reply('Timer Started for 2 minutes')
      Timer2m;
      }
      if(message.content === '3m'){
      var Timer3m = setTimeout(timeup, 120000);
      message.reply('Timer Started for 3 minutes')
      Timer3m;
      }
      if(message.content === '4m'){
      var Timer4m = setTimeout(timeup, 240000);
      message.reply('Timer Started for 4 minutes')
      Timer4m;
      }
      if(message.content === '5m'){
      var Timer5m = setTimeout(timeup, 300000);
      message.reply('Timer Started for 5 minutes')
      Timer5m;
      }
      if(message.content === '6m'){
      var Timer6m = setTimeout(timeup, 360000);
      message.reply('Timer Started for 6 minutes')
      Timer6m;
      }
      if(message.content === '7m'){
      var Timer7m = setTimeout(timeup, 420000);
      message.reply('Timer Started for 7 minutes')
      Timer7m;
      }
      if(message.content === '8m'){
      var Timer8m = setTimeout(timeup, 480000);
      message.reply('Timer Started for 8 minutes')
      Timer8m;
      }
      if(message.content === '9m'){
      var Timer9m = setTimeout(timeup, 540000);
      message.reply('Timer Started for 9 minutes')
      Timer9m;
      }
      if(message.content === '10m'){
      var Timer10m = setTimeout(timeup, 600000);
      message.reply('Timer Started for 10 minutes')
      Timer10m;
      }
    if(message.content == '/stopTimer'){
      message.reply('Stopped Timer')
      clearTimeout(Timer10s, 250);
      clearTimeout(Timer1m, 250);
      clearTimeout(Timer2m, 250);
      clearTimeout(Timer3m, 250);
      clearTimeout(Timer4m, 250);
      clearTimeout(Timer5m, 250);
      clearTimeout(Timer6m, 250);
      clearTimeout(Timer7m, 250);
      clearTimeout(Timer8m, 250);
      clearTimeout(Timer9m, 250);
      clearTimeout(Timer10m, 250);
      }
    function timeup() {
      message.reply('Times Up!')
      clearTimeout(Timer10s, 250);
      clearTimeout(Timer1m, 250);
      clearTimeout(Timer2m, 250);
      clearTimeout(Timer3m, 250);
      clearTimeout(Timer4m, 250);
      clearTimeout(Timer5m, 250);
      clearTimeout(Timer6m, 250);
      clearTimeout(Timer7m, 250);
      clearTimeout(Timer8m, 250);
      clearTimeout(Timer9m, 250);
      clearTimeout(Timer10m, 250);
    }
  });
}

