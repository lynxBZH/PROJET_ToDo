import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Tache } from './tache';
import { TacheService } from './tache.service';

@Component({
    selector: 'tache',
    templateUrl: 'app/tache/tache.component.html',
    providers: [TacheService]
})

export class TacheDisplayComponent implements OnInit{
    private _listeTaches: Tache[];
    private _tacheService: TacheService;
    tacheEnCours : Tache; // correspond à la tâche selectionnée par l'utilisateur
    
    constructor(tacheService: TacheService){
        this._tacheService = tacheService;
    }
    
    @Input() 
    ngOnInit(){
        // permet d'afficher la liste des taches de tache.mock.ts
        this._listeTaches = this._tacheService.getTaches();
    }
    
    onSelect(tache: Tache){
        this.tacheEnCours = tache;
    }
    
    private ajouterTache(){
        this.tacheEnCours = new Tache(0,'',new Date(),new Date(),'','',null);
    }
    
    private supprimerTache(){
        
    }
}