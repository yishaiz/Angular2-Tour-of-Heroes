import {heroesRouting} from './heroes.routing';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HeroesComponent} from "./heroes.component";
import {HeroDetailComponent} from "./hero-detail.component";
import {HeroService} from "./hero.service";

@NgModule({

  imports:[
    // CommonModule,
    // FormsModule,
    heroesRouting
  ],
  declaration:[
    HeroesComponent,
    HeroDetailComponent
  ],
  providers:[HeroService]
})
