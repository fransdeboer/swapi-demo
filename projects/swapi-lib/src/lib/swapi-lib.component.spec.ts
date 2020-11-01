import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapiLibComponent } from './swapi-lib.component';

describe('SwapiLibComponent', () => {
  let component: SwapiLibComponent;
  let fixture: ComponentFixture<SwapiLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwapiLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapiLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
