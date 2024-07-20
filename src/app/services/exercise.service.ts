import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ExerciseService {
  constructor(private http: HttpClient) {}

  httpHeaders: HttpHeaders = new HttpHeaders().set(
    'Authorization',
    `Bearer ${localStorage.getItem('token')}`
  );

  getAll() {
    return this.http.get(`${environment.apiUrl}exercise`, {
      headers: this.httpHeaders,
    });
  }
}
