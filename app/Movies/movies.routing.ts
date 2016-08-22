import {Routes, RouterModule} from '@angular/router';

import {MoviesList} from './movies-list';
import {AboutMovies} from './about-movies';

const moviesRoutes = [
  {path: 'movies', component: MoviesList},
  {path: 'movies/about', component: AboutMovies}
];

export const moviesRouting = RouterModule.forChild(moviesRoutes);

