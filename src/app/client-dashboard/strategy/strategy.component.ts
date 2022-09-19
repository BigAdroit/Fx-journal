import { Component, OnInit } from '@angular/core';
import { StrategyService } from 'src/app/service/data/strategy/strategy.service';

@Component({
  selector: 'app-strategy',
  templateUrl: './strategy.component.html',
  styleUrls: ['./strategy.component.scss']
})
export class StrategyComponent implements OnInit {
  strategies : any
  constructor(
    private strategyService : StrategyService
  ) { }

  ngOnInit(): void {
    this.strategyService.getAllUserStrategy().subscribe((res)=> {
      console.log(res)
      this.strategies = res.payload

    })
  }

}
