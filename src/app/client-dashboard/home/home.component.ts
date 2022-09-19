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
    {month :"Jan", bgColor:"colorOne" , routerLink : "/client-dashboard/monthlyAnalysis/0"},
    {month :"Feb", bgColor:"colorOne", routerLink : "/client-dashboard/monthlyAnalysis/1" },
    {month :"March", bgColor:"colorOne", routerLink : "/client-dashboard/monthlyAnalysis/2"},
    {month :"April", bgColor:"colorOne", routerLink : "/client-dashboard/monthlyAnalysis/3" },
    {month :"May", bgColor:"colorOne", routerLink : "/client-dashboard/monthlyAnalysis/4" },
    {month :"June", bgColor:"colorOne", routerLink : "/client-dashboard/monthlyAnalysis/5" },
    {month :"July", bgColor:"colorOne", routerLink : "/client-dashboard/monthlyAnalysis/6" },
    {month :"August", bgColor:"colorOne", routerLink : "/client-dashboard/monthlyAnalysis/7" },
    {month :"Sept", bgColor:"colorOne", routerLink : "/client-dashboard/monthlyAnalysis/8" },
    {month :"Oct", bgColor:"colorOne", routerLink : "/client-dashboard/monthlyAnalysis/9" },
    {month :"Nov", bgColor:"colorOne", routerLink : "/client-dashboard/monthlyAnalysis/10" },
    {month :"Dec", bgColor:"colorOne", routerLink : "/client-dashboard/monthlyAnalysis/11",  },
  ]
  constructor(
    private dashboardService : DashboardService
  ) { }

  ngOnInit(): void {
    AOS.init({
      duration: 3000
    })

    this.dashboardService.dashboardData().subscribe((res)=> {
      // console.log(res)
      this.displayData = res.payload
    })

  }

  viewMonthAnalysis(data : any) {
    console.log(data)
  }
  
}
