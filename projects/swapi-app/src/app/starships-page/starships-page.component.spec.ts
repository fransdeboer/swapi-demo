import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipsPageComponent } from './starships-page.component';
import { Store, StoreModule } from '@ngrx/store';

describe('StarshipsPageComponent', () => {
  let component: StarshipsPageComponent;
  let fixture: ComponentFixture<StarshipsPageComponent>;
  let store: Store;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ StarshipsPageComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarshipsPageComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
