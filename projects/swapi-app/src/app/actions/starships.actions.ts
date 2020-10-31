import { createAction, props } from '@ngrx/store';
import { Starship } from '../starship';

export const loadStarshipss = createAction(
  '[Starships] Load Starshipss'
);

export const loadStarshipssSuccess = createAction(
  '[Starships] Load Starshipss Success',
  props<{ starships: Starship[] }>()
);

export const loadStarshipssFailure = createAction(
  '[Starships] Load Starshipss Failure',
  props<{ error: any }>()
);
