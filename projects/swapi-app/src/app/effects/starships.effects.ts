import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { loadStarshipss, loadStarshipssSuccess } from '../actions/starships.actions';
import { Sharships } from '../starship';
import { exhaustMap, map } from 'rxjs/operators';

@Injectable()
export class StarshipsEffects {

  constructor(private actions$: Actions, private readonly http: HttpClient) { }

  loadStarships$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadStarshipss),
      exhaustMap(() =>
        this.http.get<Sharships>('https://swapi.dev/api/starships/').pipe(
          map(starships => loadStarshipssSuccess({ starships: starships.results }))
        )
      )
    )
  );

}
