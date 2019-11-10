import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {

  dato=null;
  slide=[];
  slide1=[];
  img=[];

  constructor(public navCtrl: NavController, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.dato = this.route.snapshot.paramMap.get('id');
    if (this.dato== 401){
      this.img.push('../../assets/img/modernados.png');
      this.slide = [
        {titulo:"Bienvenidos a Moderna, R.L."}
      ];
      this.slide1=[
        {descripcion:"Estamos certificados para tratar la violencia en la infancia, adelante y uno de nuestros usuarios lo atendera con mucho gusto"}
      ];
    }else if(this.dato== 402){
      this.img.push('../../assets/img/image.jpg');
      this.slide = [
        {titulo:"Bienvenidos a la Alcaldia"}
      ];
      this.slide1=[
        {descripcion:"Somos especialistas en trato de violencia familiar"}
      ];
    }
  }

  regresar(){
    this.router.navigate(['home']);
  }

}
