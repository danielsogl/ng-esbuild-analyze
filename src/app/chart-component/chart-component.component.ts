import { Component, ElementRef, effect, viewChild } from '@angular/core';
import { createChart } from 'lightweight-charts';

@Component({
  selector: 'app-chart-component',
  standalone: true,
  template: '<div #chart></div>',
})
export class ChartComponentComponent {
  chart = viewChild.required('chart', { read: ElementRef });

  renderChart = effect(() => {
    const chart = createChart(this.chart().nativeElement, {
      width: 400,
      height: 300,
    });
    const lineSeries = chart.addLineSeries();
    lineSeries.setData([
      { time: '2019-04-11', value: 80.01 },
      { time: '2019-04-12', value: 96.63 },
      { time: '2019-04-13', value: 76.64 },
      { time: '2019-04-14', value: 81.89 },
      { time: '2019-04-15', value: 74.43 },
    ]);
  });
}
