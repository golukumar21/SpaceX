import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()

export class GeneralService {
    constructor(private http: HttpClient) { }
    private apiURL = environment.baseUrl;

    private headers = new HttpHeaders({
        'Content-Type': 'application/json',
    });
    private options = { headers: this.headers }

    public loadData(): Observable<any> {
        return this.http.get(this.apiURL, this.options);
    }

    public landAndLaunch(launchFlag, landFlag): Observable<any> {
        return this.http.get(this.apiURL + '&launch_success=' + launchFlag + '&land_success=' + landFlag, this.options);
    }

    public allFilter(launchFlag, landFlag, year): Observable<any> {
        return this.http.get(this.apiURL + '&launch_success=' + launchFlag + '&land_success=' + landFlag + '&launch_year=' + year, this.options);
    }
}
