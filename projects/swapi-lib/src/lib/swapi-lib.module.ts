import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PeopleEffects } from './effects/people.effects';
import { PeoplePageComponent } from './people-page/people-page.component';
import { peopleFeatureKey, reducer } from './reducers/people.reducer';


@NgModule({
  declarations: [PeoplePageComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(peopleFeatureKey, reducer),
    EffectsModule.forFeature([PeopleEffects])
  ],
  exports: [PeoplePageComponent]
})
export class SwapiLibModule { }
