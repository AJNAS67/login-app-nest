import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  serviceURL: string;

  constructor(private http: HttpClient) {
    this.serviceURL = 'http://localhost:3000/admin';
  }
  adminLogin(data: any): Observable<any> {
    console.log(data, 'fromadmin service');

    return this.http.post(`${this.serviceURL}/login`, data);
  }
  getAllUsers(): Observable<any> {
    return this.http.get(`http://localhost:3000/api/all-users`);
  }
  loggedIn(){
    // it return true or false
    return !!localStorage.getItem('adminToken')
  }
}
