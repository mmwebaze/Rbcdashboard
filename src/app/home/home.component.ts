import { Component, OnInit } from '@angular/core';
import {ChartService} from '../../core/chart.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
    providers: [ChartService]
})
export class HomeComponent implements OnInit {
    public constructor(private chartService: ChartService, private activatedRoute: ActivatedRoute) {}
    public ngOnInit() {
        this.activatedRoute.params.subscribe( params =>  this.chartService.generateDashboard(params['id']) );
    }
}


