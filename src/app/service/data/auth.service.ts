import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http : HttpClient
  ) { }

  
  regFunction(data: any) {
    const url = "http://localhost:3000/auth//create-new-user"
    return this.http.post(url, data)
  }

  loginFunction(data: any) {
    const url = "http://localhost:3000/auth/login"
    return this.http.post(url, data)
  }

  forgotPassword(data: any) {
    const url = 'http://localhost:3000/auth/reset-password'
    return this.http.post<any>(url, data)
  }

  resetCode(data:any) {
    const url = 'http://localhost:3000/auth/reset-password-verification-code'
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
