import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { DashboardService } from 'src/app/service/data/dashboard.service';


@Component({
  selector: 'app-trading-session',
  templateUrl: './trading-session.component.html',
  styleUrls: ['./trading-session.component.scss']
})
export class TradingSessionComponent implements OnInit {

  constructor(
    private dashboardService : DashboardService
  ) { }

  ngOnInit(): void {
    this.dashboardService.dashboardData().subscribe((res)=> {
      console.log(res)
      const sessions = res.payload.tradingSessions
      const sessionValue = res.payload.tradingSessionValues
      const t_ctx = document.getElementById('sessionChart') as unknown as any;
      const ctx = t_ctx.getContext('2d');
      console.log(sessions)
      const myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: sessions,
          datasets: [{
              label: ` ${sessions?.length} of Session`,
              data: sessionValue,
              backgroundColor: [
                  'rgb(255, 99, 132)',
                  'rgb(54, 162, 235)',
                  "rgb(204 169 199)",
                  'rgb(255, 206, 86)',
                  "rgb(6 118 39)",
                  "rgb(246,109,214)",
                  'rgb(75, 192, 192)',
                  'rgb(153, 102, 255)',
                  'rgb(255, 159, 64)',

              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 0
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          },
          plugins: {
            title: {
              display: true,
              text: 'Trading Session Performance'
            },
          },
          responsive: true,
          interaction: {
          intersect: false,
           },
      }
  });
  
  })
  }

}
