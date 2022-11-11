import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Login } from 'src/app/models/login';
import { IniciarSesionService } from 'src/app/services/iniciar-sesion.service';


@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css'],
})
export class IniciarSesionComponent implements OnInit {
  form: any;

  constructor(
    private formBuilder: FormBuilder,
    private myService: IniciarSesionService,
    private router:Router
  ) {
    this.form = this.formBuilder.group({
      usuario: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit(): void {}

  get Password() {
    return this.form.get('password');
  }

  get Usuario() {
    return this.form.get('usuario');
  }

  login()
  { 
    if (this.form.valid)
    {
      let usuario: string = this.form.get('usuario')?.value;
      let password: string = this.form.get('password')?.value;

      let login:Login = new Login(usuario,password);

      this.myService.iniciarSesion(login).subscribe({
        next:(v) =>{
          this.form.reset();
          this.router.navigate(['home/tu-billetera']);
        },
        error:(e) => {
          alert("Algo salio mal.")
        }
      })
    }
    else 
    {
      this.form.markAllAsTouched();
    }
  }
}
