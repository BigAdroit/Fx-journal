import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JournalService } from 'src/app/service/data/journal/journal.service';
import { StrategyService } from 'src/app/service/data/strategy/strategy.service';
import { WatchlistService } from 'src/app/service/data/watchlist/watchlist.service';
import { NotificationService } from 'src/app/service/shared/notification.service';

@Component({
  selector: 'app-creatw-watchlist',
  templateUrl: './creatw-watchlist.component.html',
  styleUrls: ['./creatw-watchlist.component.scss']
})
export class CreatwWatchlistComponent implements OnInit {

  watchlistForm! : FormGroup
  token = localStorage.getItem('access_token') || ''; 
   payload = atob(this.token.split('.')[1]);   
   parsedPayload = JSON.parse(this.payload);
   id = this.parsedPayload.info._id 
   strategies : any
   timeframes = ["1 Minute", "5 Minutes", "15 Minutes", "1 Hour", "4 Hours", "Day", "Week", "Month"]
   marketConditions = ["UPTREND", "DOWNTREND", "RANGE"]

  constructor(
    private journalService : JournalService,
    private notification : NotificationService,
    private router : Router,
    private strategyService : StrategyService,
    private watchlistService : WatchlistService
  ) { }

  ngOnInit(): void {
    this.createForm()
    this.strategyService.getAllUserStrategy().subscribe((res)=> {
      console.log(res.payload)
      this.strategies = res.payload
    })
  }


  createWatchlist(data: any) {
    data.user_id = this.id
    console.log(data)
    this.watchlistService.createWatchlist(data).subscribe((res)=> {
      if(res.hasErrors) {
        this.notification.notify({content: res.description, type: 'danger'})
      }else {
        this.notification.notify({content: res.description, type:'success'})
        this.router.navigate(['/client-dashboard/watchlist'])
      }
    })
  }

  createForm() {
    this.watchlistForm = new FormGroup( {
      currency_pair : new FormControl("", [Validators.required, Validators.minLength(3)]),
      timeframe : new FormControl("", [Validators.required]),
      strategy : new FormControl("", Validators.required),
      entry_price : new FormControl("", Validators.required),
      description : new FormControl("", Validators.required),
      high : new FormControl("", Validators.required),
      low : new FormControl("", Validators.required),
      market_condition : new FormControl("", Validators.required)
    })
  }
}
