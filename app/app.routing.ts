import {Routes, RouterModule} from '@angular/router';

import {DashboardComponent} from "./Dashboard/dashboard.component";
import {AnotherComponent} from "./Another/another.component";

import {HeroesComponent} from "./Heroes/heroes.component";
import {HeroDetailComponent} from "./Heroes/hero-detail.component";

import {MoviesList} from "./Movies/movies-list";
import {AboutMovies} from "./Movies/about-movies";

import {PageNotFoundComponent} from "./page-not-found.component";

// import {heroesRouting} from "./Heroes/heroes.routing";
// import {moviesRouting} from "./Movies/movies.routing";
// import {anotherRouting} from "./Another/another.routing";

const appRoutes = [
  {path: 'dashboard', component: DashboardComponent},

  {path: 'heroes', component: HeroesComponent},
  {path: 'hero/:id', component: HeroDetailComponent},

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

  {path: 'movies', component: MoviesList},
  {path: 'movies/about', component: AboutMovies},
  /* */
  {path: '**', component: PageNotFoundComponent}
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(appRoutes);
