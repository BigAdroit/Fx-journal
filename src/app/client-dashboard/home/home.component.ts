import { Component, OnInit, ViewChild } from '@angular/core';
import * as AOS from 'aos'
import { DashboardService } from 'src/app/service/data/dashboard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  displayData : any
  months = [
    {month :"Jan", bgColor:"colorOne" },
    {month :"Feb", bgColor:"colorOne" },
    {month :"March", bgColor:"colorOne" },
    {month :"April", bgColor:"colorOne" },
    {month :"May", bgColor:"colorOne" },
    {month :"June", bgColor:"colorOne" },
    {month :"July", bgColor:"colorOne" },
    {month :"August", bgColor:"colorOne" },
    {month :"Sept", bgColor:"colorOne" },
    {month :"Oct", bgColor:"colorOne" },
    {month :"Nov", bgColor:"colorOne" },
    {month :"Dec", bgColor:"colorOne" },
  ]
  constructor(
    private dashboardService : DashboardService
  ) { }

  ngOnInit(): void {
    AOS.init({
      duration: 3000
    })

    this.dashboardService.dashboardData().subscribe((res)=> {
      console.log(res)
      this.displayData = res.payload
    })

  }

  viewMonthAnalysis(data : any) {
    console.log(data)
  }
  
}
