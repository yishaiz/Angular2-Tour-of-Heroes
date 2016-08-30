import {NgModule}      from '@angular/core';
import {BrowserModule}      from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import {AppComponent}  from './app.component';
import {routing, appRoutingProviders} from './app.routing';

import {HeroesModule} from './Heroes/heroes.module';
import {MoviesModule} from './Movies/movies.module';
import {AdminModule} from './Admin/admin.module';
import {AuthenticatedModule} from './Authenticated/authenticated.module';
import {HeroService} from "./Heroes/hero.service";
import {PipeModule} from "./Pipes/pipe.module";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HeroesModule,
    MoviesModule,
    AdminModule,
    AuthenticatedModule,
    PipeModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    appRoutingProviders,
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
