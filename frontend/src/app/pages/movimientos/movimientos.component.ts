import { Component, OnInit } from '@angular/core';
import { interval, mergeMap } from 'rxjs';
import { CuentaService } from 'src/app/services/cuenta.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.css']
})
export class MovimientosComponent implements OnInit {
  hoy= new Date();
  mostrarMovimientos: boolean=true;
  transferenciasRealizadas:any;
  transferenciasRecibidas:any;
  
  constructor(private cuentaService:CuentaService, private home: HomeComponent) { 
  }

  ngOnInit(): void {
    let idCuenta = this.home.obtenerCuenta();
     interval(1500).pipe(mergeMap(()=>this.cuentaService.ObtenerTransferenciasRecibidas(idCuenta))).subscribe((data:any) =>{
      this.transferenciasRecibidas = data;
     });

     interval(1500).pipe(mergeMap(()=>this.cuentaService.ObtenerTransferenciasRealizadas(idCuenta))).subscribe((data:any) =>{
      this.transferenciasRealizadas = data;
     });
  }

}

