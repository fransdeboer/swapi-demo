import { createFeatureSelector, createSelector } from '@ngrx/store';
import { starshipsFeatureKey, StarshipsState } from '../reducers/starships.reducer';

export const getStarshipsState = createFeatureSelector<StarshipsState>(starshipsFeatureKey);

export const getStarships = createSelector(getStarshipsState, state => state.starships);
