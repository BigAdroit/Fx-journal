import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class StrategyService {
  token = localStorage.getItem('access_token') || ''; 
  payload = atob(this.token.split('.')[1]); 
  parsedPayload = JSON.parse(this.payload);
  id = this.parsedPayload.info._id 
  baseUrl = environment.testBaseApi
  constructor(
    private http : HttpClient
  ) { }

  createStrategy(data: any) {
    const url = `${this.baseUrl}fx-journal/strategy/create-strategy`
    console.log(this.payload)  

    return this.http.post<any>(url, data)
    
  }

  getAllUserStrategy() {
    const url = `${this.baseUrl}fx-journal/strategy/getstrategy/${this.id}`
    return this.http.get<any>(url)
  }

  getStrategy(id: string) {
    const url=`${this.baseUrl}fx-journal/strategy/getStrategy/strategy/${id}`
    return this.http.get<any>(url)
  }
}
