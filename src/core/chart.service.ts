import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {BarChart} from './visualizations/bar.chart';
import {PieChart} from './visualizations/pie.chart';
import {StackedChart} from './visualizations/stacked.chart';
import {DonutChart} from './visualizations/donut.chart';
import {LineChart} from './visualizations/line.chart';
import {DashboardService} from './dashboard.service';
import {AnalyticsService} from './analytics.service';
import {Util} from '../util/util';

@Injectable()
export class ChartService {
    barChart: BarChart;
    util: Util;
    dashlets: IDashlet[];
    public constructor(private authService: AuthService, private dashboardService: DashboardService,
                       private analyticsService: AnalyticsService) {
        this.util = new Util();
    }

    public generateBar(containerId: string, chartType: string, title: string, dataRows) {
        //console.log(containerId + ' -- ' + chartType);
        /*this.authService.authenticate('admin', 'district').subscribe(
            (data: any) => {
                console.log(data);
            },
            err => console.log(err)
        );*/
        // const util = new Util();
        this.util.generateChart(containerId, chartType, title, dataRows);
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
        // console.log( this.dashlets.length + ' length');
        /*for (let i = 0; i < this.dashlets.length; i++) {
            this.generateBar(this.dashlets[i].uid, this.dashlets[i].typeChart);
        }*/
        this.dashboardService.getDashboard(dashboard).subscribe(
            (data: any) => {
                // console.log(data);
                for (let i = 0; i < data['dashlets'].length; i++) {
                     console.log('http://localhost:8080/api/' + data['dashlets'][i]['link']);
                    this.analyticsService.getAnalyticsData('http://localhost:8080/api/' + data['dashlets'][i]['link']).subscribe(
                        (analyticsData => {
                            //console.log(analyticsData['rows']);
                            this.generateBar(data['dashlets'][i]['id'], data['dashlets'][i]['chartType'].toLowerCase(),
                                data['dashlets'][i]['title'], analyticsData['rows']);
                        })
                    );
                }
            },
            err => {
                console.log(err);
            }
        );
    }
    public generateChart() {}
}
interface IDashlet {
    uid: string;
    typeChart: string;
}
