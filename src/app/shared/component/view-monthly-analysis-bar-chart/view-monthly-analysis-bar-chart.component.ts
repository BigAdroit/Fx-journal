import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chart, registerables } from 'chart.js';
import { LineChartService } from 'src/app/service/data/chart/line-chart.service';

@Component({
  selector: 'app-view-monthly-analysis-bar-chart',
  templateUrl: './view-monthly-analysis-bar-chart.component.html',
  styleUrls: ['./view-monthly-analysis-bar-chart.component.scss']
})
export class ViewMonthlyAnalysisBarChartComponent implements OnInit {

  constructor(
    private chartService : LineChartService,
    private activatedRouter : ActivatedRoute
  ) {
    Chart.register(...registerables)
   }

  ngOnInit(): void {
    const id = Number(this.activatedRouter.snapshot.paramMap.get("month"))
    this.chartService.getMonthlyAnalysis(id).subscribe((res)=> {
        const profit = res.payload.profitCount
        const loss = res.payload.lossCount
        const t_ctx = document.getElementById('myLineData') as unknown as any;
        const ctx = t_ctx.getContext('2d');
        const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Loss', 'Profit'],
            datasets: [{
                label: `${res.totalCount} of Trades`,
                data: [loss, profit],
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

