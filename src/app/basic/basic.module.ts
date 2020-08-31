import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicComponent } from './basic.component';
import { BasicRoutes } from './basic.routing';
import { TokenService } from './services/token.service';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [BasicComponent,LoginComponent,HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    BasicRoutes
  ],
  
  providers:[TokenService]
})
export class BasicModule { }
