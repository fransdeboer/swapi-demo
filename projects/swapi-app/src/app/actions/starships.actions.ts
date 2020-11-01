import { createAction, props } from '@ngrx/store';
import { Starship } from '../starship';

export const loadStarshipss = createAction(
  '[Starships] Load Starshipss app'
);

export const loadStarshipssSuccess = createAction(
  '[Starships] Load Starshipss Success app',
  props<{ starships: Starship[] }>()
);

export const loadStarshipssFailure = createAction(
  '[Starships] Load Starshipss Failure app',
  props<{ error: any }>()
);
