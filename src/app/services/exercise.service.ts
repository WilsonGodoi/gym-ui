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

  save(time: number, distance: number) {
    return this.http.post(
      `${environment.apiUrl}exercise`,
      {
        exerciseGroupType: 'CARDIO',
        exerciseType: 'TREADMILL',
        time,
        distance,
      },
      {
        headers: this.httpHeaders,
      }
    );
  }

  getAll() {
    return this.http.get(`${environment.apiUrl}exercise`, {
      headers: this.httpHeaders,
    });
  }
}
