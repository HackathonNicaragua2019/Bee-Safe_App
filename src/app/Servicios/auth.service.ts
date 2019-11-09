import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { promise } from 'protractor';
import { resolve } from 'dns';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private aFauth: AngularFireAuth) { }

  //extraer los datos del email y password de la base de datos 
  login(email:string, password:string){

    return new Promise ((resolve, rejected) => {
      this.aFauth.auth.signInWithEmailAndPassword(email, password).then(user => {
        resolve(user)
      }).catch(err => rejected(err));
    });
  }
}
