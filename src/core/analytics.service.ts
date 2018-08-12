import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class AnalyticsService {
    public constructor(private httpClient: HttpClient) {}
    public getAnalyticsData($analyticsEndpoint) {
        const username = '';
        const password = '';
        const httpOptions = { headers: { 'Authorization': 'Basic ' + btoa(username + ':' + password) }};

        return this.httpClient.get($analyticsEndpoint, httpOptions);
    }
}
