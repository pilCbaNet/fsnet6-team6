import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmarIngresoComponent } from './pages/confirmar-ingreso/confirmar-ingreso.component';
import { CotizacionComponent } from './pages/cotizacion/cotizacion.component';
import { HomeComponent } from './pages/home/home.component';
import { IngresarComponent } from './pages/ingresar/ingresar.component';
import { IniciarSesionComponent } from './pages/iniciar-sesion/iniciar-sesion.component';
import { LandingComponent } from './pages/landing/landing.component';
import { MovimientosComponent } from './pages/movimientos/movimientos.component';
import { Pagina404Component } from './pages/pagina404/pagina404.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { TransferirComponent } from './pages/transferir/transferir.component';

const routes: Routes = [
  {path: 'landing', component: LandingComponent},
  {path: '', redirectTo: 'landing', pathMatch: 'full'},
  {path: 'iniciar-sesion', component: IniciarSesionComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'movimientos', component: MovimientosComponent},
  {path: 'home', component: HomeComponent,
  children:[
    {path: 'movimientos',pathMatch:'full', component: MovimientosComponent},
    {path: 'ingresar',pathMatch:'full', component: IngresarComponent,
    children:[
      {path:':confirmar',pathMatch:'full',component: ConfirmarIngresoComponent}
  ]},
    {path: 'transferir', pathMatch:'full', component: TransferirComponent},
    {path: 'cotizacion', pathMatch:'full', component: CotizacionComponent},
  ]},
  {path: '**', component: Pagina404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
