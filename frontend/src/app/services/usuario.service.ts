import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  CargarUsuario(usuario:Usuario): Observable<any>{
    return this.http.post('http://localhost:3000/posts',usuario);
  }
}
