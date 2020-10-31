import { starshipsReducer, initialState } from './starships.reducer';

describe('Starships Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = starshipsReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
