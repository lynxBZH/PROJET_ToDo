import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { TodosDetailComponent } from './todos/todos.component';
import { AccountDetailComponent } from './account/account.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [ TodosDetailComponent, AccountDetailComponent, ROUTER_DIRECTIVES ],
  precompile: [TodosDetailComponent,AccountDetailComponent]
})

export class AppComponent { }
