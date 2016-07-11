import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { TodosDetailComponent } from './todos/todos.component';
import { CompteDetailComponent } from './compte/compte.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [ TodosDetailComponent, CompteDetailComponent, ROUTER_DIRECTIVES ],
  precompile: [TodosDetailComponent,CompteDetailComponent]
})

export class AppComponent { }
