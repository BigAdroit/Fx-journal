import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  isOverConsistency : boolean = false 
  isOverTool : boolean = false 
  isOverStrategy : boolean = false
  isOverRisk : boolean = false
  paragraphText! : string 
  buttonText! : string 
  constructor() { }

  ngOnInit(): void {
    AOS.init()
  }

  onMouseOver(val: number) {
    if(val === 1 ) {
      this.isOverConsistency = true
      this.buttonText = 'Consistency is the Key'
      this.paragraphText= "When you are consistent with your trading journal, eventually your bad habits will start to disappear and you will stop losing money as frequently as before. This is due to the fact that you will be able to see the mistakes you are making and you will strive to stop making them in the future. Therefore, it's important to be as accurate as possible in your log to identify those mistakes more easily."
    }else if(val === 2) {
      this.isOverTool = true
      this.buttonText = 'Over come all the fears'
      this.paragraphText = "Emotions have a critical role in trading. A trading journal will help you see whether you ever get upset after a loss and start making trades or if you were happy after a good earning! It will also help you see if you make rash decisions after a string of good trades (and vice versa). Once you are aware of them, you will be able to monitor them and will be less likely to make rash decisions that will have a negative effect on your trades."
    }else if(val === 4) {
      this.isOverStrategy = true
      this.buttonText = "Test ur strategy"
      this.paragraphText = "Just because some strategies worked for you in the past, that does not mean you should only apply those! At some point (we hope not though) all strategies inevitably fail and must be replaced. As a result, it is important that you still try to find new ones. Through recording all of the specifics of your trades, you will be able to do an in-depth analysis of the trades you have executed so far."
    }else {
      this.isOverRisk = true 
      this.buttonText = "Take calculated Risk"
      this.paragraphText= "A trading journal will help you identify areas where you might be making errors in risk management. It's possible that you're not taking enough risk to make a significant reward by setting the stop loss too close to the current price, or that your position is too small to lead in any kind of real benefit."
    }
  }

  onMouseOut(val: number) {
    if(val === 1 ) {
      this.isOverConsistency = false
    }else if(val === 2) {
      this.isOverTool = false
    }else if(val === 4) {
      this.isOverStrategy = false
    }else {
      this.isOverRisk = false 
    }
  }
}
