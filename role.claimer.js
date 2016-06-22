/*
* Module code goes here. Use 'module.exports' to export things:
* module.exports.thing = 'a thing';
*
* You can import it from another modules like this:
* var mod = require('role.claimer');
* mod.thing == 'a thing'; // true
*/
var roleClaimer = {
    run: function(creep){
        creep.say('HI');
        creep.moveTo(0, 35);
            /*if(creep.room.controller != creep.room.controller.my) {
                //creep.say(creep.attackController(creep.room.controller));
                    if(creep.attackController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                        creep.say("h");
                        creep.moveTo(creep.room.controller);
                     }
            }*/
    }
}
    
module.exports = roleClaimer
