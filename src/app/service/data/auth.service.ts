import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.testBaseApi
  constructor(
    private http : HttpClient
  ) { }

  
  regFunction(data: any) {
    const url = `${this.baseUrl}auth/create-new-user`
    return this.http.post(url, data)
  }

  loginFunction(data: any) {
    const url = `${this.baseUrl}auth/login`
    return this.http.post(url, data)
  }

  forgotPassword(data: any) {
    const url = `${this.baseUrl}auth/reset-password`
    return this.http.post<any>(url, data)
  }

  resetCode(data:any) {
    const url =`${this.baseUrl}auth/reset-password-verification-code`
    return this.http.post<any>(url, data)
  }

  isLoggedIn() {
    if (!localStorage.getItem("access_token")) {
      return false 
    }else {
      return true
    }
    // } else {
    //   const token = localStorage.getItem('access_token') || '';
     
    // const payload = atob(token.split('.')[1]); 
     
    // const parsedPayload = JSON.parse(payload); 
    
    // return parsedPayload.exp > Date.now() / 1000;
    // }
    // else {
    //   return true
    // }

  }
}
