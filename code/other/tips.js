exports.code = function(){
    const command = require('./command.js')
    const { Client, Attachment } = require('discord.js');
    client.setMaxListeners(0)


    command(client, 'tipme', async message => {
            function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
            }
            var flip = getRandomInt(1, 41);
            if (flip === 1) {
            message.reply('There’s 5 main aspects to RTS. Those are Speed, resources, map control, intel, and preparation.')
            }
            if (flip === 2){
            message.reply('For most maps, resources are spread across the map, so having those mid points gives you a financial advantage.')
            }
            if (flip === 3){
            message.reply('It’s common for most players to rush the middle as soon as the match starts to conquer the middle, where usually most resource pools can be found.')
            }
            if (flip === 4){
                message.reply('Turrets are very helpful, but it would be unwise to rely solely on them. It’s best to have both turrets and units.')
            }
            if (flip === 5){
                message.reply('If you can afford it, it would be a big advantage to rush a T2 factory.')
            }
            if (flip === 6){
                message.reply('Paladin mechs are very good at fighting rocket turrets, and are fast enough to retreat if they are catching heavy fire.')
            }
            if (flip === 7){
                message.reply('Be aggressive, as constant pressure can fluster the enemy, and cause them to make mistakes.')
            }
            if (flip === 8){
                message.reply('Best way to find balance is to scout your enemy to see what they have, and make proper judgment calls to attack or defend.')
            }
            if (flip === 9){
                message.reply('Players love to drop ship units in your back door away from your front line, where there are minimal defenses.')
            }
            if (flip === 10){
                message.reply('The best defence is an air defense (Attack Jets/Heavy interceptors).')
            }    
            if (flip === 11){
                message.reply('If you don’t have +300 to +500 income by midgame, and it’s been a suspiciously quiet game so far... YOU. WILL. LOSE.')
            }    
            if (flip === 12){
                message.reply('The early mid game is usually where the most fighting for ground takes place.')
            }    
            if (flip === 13){
                message.reply('Credit factories are built from the Mech Engineer, and are like advanced power plants, but for money!(You are limited to 8)')
            }  
            if (flip === 14){
                message.reply('Credit factories dont nuke other team members stuff!')
            }  
            if (flip === 15){
                message.reply('It would be a good idea for someone in your team to build a “fuck pit” - Loaf™️ (a large mass of repair bays) to quickly build units that use nano.')
            }  
            if (flip === 16){
                message.reply('If you have a lot of income, and want to build units quickly, there are 3 main units that can suit your needs. The Naval Carrier, planetary walker, Flying Fortress, and the Mother ship.')
            }  

            if (flip === 17){
                message.reply('The Experimental Spider can build 2 very powerful units; the Planetary Walker and the Titan.')
            }  
            if (flip === 18){
                message.reply('You can only have 40 fabricators.')
            }  
            if (flip === 19){
                message.reply('The amphibious warship is a great early-mid game supporter that can build many useful units.')
            }  
            if (flip === 20){
                message.reply('Kirov always gets what it wants...')
            }  
            if (flip === 21){
                message.reply('The Thunder Head is the sniper of the Navy.')
            }  
            if (flip === 22){
                message.reply('Attack Jets are basically better gunships (can only attack ground).')
            }  
            if (flip === 23){
                message.reply('The Selenium is the mammoth of submarines, and can surface to hit air/land.')
            }  
            if (flip === 24){
                message.reply('The Grand Slam Bomber is a scary fast plane that drops a single devastating bomb, that can also hit submarines. Be careful though, it turns VERY slow.')
            }  
            if (flip === 25){
                message.reply('Nukes have been disabled in AEA, but you can still use Nuclear Drones found in the Experimental Factory. They are suicide drones with low health and big nuclear damage.')
            }  
            if (flip === 26){
                message.reply('The Bruh Sound Effect #2 will play for the whole map to hear, if you build a Nuke Drone. You deserve that. \n P.S. It was added by Lemons)')
            } 
            if (flip === 27){
                message.reply('The MAE-1 is a flying builder that can build/repair things at an accelerated pace. It cannot build SAM turrets however.')
            }   
            if (flip === 28){
                message.reply('Builder Ships can upgrade to T2, which will make them build many T2 buildings and repair much faster.')
            }   
            if (flip === 29){
                message.reply('There are 3 tiers of Mech Factory now. The Mech Engineer can be found in the T3 Mech Factory, and can build many mechs with its nano turret.')
            }   
            if (flip === 30){
                message.reply('A Radar tower is a great way to see throug the fog. It can be built from the Combat Engineer or the Mech Engineer.')
            } 
            if (flip === 31){
                message.reply('The LRS submarine can attack surfaced targets while submerged under water (although its a very weak attack).')
            }    
            if (flip === 32){
                message.reply('Comets are powerful early game tanks that are good at tanking shots and handling small unit spam.')
            }   
            if (flip === 33){
                message.reply('The Mother ship is the ultimate carrier. One of the best late game units, because of its ability to VERY quickly build powerful T2/T3 mechs.')
            }   
            if (flip === 34){
                message.reply('Laser Defense has been removed in AEA, but instead, repair bays can be upgraded to T2. This upgrade increases their range, repair speed, and gives them a nano burst ability.')
            }   
            if (flip === 35){
                message.reply('A large group of T2 Repair Bays is highly recommended when building a Titan or Planetary walker, as they can help the building proccess and speed it up tremendously.')
            }  
            if (flip === 36){
                message.reply('The Naval Carrier has VERY powerful anti-air defense, but its other defenses arent as good. However, it can build subs, boats, and air units very quickly, so it is a must have for naval dominance, if you have the income for it.')
            }
            if (flip === 37){
                message.reply('The experimental Turtle and Scorpion are both excellent mid-tier experimentals, designed for combat. Theyre both capable of busting turret lines, although they are weak to air.')
            }   
            if (flip === 38){
                message.reply('An EMP A.A turret is a must have for any turret line. It is the bane of Heavy Interceptor spam.')
            }    
            if (flip === 39){
                message.reply('Amphibious Jets are a great counter to Heavy Interceptors.')
            }    
            if (flip === 40){
                message.reply('Paladins are weak vs Lightning!')
            }  
            if (flip === 41){
                message.reply('Hide your income... if you can.')
            }  
    });
}
    
