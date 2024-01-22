export class Connect4 {
  current:number;
  grid: any[];
  rows:number;
  columns: number;
  gridOcu: any[];
  winner: string;

  constructor() {
    this.current = 1;
    this.grid = [];
    this.rows = 7;
    this.columns = 6;
    for (let i = 0; i < this.columns; i++) {
      this.grid[i] = new Array(7);
    }
    this.winner = '';
    this.gridOcu = [6,6,6,6,6,6];
  }

  play(col: number): string{
    if(this.winner.length > 0) return 'Game has finished!'
    this.grid[col][this.gridOcu[col]] = this.current;

    if (this.gridOcu[col] != 0)
      this.gridOcu[col] = this.gridOcu[col] - 1;
    else return 'Column full!'

    let ganador = this.searchWinner();
    this.winner = ganador;
    if (ganador.length > 0) return ganador;

    let mensaje = 'Player ' + this.current + ' has a turn'
    if (this.current == 1) this.current++;
    else this.current--;
    return mensaje;
  }

  searchWinner() {
    let cont1 = 0;
    let cont2 = 0;
    for (let i = 0; i < this.columns; i++) {
      cont1 = 0;
      cont2 = 0;
      for (let j = 0; j < this.rows; j++){
        if (this.grid[i][j] == 1) cont1++;
        else cont1 = 0;
        if (cont1 == 4) return 'Player 1 wins!';

        if(this.grid[i][j] == 2) cont2++;
        else cont2 = 0
        if(cont2 == 4) return 'Player 2 wins!'
      }
    }
    for (let i = 0; i < this.rows; i++) {
      cont1 = 0;
      cont2 = 0;
      for (let j = 0; j < this.columns; j++){
        if (this.grid[j][i] == 1) cont1++;
        else cont1 = 0;
        if (cont1 == 4) return 'Player 1 wins!';

        if(this.grid[j][i] == 2) cont2++;
        else cont2 = 0
        if(cont2 == 4) return 'Player 2 wins!'
      }
    }
    return '';
  }

}