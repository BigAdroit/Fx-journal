import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  token = localStorage.getItem('access_token') || ''; 
   payload = atob(this.token.split('.')[1]);   
   parsedPayload = JSON.parse(this.payload);
   id = this.parsedPayload.info._id 
   baseUrl = environment.testBaseApi
  constructor(
    private http : HttpClient
  ) { }

  updateDOB(data : any) {
    const url = `${this.baseUrl}fx-journal/edit-profile/d-o-b/${this.id}`
    return this.http.put<any>(url, data)
  }

  updateAddress(data : any) {
    const url = `${this.baseUrl}fx-journal/edit-profile/address/${this.id}`
    return this.http.put<any>(url, data)
  }

  updatePhone(data : any) {
    const url = `${this.baseUrl}fx-journal/edit-profile/phone/${this.id}`
    return this.http.put<any>(url, data)
  }

  updateName(data : any) {
    const url = `${this.baseUrl}fx-journal/edit-profile/name/${this.id}`
    return this.http.put<any>(url, data)
  }

  uploadFile(data : any) {
    const url = `${this.baseUrl}fx-journal/edit-profile/upload/${this.id}`
    return this.http.put<any>(url, data)
  }
}
