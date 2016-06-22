/*
* Module code goes here. Use 'module.exports' to export things:
* module.exports.thing = 'a thing';
*
* You can import it from another modules like this:
* var mod = require('spawner');
* mod.thing == 'a thing'; // true
*/

var spawner = {
        run: function() {
                /* Zählt harvester */
                var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester'  && creep.memory.source == 0);
    
                /* Zählt upgrader*/
                var upgrader = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    
                /* Zählt builder*/
                var builder = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
                
                /* Zählt harvester2*/
                var harvesters2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester' && creep.memory.source == 1);
                
                /* Zählt repairer*/
                var repairer = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer');
                
                /* Zählt Attacker*/
                var attacker =  _.filter(Game.creeps, (creep) => creep.memory.role == 'attacker');
                
                /* Zählt Claimer */
                var claimer = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer');
                
                
                if(repairer.length < 2){
                    var newName = Game.spawns.Spawn.createCreep([WORK, WORK, CARRY, MOVE, MOVE], undefined, {role: 'repairer'});
                }
                
                if(attacker.length <2){
                    var newName = Game.spawns.Spawn.createCreep([ATTACK, ATTACK, WORK, MOVE, MOVE, MOVE], undefined, {role: 'attacker'});
                }/*
                if(claimer.length <1){
                    var newName = Game.spawns.Spawn.createCreep([CLAIM, MOVE, MOVE], undefined, {role: 'claimer'});
                }*/
            
                if(upgrader.length < 1){
                    var newName = Game.spawns.Spawn.createCreep([WORK, CARRY, CARRY, CARRY, MOVE], undefined, {role: 'upgrader'});
                }
                
                if(builder.length < 5){
                    var newName = Game.spawns.Spawn.createCreep([WORK, CARRY, CARRY, MOVE, MOVE], undefined, {role: 'builder'});
                } 
                
                if(harvesters.length < 8) {
                    var newName = Game.spawns.Spawn.createCreep([WORK, CARRY, CARRY, MOVE, MOVE], undefined, {role: 'harvester', source: 0});
                }
                if(harvesters2.length < 8) {
                    var newName = Game.spawns.Spawn.createCreep([WORK, CARRY, CARRY, CARRY, MOVE], undefined, {role: 'harvester', source: 1});
                    
                }
        }
}; 

module.exports = spawner;
