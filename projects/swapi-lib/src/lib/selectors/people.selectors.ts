import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PeopleState, peopleFeatureKey } from '../reducers/people.reducer';

export const getPeopleState = createFeatureSelector<PeopleState>(peopleFeatureKey);

export const getPersons = createSelector(getPeopleState, state => state.persons);
