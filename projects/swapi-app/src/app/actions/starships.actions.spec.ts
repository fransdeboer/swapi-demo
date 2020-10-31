import * as fromStarships from './starships.actions';

describe('loadStarshipss', () => {
  it('should return an action', () => {
    expect(fromStarships.loadStarshipss().type).toBe('[Starships] Load Starshipss');
  });
});
