import { Injectable } from '@angular/core';
import { TACHES } from './tache.mock';
import { Tache } from './tache';

@Injectable()
export class TacheService{
    constructor() { }
    
    public getTaches(){
        return TACHES;
    }
    
    public getTache(id : number) {
        return Promise.resolve(TACHES.filter(tache => tache.id === id));
    }
    
    public setTache(tache : Tache) : boolean {
        return false;
    }
    
    public addTache(tache : Tache) : boolean {
        return false;
    }
    
    public delTache(tache : Tache) : boolean {
        return false;
    }
}