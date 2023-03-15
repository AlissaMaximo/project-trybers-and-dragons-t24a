"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Battle_1 = require("./Battle");
class PVE extends Battle_1.default {
    constructor(_character, _enemies) {
        super(_character); // character torna-se player porque pega do Battle
        this._character = _character;
        this._enemies = _enemies;
        this.standingEnemies = this._enemies
            .filter((_enemy) => _enemy.lifePoints > 0);
    }
    attackEnemy(enemy) {
        this.player.attack(enemy);
    }
    fight() {
        while (this.player.lifePoints > -1 && this.standingEnemies.length) {
            this.standingEnemies.forEach((currentEnemy) => {
                this.player.attack(currentEnemy);
                if (currentEnemy.lifePoints > -1)
                    currentEnemy.attack(this.player);
            });
        }
        return super.fight();
    }
}
exports.default = PVE;
