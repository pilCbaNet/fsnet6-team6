import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NuevoUsuario } from '../models/NuevoUsuario';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
url ='https://localhost:7087/api/Usuarios';
  constructor(private http:HttpClient) { }

  CargarUsuario(nuevoUsuario: NuevoUsuario): Observable<any>{
    return this.http.post(this.url,nuevoUsuario);
  }
}
