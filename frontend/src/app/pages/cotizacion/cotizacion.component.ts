import { Component, OnInit } from '@angular/core';
import { Cuenta } from 'src/app/models/cuenta';
import { CuentaService } from 'src/app/services/cuenta.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.css']
})
export class CotizacionComponent implements OnInit {
  cuenta: any

  constructor(private cuentaService: CuentaService, private home: HomeComponent) { }

  ngOnInit(): void {
    let idCuenta = this.home.obtenerCuenta();

    this.cuentaService.ObtenerCuenta(idCuenta).subscribe((data:any) => {
      this.cuenta = data;
    });
  }

}
