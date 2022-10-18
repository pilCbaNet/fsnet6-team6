import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { RegistroComponent } from './registro/registro.component';
import { MovimientosComponent } from './movimientos/movimientos.component';



@NgModule({
  declarations: [
    HomeComponent,
    IniciarSesionComponent,
    RegistroComponent,
    MovimientosComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
