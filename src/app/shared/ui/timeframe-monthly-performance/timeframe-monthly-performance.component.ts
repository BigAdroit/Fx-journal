import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { LineChartService } from 'src/app/service/data/chart/line-chart.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-timeframe-monthly-performance',
  templateUrl: './timeframe-monthly-performance.component.html',
  styleUrls: ['./timeframe-monthly-performance.component.scss']
})
export class TimeframeMonthlyPerformanceComponent implements OnInit {

  constructor(
    private chartService : LineChartService,
    private activatedRouter : ActivatedRoute
  ) {
    Chart.register(...registerables)
   }

  ngOnInit(): void {
    const id = Number(this.activatedRouter.snapshot.paramMap.get("month"))
    console.log(id)
    this.chartService.getMonthlyAnalysis(id).subscribe((res)=> {
        const timeframes = res.payload.timeframes
        const data = res.payload.timeframeValues
        const t_ctx = document.getElementById('monthlyTimeFrameAnalysis') as unknown as any;
        const ctx = t_ctx.getContext('2d');
        const myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: timeframes,
            datasets: [{
                label: `${res.timeframes} of Timeframe`,
                data: data,
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



