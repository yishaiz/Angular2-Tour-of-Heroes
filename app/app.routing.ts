import {Routes, RouterModule} from '@angular/router';

import {DashboardComponent} from "./dashboard.component";
import {PageNotFoundComponent} from "./page-not-found.component";
import {AnotherComponent} from "./Another/another.component";

import {heroesRouting} from "./Heroes/heroes.routing";
import {moviesRouting} from "./Movies/movies.routing";
import {anotherRouting} from "./Another/another.routing";


const appRoutes = [
  {path: 'dashboard', component: DashboardComponent},
  /*
   {path: 'heroes', component: HeroesComponent},
   {path: 'hero/:id', component: HeroDetailComponent},
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
  /*
   {path: 'movies', component: MoviesList},
   {path: ' movies/about', component: AboutMovies},
   */
  {path: '**', component: PageNotFoundComponent}
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(appRoutes);

