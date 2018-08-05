import { Component, OnInit } from '@angular/core';
import {ChartService} from '../../core/chart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
    providers: [ChartService]
})
export class HomeComponent implements OnInit {
    dashlets: IDashlet[];
    public constructor(private chartService: ChartService) {}
    public ngOnInit() {
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
            this.chartService.generateBar(this.dashlets[i].uid, this.dashlets[i].typeChart);
        }
    }
}

interface IDashlet {
    uid: string;
    typeChart: string;
}