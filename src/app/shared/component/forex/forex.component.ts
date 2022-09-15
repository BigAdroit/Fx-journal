import { Component, OnInit } from '@angular/core';
import { PeriodsModel } from '@syncfusion/ej2-angular-charts';
// import { series1 } from 'datasource.ts';

@Component({
  selector: 'app-forex',
  templateUrl: './forex.component.html',
  styleUrls: ['./forex.component.scss']
})
export class ForexComponent implements OnInit {
  public primaryXAxis!: Object;
public chartData!: Object[];
public title!: string;
public periods!: PeriodsModel[];
public seriesType: string[] = [];
public indicatorType: string[] = [];
public trendlineType: string[] = [];
public exportType: string[] = []

  constructor() { }

  ngOnInit(): void {
    // this.chartData = this.series;
    // this.title = 'Efficiency of oil-fired power production';
    // this.primaryXAxis = {
    //    valueType: 'DateTime'
    // };
    // this.periods = [
    //     { intervalType: 'Minutes', interval: 1, text: '1m' },
    //     { intervalType: 'Minutes', interval: 30, text: '30m' },
    //     { intervalType: 'Hours', interval: 1, text: '1H' },
    //     { intervalType: 'Hours', interval: 12, text: '12H', selected: true },
    //     { intervalType: 'Auto', text: '1D' }
    // ];
  }

}
