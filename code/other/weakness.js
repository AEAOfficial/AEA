exports.code = function(){	
    const { Client, Attachment } = require('discord.js');	
    client.setMaxListeners(0)	
    const command = require('./command.js')
    command(client, 'wvs', message => {	

            if(message.content.toLowerCase().includes('heavyinterceptor')){	
                message.reply('Heavy interceptors can be countered with units that shoot lightning such as amphibious jets that have damage multipliers against shields')	
            }	

            if(message.content.toLowerCase().includes('kirov')){	
                message.reply('Kirovs are a very slow but deadly powerful air unit, HeavyInterceptors can counter this unit perfectly. Sam turrets of any type yeild no protection as the kirov ALWAYS gets what it wants')	
            }	

            if(message.content.toLowerCase().includes('attackjet')){	
                message.reply('Attack jets can only attack ground. So any type of anti-air air units can easily take them out, so HeavyInterceptors or even Interceptors will do the trick')	
            }	

            if(message.content.toLowerCase().includes('grandslam')){	
                message.reply('Grand slams are easily countered with a large mass of heavy interceptors, or a line of at least T3 Sam Turrets')	
            }

            if(message.content.toLowerCase().includes('amphibiousjet')){	
                message.reply('The Amphibious Jet can be countered easily with t2 sam turrets and other Amphibious Jets, they are not so easily countered while underwater')	
            }

            if(message.content.toLowerCase().includes('achilles')){	
                message.reply('The achilles is long ranged tank that can deal large amounts of damage to turret lines. So any air units such as Apachehelicopters or attackjets can take them out as they have no air defence')	
            }	

            if(message.content.toLowerCase().includes('heavyhovertank')){	
                message.reply('The heavyhovertank is a medium armored low damage unit that when in large groups can be deadly. Any type of air and long range turret can kill them')	
            }	

            if(message.content.toLowerCase().includes('thunderhead')){	
                message.reply('Thunderheads can attack from a far range. Can be countered easily with air unit.')	
            }	

            if(message.content.toLowerCase().includes('heavymissileship')){	
                message.reply('HeavyMissileShip can cause large amounts of damage to air and land, however large amounts of air can counter')	
            }	

	        if(message.content.toLowerCase().includes('xancommander')){	
		        message.reply('The Assault Mech can easily take out a Xan Commander, but large amounts of air units will counter the Assault Mech')	
            }	

            if(message.content.toLowerCase().includes('assaultmech')){	
		        message.reply('The Assault mech can be taken out by air units and make sure you have alot of them')		
            }	

            if(message.content.toLowerCase().includes('experimentaltank') || message.content.toLowerCase().includes('exptank')){	
		        message.reply('Faster high damage units such as dusters and the minigun mech can take out the Experimental Tank with ease')		
            }

            if(message.content.toLowerCase().includes('minigunmech')){	
		        message.reply('Tesla tank and tesla mech can obliterate the minigun mechs shield and deplinish its health in a matter of seconds')		
            }

            if(message.content.toLowerCase().includes('flamemech')){	
		        message.reply('Achilles and plasma snipers or any long range unit can take the arms off a flame mech within 100 meters')		
            }	

            if(message.content.toLowerCase().includes('plasmasniper')){	
		        message.reply('Zephyrs and Heavy Artillery can counter Plasma Snipers in two different ways. 1 being speed of the zephyr, and 2 being the range of the Heavy Artillery')		
            }

            if(message.content.toLowerCase().includes('plasmamech')){	
		        message.reply('The only thing that can stop this behemoth is... buildings and Heavy Artillery while deployed or alot of air units such as gunships to swarm it')		
            }

            if(message.content.toLowerCase().includes('heavyartillerymech') || message.content.toLowerCase().includes('hvyartillerymech')){	
		        message.reply('Pretty much anything can take this out that has high damage or damage rate, unless its an opposing artillery type then you will get crushed')		
            }

            if(message.content.toLowerCase().includes('heavymobileturret') || message.content.toLowerCase().includes('hvymobilemech')){	
		        message.reply('Minigun mechs or heavy mechs cause they both have high damage and alot of health')		
            }

            if(message.content.toLowerCase().includes('heavymech') || message.content.toLowerCase().includes('hvymech')){	
		        message.reply('Air units would be your best bet, those or T2 land turrets for crushing this bad girl')		
            }

            if(message.content.toLowerCase().includes('gunship')){	
		        message.reply('Gunships can be taken apart by apaches, AA mechs, heavy interceptors, AA Missile tanks, but do not use T2 sams due to their armour')		
            }

            if(message.content.toLowerCase().includes('apachehelicopter')){	
		        message.reply('Any form of AA on the ground and Heavy interceptors')		
            }

            if(message.content.toLowerCase().includes('moo') || message.content.toLowerCase().includes('moo-class')){	
		        message.reply('Moo-class counters another moo-class and amphib jets or alot of subs')		
            }

            if(message.content.toLowerCase().includes('titan')){	
		        message.reply('Titan can kill another titan, a planet colonazation walker can kill a titan')		
            }

            if(message.content.toLowerCase().includes('mothership')){	
		        message.reply('Alot of heavy interceptors and Heavy missile aircraft, better kill it before it drops its load though!')		
            }

            if(message.content.toLowerCase().includes('rocketmech')){	
                message.reply('Achilles can slaughter a rocket mech along with any long range units')		
            }

            if(message.content.toLowerCase().includes('teslamech')){	
                message.reply('Heavy mechs or Dusters because tesla is best against large swarms (and shield) so any medium sized units without shield would do well against it')		
            }

            if(message.content.toLowerCase().includes('duster')){	
                message.reply('T1 infantry or air units would be good to swarm it with enough speed to finish it off')		
            }

            if(message.content.toLowerCase().includes('infantry')){	
                message.reply('Anything that does Area Of Effect(AOE) damage')		
            }

            if(message.content.toLowerCase().includes('behemothtank')){	
                message.reply('Behemoth tank can be taken out by any high damage units such as tesla mechs, duster, achilles, etc')		
            }

            if(message.content.toLowerCase().includes('heavytank')){	
                message.reply('Flame mechs are good against a large amount of heavy tanks along with rocket mechs and turrets, but the ultimate counter to heavy tanks is with a experimental turtle')		
            }

            if(message.content.toLowerCase().includes('expturtle') || message.content.toLowerCase().includes('experimentalturtle')){	
                message.reply('Demo trucks, apaches, or any high damage air can make this shell go boom')		
            }

            if(message.content.toLowerCase().includes('demotruck')){	
                message.reply('Demo trucks, T2 turrets and dusters can make the boom go boom inside the boom')		
            }
    });	
}	
