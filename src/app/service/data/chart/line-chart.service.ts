import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LineChartService {
   token = localStorage.getItem('access_token') || ''; 
   payload = atob(this.token.split('.')[1]);   
   parsedPayload = JSON.parse(this.payload);
   id = this.parsedPayload.info._id 
  constructor(
    private http : HttpClient
  ) { }

  lineChart() {
    const url = `http://localhost:3000/fx-journal/lineChart/${this.id}`
    return this.http.get<any>(url)
  }

  getMonthlyAnalysis(month:number) {
    const url = `http://localhost:3000/fx-journal/monthlyAnalysis/${this.id}/${month}`
    return this.http.get<any>(url)
  }
}
