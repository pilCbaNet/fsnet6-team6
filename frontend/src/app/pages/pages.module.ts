import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { RegistroComponent } from './registro/registro.component';
import { MovimientosComponent } from './movimientos/movimientos.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '../layout/layout.module';
import { IngresarComponent } from './ingresar/ingresar.component';
import { TransferirComponent } from './transferir/transferir.component';
import { CotizacionComponent } from './cotizacion/cotizacion.component';
import { ConfirmarIngresoComponent } from './confirmar-ingreso/confirmar-ingreso.component';
import { TuBilleteraComponent } from './tu-billetera/tu-billetera.component';
import { RetirarComponent } from './retirar/retirar.component';
import { IngresosEgresosComponent } from './ingresos-egresos/ingresos-egresos.component';



@NgModule({
  declarations: [
    HomeComponent,
    IniciarSesionComponent,
    RegistroComponent,
    MovimientosComponent,
    Pagina404Component,
    LandingComponent,
    IngresarComponent,
    TransferirComponent,
    CotizacionComponent,
    ConfirmarIngresoComponent,
    TuBilleteraComponent,
    RetirarComponent,
    IngresosEgresosComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    LayoutModule
  ],
  exports: [
    HomeComponent,
    IniciarSesionComponent,
    RegistroComponent,
    MovimientosComponent,
    Pagina404Component,
    LandingComponent,
  ]
})
export class PagesModule { }
