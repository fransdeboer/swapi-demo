import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadStarshipss } from '../actions/starships.actions';
import * as fromStore from '../reducers';
import { getStarships } from '../selectors/starships.selectors';
import { Starship } from '../starship';

@Component({
  selector: 'app-starships-page',
  templateUrl: './starships-page.component.html',
  styleUrls: ['./starships-page.component.scss']
})
export class StarshipsPageComponent implements OnInit {

  starships$: Observable<Starship[]>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.starships$ = this.store.select(getStarships);
  }

  loadStarships() {
    this.store.dispatch(loadStarshipss());
  }

}
