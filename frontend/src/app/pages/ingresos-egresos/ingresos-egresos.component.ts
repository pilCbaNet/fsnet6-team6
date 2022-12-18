import { Component, OnInit } from '@angular/core';
import { interval, mergeMap } from 'rxjs';
import { CuentaService } from 'src/app/services/cuenta.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-ingresos-egresos',
  templateUrl: './ingresos-egresos.component.html',
  styleUrls: ['./ingresos-egresos.component.css']
})
export class IngresosEgresosComponent implements OnInit {
retiros:any;
ingresos:any;
mostrarMovimientos:any;
  constructor(
    private home: HomeComponent,
    private cuentaService: CuentaService,
  ) { }

  ngOnInit(): void {
    let idCuenta = this.home.obtenerCuenta();

     interval(2000).pipe(mergeMap(()=>this.cuentaService.ObtenerIngresos(idCuenta))).subscribe((data:any) =>{
      this.ingresos = data;
     });

     interval(2000).pipe(mergeMap(()=>this.cuentaService.ObtenerRetiros(idCuenta))).subscribe((data:any) =>{
      this.retiros = data;
     });
  }

}
