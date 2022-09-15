import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import * as AOS from 'aos'
import { DashboardService } from 'src/app/service/data/dashboard.service';

@Component({
  selector: 'app-user-sidenav',
  templateUrl: './user-sidenav.component.html',
  styleUrls: ['./user-sidenav.component.scss']
})
export class UserSidenavComponent implements OnInit {
  @Output() closeDiv = new EventEmitter()
  firstname : string = ""
  lastname : string = ""
  verificationStatus! : boolean 
  constructor(
    private dashboardService : DashboardService
  ) { }

  ngOnInit(): void {
    AOS.init({
      duration: 3000
    })

    this.dashboardService.dashboardDisplayName().subscribe((res)=> {
      this.firstname = res.payload.others.firstname
      this.lastname = res.payload.others.lastname
      this.verificationStatus = res.payload.others.isVerified
      // console.log(res)
    })
  }

  menuList = [
    {
      title : " Dashboard",
      icon : "fa-home",
      route : "/client-dashboard/"
    },
    {
      title : "Journal",
      icon : "fa-book",
      route : "/client-dashboard/journal"
    },
    {
      title : "Watch List",
      icon : "fa-eye",
      route : "/client-dashboard/watchlist"
    },
    {
      title : "Analysis",
      icon : "fa-signal",
      route : "/client-dashboard/analysis"
    },
    {
      title : "Strategy",
      icon : "fa-calendar",
      route : "/client-dashboard/calendar"
    },
    {
      title : "Event",
      icon : "fa-calendar-o",
      route : "/client-dashboard/event"
    },
    {
      title : "Account",
      icon : "fa-user",
      route : "/client-dashboard/profile"
    },
    // {
    //   title : "Settings",
    //   icon : "fa-cog",
    //   route : "/client-dashboard/settings"
    // }

  ]

  closeOnClick() {
    this.closeDiv.emit()
  }

}
