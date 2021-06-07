exports.code = function(){
const { Client, Attachment } = require('discord.js');
const fs = require('fs');

client.setMaxListeners(0)

  // Random
  const N = require('./other/Nword.js');
  const weak = require('./other/weakness.js');
  const teams = require('./other/teams.js');
  const tips = require('./other/tips.js');
  const Timer = require('./other/timer.js');
  const Info_c = require('./other/infocommands.js');
  const Func = require('./other/Votes.js');
  const flip = require('./other/flipcoin.js');
 // const test = require('./other/tournaments.js');
  const mute = require('./other/mute.js')

  // Maps

  const onevone = require('./maps/1v1.js');
  const twovtwo = require('./maps/2v2.js');
  const twovthree = require('./maps/2v3.js');
  const threevthree = require('./maps/3v3.js');
  const fourvfour = require('./maps/4v4.js');
  const fivevfive = require('./maps/5v5.js');
  const ffa = require('./maps/FFA.js');
  if(onevone && Client){
    onevone.code();
    console.log('1v1s loaded');
  } 
  if(twovtwo && Client){
    twovtwo.code();
    console.log('2v2s loaded');
  } 
  if(twovthree && Client){
    twovthree.code();
    console.log('2v3s loaded');
  } 
  if(threevthree && Client){
    threevthree.code();
    console.log('3v3s loaded');
  } 
  if(fourvfour && Client){
    fourvfour.code();
    console.log('4v4s loaded');
  } 
  if(fivevfive && Client){
    fivevfive.code();
    console.log('5v5s loaded');
  } 
  if(ffa && Client){
    ffa.code();
    console.log('FFAs loaded');
  } 
  // Random
  if(mute && Client){
    mute.code()
    console.log('Mute command loaded')
  }
  
  if(N && Client){
    N.code();
    console.log('Nword loaded');
  } 

  if(flip && Client){
    flip.code();
    console.log('Flipcoin loaded');
  }

  if(N && Client){
     Info_c.code();
    console.log('info_c loaded');
  } 

  if(Timer && Client){
   	Timer.code();
    console.log('Timer loaded');
  }

  if(Func && Client){
    Func.code();
    console.log('Skaarjlord loaded');
  }

  if(tips && Client){
    tips.code();
    console.log('Tips loaded');
  }

  if(weak && Client){
    weak.code();
    console.log('Weaknesses loaded');
  }
  if(teams && Client){
    teams.code();
    console.log('Teams loaded');
  }
}
