import { Component, OnInit } from '@angular/core';
import { CuentaService } from 'src/app/services/cuenta.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private myService:CuentaService) { }

  ngOnInit(): void {
  }

  ObtenerSaldo(){
    return this.myService.saldo;
  }

}
