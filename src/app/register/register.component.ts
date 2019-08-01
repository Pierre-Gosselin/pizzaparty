import { Component, OnInit, } from '@angular/core';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { User } from '../models/user.models';
import { Location } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [AngularFireAuth]
})
export class RegisterComponent implements OnInit {
  // 1. Créer une classe User avec un email et un password
  user: User = new User();

  // 2. Créer un formulaire dans le template avec 2 input et un bouton "S'inscrire"
  constructor(
    public afAuth: AngularFireAuth,
    private location: Location
    ) { }

  ngOnInit() {
  }

  // 3. Au clic sur le bouton, on lance la fonction register() et on inscrit l'utiliateur dans Firebase avec l'email et le passowrd
  register() {
    // Créer un utilisateur
    this.afAuth.auth.createUserWithEmailAndPassword(this.user.email,this.user.password).then(
      success => this.location.back()
    )
  }

}
