import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JournalService {
  token = localStorage.getItem('access_token') || ''; 
   payload = atob(this.token.split('.')[1]);   
   parsedPayload = JSON.parse(this.payload);
   id = this.parsedPayload.info._id 
  constructor(
    private http : HttpClient
  ) { }

  createJournal(data:any) {
    const url = `http://localhost:3000/fx-journal/create-journal`
    return this.http.post<any>(url, data)
  }

  getUserJournal() {
    const url = `http://localhost:3000/fx-journal/getjournal/${this.id}`
    return this.http.get<any>(url)
  }

  getUserSingleJournal(user_id : any, journal_id :any) {
    const url = `http://localhost:3000/fx-journal/getjournal/${user_id}/${journal_id}`
    return this.http.get<any>(url)
  }

  exportUserSpreadsheet(user_id: any) {
    const url = `http://localhost:3000/fx-journal/user-excelsheet/user/${user_id}`
    return this.http.get<any>(url)
  }

}
