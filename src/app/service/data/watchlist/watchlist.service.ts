import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {
  token = localStorage.getItem('access_token') || ''; 
  payload = atob(this.token.split('.')[1]); 
  parsedPayload = JSON.parse(this.payload);
  id = this.parsedPayload.info._id 
  constructor(
    private http : HttpClient
  ) { }

  createWatchlist(data:any){
    const url = `http://localhost:3000/fx-journal/watchlist/create-watchlist`
    return this.http.post<any>(url, data)
  }

  getUserWatchlist() {
    const url = `http://localhost:3000/fx-journal/watchlist/get-watchlist/${this.id}`
    return this.http.get<any>(url)
  }
}
