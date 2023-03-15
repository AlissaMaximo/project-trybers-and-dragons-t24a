"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Ranger extends Archetype_1.default {
    constructor(name) {
        super(name);
        Ranger._instance += 1;
        this._RangerEnergyType = 'stamina';
    }
    get energyType() {
        return this._RangerEnergyType;
    }
    static createdArchetypeInstances() {
        return this._instance; // retorna _instance para a classe Archetype
    }
}
Ranger._instance = 0;
exports.default = Ranger;
