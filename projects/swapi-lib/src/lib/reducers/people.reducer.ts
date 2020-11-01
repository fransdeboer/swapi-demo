import { Action, createReducer, on } from '@ngrx/store';
import { loadPeopleSuccess } from '../actions/people.actions';
import { Person } from '../people';

export const peopleFeatureKey = 'people';

export interface PeopleState {
  persons: Person[];
}

export const initialState: PeopleState = {
  persons: []
};

export const peopleReducer = createReducer(
  initialState,
  on(loadPeopleSuccess, (state, action) => ({ ...state, persons: action.persons }))
);

export function reducer(state: PeopleState | undefined, action: Action) {
  return peopleReducer(state, action);
}
