import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnap! : FaceSnap;
  
  /* on ajoute le ! pour "promettre" à TypeScript que nous allons initier la variable
  car TS ne "comprend pas" l'initialisation dans la méthode onInit */
/*   title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string; */
  buttonText!: string;
  /* userSnapped! : boolean; */

  ngOnInit(): void {
/*     this.title = 'Archibald';
    this.description = 'Mon meilleur ami depuis tout petit !';
    this.createdDate = new Date();
    this.snaps = 6;
    this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg'; */
    this.buttonText = 'Oh Snap!';
    /* this.userSnapped = false; */
  }

  /* TP : changer l'étiquette du bouton si l'utilisateur a déjà snappé et réduire le nombre de snaps
      Ma solution: */
  /*   onSnap() {
      if(this.authUser === false) {
        this.snaps++;
        this.userSnapped = true;
        this.buttonText = 'Oups! already snapped';
      }
      else {
        this.snaps--;
        this.userSnapped = !this.userSnapped;
        this.buttonText = 'Oh snap!';
      }    
    } */

  /* TP: sans le Boolean (version OpenClass) */
  onSnap() {
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnap.snaps++;
      this.buttonText = 'Oups, unSnap!';
    }
    else {
      this.faceSnap.snaps--;
      this.buttonText = 'Oh Snap!';
    }
  }
}
