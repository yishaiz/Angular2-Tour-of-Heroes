import {Routes, RouterModule} from '@angular/router';
import { HeroesComponent}    from './heroes.component';
import {HeroDetailComponent}  from './hero-detail.component';
import {HeroesOrderbyComponent} from "./heroes.orderby.component";

const heroesRoutes: Routes = [
  {path: 'heroes', component: HeroesComponent},
  {path: 'heroes-orderby', component: HeroesOrderbyComponent},
  {path: 'hero/:id', component: HeroDetailComponent}
];

export const heroesRouting = RouterModule.forChild(heroesRoutes);

