import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IniciarSesionComponent } from 'src/app/pages/iniciar-sesion/iniciar-sesion.component';
import { IniciarSesionService } from 'src/app/services/iniciar-sesion.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  estaLogueado: any;

  constructor(private service: IniciarSesionService) {
    service.LoggedIn.subscribe({
      next: (v) => this.estaLogueado = v 
    });
   }

  ngOnInit(): void {
  }

  CerrarSesion(){
    this.service.cerrarSesion();
  }


}
