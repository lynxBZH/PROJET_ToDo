import { Tache } from './tache';


// constructor(id: number, description: string, dateCreation: Date, dateEcheance: Date, etat: string, auteur: string, destinataire: string, titre?:string)
let dateCreation = new Date();
let dateEcheance = new Date();

export const TACHES: Tache[]=[
    {'id':1,'description':'description tache n°1','dateCreation':dateCreation,'dateEcheance':dateEcheance,'etat':'en cours','auteur':'machin','destinataire':'bidule','titre':'Tache N°1'},
    {'id':2,'description':'description tache n°2','dateCreation':dateCreation,'dateEcheance':dateEcheance,'etat':'en cours','auteur':'machin','destinataire':'bidule','titre':'Tache n°2'},
    {'id':3,'description':'description tache n°3','dateCreation':dateCreation,'dateEcheance':dateEcheance,'etat':'en cours','auteur':'machin','destinataire':'bidule','titre':'Tache n°3'},
    {'id':4,'description':'description tache n°4','dateCreation':dateCreation,'dateEcheance':dateEcheance,'etat':'en cours','auteur':'machin','destinataire':'bidule','titre':null},
    {'id':5,'description':'description tache n°5','dateCreation':dateCreation,'dateEcheance':dateEcheance,'etat':'en cours','auteur':'machin','destinataire':'bidule','titre':null}
];