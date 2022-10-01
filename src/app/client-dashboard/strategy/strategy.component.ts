import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StrategyService } from 'src/app/service/data/strategy/strategy.service';

@Component({
  selector: 'app-strategy',
  templateUrl: './strategy.component.html',
  styleUrls: ['./strategy.component.scss']
})
export class StrategyComponent implements OnInit {
  strategies : any
  isEmpty! : boolean 
  constructor(
    private strategyService : StrategyService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.strategyService.getAllUserStrategy().subscribe((res)=> {
      console.log(res)
      this.strategies = res.payload

    })

    if(this.strategies?.length === 0 ) {
      this.isEmpty = true
    }else {
      this.isEmpty = false
    }
  }

  navigate() {
    this.router.navigate(["/client-dashboard/create-strategy"])
  }
}
