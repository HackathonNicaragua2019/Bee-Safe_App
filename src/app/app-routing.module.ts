import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: './Componentes/login/login.module#LoginPageModule' },
  { path: 'registro', loadChildren: './Componentes/registro/registro.module#RegistroPageModule' },
  { path: 'mapa', loadChildren: './Componentes/mapa/mapa.module#MapaPageModule' },
  { path: 'qr', loadChildren: './Componentes/qr/qr.module#QrPageModule' },
  { path: 'guia', loadChildren: './Componentes/guia/guia.module#GuiaPageModule' },
  { path: 'map', loadChildren: './map/map.module#MapPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
