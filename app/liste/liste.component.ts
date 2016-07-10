import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Liste } from './liste';
import { ListeService } from './liste.service';

@Component({
    selector: 'liste',
    templateUrl: 'app/liste/liste.component.html',
    providers: [ListeService]
})

export class ListeComponent implements OnInit {
    private _listeListes: Liste[];
    private _listeService: ListeService;
    private _indiceEnCours: number;
    private _idNewListe : number;

    constructor(listeService: ListeService) {
        this._listeService = listeService;
    }

    @Input()
    listeEnCours: Liste;
    active = false; // permet de gérer l'affichage du formulaire de création de liste

    ngOnInit() {
        // permet d'afficher les listes existantes
        this._listeListes = this._listeService.getListes();
    }

    // permet d'afficher le formulaire de création d'une liste lorsqu'on clique sur le bouton "Ajouter une liste"
    private ajouterListe(){
        this._idNewListe = this._listeListes.length;
        this.active = true;
        this.listeEnCours = new Liste(this._idNewListe, '');
    }
    
    // permet de cacher le formulaire de création d'une liste lorsqu'on clique sur le bouton "Annuler"
    private annulerListe(){
        this._idNewListe--;
        this.active = false;
    }
    
    // ajoute la nouvelle liste créée à la suite des autres listes affichées et referme le formulaire de création de liste
    private validerListe() {
        setTimeout(() => this.active = false, 0);
        this._indiceEnCours = this._listeListes.push(this.listeEnCours) - 1;
    }
    
}