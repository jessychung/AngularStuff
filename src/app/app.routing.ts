import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CatComponent} from './cat.component';

const appRoutes: Routes = [
  {
    path: 'cats',
    component: CatComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
