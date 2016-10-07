import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CatComponent} from './cat.component';
import {DashboardComponent} from "./dashboard.component";
import {CatDetailComponent} from "./cat-detail.component";

const appRoutes: Routes = [
  {
    path: 'cats',
    component: CatComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:name',
    component: CatDetailComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
