/*
* Module code goes here. Use 'module.exports' to export things:
* module.exports.thing = 'a thing';
*
* You can import it from another modules like this:
* var mod = require('builder');
* mod.thing == 'a thing'; // true
*/

 
var buildings = {
    run: function(){
       
                var pos = Game.spawns.Spawn.room.findPath(Game.spawns.Spawn.pos, Game.spawns.Spawn.room.find(FIND_SOURCES)[1].pos,{ignoreCreeps: true, ignoreRoads: true});
                for(var a in pos){
                    Game.spawns.Spawn.room.createConstructionSite(pos[a].x,pos[a].y,STRUCTURE_ROAD);
                }
                
                var pos = Game.spawns.Spawn.room.findPath(Game.spawns.Spawn.pos, Game.spawns.Spawn.room.find(FIND_SOURCES)[0].pos,{ignoreCreeps: true, ignoreRoads: true});
                for(var a in pos){
                    Game.spawns.Spawn.room.createConstructionSite(pos[a].x,pos[a].y,STRUCTURE_ROAD);
                }
                
                var pos = Game.spawns.Spawn.room.findPath(Game.spawns.Spawn.pos, Game.spawns.Spawn.room.find(FIND_SOURCES)[3].pos,{ignoreCreeps: true, ignoreRoads: true});
                for(var a in pos){
                    Game.spawns.Spawn.room.createConstructionSite(pos[a].x,pos[a].y,STRUCTURE_ROAD);
                }
                var pos = Game.spawns.Spawn.room.findPath(Game.spawns.Spawn.pos, Game.spawns.Spawn.room.find(FIND_SOURCES)[2].pos,{ignoreCreeps: true, ignoreRoads: true});
                for(var a in pos){
                    Game.spawns.Spawn.room.createConstructionSite(pos[a].x,pos[a].y,STRUCTURE_ROAD);
                }
                
                var pos = Game.spawns.Spawn.room.findPath(Game.spawns.Spawn.pos, Game.rooms.sim.controller.pos,{ignoreCreeps: true, ignoreRoads: true});
                for(var a in pos){
                    Game.spawns.Spawn.room.createConstructionSite(pos[a].x,pos[a].y,STRUCTURE_ROAD);
                }
                



       
    }
}
module.exports = buildings;
