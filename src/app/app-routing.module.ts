import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


import { MenuNavComponent } from './components//menu-nav/menu-nav.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { BuscarComponent } from './components/buscar/buscar.component';


/* Soy el programado 2 */
const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'sobre-mi', component: SobreMiComponent
  },
  {
    path: 'peliculas', component: PeliculasComponent
  },
  {
    path: 'noticias', component: NoticiasComponent
  },

  {
    path: 'contacto', component: ContactoComponent
  },
  {
    path: 'buscar', component: BuscarComponent
  },
  {
    path: "", redirectTo: "home", pathMatch: "full"

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
