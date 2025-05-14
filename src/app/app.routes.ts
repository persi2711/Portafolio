import { Routes } from '@angular/router';
import { startPageComponent } from './Modules/StartModule/Pages/startPage/startPage.component';
import { startLayoutComponent } from './Modules/StartModule/Layout/startLayout.component';

export const routes: Routes = [
  {
    path: '',
    component: startLayoutComponent,
    children: [
      {
        path: '',
        component: startPageComponent,
      },
    ],
  },
];
