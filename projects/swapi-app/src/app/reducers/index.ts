import { ActionReducerMap } from '@ngrx/store';
import { reducer, StarshipsState } from './starships.reducer';

export interface AppState {
    starships: StarshipsState;
}

export const reducers: ActionReducerMap<AppState> = {
    starships: reducer
};
