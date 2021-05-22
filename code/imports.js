exports.code = function(){
const { Client, Attachment } = require('discord.js');
const fs = require('fs');
client.setMaxListeners(0)





/*
const Sea = require('./units/WATER.js');
const exp = require('./units/EXP.js');
const Anubis = require('./units/AIR - Anubis.js');
const Darkest = require('./units/LAND.js');
const Mechs = require('./units/MECH.js');
const vox = require('./units/INFANTRY - Vox777.js');
const build = require('./units/BUILDING.js');
*/

console.log('Units Loaded')


// Random
//const kd = require('./other/kd.js');
const N = require('./other/Nword.js');
const weak = require('./other/weakness.js');
const teams = require('./other/teams.js');
const tips = require('./other/tips.js');
const Timer = require('./other/timer.js');
const Func = require('./other/skaarjlord.js');
const flip = require('./other/flipcoin.js');

const test = require('./other/randomassign.js');

//const rukkit = require('./jars/rukkit.js')
//const music = require('./jars/music/music.js')

//const role = require('./other/reactionroles.js');



// Maps

const onevone = require('./maps/1v1.js');
const twovtwo = require('./maps/2v2.js');
const twovthree = require('./maps/2v3.js');
const threevthree = require('./maps/3v3.js');
const fourvfour = require('./maps/4v4.js');
const fivevfive = require('./maps/5v5.js');

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

  // Random

  if(N && Client){
    N.code();
    console.log('Nword loaded');
  } 
  if(flip && Client){
    flip.code();
    console.log('Flipcoin loaded');
  }
/*
  if(kd && Client){
    kd.code();
    console.log('Kill/death loaded');
  } 
*/
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
  if(test && Client){
    test.code();
    console.log('Random Assign loaded');
  }
  /*
  if(rukkit && Client){
    rukkit.code();
    console.log('Rukkit.js loaded');
  }
  if(music && Client){
    music.code();
    console.log('Music loaded');
  }

 /*
  if(role && Client){
    role.code();
    console.log('AutoRoles loaded');
  }
 */

  if(weak && Client){
    weak.code();
    console.log('Weaknesses loaded');
  }
  if(teams && Client){
    teams.code();
    console.log('Teams loaded');
  }
  var loader1 = require('./units/buzzard_gunship.ini.js');
  loader1.code()
  var loader2 = require('./units/attackjet.ini.js');
  loader2.code()
  var loader3 = require('./units/bomber.ini.js');
  loader3.code()
  var loader4 = require('./units/dropship.ini.js');
  loader4.code()
  var loader5 = require('./units/grand_slam_bomber.ini.js');
  loader5.code()
  var loader6 = require('./units/gunship.ini.js');
  loader6.code()
  var loader7 = require('./units/heavyInterceptor.ini.js');
  loader7.code()
  var loader8 = require('./units/helicopter.ini.js');
  loader8.code()
  var loader9 = require('./units/helicopterLanded.ini.js');
  loader9.code()
  var loader10 = require('./units/Kirov.ini.js');
  loader10.code()
  var loader11 = require('./units/light_gunship.ini.js');
  loader11.code()
  var loader12 = require('./units/MAE-1.ini.js');
  loader12.code()
  var loader13 = require('./units/missile_aircraft.ini.js');
  loader13.code()
  var loader14 = require('./units/missile_airship.ini.js');
  loader14.code()
  var loader15 = require('./units/Phantom.ini.js');
  loader15.code()
  var loader16 = require('./units/Phantom2.ini.js');
  loader16.code()
  var loader17 = require('./units/S-1.ini.js');
  loader17.code()
  var loader18 = require('./units/S-2.ini.js');
  loader18.code()
  var loader19 = require('./units/ek_swallowtail_gunship.ini.js');
  loader19.code()
  var loader20 = require('./units/achilles.ini.js');
  loader20.code()

  var loader22 = require('./units/buffalo.ini.js');
  loader22.code()
  var loader23 = require('./units/comet.ini.js');
  loader23.code()
  var loader24 = require('./units/demotruck.ini.js');
  loader24.code()
  var loader25 = require('./units/duster.ini.js');
  loader25.code()
  var loader26 = require('./units/heavy_hovertank.ini.js');
  loader26.code()
  var loader27 = require('./units/heavy_tank.ini.js');
  loader27.code()
  var loader28 = require('./units/hovertank.ini.js');
  loader28.code()
  var loader29 = require('./units/laser_tank.ini.js');
  loader29.code()
  var loader30 = require('./units/missile_tank.ini.js');
  loader30.code()
  var loader31 = require('./units/plasma_tank.ini.js');
  loader31.code()
  var loader32 = require('./units/comms_truck.ini.js');
  loader32.code()
  var loader33 = require('./units/saber_tank.ini.js');
  loader33.code()
  var loader34 = require('./units/scout.ini.js');
  loader34.code()
  var loader35 = require('./units/artillery.ini.js');
  loader35.code()
  var loader36 = require('./units/heavy_artillery.ini.js');
  loader36.code()
  var loader37 = require('./units/tank.ini.js');
  loader37.code()
  var loader38 = require('./units/tesla_tank.ini.js');
  loader38.code()
  var loader39 = require('./units/typhoon.ini.js');
  loader39.code()
  var loader40 = require('./units/zephyr.ini.js');
  loader40.code()
  var loader41 = require('./units/antiairship.ini.js');
  loader41.code()
  var loader42 = require('./units/BattleCruiser.ini.js');
  loader42.code()
  var loader43 = require('./units/battleship.ini.js');
  loader43.code()
  var loader44 = require('./units/BuilderShip.ini.js');
  loader44.code()
  var loader45 = require('./units/BuilderShipT2.ini.js');
  loader45.code()
  var loader46 = require('./units/amphibious_warship.ini.js');
  loader46.code()
  var loader47 = require('./units/Navalcarrier.ini.js');
  loader47.code()
  var loader48 = require('./units/Corvette.ini.js');
  loader48.code()
  var loader49 = require('./units/Destroyer.ini.js');
  loader49.code()
  var loader50 = require('./units/DreadNought.ini.js');
  loader50.code()
  var loader51 = require('./units/DreadNoughtC.ini.js');
  loader51.code()
  var loader52 = require('./units/Frigate.ini.js');
  loader52.code()
  var loader53 = require('./units/gun_boat.ini.js');
  loader53.code()
  var loader54 = require('./units/Heavy Destroyer.ini.js');
  loader54.code()
  var loader55 = require('./units/heavy_battleship.ini.js');
  loader55.code()
  var loader56 = require('./units/heavy_missile_ship.ini.js');
  loader56.code()
  var loader57 = require('./units/heavy_sub.ini.js');
  loader57.code()
  var loader58 = require('./units/missile_ship.ini.js');
  loader58.code()
  var loader59 = require('./units/nautilusLand.ini.js');
  loader59.code()
  var loader60 = require('./units/nautilusSurface.ini.js');
  loader60.code()
  var loader61 = require('./units/Newnautilus.ini.js');
  loader61.code()
  var loader62 = require('./units/reconsub.ini.js');
  loader62.code()
  var loader63 = require('./units/selenium.ini.js');
  loader63.code()
  var loader64 = require('./units/selenium_dived.ini.js');
  loader64.code()
  var loader65 = require('./units/sub_turret.ini.js');
  loader65.code()
  var loader66 = require('./units/sub_turret1.ini.js');
  loader66.code()
  var loader67 = require('./units/sub_turretT2.ini.js');
  loader67.code()
  var loader68 = require('./units/sub_turretT2Surfaced.ini.js');
  loader68.code()
  var loader69 = require('./units/sub_turretT3.ini.js');
  loader69.code()
  var loader70 = require('./units/sub_turretT3Surfaced.ini.js');
  loader70.code()
  var loader71 = require('./units/thunderhead.ini.js');
  loader71.code()
  var loader72 = require('./units/barracks.ini.js');
  loader72.code()
  var loader73 = require('./units/barracks2.ini.js');
  loader73.code()
  var loader74 = require('./units/barracks3.ini.js');
  loader74.code()
  var loader75 = require('./units/cyborgLow.ini.js');
  loader75.code()
  var loader76 = require('./units/xancommander.ini.js');
  loader76.code()
  var loader77 = require('./units/XanFly.ini.js');
  loader77.code()
  var loader78 = require('./units/ghost.ini.js');
  loader78.code()
  var loader79 = require('./units/phantom_cloaked.ini.js');
  loader79.code()
  var loader80 = require('./units/Hacker.ini.js');
  loader80.code()
  var loader81 = require('./units/Hacker_noFly.ini.js');
  loader81.code()
  var loader82 = require('./units/infantry_engineer.ini.js');
  loader82.code()
  var loader83 = require('./units/pegasus.ini.js');
  loader83.code()
  var loader84 = require('./units/pegasus_flying.ini.js');
  loader84.code()
  var loader85 = require('./units/infantry_rifle.ini.js');
  loader85.code()
  var loader86 = require('./units/infantry_hmg.ini.js');
  loader86.code()
  var loader87 = require('./units/infantry_hmg_deployed.ini.js');
  loader87.code()
  var loader88 = require('./units/mortar.ini.js');
  loader88.code()
  var loader89 = require('./units/infantry_heavy_at.ini.js');
  loader89.code()
  var loader90 = require('./units/infantry_missile.ini.js');
  loader90.code()
  var loader91 = require('./units/isniper.ini.js');
  loader91.code()
  var loader92 = require('./units/isniperinvis.ini.js');
  loader92.code()
  var loader93 = require('./units/isniper_sniper.ini.js');
  loader93.code()
  var loader94 = require('./units/transport_truck.ini.js');
  loader94.code()
  var loader95 = require('./units/mech_engineer.ini.js');
  loader95.code()
  var loader96 = require('./units/mechs_small_unique.ini.js');
  loader96.code()
  var loader97 = require('./units/paladinmech.ini.js');
  loader97.code()
  var loader98 = require('./units/ek_skirmisher_buffed.ini.js');
  loader98.code()
  var loader99 = require('./units/mechs_small_unique.ini.js');
  loader99.code()
  var loader100 = require('./units/skrimisher.ini.js');
  loader100.code()
  var loader101 = require('./units/mechs_small_unique.ini.js');
  loader101.code()
  var loader102 = require('./units/assault_mech.ini.js');
  loader102.code()
  var loader103 = require('./units/heavy_artillery_mech.ini.js');
  loader103.code()
  var loader104 = require('./units/heavy_artillery_mech_deployed.ini.js');
  loader104.code()
  var loader105 = require('./units/heavy_mech.ini.js');
  loader105.code()
  var loader106 = require('./units/heavy_mech_shield.ini.js');
  loader106.code()
  var loader107 = require('./units/heavy_mobile_turret.ini.js');
  loader107.code()
  var loader108 = require('./units/heavy_mobile_turret_deployed.ini.js');
  loader108.code()
  var loader109 = require('./units/heavy_mobile_turret_transition.ini.js');
  loader109.code()
  var loader110 = require('./units/heavy_mobile_turret_transition2.ini.js');
  loader110.code()
  var loader111 = require('./units/mech_large_common.ini.js');
  loader111.code()
  var loader112 = require('./units/mech_heavyMissile.ini.js');
  loader112.code()
  var loader113 = require('./units/mech_large_common.ini.js');
  loader113.code()
  var loader114 = require('./units/mechFactory.ini.js');
  loader114.code()
  var loader115 = require('./units/mechFactoryT2.ini.js');
  loader115.code()
  var loader116 = require('./units/mechFactoryT3.ini.js');
  loader116.code()
  var loader117 = require('./units/anti_air_mech.ini.js');
  loader117.code()
  var loader118 = require('./units/anti_air_mech_buffed.ini.js');
  loader118.code()
  var loader119 = require('./units/mechs_small_common.ini.js');
  loader119.code()
  var loader120 = require('./units/artillery_mech.ini.js');
  loader120.code()
  var loader121 = require('./units/mech_med_common.ini.js');
  loader121.code()
  var loader122 = require('./units/basic_mech.ini.js');
  loader122.code()
  var loader123 = require('./units/basic_mech_buffed.ini.js');
  loader123.code()
  var loader124 = require('./units/mechs_small_common.ini.js');
  loader124.code()
  var loader125 = require('./units/flame_mech.ini.js');
  loader125.code()
  var loader126 = require('./units/flame_spawner.ini.js');
  loader126.code()
  var loader127 = require('./units/mech_large_common.ini.js');
  loader127.code()
  var loader128 = require('./units/mech_med_common.ini.js');
  loader128.code()
  var loader129 = require('./units/minigun_mech.ini.js');
  loader129.code()
  var loader130 = require('./units/minigun_mech_powered.ini.js');
  loader130.code()
  var loader131 = require('./units/mech_large_common.ini.js');
  loader131.code()
  var loader132 = require('./units/mobile_turret.ini.js');
  loader132.code()
  var loader133 = require('./units/mobile_turret_deployed.ini.js');
  loader133.code()
  var loader134 = require('./units/mech_large_common.ini.js');
  loader134.code()
  var loader135 = require('./units/plasma_mech.ini.js');
  loader135.code()
  var loader136 = require('./units/plasma_mech_ammo_burst_UNUSED.ini.js');
  loader136.code()
  var loader137 = require('./units/mech_large_common.ini.js');
  loader137.code()
  var loader138 = require('./units/tesla_mech.ini.js');
  loader138.code()
  var loader139 = require('./units/powerup_effect.ini.js');
  loader139.code()
  var loader140 = require('./units/rocket_mech.ini.js');
  loader140.code()
  var loader141 = require('./units/rocket_mech_powered.ini.js');
  loader141.code()
  var loader142 = require('./units/Apocolypse_tank.ini.js');
  loader142.code()
  var loader143 = require('./units/experimental_SAM_tank.ini.js');
  loader143.code()
  var loader144 = require('./units/experimental_hovertank.ini.js');
  loader144.code()
  var loader145 = require('./units/experimental_mech.ini.js');
  loader145.code()
  var loader146 = require('./units/mecha_tortoise.ini.js');
  loader146.code()
  var loader147 = require('./units/mecha_tortoise_shell.ini.js');
  loader147.code()
  var loader148 = require('./units/flyingfortress.ini.js');
  loader148.code()
  var loader149 = require('./units/experimental_tank.ini.js');
  loader149.code()
  var loader150 = require('./units/experimental_tank_aa.ini.js');
  loader150.code()
  var loader151 = require('./units/experimental_tank_aa_open.ini.js');
  loader151.code()
  var loader152 = require('./units/fire_bee.ini.js');
  loader152.code()


  var loader156 = require('./units/moo_class_battleship.ini.js');
  loader156.code()
  var loader157 = require('./units/mothership.ini.js');
  loader157.code()
  var loader158 = require('./units/mothership_landed.ini.js');
  loader158.code()
  var loader159 = require('./units/experimental_spider.ini.js');
  loader159.code()
  var loader160 = require('./units/pcw.ini.js');
  loader160.code()
  var loader161 = require('./units/science_vessel.ini.js');
  loader161.code()
  var loader162 = require('./units/turret_quantum.ini.js');
  loader162.code()


  var loader165 = require('./units/mech_large_common.ini.js');
  loader165.code()
  var loader166 = require('./units/titan.ini.js');
  loader166.code()
  var loader167 = require('./units/Experimental_gunship.ini.js');
  loader167.code()

  var loader170 = require('./units/EAP_Main-phase.ini.js');
  loader170.code()
  var loader171 = require('./units/zeus.ini.js');
  loader171.code()
  var loader172 = require('./units/Chronoshift.ini.js');
  loader172.code()
  var loader173 = require('./units/combatEng_gunoff.ini.js');
  loader173.code()
  var loader174 = require('./units/combat_engineer.ini.js');
  loader174.code()
  var loader175 = require('./units/command_starter.ini.js');
  loader175.code()
  var loader176 = require('./units/command_t2.ini.js');
  loader176.code()
  var loader177 = require('./units/converter.ini.js');
  loader177.code()
  var loader178 = require('./units/credit_factory.ini.js');
  loader178.code()
  var loader179 = require('./units/credit_factoryt2.ini.js');
  loader179.code()
  var loader180 = require('./units/credit_factoryt3.ini.js');
  loader180.code()
  var loader181 = require('./units/creditsCrate.ini.js');
  loader181.code()
  var loader182 = require('./units/extractor_reinforced_t3.ini.js');
  loader182.code()
  var loader183 = require('./units/extractor_reinforced_t4.ini.js');
  loader183.code()
  var loader184 = require('./units/extractor_reinforced_t5.ini.js');
  loader184.code()
  var loader185 = require('./units/extractor_reinforced_t6.ini.js');
  loader185.code()
  var loader186 = require('./units/extractor_reinforced_t7.ini.js');
  loader186.code()
  var loader187 = require('./units/extractor_reinforced_t8.ini.js');
  loader187.code()
  var loader188 = require('./units/Extractor_T1.ini.js');
  loader188.code()
  var loader189 = require('./units/Extractor_T2.ini.js');
  loader189.code()
  var loader190 = require('./units/Extractor_T3.ini.js');
  loader190.code()
  var loader191 = require('./units/Extractor_T4.ini.js');
  loader191.code()
  var loader192 = require('./units/Extractor_T5.ini.js');
  loader192.code()
  var loader193 = require('./units/Extractor_T6.ini.js');
  loader193.code()
  var loader194 = require('./units/Extractor_T7.ini.js');
  loader194.code()
  var loader195 = require('./units/Extractor_T8.ini.js');
  loader195.code()
  var loader196 = require('./units/fabricatorT1.ini.js');
  loader196.code()
  var loader197 = require('./units/fabricatorT2.ini.js');
  loader197.code()
  var loader198 = require('./units/fabricatorT3.ini.js');
  loader198.code()
  var loader199 = require('./units/landmine_off.ini.js');
  loader199.code()
  var loader200 = require('./units/simple_mine.ini.js');
  loader200.code()
  var loader201 = require('./units/mega_builder.ini.js');
  loader201.code()
  var loader202 = require('./units/Nuclear.ini.js');
  loader202.code()
  var loader203 = require('./units/Oceanic Fabricator T2.ini.js');
  loader203.code()
  var loader204 = require('./units/Oceanic Fabricator T3.ini.js');
  loader204.code()
  var loader205 = require('./units/Oceanic Fabricator.ini.js');
  loader205.code()
  var loader206 = require('./units/radar.ini.js');
  loader206.code()
  var loader207 = require('./units/repairBay.ini.js');
  loader207.code()
  var loader208 = require('./units/repairBayT2.ini.js');
  loader208.code()
  var loader209 = require('./units/robotCrab.ini.js');
  loader209.code()
  var loader210 = require('./units/robotCrabWater.ini.js');
  loader210.code()
  var loader211 = require('./units/bunker_artillary.ini.js');
  loader211.code()
  var loader212 = require('./units/bunker_heavy_artillary.ini.js');
  loader212.code()
  var loader213 = require('./units/turret_antiair.ini.js');
  loader213.code()
  var loader214 = require('./units/turret_antiair_flakgun.ini.js');
  loader214.code()
  var loader215 = require('./units/turret_antiair_t2.ini.js');
  loader215.code()
  var loader216 = require('./units/turret_antiair_t3.ini.js');
  loader216.code()
  var loader217 = require('./units/heavyartillerycannon.ini.js');
  loader217.code()
  var loader218 = require('./units/lightartillerycannon.ini.js');
  loader218.code()
  var loader219 = require('./units/missile_turret.ini.js');
  loader219.code()
  var loader220 = require('./units/rocket_turret.ini.js');
  loader220.code()
  var loader221 = require('./units/ShredderAA.ini.js');
  loader221.code()
  var loader222 = require('./units/turret_antiair_flakgun.ini.js');
  loader222.code()

  var loader224 = require('./units/turret_t1.ini.js');
  loader224.code()
  var loader225 = require('./units/turret_t1_artillery.ini.js');
  loader225.code()
  var loader226 = require('./units/turret_t1_lightning.ini.js');
  loader226.code()
  var loader227 = require('./units/turret_t2_artillery.ini.js');
  loader227.code()
  var loader228 = require('./units/turret_t2_flame.ini.js');
  loader228.code()
  var loader229 = require('./units/turret_t2_gun.ini.js');
  loader229.code()
  var loader230 = require('./units/turret_t2_lightning.ini.js');
  loader230.code()
  var loader231 = require('./units/turret_t3_gun.ini.js');
  loader231.code()
  var loader232 = require('./units/OpenT1.ini.js');
  loader232.code()
  var loader233 = require('./units/OpenT2.ini.js');
  loader233.code()
  var loader234 = require('./units/wall.ini.js');
  loader234.code()
  var loader235 = require('./units/wallT2.ini.js');
  loader235.code()
  var loader236 = require('./units/explodeSFX.ini.js');
  loader236.code()
  
}
