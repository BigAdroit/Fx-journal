import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {
  token = localStorage.getItem('access_token') || ''; 
  payload = atob(this.token.split('.')[1]); 
  parsedPayload = JSON.parse(this.payload);
  id = this.parsedPayload.info._id 
  baseUrl = environment.testBaseApi
  constructor(
    private http : HttpClient
  ) { }

  createWatchlist(data:any){
    const url = `${this.baseUrl}fx-journal/watchlist/create-watchlist`
    return this.http.post<any>(url, data)
  }

  getUserWatchlist() {
    const url = `${this.baseUrl}fx-journal/watchlist/get-watchlist/${this.id}`
    return this.http.get<any>(url)
  }
}
