import {NgModule}      from '@angular/core';
import {BrowserModule}      from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import {AppComponent}  from './app.component';
import {routing, appRoutingProviders} from './app.routing';

import { HeroesModule} from './Heroes/heroes.module';
import { MoviesModule} from './Movies/movies.module';

import {HeroesComponent} from './Heroes/heroes.component';
// import {HeroDetailComponent} from './Heroes/hero-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HeroesModule,
    MoviesModule
  ],
  declarations: [
    AppComponent
    /*,
     HeroesComponent
     HeroDetailComponent
    */
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
