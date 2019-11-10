import { Component, OnInit } from '@angular/core';

import { leaflet } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  map: any;
  tempIcon: any;
  paradas: any;
  info: any;
  mapa: any;

  constructor() { }

  ngOnInit() {
  }
  
  ionViewDidEnter() {
    this.loadmap();
  }

  loadmap() {
    var map = leaflet.map('map', {
      attributionControl: false,
      center: [13.090651,-86.357484],
      'zoom': 14,
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
      radius: 300
    }).addTo(map);

    var circle = leaflet.circle([13.077991,-86.370708], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.2,
      radius: 500
    }).addTo(map);

    var circle = leaflet.circle([13.084756,-86.344624], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.2,
      radius: 500
    }).addTo(map);

    var circle = leaflet.circle([13.095981,-86.344303], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.2,
      radius: 300
    }).addTo(map);

    var circle = leaflet.circle([13.096239,-86.354088], {
      color: 'blue',
      fillColor: 'blue',
      fillOpacity: 0.2,
      radius: 400
    }).addTo(map);
    

    var circle = leaflet.circle([13.099943,-86.367420], {
      color: 'blue',
      fillColor: 'blue',
      fillOpacity: 0.2,
      radius: 400
    }).addTo(map);

    var circle = leaflet.circle([13.087274,-86.356872], {
      color: 'blue',
      fillColor: 'blue',
      fillOpacity: 0.2,
      radius: 400
    }).addTo(map);

    this.tempIcon = leaflet.icon({
      iconUrl: '../../assets/img/localización-01.png',
      iconSize: [45, 45],
      iconAnchor: [20, 91],
      popupAnchor: [-1, -77]
    
    });
    
    let marker = new leaflet.marker([13.088079, -86.353878], {icon: this.tempIcon}).bindPopup("Te damos la Bienvenida a JackVideo te ayudaremos y guiaremos si sufres de violencia").addTo(map);
    let marker1 = new leaflet.marker([13.0807986,-86.3580684], {icon: this.tempIcon}).bindPopup('<img src="../../assets/img/localización-01.png" style="width: 30%;"><br>Te damos la Bienvenida a CoopSEAS, R.L. te ayudaremos y guiaremos si sufres de violencia').addTo(map);
    
    let marker2 = new leaflet.marker([13.092796, -86.357488], {icon: this.tempIcon}).bindPopup('<img src="../../assets/img/localización-01.png" style="width: 30%;"><br>Te damos la Bienvenida a Framacia Maria te ayudaremos y guiaremos si sufres de violencia').addTo(map);
    let marker3 = new leaflet.marker([13.081702, -86.364111], {icon: this.tempIcon}).bindPopup("Te damos la Bienvenida te ayudaremos y guiaremos si sufres de violencia").addTo(map);
    let marker4 = new leaflet.marker([13.097637, -86.372530], {icon: this.tempIcon}).bindPopup("Te damos la Bienvenida te ayudaremos y guiaremos si sufres de violencia").addTo(map);
    let marker5 = new leaflet.marker([13.096056, -86.366776], {icon: this.tempIcon}).bindPopup("Te damos la Bienvenida te ayudaremos y guiaremos si sufres de violencia").addTo(map);
    let marker6 = new leaflet.marker([13.079644, -86.348127], {icon: this.tempIcon}).bindPopup("Te damos la Bienvenida te ayudaremos y guiaremos si sufres de violencia").addTo(map);
    let marker7 = new leaflet.marker([13.093983, -86.346785], {icon: this.tempIcon}).bindPopup("Te damos la Bienvenida te ayudaremos y guiaremos si sufres de violencia").addTo(map);
    let marker8 = new leaflet.marker([13.102140, -86.350128], {icon: this.tempIcon}).bindPopup("Te damos la Bienvenida te ayudaremos y guiaremos si sufres de violencia").addTo(map);

    this.paradas = leaflet.icon({
      iconUrl: '../../assets/img/localización-02.png',
      iconSize: [25, 40],
      iconAnchor: [20, 91],
      popupAnchor: [-1, -77]
    
    });

    let parada = new leaflet.marker([13.092079, -86.355718], {icon: this.paradas}).bindPopup("Benemeritos Centro de Bomberos").addTo(map);
    let parada1 = new leaflet.marker([13.0851555,-86.3547316], {icon: this.paradas}).bindPopup("Cruz Roja").addTo(map);
    let parada2 = new leaflet.marker([13.066248,-86.348674], {icon: this.paradas}).bindPopup("Hospital San Juan de Dios").addTo(map);

    /*this.info = leaflet.icon({
      iconUrl: '../../assets/icon/Información-01.png',
      iconSize: [30, 30],
      iconAnchor: [5, 70],
      popupAnchor: [-1, -77]
    });

    let inf = new leaflet.marker([13.2046717, -86.3294505], {icon: this.info}).bindPopup("Ruta hacia la cascada y miradores").addTo(map);*/
  }

  

}
