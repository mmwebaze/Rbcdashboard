import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {BarChart} from './visualizations/bar.chart';
import {PieChart} from './visualizations/pie.chart';
import {StackedChart} from './visualizations/stacked.chart';
import {DonutChart} from './visualizations/donut.chart';
import {LineChart} from './visualizations/line.chart';
import {DashboardService} from './dashboard.service';
import {AnalyticsService} from './analytics.service';

@Injectable()
export class ChartService {
    barChart: BarChart;
    dashlets: IDashlet[];
    public constructor(private authService: AuthService, private dashboardService: DashboardService,
                       private analyticsService: AnalyticsService) {}

    public generateBar(containerId: string, chartType: string) {
        /*this.authService.authenticate('admin', 'district').subscribe(
            (data: any) => {
                console.log(data);
            },
            err => console.log(err)
        );*/
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
    public generateDashboard(dashboard: string): void {
        if (dashboard === undefined) {
            dashboard = 'PHC_SYSTEM';
        }
        this.dashlets = [
            {uid: 'container1', typeChart: 'bar'},
            {uid: 'container2', typeChart: 'pie'},
            {uid: 'container3', typeChart: 'column'},
            {uid: 'container4', typeChart: 'stacked'},
            {uid: 'container5', typeChart: 'donut'},
            {uid: 'container6', typeChart: 'line'}
        ];
        console.log( this.dashlets.length + ' length');
        for (let i = 0; i < this.dashlets.length; i++) {
            this.generateBar(this.dashlets[i].uid, this.dashlets[i].typeChart);
        }
        this.dashboardService.getDashboard(dashboard).subscribe(
            (data: any) => {
                console.log(data);
                for (let i = 0; i < data['dashlets'].length; i++) {
                    console.log('http://localhost:8080/api/' + data['dashlets'][i]['link']);
                    this.analyticsService.getAnalyticsData('http://localhost:8080/api/' + data['dashlets'][i]['link']).subscribe(
                        (analyticsData => {
                            console.log(analyticsData);
                        })
                    );
                }
            },
            err => console.log(err)
        );
    }
}
interface IDashlet {
    uid: string;
    typeChart: string;
}
