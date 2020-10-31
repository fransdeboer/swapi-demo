import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { StarshipsEffects } from './starships.effects';

describe('StarshipsEffects', () => {
  let actions$: Observable<any>;
  let effects: StarshipsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StarshipsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(StarshipsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
