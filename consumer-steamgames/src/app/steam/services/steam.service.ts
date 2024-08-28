import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SteamService {

  private apiUrl = 'http://127.0.0.1:8000/rotina/start';

  constructor(private http: HttpClient) { }

  getJogos(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
