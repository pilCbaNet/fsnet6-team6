import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {NuevoUsuario} from 'src/app/models/NuevoUsuario'
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  form: any;

  constructor(
    private usuarioService: UsuarioService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      user: ['', [Validators.required, Validators.minLength(7)]],
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      cuil: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],  
      telefono: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      password: ['', [Validators.required, Validators.minLength(9)]],
      password1:  ['', [Validators.required, Validators.minLength(9)]]
    });
   }

  ngOnInit(): void {
  }

  get Nombre() {
    return this.form.get('nombre');
  }

  get Apellido() {
    return this.form.get('apellido');
  }

  get Telefono() {
    return this.form.get('telefono');
  }

  get Email() {
    return this.form.get('email');
  }
  get User() {
    return this.form.get('user');
  }

  get Cuil() {
    return this.form.get('cuil');
  }

  get Password() {
    return this.form.get('password');
  }
  get Password1() {
    return this.form.get('password1');
  }

  registrar() 
  {
    if (this.form.valid) 
    {
      let user: string = this.form.get('user')?.value;
      let email: string = this.form.get('email')?.value;
      let contrasena: string = this.form.get('password')?.value;
      let contrasena1: string = this.form.get('password1')?.value;
      let nombre: string = this.form.get('nombre')?.value;
      let apellido: string = this.form.get('apellido')?.value;
      let cuil: string = this.form.get('cuil')?.value;
      let telefono: string = this.form.get('telefono')?.value;
    

      let nuevoUsuario: NuevoUsuario = new NuevoUsuario(user, email, contrasena, nombre, apellido, cuil, telefono);

      this.usuarioService.CargarUsuario(nuevoUsuario).subscribe({
        next:(v) =>{
          this.form.reset();
          alert('Por favor inicie sesion!');
          this.router.navigate(['/iniciar-sesion']);
        },
        error:(e) => {
          alert("Algo salio mal.");
        }
      })
    }
    else 
    {
      this.form.markAllAsTouched();
    }
  }

  validarCorreo(correo: string)
  {
    var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var esValido = expReg.test(correo);
    return esValido;
  }
  

}
