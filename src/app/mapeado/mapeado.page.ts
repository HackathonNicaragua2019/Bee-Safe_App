import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'; 

@Component({
  selector: 'app-mapeado',
  templateUrl: './mapeado.page.html',
  styleUrls: ['./mapeado.page.scss'],
})
export class MapeadoPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  retornar(){
    this.router.navigate(['mapa']);
  }

}
