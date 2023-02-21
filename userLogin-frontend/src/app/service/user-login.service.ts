import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  AuthData,
  loginData,
  registerData,
} from '../component/interface/auth-login.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserLoginService {
  serviceURL: string;
  constructor(private http: HttpClient) {
    this.serviceURL = 'http://localhost:3000/api';
  }
  createUser(email: string, password: any) {
    console.log(email, 'email');

    const authData: AuthData = { email: email, password: password };
    console.log(authData, 'authDataauthData');

    return this.http.post(`${this.serviceURL}/register`, authData);
  }
  registerUser(
    data: registerData
  ): Observable<{ message: string; isAdded: boolean }> {
    return this.http.post<{ message: string; isAdded: boolean }>(
      `${this.serviceURL}/register`,
      data
    );
    //   console.log(res, 'ressssss');
    //   return res;
    // });
    // console.log(data, 'dataform service');
  }
  loginUser(data: loginData): Observable<any> {
    console.log(data, 'logindata');

    return this.http.post(`${this.serviceURL}/login`, data);
  }
  loggedIn(){
    // it return true or false
    return !!localStorage.getItem('token')
  }
  aploadImage(){
    
  }
  getToken(){
    return localStorage.getItem('token')
  }
}
