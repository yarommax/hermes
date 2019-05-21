import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cargo } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class CargoService {
  constructor(private httpClient: HttpClient) {}

  fetchCargo(): Observable<Cargo[]> {
    return this.httpClient.get<Cargo[]>('/api/cargo');
  }

  createNewCargo(body: Cargo): Observable<Cargo> {
    return this.httpClient.post<Cargo>('/api/cargo', body);
  }

  fetchUserCargo(): Observable<Cargo[]> {
    return this.httpClient.get<Cargo[]>('/api/cargo/my');
  }

  fetchFilteredCargo(filter): Observable<Cargo[]> {
    return this.httpClient.post<Cargo[]>('/api/cargo/filter', filter);
  }
}
