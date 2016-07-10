import { Component } from '@angular/core';
import { TodosDetailComponent } from './todos/todos.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [ TodosDetailComponent ]
})

export class AppComponent { }
