import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(player1: Fighter, private player2: Fighter) { // player2 é passado e inicializado aqui. não colocava private em outras situações deste trabalho porque colocava this._atributo = param
    super(player1); // player1 torna-se player porque pega do Battle
  }

  fight(): number {
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