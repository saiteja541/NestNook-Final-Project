import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private baseUrl = 'http://localhost:8080/api/booking'; 

  constructor(private http: HttpClient) {}

  bookBed(bookingData: any): Observable<boolean> {
    return this.http.post<boolean>(this.baseUrl, bookingData);
  }
}
