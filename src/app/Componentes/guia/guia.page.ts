import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-guia',
  templateUrl: './guia.page.html',
  styleUrls: ['./guia.page.scss'],
})
export class GuiaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  bull(){
    this.router.navigate(['violencia'])
  }
  ciber(){
    this.router.navigate(['ciber']);
  }

  fami(){
    this.router.navigate(['fami']);
  }
  verbal(){
    this.router.navigate(['verbal']);
  }

}
