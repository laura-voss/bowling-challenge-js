const Game = require('./game');

describe('game', () => {
  beforeEach(() => {
    game = new Game();
  });
  
  it('returns an array of rolls for each new game', () => {
    // game = new Game();
    game.roll(1);
    game.roll(4);
    expect(this.rolls).toEqual [1, 4];
  });

  // 1 - Gutter Game
  it('returns 0 when player rolls Gutter Game', () => {
    for (let i = 0 ; i < 20 ; i++)  {
      game.roll(0);
    }
    expect(game.calculateScore()).toBe(0);
  });

  // 2 - All Ones
  it('returns 20 when the player rolls game of all ones', () => {
    for (let i = 0 ; i < 20 ; i++)  {
      game.roll(1);
    }
    expect(game.calculateScore()).toBe(20);
  });

  // 3 - Spare and Ones
  it('returns 29 when the player rolls one spare and the rest all ones', () => {
    game.roll(5);
    game.roll(5);
    for (let i = 0 ; i < 18 ; i++)  {
      game.roll(1);
    }
    expect(game.calculateScore()).toBe(29);
  });
}); 
