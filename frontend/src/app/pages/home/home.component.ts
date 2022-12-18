import { Component, OnInit } from '@angular/core';
import { interval, merge, mergeMap, sample } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
import { CuentaService } from 'src/app/services/cuenta.service'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  saldo:any;
  constructor(private cuentaService:CuentaService) { }

  ngOnInit(): void {
    let user: Usuario = JSON.parse(sessionStorage.getItem('currentUser') || '{}');
   /*  this.cuentaService.ObtenerSaldo(user.idUsuario).pipe().subscribe((data:any) =>{this.saldo = data}) */
    interval(1500).pipe(mergeMap(()=>this.cuentaService.ObtenerSaldo(user.idUsuario))).subscribe((data:any) =>{this.saldo = data})
  }

  obtenerCuenta(): number{
    let user: Usuario = JSON.parse(sessionStorage.getItem('currentUser') || '{}');
    return user.idCuenta;
  }

  obtenerUsuario():number
  {
    let user: Usuario = JSON.parse(sessionStorage.getItem('currentUser') || '{}');
    return user.idUsuario;
  }

}
