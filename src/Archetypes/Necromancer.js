"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Necromancer extends Archetype_1.default {
    constructor(name) {
        super(name);
        Necromancer._instance += 1;
        this._necromancerEnergyType = 'mana';
    }
    get energyType() {
        return this._necromancerEnergyType;
    }
    static createdArchetypeInstances() {
        return this._instance; // retorna _instance para a classe Archetype
    }
}
Necromancer._instance = 0;
exports.default = Necromancer;
