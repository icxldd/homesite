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
export class IdentityService {

    private uri: string = `${environment.APIServer}`;
    private apiurl: string = `${environment.GateWayAPI}/basic/api`;
    
    public constructor(
        private httpClient: HttpClient
    ) { }

    public login(account: { username: string; password: string }): Observable<IIdentityToken> {
        let url: string = `${this.uri}/connect/token`;
        const body: FormData = new FormData();
        body.set('grant_type', 'password');
        body.set('client_id', 'ro.client');
        body.set('client_secret', 'secret');
        body.set('scope', 'api1');
        body.set('username', account.username);
        body.set('password', account.password);
        return this.httpClient.post<IIdentityToken>(url, body);
    }
    public register(account: { username: string; password: string }): Observable<any> {
        let url: string = `${this.apiurl}/account`;
        const body: FormData = new FormData();
        body.set('Name', account.username);
        body.set('PassWord', account.password);
        let obj =  {'Name':account.username,'PassWord':account.password};
        return this.httpClient.post<any>(url, obj);
    }


    public getMenus():Observable<any>{
        let url: string = `${this.apiurl}/Menu`;
        return this.httpClient.get<any>(url);
    }


    public getProfile(): Observable<any> {
        return this.httpClient.get<any>(`${this.uri}/Identity/Profile`);
    }
}
