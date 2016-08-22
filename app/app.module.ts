///<reference path="../node_modules/@angular/router/src/config.d.ts"/>
import {NgModule}      from '@angular/core';
import {BrowserModule}      from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import {AppComponent}  from './app.component';

// import {HeroesComponent} from './Heroes/heroes.component';
// import {HeroDetailComponent} from './Heroes/hero-detail.component';


import {HeroesModule} from './Heroes/heroes.module';


 import { appRoutingProviders} from './app.routing';
// import {RouterModule, Routes, Router} from "@angular/router";
// import {app?RoutingProviders} from "./app.routing";

import {heroesRouting} from "./Heroes/heroes.routing";




@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    // RouterModule,
    heroesRouting,
    HeroesModule,
    // Routes
    // routing
  ],
  declarations: [
    AppComponent
    // ,
    // HeroesComponent,
    // HeroDetailComponent
  ],
  providers: [
    appRoutingProviders

  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
