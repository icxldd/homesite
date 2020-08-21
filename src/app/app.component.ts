import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as fromService from './services';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor( private identitySrv: fromService.IdentityService,public translateService: TranslateService) {
        console.log('constructor');
    }
    private _lang: string;
    langs: Array<string> = ['cn', 'en'];
    toggleLang() {
        this._lang = this._lang == 'en' ? 'cn' : 'en';
        this.translateService.use(this._lang);
      }//toggleLang
      get langFlag() {
        if (!this._lang) return 'EN';
        return this._lang == 'en' ? "中" : 'EN';
      }
    ngOnInit() {
        console.log('ngOnInit');
        /* --- set i18n begin ---*/
        this.translateService.addLangs(['cn', 'en']);
        this.translateService.setDefaultLang('cn');
        const browserLang = this.translateService.getBrowserLang();
        this.translateService.use(browserLang.match(/cn|en/) ? browserLang : 'cn');
        // this.translateService.use("en");
        /* --- set i18n end ---*/

        
        this.identitySrv.login({username:'icxl',password:'123456'})
        .subscribe(res => {
            localStorage.setItem('access_token', res.access_token);
        });

      }
}
