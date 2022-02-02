import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  faceSnaps!: FaceSnap[];

  /*   myFirstSnap!: FaceSnap;
    mySecondSnap!: FaceSnap;
    myThirdSnap!: FaceSnap; */

  ngOnInit(): void {
    this.faceSnaps = [
      {
        title: 'Archibald',
        description: 'Mon meilleur ami depuis tout petit !',
        createdDate: new Date(),
        snaps: 0,
        imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        location: 'Paris'
      },
      {
        title: 'Toto',
        description: 'Mon premier toutou !',
        createdDate: new Date(),
        snaps: 0,
        imageUrl: 'https://cdn.pixabay.com/photo/2019/11/07/08/40/dog-4608266_960_720.jpg',
        location: 'la campagne'
      },
      {
        title: 'Carotte',
        description: 'Cutest Easter bunny !',
        createdDate: new Date(),
        snaps: 0,
        imageUrl: 'https://cdn.pixabay.com/photo/2017/04/02/22/36/easter-2197043_960_720.jpg'
      }
    ];

    //manière d'initialiser la variable si la classe modèle contient un constructeur
    /* this.myFirstSnap = new FaceSnap(
      'Archibald',
      'Mon meilleur ami depuis tout petit !',
      new Date(),
      0,
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg'
    ); */

    //initialisation la variable si la classe modèle NE CONTIENT PAS un constructeur (comme objet)
    /* this.myFirstSnap = {
      title: 'Archibald',
      description: 'Mon meilleur ami depuis tout petit !',
      createdDate: new Date(),
      snaps: 0,
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      location: 'Paris'
    }; */
  }

}
