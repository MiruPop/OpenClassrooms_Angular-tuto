//création d'un type personnalisé FaceSnap, pour + de réutilisabilité du Component

export class FaceSnap {
    /* on peut ne pas ajouter le ! à côté des variables, et les initier
    d'une manière que TS "comprend", en les mettant dans un constructeur.
    Mais on peut aussi se passer de constructeur complètement*/
    id! : number;
    title! : string;
    description! : string;
    createdDate! : Date;
    snaps! : number;
    imageUrl! : string;
    location? : string;

    // constructeur - manière "verbose" : besoin de déclarer les attributs en haut de la classe
/*     constructor(title: string, description: string, createdDate: Date, snaps: number, imageUrl: string) {
        this.title = title;
        this.description = description;
        this.createdDate = createdDate;
        this.snaps = snaps;
        this.imageUrl = imageUrl;
    } */

    // constructeur - manière "raccourcie" : !!!¨PAS BESOIN de déclarer les attributs en haut de la classe
    /* constructor(
        public title: string,
        public description: string,
        public createdDate: Date,
        public snaps: number,
        public imageUrl: string,
        public location? : string) {        
    } */
    //on met le ? pour marquer une propriété optionnelle
}