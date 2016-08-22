import {NgModule}      from '@angular/core';
import {BrowserModule}      from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import {AppComponent}  from './app.component';
import {routing, appRoutingProviders} from './app.routing';


import {HeroesComponent} from './Heroes/heroes.component';
import {HeroDetailComponent} from './Heroes/hero-detail.component';



// import { }      from './Heroes/heroes.module';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
