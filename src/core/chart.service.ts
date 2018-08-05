import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {BarChart} from './visualizations/bar.chart';
import {PieChart} from './visualizations/pie.chart';
import {StackedChart} from './visualizations/stacked.chart';
import {DonutChart} from './visualizations/donut.chart';
import {LineChart} from './visualizations/line.chart';

@Injectable()
export class ChartService {
    barChart: BarChart;
    public constructor(private authService: AuthService) {}

    public generateBar(containerId: string, chartType: string) {
        this.authService.authenticate('admin', 'district').subscribe(
            (data: any) => {
                console.log(data);
            },
            err => console.log(err)
        );
        if (chartType === 'bar' || chartType === 'column') {
             this.barChart = new BarChart();
            this.barChart.create(containerId, chartType);
        } else if (chartType === 'pie') {
            const pieChart = new PieChart();
            pieChart.create(containerId, chartType);
        } else if (chartType === 'stacked') {
            const stackedChart = new StackedChart();
            stackedChart.create(containerId, chartType);
        } else if (chartType === 'donut') {
            const donutChart = new DonutChart();
            donutChart.create(containerId, chartType);
        } else if (chartType === 'line') {
            const lineChart = new LineChart();
            lineChart.create(containerId, chartType);
        }
    }
}
