import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ChartService} from '../core/chart.service';
import {AuthService} from '../core/auth.service';
import { HttpClientModule } from '@angular/common/http';
import {AlertModule} from './alert/alert.module';
import {AlertComponent} from './alert/alert.component';
import {AppRoutingModule} from './app-routing.module';
import { HomeComponent } from './home/home.component';
import {DashboardService} from '../core/dashboard.service';
import {AnalyticsService} from '../core/analytics.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, AlertModule, AppRoutingModule
  ],
  providers: [ AuthService, DashboardService, AnalyticsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
