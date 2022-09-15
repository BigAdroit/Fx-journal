import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
   token = localStorage.getItem('access_token') || ''; 
     payload = atob(this.token.split('.')[1]);   
     parsedPayload = JSON.parse(this.payload);
     id = this.parsedPayload.info._id 
  constructor(
    private http : HttpClient
  ) { }

  dashboardDisplayName() {
    const url = `http://localhost:3000/fx-journal/dashboard/${this.id}`
    return this.http.get<any>(url)
  }

  dashboardData() {
    const url = `http://localhost:3000/fx-journal/dashboard-data/${this.id}`
    return this.http.get<any>(url)
  }


 
}
