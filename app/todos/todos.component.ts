import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ListeComponent } from '../liste/liste.component';
import { ListeService } from '../liste/liste.service';


@Component({
    selector: 'todos',
    templateUrl: 'app/todos/todos.component.html',
    directives : [ ListeComponent ],
    providers: [ ListeService ]
})

export class TodosDetailComponent{

}