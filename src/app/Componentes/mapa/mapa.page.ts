import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import leaflet from 'leaflet';

import { ActionSheetController } from '@ioniC/angular';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  map: any;
  tempIcon: any;
  paradas: any;
  info: any;
  mapa: any;
  zona: any;
  
  constructor(public actionSheetController: ActionSheetController, public router: Router) { }

  ngOnInit() {
  }
  ionViewDidEnter() {
    this.loadmap();
  }

  //capturara

  loadmap() {
    var map = leaflet.map('map', {
      attributionControl: false,
      center: [13.090651,-86.357484],
      'zoom': 13,
      'layers': [
        leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            'attribution': 'Map data &copy; OpenStreetMap contributors'
        })
      ]
    });

    var circle = leaflet.circle([13.095758,-86.374539], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.2,
      radius: 200
    }).bindPopup("<ion-card><ion-card-content><img src='../../assets/img/genero_r3_c1-200x200.png' style='width: 200%;'>Alerta De violencia Familiar (Roja)</ion-card-content></ion-card>").addTo(map);

    var circle = leaflet.circle([13.077991,-86.370708], {
      color: 'yellow',
      fillColor: 'yellow',
      fillOpacity: 0.2,
      radius: 200
    }).bindPopup("<ion-card><ion-card-content><img src='../../assets/img/icono_abusos02.png' style='width: 200%;'>Alerta abuso (Amarrillo)</ion-card-content></ion-card>").addTo(map);

    var circle = leaflet.circle([13.096239,-86.354088], {
      color: 'green',
      fillColor: 'green',
      fillOpacity: 0.2,
      radius: 200
    }).bindPopup("<ion-card><ion-card-content><img src='../../assets/img/icono-violencia-fisica.png' style='width: 200%;'>Alerta Robo Forzado (Verde)</ion-card-content></ion-card>").addTo(map);

    /*

    var circle = leaflet.circle([13.077991,-86.370708], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.2,
      radius: 500
    }).bindPopup("Zona vulnerable").addTo(map);

    var circle = leaflet.circle([13.084756,-86.344624], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.2,
      radius: 500
    }).bindPopup("Zona vulnerable").addTo(map);

    var circle = leaflet.circle([13.095981,-86.344303], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.2,
      radius: 300
    }).bindPopup("Zona vulnerable").addTo(map);

    
    

    var circle = leaflet.circle([13.099943,-86.367420], {
      color: 'blue',
      fillColor: 'blue',
      fillOpacity: 0.2,
      radius: 400
    }).bindPopup("Zona segura").addTo(map);

    var circle = leaflet.circle([13.087274,-86.356872], {
      color: 'blue',
      fillColor: 'blue',
      fillOpacity: 0.2,
      radius: 400
    }).bindPopup("Zona segura").addTo(map);*/

    this.tempIcon = leaflet.icon({
      iconUrl: '../../assets/img/localización-01.png',
      iconSize: [45, 45],
      iconAnchor: [20, 91],
      popupAnchor: [-1, -77]
    
    });
    
    let marker = new leaflet.marker([13.092989,-86.3574732], {icon: this.tempIcon}).bindPopup("<ion-card><ion-card-content><img src='../../assets/img/image.jpg' style='width: 200%;'> Te damos la Bienvenida a Alcaldia de Estelí te Ayudaremos y guiaremos si sufres de violencia</ion-card-content></ion-card>").addTo(map);
    let marker1 = new leaflet.marker([13.0932744,-86.3573974], {icon: this.tempIcon}).bindPopup("<ion-card><ion-card-content><img src='../../assets/img/moderna.png' style='width: 200%;'> Te damos la Bienvenida a MODERNA, R.L. te Ayudaremos y guiaremos si sufres de violencia</ion-card-content></ion-card>").addTo(map);
    
    
    let marker2 = new leaflet.marker([13.088240, -86.355345], {icon: this.tempIcon}).bindPopup("<ion-card><ion-card-content><img src='../../assets/img/jacvideo.jpg' style='width: 200%;'> Te damos la Bienvenida a Alcaldia de Estelí te Ayudaremos y guiaremos si sufres de violencia</ion-card-content></ion-card>").addTo(map);
    let marker3 = new leaflet.marker([13.081702, -86.364111], {icon: this.tempIcon}).bindPopup("<ion-card><ion-card-content><img src='../../assets/img/coopseas.jpg' style='width: 200%;'> Te damos la Bienvenida a Cooperativa CoopSeas, R.L. de Estelí te Ayudaremos y guiaremos si sufres de violencia</ion-card-content></ion-card>").addTo(map);
    let marker4 = new leaflet.marker([13.097637, -86.372530], {icon: this.tempIcon}).bindPopup("Te damos la Bienvenida te ayudaremos y guiaremos si sufres de violencia").addTo(map);
    let marker5 = new leaflet.marker([13.096056, -86.366776], {icon: this.tempIcon}).bindPopup("Te damos la Bienvenida te ayudaremos y guiaremos si sufres de violencia").addTo(map);
    let marker6 = new leaflet.marker([13.079644, -86.348127], {icon: this.tempIcon}).bindPopup("Te damos la Bienvenida te ayudaremos y guiaremos si sufres de violencia").addTo(map);
    let marker7 = new leaflet.marker([13.093983, -86.346785], {icon: this.tempIcon}).bindPopup("Te damos la Bienvenida te ayudaremos y guiaremos si sufres de violencia").addTo(map);
    let marker8 = new leaflet.marker([13.102140, -86.350128], {icon: this.tempIcon}).bindPopup("Te damos la Bienvenida te ayudaremos y guiaremos si sufres de violencia").addTo(map);

    this.paradas = leaflet.icon({
      iconUrl: '../../assets/img/mapa.png',
      iconSize: [25, 40],
      iconAnchor: [20, 91],
      popupAnchor: [-1, -77]
    
    });

    let parada = new leaflet.marker([13.092079, -86.355718], {icon: this.paradas}).bindPopup("Benemeritos Centro de Bomberos").addTo(map);
    let parada1 = new leaflet.marker([13.0851555,-86.3547316], {icon: this.paradas}).bindPopup("Cruz Roja").addTo(map);
    let parada2 = new leaflet.marker([13.066248,-86.348674], {icon: this.paradas}).bindPopup("Hospital San Juan de Dios").addTo(map);
    let parada3 = new leaflet.marker([13.084817, -86.351306], {icon: this.paradas}).bindPopup("Policia Nacional").addTo(map);

    /*this.info = leaflet.icon({
      iconUrl: '../../assets/icon/Información-01.png',
      iconSize: [30, 30],
      iconAnchor: [5, 70],
      popupAnchor: [-1, -77]
    });

    let inf = new leaflet.marker([13.2046717, -86.3294505], {icon: this.info}).bindPopup("Ruta hacia la cascada y miradores").addTo(map);*/
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Elementos del Mapa',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: '../../assets/icon/favicon.png',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'arrow-dropright-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  informacion(){
    this.router.navigate(['mapeado'])
  }
  
}
