import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { StarshipsEffects } from './effects/starships.effects';
import { reducers } from './reducers';
import { StarshipsPageComponent } from './starships-page/starships-page.component';

@NgModule({
  declarations: [
    AppComponent,
    StarshipsPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
        strictActionWithinNgZone: true,
        strictActionTypeUniqueness: true
      },
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([StarshipsEffects]),
    // StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    // StoreModule.forFeature(fromStarships.starshipsFeatureKey, fromStarships.reducer),
    // EffectsModule.forFeature([StarshipsEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
