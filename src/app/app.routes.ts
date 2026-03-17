import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Details } from './details/details';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Home page',
  },
  {
    path: 'detials',
    component: Details,
    title: 'Home details',
  },
];
