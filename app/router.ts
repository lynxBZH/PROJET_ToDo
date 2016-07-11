import { provideRouter, RouterConfig }  from '@angular/router';
import { TodosDetailComponent } from './todos/todos.component';
import { CompteDetailComponent } from './compte/compte.component';

export const routes: RouterConfig = [
    {
        path: '',
        redirectTo:'/compte',
        pathMatch: 'full'
    },
    {
        path:'compte',
        component:CompteDetailComponent
    },
    {
        path:'todos',
        component:TodosDetailComponent
    }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
