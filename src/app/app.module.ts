import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { MenuDesplegableComponent } from './components/menu-desplegable/menu-desplegable.component';
import { HomeComponent } from './home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { MenuNavComponent } from './components/menu-nav/menu-nav.component';
import { IconosComponent } from './components/iconos/iconos.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuNavComponent,
    PeliculasComponent,
    NoticiasComponent,
    SobreMiComponent,
    ContactoComponent,
    IconosComponent,
    MenuDesplegableComponent,
    HomeComponent,
    BuscarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
