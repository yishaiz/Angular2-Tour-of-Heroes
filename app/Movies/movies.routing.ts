import {Routes, RouterModule} from '@angular/router';

import {AboutMovies} from "./about-movies";
import {MoviesList} from "./movies-list";

const moviesRoutes: Routes = [
  {path: 'movies', component: MoviesList},
  {path: 'movies/about', component: AboutMovies},
];

export const moviesRouting = RouterModule.forChild(moviesRoutes);

