import { provideRouter, RouterConfig }  from '@angular/router';
import { TodosDetailComponent } from './todos/todos.component';
import { AccountDetailComponent } from './account/account.component';

export const routes: RouterConfig = [
    {
        path: '',
        redirectTo:'/account',
        pathMatch: 'full'
    },
    {
        path:'account',
        component:AccountDetailComponent
    },
    {
        path:'todos',
        component:TodosDetailComponent
    }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
