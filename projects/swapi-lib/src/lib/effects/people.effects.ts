import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { loadPeople, loadPeopleSuccess } from '../actions/people.actions';
import { People } from '../people';
import { exhaustMap, map } from 'rxjs/operators';

@Injectable()
export class PeopleEffects {

  constructor(private actions$: Actions, private readonly http: HttpClient) { }

  loadPeople$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPeople),
      exhaustMap(() =>
        this.http.get<People>('https://swapi.dev/api/people/').pipe(
          map(people => loadPeopleSuccess({ persons: people.results }))
        )
      )
    )
  );

}
