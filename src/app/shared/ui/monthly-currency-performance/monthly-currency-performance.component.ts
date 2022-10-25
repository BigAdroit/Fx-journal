import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chart, registerables } from 'chart.js';
import { LineChartService } from 'src/app/service/data/chart/line-chart.service';

@Component({
  selector: 'app-monthly-currency-performance',
  templateUrl: './monthly-currency-performance.component.html',
  styleUrls: ['./monthly-currency-performance.component.scss']
})
export class MonthlyCurrencyPerformanceComponent implements OnInit {
    month: any
    dataValue : any
  constructor(
    private chartService : LineChartService,
    private activatedRouter : ActivatedRoute
  ) {
    Chart.register(...registerables)
   }

  ngOnInit(): void {
    const id = Number(this.activatedRouter.snapshot.paramMap.get("month"))
    this.chartService.getMonthlyAnalysis(id).subscribe((res)=> {
        console.log(res)
        const currencies = res.payload.currencyPairs
        const currenciesValue = res.payload.currencyPairTradeCount
        // console.log(this.month)
        
        const t_ctx = document.getElementById('currencyLineChart') as unknown as any;
        const ctx = t_ctx.getContext('2d');
        const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: currencies,
            datasets: [{
                label: ` ${currencies.length} of Currencies`,
                data: currenciesValue,
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
                text: 'Currency Pair Performance'
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
