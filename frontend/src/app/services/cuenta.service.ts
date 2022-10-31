import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cuenta } from '../models/cuenta';
import { CuentaTercero } from '../models/cuentaTercero';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {
  cuentas:any;
  saldo = 15478;
  constructor(private http:HttpClient) { }

  ObtenerUltimosMovimientos()
  {
   return [ {operacion:"Extracción",monto:1500,fecha: "01/10/2022",hora:"13:21"},
            {operacion:"Depósito", monto:1520,fecha: "01/10/2022",hora:"13:25"},
            {operacion:"Extracción",monto:1000, fecha: "01/10/2022",hora:"13:31"},
            {operacion:"Extracción",monto:500, fecha: "01/10/2022",hora:"13:49"},
            {operacion:"Extracción",monto:500, fecha: "01/10/2022",hora:"13:49"},
            {operacion:"Extracción",monto:500, fecha: "01/10/2022",hora:"13:49"},
            {operacion:"Extracción",monto:500, fecha: "01/10/2022",hora:"13:49"},
            {operacion:"Extracción",monto:500, fecha: "01/10/2022",hora:"13:49"},
            {operacion:"Extracción",monto:500, fecha: "01/10/2022",hora:"13:49"},
            {operacion:"Extracción",monto:500, fecha: "01/10/2022",hora:"13:49"},
            {operacion:"Extracción",monto:500, fecha: "01/10/2022",hora:"13:49"},
            {operacion:"Extracción",monto:500, fecha: "01/10/2022",hora:"13:49"},
            {operacion:"Extracción",monto:500, fecha: "01/10/2022",hora:"13:49"},
        ];
  }
  ObtenerCuentasPropias()
  {
    this.cuentas= [
      {id:"Cuenta sueldo",banco:"Bancor", cbu:1234567891034287654345n, alias:"alias1"},
      {id:"Cuenta inversion",banco:"Banco Macro", cbu:1234567891034287654331n, alias:"alias2"},
    ];
    return this.cuentas ;
  }
  ObtenerCuentasTerceros()
  {
    this.cuentas= [
      {ide:"Jose",dni:34876509,banco:"Bancor", cbu:1234567878934287654345n, alias:"Jose-001"},
      {ide:"Laura",dni:30843501,banco:"Santander", cbu:7298275466734989846521n, alias:"Laura-002"},
    ];
    return this.cuentas ;
  }

  CantCuentas(){
    return this.ObtenerCuentasPropias.length;
  }
  CantCuentasTerceros(){
    return this.ObtenerCuentasTerceros.length;
  }
  
  CargarCuenta(cuenta:Cuenta): Observable<any>{
    return this.http.post('http://localhost:3000/posts',cuenta);
  }

  CargarCuentaTercero(cuentaTercero:CuentaTercero): Observable<any>{
    return this.http.post('http://localhost:3000/posts',cuentaTercero);
  }

}
