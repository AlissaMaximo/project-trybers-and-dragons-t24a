import Fighter, { SimpleFighter } from '../Fighter';
import Character from '../Character';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private _character: Character,
    private _enemies: Array<Fighter | SimpleFighter>,
  ) {
    super(_character); // character torna-se player porque pega do Battle
  }

  private standingEnemies: Array<Fighter | SimpleFighter> = this._enemies
    .filter((_enemy) => _enemy.lifePoints > 0);

  fight(): number {
    while (this.player.lifePoints > -1 && this.standingEnemies.length) {
      this.standingEnemies.forEach((currentEnemy) => this.player.attack(currentEnemy));
    }

    if (this.player.lifePoints === -1) {
      return -1;
    } 
    return 1;
  }
}