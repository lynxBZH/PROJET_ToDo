/* 
 * tâche
 */

 
 export class Tache {
     id:number;
     titre:string;
     description:string;
     dateCreation:Date;
     dateEcheance:Date;
     etat:string;
     auteur:string;
     destinataire:string;
     
     constructor(id: number, description: string, dateCreation: Date, dateEcheance: Date, etat: string, auteur: string, destinataire: string, titre?:string){
         this.id=id;
         this.description=description;
         this.dateCreation=dateCreation;
         this.dateEcheance=dateEcheance;
         this.etat=etat;
         this.auteur=auteur;
         this.destinataire=destinataire;
     }
 }