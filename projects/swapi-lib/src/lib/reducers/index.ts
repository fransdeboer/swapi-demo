import { ActionReducerMap } from '@ngrx/store';
import { PeopleState, reducer } from './people.reducer';

export interface State {
    peopleFeature: PeopleFeatureState;
}


export interface PeopleFeatureState {
    people: PeopleState;
}


export const reducers: ActionReducerMap<PeopleFeatureState> = {
    people: reducer
};
