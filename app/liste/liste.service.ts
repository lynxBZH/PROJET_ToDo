import { Injectable } from '@angular/core';
import { LISTES } from './liste.mock';
import { Liste } from './liste';

@Injectable()
export class ListeService {
    constructor() { }

    public getListes(){
        return LISTES;
    }
    
    public getListe(id:number){
        return Promise.resolve(LISTES.filter(liste => liste.id === id));
    }
    
    public setListe(liste : Liste) : boolean {
        return false;
    }
    
    public addListe(liste : Liste) : boolean {
        return false;
    }
    
    public delListe(liste : Liste) : boolean {
        return false;
    }
}