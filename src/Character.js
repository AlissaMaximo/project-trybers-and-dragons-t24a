"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Races_1 = require("./Races");
const Archetypes_1 = require("./Archetypes");
const utils_1 = require("./utils");
class Character {
    constructor(name) {
        this._dexterity = Math.floor(Math.random() * 11); // Cálculo daqui: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
        this._race = new Races_1.Elf(name, this._dexterity);
        this._archetype = new Archetypes_1.Mage(name);
        this._maxLifePoints = (this._race.maxLifePoints / 2); // como a raça já foi setada, o maxLifePoints da raça pode ser pego
        this._lifePoints = this._maxLifePoints; // "lifePoints por padrão com o mesmo valor de maxLifePoints da classe" <- 'da classe' significa da classe atual, ou especificaria da classe de raça
        this._strength = Math.floor(Math.random() * 11);
        this._defense = Math.floor(Math.random() * 11);
        this._energy = {
            type_: this._archetype.energyType,
            amount: Math.floor(Math.random() * 11),
        };
    }
    get race() { return this._race; }
    get archetype() { return this._archetype; }
    get lifePoints() { return this._lifePoints; }
    get maxLifePoints() { return this._maxLifePoints; }
    get strength() { return this._strength; }
    get defense() { return this._defense; }
    get dexterity() { return this._dexterity; }
    get energy() { return Object.assign({}, this._energy); } // traz o que tem dentro (...) do objeto energy, e então coloca de volta em um objeto aqui
    receiveDamage(attackPoints) {
        const damage = attackPoints - this.defense;
        if (damage > 0)
            this._lifePoints -= damage;
        if (this._lifePoints - damage <= 0)
            this._lifePoints = -1;
        return this._lifePoints;
    }
    attack(enemy) {
        enemy.receiveDamage(this._strength);
    }
    levelUp() {
        this._maxLifePoints += (0, utils_1.default)(1, 10);
        if (this._maxLifePoints > this._race.maxLifePoints) {
            this._maxLifePoints = this._race.maxLifePoints;
        }
        this._lifePoints = this._maxLifePoints;
        this._strength += (0, utils_1.default)(1, 10);
        this._dexterity += (0, utils_1.default)(1, 10);
        this._defense += (0, utils_1.default)(1, 10);
        this._energy.amount = 10;
    }
    special(enemy) {
        enemy.receiveDamage(this._strength * 1.5);
    }
}
exports.default = Character;
