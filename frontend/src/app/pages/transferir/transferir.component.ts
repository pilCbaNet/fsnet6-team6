import { NgTemplateOutlet } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { interval, map, mergeMap, tap } from 'rxjs';
import { Contacto } from 'src/app/models/contacto';
import { CuentaBanco } from 'src/app/models/cuentaBanco';
import { Transferencia } from 'src/app/models/transferencia';
import { CuentaService } from 'src/app/services/cuenta.service';
import { IniciarSesionService } from 'src/app/services/iniciar-sesion.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-transferir',
  templateUrl: './transferir.component.html',
  styleUrls: ['./transferir.component.css']
})
export class TransferirComponent implements OnInit {
  contactos :any;
  cantCuentasTerceros : any;
  aliasForm: any;
  cvuForm: any;
  nuevoContactoForm: any;

  constructor(
    private router:Router,
    private formBuilder: FormBuilder,
    private cuentaService: CuentaService,
    private home: HomeComponent,
  ) {

    this.aliasForm = this.formBuilder.group({
      alias: ['', [Validators.required]],
      importe: ['', [Validators.required]],
      detalles: ['',[Validators.required]]
    });
    
    this.cvuForm = this.formBuilder.group({
      cvu: ['', [Validators.required,Validators.maxLength(22), Validators.minLength(22)]],
      importe: ['', [Validators.required]],
      detalles: ['',[Validators.required]]
    });
    
    this.nuevoContactoForm = this.formBuilder.group({
      cvu: ['', [Validators.required,Validators.maxLength(22),  Validators.minLength(22)]],
      alias: ['', [Validators.required]],
      descripcion: ['',[Validators.required]]
    });
   }  

   buscarCvu(cvu: string){
    this.cuentaService.BuscarCvu(cvu);
   }

  ngOnInit(): void {
    let idUsuario = this.home.obtenerUsuario();
    interval(1500).pipe(mergeMap(()=>this.cuentaService.ObtenerContactos(idUsuario))).subscribe((data:any) =>{

      this.contactos = data});
  }

  get Alias() {
    return this.aliasForm.get('alias');
  } 
  
  get Importe() {
    return this.aliasForm.get('importe');
  }
  get Detalles() {
    return this.aliasForm.get('detalles');
  }
  get Cvu() {
    return this.aliasForm.get('cvu');
  }

  get Descripcion() {
    return this.aliasForm.get('descripcion');
  }

  get AliasNuevo()
  {
    return this.nuevoContactoForm.get('alias');
  }

  get CvuNuevo() {
    return this.nuevoContactoForm.get('cvu');
  }

  get DescripcionNueva() {
    return this.nuevoContactoForm.get('descripcion');
  }

  cargarContacto()
  {
    if(this.nuevoContactoForm.valid)
    {
      let alias: string = this.nuevoContactoForm.get('alias')?.value;
      let cvu: string = this.nuevoContactoForm.get('cvu')?.value;
      let descripcion: string = this.nuevoContactoForm.get('descripcion')?.value;
      let idUsuario = this.home.obtenerUsuario();
      let idCuenta;
      this.cuentaService.BuscarAlias(alias).subscribe((data:any) =>{
        idCuenta = data;

        let contacto: Contacto = new Contacto(alias,cvu,descripcion,idCuenta,idUsuario);

        this.cuentaService.CargarContacto(contacto).subscribe();
      });

    } 
    else 
    {
      this.aliasForm.markAllAsTouched();
    }
  }


  transferirPorAlias()
  {
    if(this.aliasForm.valid)
    {
      let alias: string = this.aliasForm.get('alias')?.value;
      let importe: number = this.aliasForm.get('importe')?.value;
      let detalles: string = this.aliasForm.get('detalles')?.value;
      let idCuentaDestino:any;
      let idCuentaOrigen = this.home.obtenerCuenta();

      this.cuentaService.BuscarAlias(alias).subscribe((data:any) => 
      {
        idCuentaDestino = data;
        let transferencia: Transferencia = new Transferencia(importe,detalles,idCuentaOrigen,idCuentaDestino);
        this.cuentaService.Transferir(transferencia).subscribe();
        this.cuentaService.ActualizarSaldo(idCuentaDestino,(importe)).subscribe();
        importe= importe*-1;
        this.cuentaService.ActualizarSaldo(idCuentaOrigen,importe).subscribe();
        this.aliasForm.reset();
      });
    }
    else 
    {
      this.aliasForm.markAllAsTouched();
    }
  }

  transferirPorCvu()
  {
    if(this.cvuForm.valid)
    {
      let cvu: string = this.cvuForm.get('cvu')?.value;
      console.log(cvu);
      let importe: number = this.cvuForm.get('importe')?.value;
      let detalles: string = this.cvuForm.get('detalles')?.value;
      let idCuentaDestino:any;
      let idCuentaOrigen = this.home.obtenerCuenta();

      this.cuentaService.BuscarCvu(cvu).subscribe((data:any) => 
      {
        idCuentaDestino = data;
        let transferencia: Transferencia = new Transferencia(importe,detalles,idCuentaOrigen,idCuentaDestino);
        this.cuentaService.Transferir(transferencia).subscribe();
        this.cuentaService.ActualizarSaldo(idCuentaDestino,(importe)).subscribe();
        importe= importe*-1;
        this.cuentaService.ActualizarSaldo(idCuentaOrigen,importe).subscribe();
        this.cvuForm.reset();
      });
    }
    else 
    {
      this.cvuForm.markAllAsTouched();
    }
  }

  saldoAlias():Boolean
  {
    let importe: number = this.aliasForm.get('importe')?.value;
    let saldo = this.home.saldo;
    if(importe>saldo){return true}
    else return false;
  }
  saldoCvu():Boolean
  {
    let importe: number = this.cvuForm.get('importe')?.value;
    let saldo = this.home.saldo;
    if(importe>saldo){return true}
    else return false;
  }
  agendarContacto(){

    
  }
 /*  obtenerContactos()
  {
    let idUsuario = this.home.obtenerUsuario();
    console.log(idUsuario);
    this.cuentaService.ObtenerContactos(idUsuario).subscribe((data:any) =>
    {
      this.cuentas = data;
      console.log(this.cuentas);
    });
  } */
  /* cargarCuenta() 
  {
    if (this.cuentaForm.valid) 
    {
      let ide: string = this.cuentaForm.get('ide')?.value;
      let dni: number = this.cuentaForm.get('dni')?.value;
      let alias: string = this.cuentaForm.get('alias')?.value;
      let cbu: number = this.cuentaForm.get('cbu')?.value;
      let banco: string = this.cuentaForm.get('banco')?.value;

      let cuentaTercero:CuentaBanco = new CuentaBanco(ide,dni,alias,cbu,banco);

      this.cuentaService.CargarCuentaTercero(cuentaTercero).subscribe({
        next:(v) =>{
          this.cuentaForm.reset();
          this.router.navigate(['home/transferir']);
        },
        error:(e) => {
          alert("Algo salio mal.");
        }
      })
    }
    else 
    {
      this.aliasForm.markAllAsTouched();
    }
  } */
}
