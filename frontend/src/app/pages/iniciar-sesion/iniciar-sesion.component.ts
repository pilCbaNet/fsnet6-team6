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
  estaLogueado: any;

  constructor(
    private formBuilder: FormBuilder,
    private iniciarSesionService: IniciarSesionService,
    private router:Router
  ) {
    this.form = this.formBuilder.group({
      user: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit(): void {}

  get Password() {
    return this.form.get('password');
  }

  get User() {
    return this.form.get('usuario');
  }

  login()
  { 
    if (this.form.valid)
    {
      let User: string = this.form.get('user')?.value;
      let Password: string = this.form.get('password')?.value;

      let login:Login = new Login(User,Password);

      this.iniciarSesionService.iniciarSesion(login).subscribe({
        next:(data) =>{
          console.log(data);
          if(data != null)
          {
          this.form.reset();
          this.estaLogueado = true;
          this.router.navigate(['home/tu-billetera']);
          }
          else
          {
            /* this.estaAutenticado = false; */
            alert("Verifique sus credenciales");
          }
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
