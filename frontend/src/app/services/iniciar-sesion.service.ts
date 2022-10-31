import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class IniciarSesionService {

  constructor(private http:HttpClient) { }

  iniciarSesion(login:Login): Observable<any>{
    return this.http.post('http://localhost:3000/posts',login);
  }
}
