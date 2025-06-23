import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Egiptoapi {
  private apiUrl = 'https://api.artic.edu/api/v1/artworks?limit=10';
  constructor(private http: HttpClient) {}
  obtenerMuseos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}