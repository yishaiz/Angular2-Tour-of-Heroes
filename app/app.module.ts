import {NgModule}      from '@angular/core';
import {BrowserModule}      from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import {AppComponent}  from './app.component';
import {routing, appRoutingProviders} from './app.routing';

import { HeroesModule} from './Heroes/heroes.module';
import { MoviesModule} from './Movies/movies.module';
import {  AdminModule} from './Admin/admin.module';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HeroesModule,
    MoviesModule,
    AdminModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
