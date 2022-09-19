import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StrategyService {
  token = localStorage.getItem('access_token') || ''; 
  payload = atob(this.token.split('.')[1]); 
  parsedPayload = JSON.parse(this.payload);
  id = this.parsedPayload.info._id 
  constructor(
    private http : HttpClient
  ) { }

  createStrategy(data: any) {
    const url = `http://localhost:3000/fx-journal/strategy/create-strategy`
    console.log(this.payload)  

    return this.http.post<any>(url, data)
    
  }

  getAllUserStrategy() {
    const url = `http://localhost:3000/fx-journal/strategy/getstrategy/${this.id}`
    return this.http.get<any>(url)
  }

  getStrategy(id: string) {
    const url=`http://localhost:3000/fx-journal/strategy/getStrategy/strategy/${id}`
    return this.http.get<any>(url)
  }
}
