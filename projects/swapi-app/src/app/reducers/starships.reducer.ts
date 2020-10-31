import { Action, createReducer, on } from '@ngrx/store';
import { loadStarshipssSuccess } from '../actions/starships.actions';
import { Starship } from '../starship';

export const starshipsFeatureKey = 'starships';

export interface StarshipsState {
  starships: Starship[];
}

export const initialState: StarshipsState = {
  starships: []
};

export const starshipsReducer = createReducer(
  initialState,
  on(loadStarshipssSuccess, (state, action) => ({ ...state, starships: action.starships }))
);

export function reducer(state: StarshipsState | undefined, action: Action) {
  return starshipsReducer(state, action);
}
