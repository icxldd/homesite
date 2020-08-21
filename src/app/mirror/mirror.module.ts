import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MirrorRoutingModule } from './mirror-routing.module';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { IcxlComponent } from './components/icxl/icxl.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DycToolComponent } from './components/dyc-tool/dyc-tool.component';
import * as fromService from './services';
import { NavComponent } from '../common/nav/nav.component';
import { TestComponent } from '../common/test/test.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { createTranslateHttpLoader } from '../app.module';
import { HttpClient } from '@angular/common/http';
@NgModule({
    declarations: [IcxlComponent,LoginComponent, HomeComponent, DycToolComponent,NavComponent,TestComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MirrorRoutingModule,
        TranslateModule.forRoot({
            loader: {
              provide: TranslateLoader,
              useFactory: (createTranslateHttpLoader),
              deps: [HttpClient]
            }
          })
    ],
    providers:[
        fromService.ComponentDesignDataStoreService,
        fromService.HomeService,
        fromService.PageMetaDataStoreService,
        fromService.ResourceDataStoreService
    ]
})
export class MirrorModule { }
