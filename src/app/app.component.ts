import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  public appPages = [
    {
      title: 'GUÍA',
      url: '/guia',
      icon: '../assets/img/guia.png'
    },
    {
      title: 'MAPA',
      url: '/mapa',
      icon: '../assets/img/mapa.png'
    },
    {
      title: 'EXPLORA',
      url: '/explora',
      icon: '../assets/img/explora.png'
    },
    {
      title: 'CERRAR SECIÓN',
      url: '/login',
      icon: '../assets/img/cerrar sesion.png'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
