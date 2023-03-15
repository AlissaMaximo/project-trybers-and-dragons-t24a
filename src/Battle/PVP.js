"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Battle_1 = require("./Battle");
class PVP extends Battle_1.default {
    constructor(player1, player2) {
        super(player1); // player1 torna-se player porque pega do Battle
        this.player2 = player2;
    }
    fight() {
        while (this.player.lifePoints > -1 && this.player2.lifePoints > -1) {
            this.player.attack(this.player2);
            this.player2.attack(this.player);
        }
        if (this.player.lifePoints === -1) {
            return -1;
        }
        return 1;
    }
}
exports.default = PVP;
