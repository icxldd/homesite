import { Component, OnInit } from '@angular/core';
import { IdentityService } from 'src/app/services';
import { TokenService } from '../../services/token.service';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  public loginName:string;
  public loginPassword:string;

  public ShowRegisterUI:boolean = false;



  constructor(private identitySrv: IdentityService,private tokenSrc:TokenService,private router: Router) { }

  ngOnInit() {
  }
  clickHanld_rg(){
    this.ShowRegisterUI = false;
  }
  clickHanld(){
    let obj = {username:this.loginName,password:this.loginPassword};
    let self = this;
    this.identitySrv.login(obj)
    .subscribe(
      { 
      next(res) { 
        self.tokenSrc.setLoginInfo(JSON.stringify(obj));
        self.router.navigateByUrl("home");
        localStorage.setItem('access_token', res.access_token);
      },
      error(err) { 
        if(err.status==400){
          alert("账号密码错误");
        }
        return true;
      }}
    )
  }
  registClick_rg(){
    let obj = {username:this.loginName,password:this.loginPassword};
    let self = this;
    this.identitySrv.register(obj)
    .subscribe(
      { 
      next(res) { 
        self.tokenSrc.setLoginInfo(JSON.stringify(obj));
        self.router.navigateByUrl("home");
      },
      error(err) { 
        alert("格式不对");
        if(err.status==400){
          alert("格式不对");
        }
        return true;
      }}
    )
  }

  registerclickHanld(){
    this.ShowRegisterUI = true;
    console.log(this.ShowRegisterUI);
  }
}
