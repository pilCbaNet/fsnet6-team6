import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { interval, mergeMap } from 'rxjs';
import { Cuenta } from 'src/app/models/cuenta';
import { CuentaBanco } from 'src/app/models/cuentaBanco';
import { Operacion } from 'src/app/models/operacion';
import { Usuario } from 'src/app/models/usuario';
import { BancoService } from 'src/app/services/banco.service';
import { CuentaService } from 'src/app/services/cuenta.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css'],
})
export class IngresarComponent implements OnInit {
  cuenta: any;
  cantCuentas: any;
  cuentaForm: any;
  array:any;
  bancos: any;
  cuentasBancos: any;
  cbuForm: any;

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
      banco: ['', [Validators.required]],
    });
    this.cbuForm = this.formBuilder.group({
      cbu: ['', [Validators.required, Validators.minLength(22), Validators.maxLength(22)]],
      importe: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    let idUsuario = this.home.obtenerUsuario();
    interval(1500).pipe(mergeMap(()=>this.cuentaService.ObtenerCuentasBancosPropias(idUsuario))).subscribe((data:any) =>{
      this.cuentasBancos = data});
      
  }

  get Descripcion() {
    return this.cuentaForm.get('descripcion');
  }
  get Alias() {
    return this.cuentaForm.get('alias');
  }
  get Cbu() {
    return this.cuentaForm.get('cbu');
  }
  get Banco() {
    return this.cuentaForm.get('banco');
  }
  

  cargarCuentaBancoPropia() 
  {
    if(this.cuentaForm.valid)
    {
      let user: Usuario = JSON.parse(sessionStorage.getItem('currentUser') || '{}');

      let descripcion: string = this.cuentaForm.get('descripcion')?.value;
      let cbu: string = this.cuentaForm.get('cbu')?.value;
      let banco: string = this.cuentaForm.get('banco')?.value;
      let cuil: string = user.cuil;
      let nombre: string = user.nombre;
      let apellido: string = user.apellido;
      let idUsuario: number = user.idUsuario;


      let cuentaBanco: CuentaBanco = new CuentaBanco(descripcion,cuil,cbu,banco,nombre,apellido,idUsuario);
      this.cuentaService.CargarCuentaBanco(cuentaBanco).subscribe({
        next:(v) =>{
          this.cuentaForm.reset();
          this.router.navigate(['home/ingresar']); 

        },
        error:(e) => {
          alert("Algo salio mal.");
        }
      });
    }
    else
    {this.cuentaForm.markAllAsTouched();}
    
  }

  ingresarPorCbu()
  {
    if(this.cbuForm.valid)
    {
      let importe: number = this.cbuForm.get('importe')?.value;
      let cbu: string = this.cbuForm.get('cbu')?.value;
      let idTipoOperacion = 2;
      let idCuentaOrigen = this.home.obtenerCuenta();
      let user: Usuario = JSON.parse(sessionStorage.getItem('currentUser') || '{}');
      let operacion = new Operacion(importe,idTipoOperacion,cbu,user.idCuenta);

      this.cuentaService.ActualizarSaldo(idCuentaOrigen,importe).subscribe({
        next:(v) =>{
          this.cuentaService.CargarOperacion(operacion).subscribe();
          this.cbuForm.reset();
          this.router.navigate(['home/ingresar']); 

        },
        error:(e) => {
          alert("Algo salio mal.");
        }
      });
    }
    else{alert('Verifique los datos ingresados')}
  }


  ObtenerBancos()
  {
    this.bancoService.ObtenerBancos().subscribe((data:any)=>{this.bancos = data;
    });
  }
  
}
