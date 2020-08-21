import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

export interface IIdentityToken {
    access_token: string;
    expires_in: number;
    token_type: string;
}

@Injectable()
export class HomeService {

    private uri: string = `${environment.GateWayAPI}`;
    public constructor(
        private httpClient: HttpClient
    ) { }

    public GetHome(): Observable<string> {
        let url: string = `${this.uri}/basic/api/Home`;
        return this.httpClient.get<string>(url);
    }

}
