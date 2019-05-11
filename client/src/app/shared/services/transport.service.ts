import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transport } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class TransportService {
  constructor(private httpClient: HttpClient) {}

  fetchTransport(): Observable<Transport[]> {
    return this.httpClient.get<Transport[]>('/api/transport');
  }

  createNewTransport(body: Transport): Observable<Transport> {
    return this.httpClient.post<Transport>('/api/transport', body);
  }
}
