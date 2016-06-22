/*
* Module code goes here. Use 'module.exports' to export things:
* module.exports.thing = 'a thing';
*
* You can import it from another modules like this:
* var mod = require('role.repairer');
* mod.thing == 'a thing'; // true
*/

var roleRepairer = {

    /** @param {Creep} creep **/
    run: function(creep) {
                    if (0 == creep.carry.energy) {
                        
                        var loc = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_EXTENSION ||
                            structure.structureType == STRUCTURE_SPAWN ||
                            structure.structureType == STRUCTURE_STORAGE ||
                            structure.structureType == STRUCTURE_CONTAINER ||
                           structure.structureType == STRUCTURE_TOWER) && structure.energy > structure.energyCapacity / 2;
                }
            });
            
                        if(loc.length != 0){
                            if(loc[0].transferEnergy(creep) == ERR_NOT_IN_RANGE){
                                creep.moveTo(loc[0]);
                            }
                        }
                        
                    } else {
                        var torepair = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                            filter: function(object) {
                                if(object.hits > object.hitsMax / 2) {
                                    return false;
                                }
                                return true;
                            }
            });
            
            creep.moveTo(torepair);
            creep.repair(torepair);
                    }
                }
};

module.exports = roleRepairer;
