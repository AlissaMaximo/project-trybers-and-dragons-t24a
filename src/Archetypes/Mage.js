"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Mage extends Archetype_1.default {
    constructor(name) {
        super(name);
        Mage._instance += 1;
        this._mageEnergyType = 'mana';
    }
    get energyType() {
        return this._mageEnergyType;
    }
    static createdArchetypeInstances() {
        return this._instance; // retorna _instance para a classe Archetype
    }
}
Mage._instance = 0;
exports.default = Mage;
