import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { promise } from 'protractor';
import { resolve } from 'dns';
import { reject } from 'q';
import { AngularFirestore } from '@angular/fire/firestore'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private aFauth: AngularFireAuth, private db: AngularFirestore) { }

  //extraer los datos del email y password de la base de datos 
  login(email:string, password:string){

    return new Promise ((resolve, rejected) => {
      this.aFauth.auth.signInWithEmailAndPassword(email, password).then(user => {
        resolve(user)
      }).catch(err => rejected(err));
    });
  }

  registro(email:string, password:string, name: string, apellido: string, cedula: string, descrip: string, distrito: string){

    return new Promise ((resolve, reject) => {

      this.aFauth.auth.createUserWithEmailAndPassword(email, password).then(res => {


        const uid = res.user.uid;
        this.db.collection('users').doc(uid).set({
          name: name,
          apellido: apellido,
          cedula: cedula,
          descrip: descrip,
          distrito: distrito,
          uid : uid
        })

        resolve(res)
      }).catch(err => reject(err));
    })
  }
}
