"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Warrior extends Archetype_1.default {
    constructor(name) {
        super(name);
        Warrior._instance += 1;
        this._WarriorEnergyType = 'stamina';
    }
    get energyType() {
        return this._WarriorEnergyType;
    }
    static createdArchetypeInstances() {
        return this._instance; // retorna _instance para a classe Archetype
    }
}
Warrior._instance = 0;
exports.default = Warrior;
