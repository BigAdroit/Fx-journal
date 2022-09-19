import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { LineChartService } from 'src/app/service/data/chart/line-chart.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  constructor(
    private chartService : LineChartService,
    private activatedRouter : ActivatedRoute
  ) {
    Chart.register(...registerables)
   }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.paramMap.get("month")
    console.log(id)
    this.chartService.lineChart().subscribe((res)=> {
        const profit = res.payload.profit
        const loss = res.payload.loss
        console.log(loss)
        console.log(profit)
        const t_ctx = document.getElementById('myData') as unknown as any;
        const ctx = t_ctx.getContext('2d');
        const myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Loss', 'Profit'],
            datasets: [{
                label: `${res.totalCount} of Journals`,
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
