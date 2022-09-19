import { Component, OnInit } from '@angular/core';
import { WatchlistService } from 'src/app/service/data/watchlist/watchlist.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent implements OnInit {
  watchlists : any
  constructor(
    private watchlistService : WatchlistService
  ) { }

  ngOnInit(): void {
    this.watchlistService.getUserWatchlist().subscribe((res)=> {
      this.watchlists = res.payload
    })
  }

}
