import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RoundOffsets } from '@popperjs/core/lib/modifiers/computeStyles';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { Login } from '../models/login';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class IniciarSesionService {
  url:string='https://localhost:7087/api/Usuarios/GetLogin';

  LoggedIn = new BehaviorSubject<Boolean>(false);
  currentUserSubject : BehaviorSubject<Login>;
  currentUser: Observable<Login>

  constructor(private http:HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<Login>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
   }

  iniciarSesion(login:Login): Observable<any>{
     return this.http.post<any>(this.url,login).pipe(map(data =>{
        sessionStorage.setItem('currentUser', JSON.stringify(data));
        this.currentUserSubject.next(data);
        this.LoggedIn.next(true);
        return data;
      }));
  }
  
  cerrarSesion(): void{
    sessionStorage.removeItem('currentUser');
    this.LoggedIn.next(false);
  }
}
