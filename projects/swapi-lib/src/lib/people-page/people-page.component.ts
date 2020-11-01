import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadPeople } from '../actions/people.actions';
import { Person } from '../people';
import { getPersons } from '../selectors/people.selectors';

@Component({
  selector: 'lib-people-page',
  templateUrl: './people-page.component.html',
  styleUrls: ['./people-page.component.scss']
})
export class PeoplePageComponent implements OnInit {

  persons$: Observable<Person[]>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.persons$ = this.store.select(getPersons);
  }

  loadPeople() {
    this.store.dispatch(loadPeople());
  }

}
