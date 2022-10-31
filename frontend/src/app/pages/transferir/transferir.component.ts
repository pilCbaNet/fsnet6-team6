import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CuentaTercero } from 'src/app/models/cuentaTercero';
import { CuentaService } from 'src/app/services/cuenta.service';

@Component({
  selector: 'app-transferir',
  templateUrl: './transferir.component.html',
  styleUrls: ['./transferir.component.css']
})
export class TransferirComponent implements OnInit {
  cuentas: any;
  cantCuentasTerceros : any;
  cuentaForm: any;

  constructor(
    private router:Router,
    private formBuilder: FormBuilder,
    private cuentaService: CuentaService,
  ) {
    this.cuentas = cuentaService.ObtenerCuentasTerceros();
    this.cantCuentasTerceros = cuentaService.CantCuentasTerceros();

    this.cuentaForm = this.formBuilder.group({
      ide: ['', [Validators.required]],
      dni: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      alias: ['', [Validators.required, Validators.minLength(8)]],
      cbu: ['', [Validators.required, Validators.minLength(22), Validators.maxLength(22)]],
      banco: ['', [Validators.required]],
    });
   }

  ngOnInit(): void {
  }

  get Ide() {
    return this.cuentaForm.get('ide');
  }
  get Dni(){
    return this.cuentaForm.get('dni');
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
      let ide: string = this.cuentaForm.get('ide')?.value;
      let dni: number = this.cuentaForm.get('dni')?.value;
      let alias: string = this.cuentaForm.get('alias')?.value;
      let cbu: number = this.cuentaForm.get('cbu')?.value;
      let banco: string = this.cuentaForm.get('banco')?.value;

      let cuentaTercero:CuentaTercero = new CuentaTercero(ide,dni,alias,cbu,banco);

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
      this.cuentaForm.markAllAsTouched();
    }
  }
}
