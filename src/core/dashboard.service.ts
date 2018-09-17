import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class DashboardService {
    public constructor(private httpClient: HttpClient) {}
    public getDashboard(dashboardName: string) {
        const username = 'amza';
        const password = 'district';
        const httpOptions = { headers: { 'Authorization': 'Basic ' + btoa(username + ':' + password) }};

        return this.httpClient.get('http://localhost:8080/api/dataStore/rbcdashboard/' + dashboardName + '.json', httpOptions);
    }
}
