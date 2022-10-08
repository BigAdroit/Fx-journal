import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from 'src/app/service/data/dashboard.service';

@Component({
  selector: 'app-view-monthly-analysis',
  templateUrl: './view-monthly-analysis.component.html',
  styleUrls: ['./view-monthly-analysis.component.scss']
})
export class ViewMonthlyAnalysisComponent implements OnInit {
  journalList: any
  constructor(
    private activatedRoute : ActivatedRoute,
    private dashboardService : DashboardService
  ) { }
    
  ngOnInit(): void {
    const monthCode = Number(this.activatedRoute.snapshot.paramMap.get("month"))
    this.dashboardService.getMonthlyAnalysis(monthCode ).subscribe((res)=> {
      // console.log(res)
      this.journalList = res.payload.months
    })
  }

}
