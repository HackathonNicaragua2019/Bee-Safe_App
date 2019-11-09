import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import  { AuthService } from '../../Servicios/auth.service';
import { auth } from 'firebase';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  public email: string;
  public password: string;
  public name: string;
  public apellido: string;
  public cedula: string;
  public descrip: string;
  public distrito: string;

  constructor(public router: Router, private auth: AuthService) { }

  ngOnInit() {
  }

  login(){
    this.router.navigate(['login'])
  }

  OnSudmitRegister(){
    this.auth.registro(this.email, this.password, this.name, this.apellido, this.cedula, this.descrip, this.distrito).then(auth => {
      this.router.navigate(['home'])
      console.log(auth)
    }).catch(err => console.log(err));
  }

}
