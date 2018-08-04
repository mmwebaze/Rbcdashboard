import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class AuthService {
    public constructor(private httpClient: HttpClient) {}
    public authenticate(username: string, password: string) {
        const httpOptions = { headers: { 'Authorization': 'Basic ' + btoa(username + ':' + password) }};

        return this.httpClient.get('http://localhost:8080/api/resources.json', httpOptions);
    }
}
