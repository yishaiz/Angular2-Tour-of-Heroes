import {Routes, RouterModule} from '@angular/router';

import {HeroesComponent} from "./heroes.component";
import {HeroDetailComponent} from "./hero-detail.component";

const heroeRoutes: Routes  = [
  {path: 'heroes', component: HeroesComponent},
  {path: 'hero/:id', component: HeroDetailComponent}
];

export const heroesRouting = RouterModule.forChild(heroeRoutes);

