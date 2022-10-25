import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { DashboardService } from 'src/app/service/data/dashboard.service';


@Component({
  selector: 'app-long-short-analysis',
  templateUrl: './long-short-analysis.component.html',
  styleUrls: ['./long-short-analysis.component.scss']
})
export class LongShortAnalysisComponent implements OnInit {

  constructor(
    private dashboardService : DashboardService
  ) { }

  ngOnInit(): void {
    this.dashboardService.dashboardData().subscribe((res)=> {
      const short = res.payload.shortCount
      const long = res.payload.longCount
      const t_ctx = document.getElementById('long-short-analysis') as unknown as any;
      const ctx = t_ctx.getContext('2d');
      const myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
          labels: ['Short', 'Long'],
          datasets: [{
              label: `${res.totalCount} of Trades`,
              data: [short, long],
              backgroundColor: [
                  'rgb(255, 99, 132)',
                  'rgb(54, 162, 235)',
                  'rgb(255, 206, 86)',
                  'rgb(75, 192, 192)',
                  'rgb(153, 102, 255)',
                  'rgb(255, 159, 64)'
              ],
              borderColor: [
                  'rgb(255, 99, 132)',
                  'rgb(54, 162, 235)',
                  'rgb(255, 206, 86)',
                  'rgb(75, 192, 192)',
                  'rgb(153, 102, 255)',
                  'rgb(255, 159, 64)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: false
              }
          }
      }
  });
  })
  }

}
