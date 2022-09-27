import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class LineChartService {
   token = localStorage.getItem('access_token') || ''; 
   payload = atob(this.token.split('.')[1]);   
   parsedPayload = JSON.parse(this.payload);
   id = this.parsedPayload.info._id 
   baseUrl = environment.testBaseApi
  constructor(
    private http : HttpClient
  ) { }

  lineChart() {
    const url = `${this.baseUrl}fx-journal/lineChart/${this.id}`
    return this.http.get<any>(url)
  }

  getMonthlyAnalysis(month:number) {
    const url = `${this.baseUrl}fx-journal/monthlyAnalysis/${this.id}/${month}`
    return this.http.get<any>(url)
  }
}
