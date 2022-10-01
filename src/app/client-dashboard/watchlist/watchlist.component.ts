import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WatchlistService } from 'src/app/service/data/watchlist/watchlist.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent implements OnInit {
  watchlists : any
  isEmpty! : boolean
  constructor(
    private watchlistService : WatchlistService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.watchlistService.getUserWatchlist().subscribe((res)=> {
      this.watchlists = res.payload
    })

    if(this.watchlists?.length === 0 ) {
      this.isEmpty = true
    }else {
      this.isEmpty = false
    }
  }

  navigate() {
    this.router.navigate(["/client-dashboard/create-watchlist"])
  }
}
