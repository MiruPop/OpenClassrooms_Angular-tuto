import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable(
    { providedIn: 'root' }
)
/* la configuration providedIn: 'root' <=> enregistrer ce service à la racine de l'application.
Ca permet de s'assurer de n'avoir qu'une seule instance du service, partagée par tous les partis intéressés */
export class FaceSnapsService {
    /* les Services ne sont pas instanciés de la même manière que les Component
    => ici pas de méthode ngOnInit() 
    => si on a des éléments codées "en dur", faut les déclarer & les instancier dans la même expression */

    faceSnaps: FaceSnap[] = [
        {
            id: 1,
            title: 'Archibald',
            description: 'Mon meilleur ami depuis tout petit !',
            createdDate: new Date(),
            snaps: 0,
            imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            location: 'Paris'
        },
        {
            id: 2,
            title: 'Toto',
            description: 'Mon premier toutou !',
            createdDate: new Date(),
            snaps: 0,
            imageUrl: 'https://cdn.pixabay.com/photo/2019/11/07/08/40/dog-4608266_960_720.jpg',
            location: 'la campagne'
        },
        {
            id: 3,
            title: 'Carotte',
            description: 'Cutest Easter bunny !',
            createdDate: new Date(),
            snaps: 0,
            imageUrl: 'https://cdn.pixabay.com/photo/2017/04/02/22/36/easter-2197043_960_720.jpg'
        }
    ];

    getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps
    }

    getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!faceSnap) {
            throw new Error('FaceSnap not found !');
        } else {
            return faceSnap;
        }
    }
    snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    }

}
