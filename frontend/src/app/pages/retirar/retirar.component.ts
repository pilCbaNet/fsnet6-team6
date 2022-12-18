import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { interval, mergeMap } from 'rxjs';
import { CuentaBanco } from 'src/app/models/cuentaBanco';
import { Operacion } from 'src/app/models/operacion';
import { Usuario } from 'src/app/models/usuario';
import { BancoService } from 'src/app/services/banco.service';
import { CuentaService } from 'src/app/services/cuenta.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-retirar',
  templateUrl: './retirar.component.html',
  styleUrls: ['./retirar.component.css']
})
export class RetirarComponent implements OnInit {
  bancos: any;
  cuentasBancosPropias:any;
  cuentasBancos:any;
  cbuForm:any;
  cuentaForm:any
  cuentaPropiaForm: any;

  constructor(
    private cuentaService: CuentaService,
    private bancoService: BancoService,
    private formBuilder: FormBuilder,
    private router: Router,
    private home: HomeComponent
  ) {
    this.cuentaForm = this.formBuilder.group({
      descripcion: ['', [Validators.required]],
      cbu: ['', [Validators.required, Validators.minLength(22), Validators.maxLength(22)]],
      cuil: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      banco: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
    });
    
    this.cuentaPropiaForm = this.formBuilder.group({
      descripcion: ['', [Validators.required]],
      cbu: ['', [Validators.required, Validators.minLength(22), Validators.maxLength(22)]],
      banco: ['', [Validators.required]]
    });

    this.cbuForm = this.formBuilder.group({
      cbu: ['', [Validators.required, Validators.minLength(22), Validators.maxLength(22)]],
      importe: ['', [Validators.required]]
    });
   }

  ngOnInit(): void {
    let idUsuario = this.home.obtenerUsuario();
    interval(2000).pipe(mergeMap(()=>this.cuentaService.ObtenerCuentasBancosPropias(idUsuario))).subscribe((data:any) =>{
      this.cuentasBancosPropias = data});
      interval(2000).pipe(mergeMap(()=>this.cuentaService.ObtenerCuentasBancos(idUsuario))).subscribe((data:any) =>{
        this.cuentasBancos = data});
  }

  get Descripcion() {
    return this.cuentaForm.get('descripcion');
  }
  get DescripcionP() {
    return this.cuentaPropiaForm.get('descripcion');
  }
  get Alias() {
    return this.cuentaForm.get('alias');
  }
  get Cbu() {
    return this.cuentaForm.get('cbu');
  }
  get CbuP() {
    return this.cuentaPropiaForm.get('cbu');
  }
  get Banco() {
    return this.cuentaForm.get('banco');
  }
  get BancoP() {
    return this.cuentaPropiaForm.get('banco');
  }
  get Nombre() {
    return this.cuentaForm.get('nombre');
  }
  get Apellido() {
    return this.cuentaForm.get('apellido');
  }
  get CuilP () {
    return this.cuentaPropiaForm.get('cuil');
  }
  get Cuil() {
    return this.cuentaForm.get('cuil');
  }

  retirarPorCbu()
  {
    if(this.cbuForm.valid)
    {
      let importe: number = this.cbuForm.get('importe')?.value;
      let cbu: string = this.cbuForm.get('cbu')?.value;
      let idTipoOperacion = 1;
      let idCuentaOrigen = this.home.obtenerCuenta();
      let user: Usuario = JSON.parse(sessionStorage.getItem('currentUser') || '{}');
      importe = importe*(-1);
      
      let operacion = new Operacion(importe,idTipoOperacion,cbu,user.idCuenta);
      this.cuentaService.ActualizarSaldo(idCuentaOrigen,importe).subscribe((data:any) => {
        this.cuentaService.CargarOperacion(operacion).subscribe();
      });
    }
    else{alert('Verifique los datos ingresados')}
  }

  cargarCuentaBancoPropia() 
  {
    if(this.cuentaPropiaForm.valid)
    {
      let user: Usuario = JSON.parse(sessionStorage.getItem('currentUser') || '{}');

      let descripcion: string = this.cuentaPropiaForm.get('descripcion')?.value;
      let cbu: string = this.cuentaPropiaForm.get('cbu')?.value;
      let banco: string = this.cuentaPropiaForm.get('banco')?.value;
      let cuil: string = user.cuil;
      let nombre: string = user.nombre;
      let apellido: string = user.apellido;
      let idUsuario: number = user.idUsuario;
      
      let cuentaBanco: CuentaBanco = new CuentaBanco(descripcion,cuil,cbu,banco,nombre,apellido,idUsuario);
      this.cuentaService.CargarCuentaBanco(cuentaBanco).subscribe({
        next:(v) =>{
          this.cuentaPropiaForm.reset();
          this.router.navigate(['home/retirar']); 

        },
        error:(e) => {
          alert("Algo salio mal.");
        }
      });
    }
    else
    {this.cuentaPropiaForm.markAllAsTouched();}
    
  }

  cargarCuentaBancoTercero() 
  {
    if(this.cuentaForm.valid)
    {
      let user: Usuario = JSON.parse(sessionStorage.getItem('currentUser') || '{}');

      let descripcion: string = this.cuentaForm.get('descripcion')?.value;
      let cbu: string = this.cuentaForm.get('cbu')?.value;
      let banco: string = this.cuentaForm.get('banco')?.value;
      let cuil: string = this.cuentaForm.get('cuil')?.value;
      let nombre: string = this.cuentaForm.get('nombre')?.value;
      let apellido: string = this.cuentaForm.get('apellido')?.value;
      let idUsuario: number = user.idUsuario;
      
      let cuentaBanco: CuentaBanco = new CuentaBanco(descripcion,cuil,cbu,banco,nombre,apellido,idUsuario);
      this.cuentaService.CargarCuentaBanco(cuentaBanco).subscribe({
        next:(v) =>{
          this.cuentaForm.reset();
          this.router.navigate(['home/retirar']); 

        },
        error:(e) => {
          alert("Algo salio mal.");
        }
      });
    }
    else
    {this.cuentaForm.markAllAsTouched();}
    
  }

  ObtenerBancos()
  {
    this.bancoService.ObtenerBancos().subscribe((data:any)=>{this.bancos = data;
    });
  }
}
