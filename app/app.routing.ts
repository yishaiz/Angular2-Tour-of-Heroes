import {Routes, RouterModule} from '@angular/router';

import {DashboardComponent} from "./Dashboard/dashboard.component";
import {AnotherComponent} from "./Another/another.component";

/*
 */
import { AdminComponent} from "./Admin/admin.component";
import {  AuthenticatedComponent} from "./Authenticated/authenticated.component";


import {PageNotFoundComponent} from "./page-not-found.component";

import {HeroDetailComponent} from "./Heroes/hero-detail.component";
import {HeroesComponent} from "./Heroes/heroes.component";
import {MoviesListComponent} from "./Movies/movies-list";
import {AboutMoviesComponent} from "./Movies/about-movies";

const appRoutes = [
  {path: 'dashboard', component: DashboardComponent},

 /* {path: 'heroes', component: HeroesComponent},
  {path: 'hero/:id', component: HeroDetailComponent},
  {path: 'movies', component: MoviesListComponent},
  {path: 'movies/about', component: AboutMoviesComponent},
  */
  /*
   ...heroesRouting,
   ...moviesRouting,
   ...anotherRouting,
   */

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
