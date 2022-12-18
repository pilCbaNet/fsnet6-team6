import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BancoService {
  url = 'https://localhost:7087/api/Bancos';
  constructor(private http:HttpClient) { }

  ObtenerBancos()
  {
    return this.http.get(this.url);
  }
}
