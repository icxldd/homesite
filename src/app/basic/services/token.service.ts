import { Injectable } from '@angular/core';


const tokenName = "logininfo";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

constructor() { }

setLoginInfo(val){
  localStorage.setItem(tokenName,val);
}
getIsLogin(){
  let obj =   localStorage.getItem(tokenName);
  if(!obj){
    return false;
  }else{
    return true;
  }
}



}
