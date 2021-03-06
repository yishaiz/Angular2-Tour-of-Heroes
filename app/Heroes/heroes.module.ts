import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {heroesRouting} from './heroes.routing';


import {HeroesComponent} from "./heroes.component";
import {HeroDetailComponent} from "./hero-detail.component";
import {HeroesOrderbyComponent} from "./heroes.orderby.component";
// import {HeroService} from "./hero.service";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    heroesRouting
  ],
  declarations: [
    HeroesComponent,
    HeroesOrderbyComponent,
    HeroDetailComponent
  ],
  providers: [
    // HeroService
  ]
})
export class HeroesModule {

}
