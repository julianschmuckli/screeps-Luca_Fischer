/*
* Module code goes here. Use 'module.exports' to export things:
* module.exports.thing = 'a thing';
*
* You can import it from another modules like this:
* var mod = require('role.attacker');
* mod.thing == 'a thing'; // true
*/

var roleAttacker = {
    run: function(creep){
        if(creep.room != Game.spawns.Spawn.room) {
            var attacker = creep;
            var enemies = attacker.room.find(FIND_HOSTILE_CREEPS);
            attacker.moveTo(enemies[0]);
            attacker.attack(enemies[0]);
            console.log(enemies);
        }else{
            creep.moveTo(26,0);
        }
    }
};


module.exports = roleAttacker;
