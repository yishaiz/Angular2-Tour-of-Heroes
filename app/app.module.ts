import {NgModule}      from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HeroesComponent} from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';

import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}  from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
