var roleHarvester = require('role.harvester');
var roleBuilder = require('role.builder');
var roleUpgrader = require('role.upgrader');
var roleRepairer = require('role.repairer');
var roleAttacker = require('role.attacker');
var roleClaimer = require('role.claimer')
var spawner = require('spawner');
var buildings = require('builder');

module.exports.loop = function () {
    
    
    /* Löscht die Memory der Creeps*/
    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
        }
    }
    
    spawner.run();
    buildings.run();
    
    /* Lässt die verschiedenen Module laufen*/
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        if(creep.memory.role == 'upgrader'){
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'repairer'){
            roleRepairer.run(creep);
        }
        if(creep.memory.role == 'attacker'){
            roleAttacker.run(creep);
        }
        if(creep.memory.role == 'claimer'){
            roleClaimer.run(creep);
        }
    }
    
}
