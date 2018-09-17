import * as Highcharts from 'highcharts';
import * as Exporting from 'highcharts/modules/exporting';

export class BarChart {
    public create(containerId: string, chartType: string, title: string, highchartObject: any) {
        Exporting(Highcharts);
        Highcharts.chart(containerId, highchartObject);
    }
}
