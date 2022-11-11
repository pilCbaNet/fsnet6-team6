import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
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
      user: ['', [Validators.required]],
      password: ['', [Validators.required]],
      password1: ['', [Validators.required]],
    });
   }

  ngOnInit(): void {
  }

  get Email() {
    return this.form.get('email');
  }
  get User() {
    return this.form.get('user');
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
      let email: string = this.form.get('email')?.value;
      let user: string = this.form.get('user')?.value;
      let password: string = this.form.get('password')?.value;
      let password1: string = this.form.get('password1')?.value;

      let usuario:Usuario = new Usuario(email,user,password,password1);

      this.usuarioService.CargarUsuario(usuario).subscribe({
        next:(v) =>{
          this.form.reset();
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

}
