import {Routes, RouterModule} from '@angular/router';

import {DashboardComponent} from "./dashboard.component";
import {HeroesComponent} from "./heroes.component";
import {HeroDetailComponent} from "./hero-detail.component";
import {PageNotFoundComponent} from "./page-not-found.component";
import {AnotherComponent} from "./another.component";


const appRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'hero/:id', component: HeroDetailComponent},
  {
    path: 'another',
    component: AnotherComponent,
    data: {
      name: 'yishai'
    }
  },

  {path: '**', component: PageNotFoundComponent}
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(appRoutes);

