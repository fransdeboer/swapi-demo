import { createAction, props } from '@ngrx/store';
import { Person } from '../people';

export const loadPeople = createAction(
  '[People] Load People'
);

export const loadPeopleSuccess = createAction(
  '[People] Load People Success',
  props<{ persons: Person[] }>()
);

export const loadPeopleFailure = createAction(
  '[People] Load People Failure',
  props<{ error: any }>()
);
