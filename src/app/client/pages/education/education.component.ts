import { Component, Inject, OnInit } from '@angular/core';
import {  PLATFORM_ID } from '@angular/core';
import * as AOS from 'aos'


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  
  educationMaterialList = [
    {
      id : 1,
      title : "forex basic",
      isActive : true
    },
    {
      id : 2,
      title : "leverage",
      isActive : false
    },
    {
      id : 3,
      title : "pips",
      isActive : false
    },
    {
      id : 4,
      title : "candlestick Basic",
      isActive : false
    },
    {
      id : 5,
      title : "mastering candlestick",
      isActive : false
    },
    {
      id : 6,
      title : "Trading Cost",
      isActive : false
    },
    {
      id : 7,
      title : "Pending Orders",
      isActive : false
    },
    {
      id : 8,
      title : "Risk Management",
      isActive : false
    },
    {
      id : 9,
      title : "fundamental analysis",
      isActive : false
    },
    {
      id : 10,
      title : "Technical analysis",
      isActive : false
    },
    {
      id : 11,
      title : "channels",
      isActive : false
    },
    {
      id : 12,
      title : "chat pattern",
      isActive : false
    }
  ]

  listLength = this.educationMaterialList.length - 1
  forexBasic = {
    num : 1,
    description : "Forex Concept: Introduction to forex, how to trade it",
    objectives : [
      "what Forex is and how you can earn on it",
      "why liquidity is an important feature of Forex",
      "how a broker helps you enter the Forex market",
      "how to benefit from volatility."
    ]
  }

  leverage = {
    num : 2,
    description : "Forex Concept: Leverage, Lot size",
    objectives : [
      "trade Forex without huge profit",
      "operate amount bigger than your investment.",
    ]
  }
  pips = {
    num : 3,
    description : "Forex Concept: Pips, Calculating Pips",
    objectives : [
      "trade Forex without huge profit",
      "operate amount bigger than your investment.",
    ]
  }
  candlestick1 = {
    num : 4,
    description : "Forex Concept: Identifying Bearish and Bullish Candle, and what timeframe to choose",
    objectives : [
      "read the most common types of charts ",
      "choose timeframes to understand market movements",
    ]
  }
  candlestick2 = {
    num : 5,
    description : "Forex Concept: How candlestick chart works, combined candlestick for analysis",
    objectives : [
      "identify engulfing candle pattern",
      "Identify morning and evening star",
      "differentiate between all forms of doji.",
    ]
  }

  tradeCost = {
    num : 6,
    description : "Trading costs: spread, swap, volume commission, hidden charges",
    objectives : [
      "the remuneration that brokers charge for their services",
      "the tricks that dishonest brokers use",
      "the fees you don’t need to pay.",
    ]
  }

  pendingOrders = {
    num : 7,
    description : "How to place pending orders, Stop Loss, and Take Profit to save your time",
    objectives : [
      "the difference between orders opened by market price and pending orders",
      "the Stop Loss and Take Profit significance. "
    ]
  }

  riskManagement = {
    num : 8,
    description : "How to reduce losses by applying risk management to your trading",
    objectives : [
      "three basic rules of risk management that will help you make a profit",
      "a series of drawdowns and a floating drawdown."
    ]
  }

  
  fundamentalAnalysis = {
    num : 9,
    description : "How to use fundamental analysis to earn from the news",
    objectives : [
      "the four most important types of news for a trader",
      "the news that affect the Forex market",
      "the strategies commonly used for news trading."
    ]
  }

  
  technicalAnalysis = {
    num : 10,
    description : "How to use technical analysis to determine price trends",
    objectives : [
      "use trend lines for predicting price behaviour ",
      "open orders in the most profitable way. "
    ]
  }

  channels = {
    num : 11,
    description : "How to use channels in your trading strategy",
    objectives : [
      "draw channels",
      "use channels for price movement predictions."
    ]
  }

  chartPattern = {
    num : 12,
    description : "How to predict price behaviour using chart patterns",
    objectives : [
      "determine significant price levels",
      "trade using classic chart patterns."
    ]
  }



  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    AOS.init({
      duration: 1200
    });
  }

  onSelect(itemSelected : any){
    this.educationMaterialList.forEach((item: any)=> {
      if(item === itemSelected ) {
        item.isActive = true
      }else {
        item.isActive = false
      }
    })
  }

  Next(data: any) {
    let nextId : any
    this.educationMaterialList.forEach((item: any)=> {
      if(item.isActive === true ) {
        console.log(item.id)
        nextId = item.id + 1
        console.log(nextId)
      }
    })

    this.educationMaterialList.forEach((item: any)=> {
      if(item.id === nextId ) {
        item.isActive = true
        console.log(nextId)
      }else {
        item.isActive = false
      }
    })
    
  }

  Previous(data: any) {
    let nextId : any
    this.educationMaterialList.forEach((item: any)=> {
      if(item.isActive === true ) {
        console.log(item.id)
        nextId = item.id - 1
        console.log(nextId)
      }
    })

    this.educationMaterialList.forEach((item: any)=> {
      if(item.id === nextId ) {
        item.isActive = true
        console.log(nextId)
      }else {
        item.isActive = false
      }
    })
    
  }
}
