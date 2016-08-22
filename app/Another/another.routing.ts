import {Routes, RouterModule} from '@angular/router';

import { AnotherComponent} from './another.component';

const anotherRoutes = [
  {path: 'another', component: AnotherComponent}
];

export const anotherRouting = RouterModule.forChild(anotherRoutes);

