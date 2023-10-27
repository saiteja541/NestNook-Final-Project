import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HostelService {
  private baseUrl = 'http://localhost:8080/api/hostel'; 

  constructor(private http: HttpClient) {}

  getHostels(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }
  
  

  addHostel(hostelData: any): Observable<boolean> {
    return this.http.post<boolean>(this.baseUrl, hostelData);
  }

  updateHostel(hostelData: any): Observable<boolean> {
    return this.http.put<boolean>(`${this.baseUrl}/${hostelData.id}`, hostelData);
  }

  deleteHostel(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.baseUrl}/${id}`);
  }
}
