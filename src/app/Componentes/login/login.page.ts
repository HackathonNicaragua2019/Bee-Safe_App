import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../Servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  email: string;
  password: string;

  constructor(private authService: AuthService, public router: Router) { }

  ngOnInit() {
  }
  //Conprobando si el usuario esta registrado
  OnSubmitLogin(){
    this.authService.login(this.email, this.password).then(res =>{
      this.router.navigate(['home']);
    }).catch(err => alert('Los Datos Son Incorrectos o no Existe el Usuario'));
  }
  registro(){
    this.router.navigate(['registro'])
  }

}
