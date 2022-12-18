import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StateRects } from '@popperjs/core';
import { Observable } from 'rxjs';
import { Contacto } from '../models/contacto';
import {CuentaBanco } from '../models/cuentaBanco';
import { Operacion } from '../models/operacion';
import { Transferencia } from '../models/transferencia';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {
  cuentas:any;
  urlSaldo = 'https://localhost:7087/api/Cuentas/GetSaldo';
  urlNuevaCuentaBanco = 'https://localhost:7087/api/Cuentas';
  urlCvu = 'https://localhost:7087/api/Cuentas/GetCvu';
  urlAlias = 'https://localhost:7087/api/Cuentas/GetAlias';
  urlTrans = 'https://localhost:7087/api/Transferencias';
  urlActualizarSaldo = 'https://localhost:7087/api/Cuentas';
  urlContactList= 'https://localhost:7087/api/Contactos/GetContactos';
  urlCargarContacto= 'https://localhost:7087/api/Contactos';
  urlObtenerCuenta= 'https://localhost:7087/api/Cuentas/GetCuenta';
  urlObtenerTransferenciasRealizadas= 'https://localhost:7087/api/Transferencias/GetEgresos';
  urlObtenerTransferenciasRecibidas= 'https://localhost:7087/api/Transferencias/GetIngresos';
  urlCargarCuentaBanco = 'https://localhost:7087/api/CuentaBancos';
  urlCuentasBancosList ='https://localhost:7087/api/CuentaBancos/GetCuentasBancos';
  urlCuentasBancosPropiasList ='https://localhost:7087/api/CuentaBancos/GetCuentasBancosPropias';
  urlCargarOperacion= 'https://localhost:7087/api/Operaciones';
  urlObtenerIngresos ='https://localhost:7087/api/Operaciones/GetIngresos';
  urlObtenerRetiros ='https://localhost:7087/api/Operaciones/GetRetiros';

  constructor(private http:HttpClient,) { }

  ObtenerSaldo(id: number):Observable<any>{
    let params = new HttpParams().set('id', id);
    return this.http.get<any>(this.urlSaldo, {params});
  }

  BuscarCvu(cvu: string): Observable<any>{
    let params = new HttpParams().set('cvu', cvu);
    return this.http.get<any>(this.urlCvu, {params});
  }

  BuscarAlias(alias:string):Observable<any>{
    let params = new HttpParams().set('alias', alias);
    return this.http.get<any>(this.urlAlias, {params});
  }

  Transferir(transferencia: Transferencia): Observable<any>{
    return this.http.post<any>(this.urlTrans, transferencia);
  }

  ActualizarSaldo(id: number,importe: number):Observable<any>{
    let params = new HttpParams().set('importe', importe);
    return this.http.put<any>(this.urlActualizarSaldo,id,{params});
  }

  ObtenerContactos(id: number):Observable<any>
  {
    let params = new HttpParams().set('id', id); 
   return this.http.post<any>(this.urlContactList, id);
  }

  ObtenerCuentasBancos(id: number):Observable<any>
  {
    let params = new HttpParams().set('id', id); 
   return this.http.post<any>(this.urlCuentasBancosList, id);
  }

  ObtenerCuentasBancosPropias(id: number):Observable<any>
  {
    let params = new HttpParams().set('id', id); 
   return this.http.post<any>(this.urlCuentasBancosPropiasList, id);
  }

  CargarContacto(contacto: Contacto):Observable<any>
  {
    return this.http.post(this.urlCargarContacto,contacto);
  }

  ObtenerCuenta(idCuenta: number):Observable<any>
  {
    let params = new HttpParams().set('idCuenta', idCuenta);
    return this.http.get<any>(this.urlObtenerCuenta, {params});
  }

  ObtenerTransferenciasRealizadas(idCuenta: number):Observable<any>
  {
    let params = new HttpParams().set('idCuenta', idCuenta)
    return this.http.get<any>(this.urlObtenerTransferenciasRealizadas,{params})
  }

  ObtenerTransferenciasRecibidas(idCuenta: number):Observable<any>
  {
    let params = new HttpParams().set('idCuenta', idCuenta)
    return this.http.get<any>(this.urlObtenerTransferenciasRecibidas,{params})
  }

  CargarCuentaBanco(cuentaBanco: CuentaBanco):Observable<any>
  {
    return this.http.post<any>(this.urlCargarCuentaBanco,cuentaBanco)
  }

  CargarOperacion(operacion: Operacion):Observable<any>
  {
    return this.http.post(this.urlCargarOperacion,operacion);
  }

  ObtenerIngresos(idCuenta: number):Observable<any>
  {
    let params = new HttpParams().set('idCuenta', idCuenta)
    return this.http.get<any>(this.urlObtenerIngresos,{params})
  }

  ObtenerRetiros(idCuenta: number):Observable<any>
  {
    let params = new HttpParams().set('idCuenta', idCuenta)
    return this.http.get<any>(this.urlObtenerRetiros,{params})
  }



  /* ObtenerUltimosMovimientos()
  {
   return [ {operacion:"Extracción",monto:1500,fecha: "01/10/2022",hora:"13:21"},
            {operacion:"Depósito", monto:1520,fecha: "01/10/2022",hora:"13:25"},
            {operacion:"Extracción",monto:1000, fecha: "01/10/2022",hora:"13:31"},
            {operacion:"Extracción",monto:500, fecha: "01/10/2022",hora:"13:49"},
            {operacion:"Extracción",monto:500, fecha: "01/10/2022",hora:"13:49"},
            {operacion:"Depósito",monto:700, fecha: "02/10/2022",hora:"14:34"},
            {operacion:"Extracción",monto:3000, fecha: "05/10/2022",hora:"17:01"},
            {operacion:"Extracción",monto:2000, fecha: "09/10/2022",hora:"00:45"},
            {operacion:"Depósito",monto:5000, fecha: "15/10/2022",hora:"07:34"},
            {operacion:"Depósito",monto:5000, fecha: "16/10/2022",hora:"02:00"},
            {operacion:"Depósito",monto:500, fecha: "20/10/2022",hora:"18:21"},
            {operacion:"Extracción",monto:500, fecha: "25/10/2022",hora:"13:50"},
            {operacion:"Extracción",monto:500, fecha: "30/10/2022",hora:"13:00"},
        ];
  } */
  ObtenerCuentasPropias()
  {
    this.cuentas= [
      {id:"Cuenta sueldo",banco:"Bancor", cbu:1234567891034287654345n, alias:"alias1"},
      {id:"Cuenta inversion",banco:"Banco Macro", cbu:1234567891034287654331n, alias:"alias2"},
    ];
    return this.cuentas ;
  }
  

  CantCuentas(){
    return this.ObtenerCuentasPropias.length;
  }
  
  

  CargarCuentaTercero(cuentaTercero:CuentaBanco): Observable<any>{
    return this.http.post('http://localhost:3000/posts',cuentaTercero);
  }

}
