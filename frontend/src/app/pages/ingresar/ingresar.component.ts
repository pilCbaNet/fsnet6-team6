import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Cuenta } from 'src/app/models/cuenta';
import { CuentaService } from 'src/app/services/cuenta.service';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css'],
})
export class IngresarComponent implements OnInit {
  cuentas: any;
  cantCuentas: any;
  cuentaForm: any;

  constructor(
    private cuentaService: CuentaService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.cuentas = cuentaService.ObtenerCuentasPropias();
    this.cantCuentas = cuentaService.CantCuentas();

    this.cuentaForm = this.formBuilder.group({
      id: ['', [Validators.required]],
      alias: ['', [Validators.required, Validators.minLength(8)]],
      cbu: ['', [Validators.required, Validators.minLength(22)]],
      banco: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  get Id() {
    return this.cuentaForm.get('id');
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

  cargarCuenta() 
  {
    if (this.cuentaForm.valid) 
    {
      let id: string = this.cuentaForm.get('id')?.value;
      let alias: string = this.cuentaForm.get('alias')?.value;
      let cbu: number = this.cuentaForm.get('cbu')?.value;
      let banco: string = this.cuentaForm.get('banco')?.value;

      let cuenta:Cuenta = new Cuenta(id,alias,cbu,banco);

      this.cuentaService.CargarCuenta(cuenta).subscribe({
        next:(v) =>{
          this.cuentaForm.reset();
          this.router.navigate(['home/ingresar']);
        },
        error:(e) => {
          alert("Algo salio mal.");
        }
      })
    }
    else 
    {
      this.cuentaForm.markAllAsTouched();
    }
  }
}
