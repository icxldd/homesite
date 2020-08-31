import { Component, OnInit ,ElementRef,Renderer2} from '@angular/core';
import { Router } from '@angular/router';
import { IdentityService } from 'src/app/services';
import { forEach } from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,private idsrc:IdentityService,private el:ElementRef,private renderer2: Renderer2) { 
    this.router.navigate(['page',{ outlets: { context:['page1'] }}]);

  }
  isTopMenu=true;
  isShowRight = false;
  data:any[];



  btn1:boolean;
  btn2:boolean;
  btn3:boolean;
  ngOnInit() {
    this.idsrc.getMenus().subscribe(x=>{
      console.log(x);
      this.data = x;
    });
  }
  boxclick(){
    if(this.isShowRight){
      this.isShowRight=false;
    }
  }
  onmousemove_ther_(event){
    let obj = this.el.nativeElement.querySelector(`#therInfos`);
    let target = event.target.getBoundingClientRect();
    let x = target.left;
    let y = target.top;
    this.renderer2.setStyle(obj,'left',`${x}px`);
    this.renderer2.setStyle(obj,'top',`${y+64}px`);
    this.renderer2.setStyle(obj,'display',`block`);
  }

  onmouseout_ther_(event){

    //data-childid_2
    let id_ = event.target.getAttribute('data-childid_2');
    let obj2 = this.el.nativeElement.querySelector(`[data-childid_2="${id_}"]`);
    let obj = this.el.nativeElement.querySelector(`#therInfos`);
    let target = event.target.getBoundingClientRect();
    let x = target.left;
    let y = target.top;
    this.iscontai(event,obj,()=>{
            let objo = this.el.nativeElement.querySelector(`#therInfos`);
            this.renderer2.setStyle(objo,'display',`none`);
    });



    this.iscontai(event,obj,()=>{
      let objo = this.el.nativeElement.querySelector(`#therInfosChildInfo`);
      Array.from(objo.children).forEach(x=>{
      this.renderer2.setStyle(x,'display',`none`);
      });
});
    // this.iscontai

  }

  onmouseout_ther(id,event){
    let obj = this.el.nativeElement.querySelector(`[data-childid="${id}"]`);
    let target = event.target.getBoundingClientRect();
    let x = target.left;
    let y = target.top;
    this.iscontai(event,obj,()=>{
      let objo = this.el.nativeElement.querySelector(`#therInfosChildInfo`);
      Array.from(objo.children).forEach(x=>{
      this.renderer2.setStyle(x,'display',`none`);
      });
      });
  }
  onmousemove_ther(id,event){
    let objo = this.el.nativeElement.querySelector(`#therInfosChildInfo`);
    Array.from(objo.children).forEach(x=>{
    this.renderer2.setStyle(x,'display',`none`);
    });

    let obj = this.el.nativeElement.querySelector(`[data-childid="${id}"]`);
    let target = event.target.getBoundingClientRect();
    let x = target.left;
    let y = target.top;
    this.renderer2.setStyle(obj,'left',`${x+64*2+2}px`);
    this.renderer2.setStyle(obj,'top',`${y}px`);
    this.renderer2.setStyle(obj,'display',`block`);
  }

  onmousemove(id,event){

    // this.onmouseout();
    let obj = this.el.nativeElement.querySelector(`[data-id="${id}"]`);
    let target = event.target.getBoundingClientRect();
    let x = target.left;
    let y = target.top;
    this.renderer2.setStyle(obj,'left',`${x}px`);
    this.renderer2.setStyle(obj,'top',`${y+64}px`);
    this.renderer2.setStyle(obj,'display',`block`);
  }
  // iscontai(event,obj){
  //   var div = obj;
  //   var x=event.clientX;
  //   var y=event.clientY;
  //   var divx1 = div.offsetLeft;
  //   var divy1 = div.offsetTop;
  //   var divx2 = div.offsetLeft + div.offsetWidth;
  //   var divy2 = div.offsetTop + div.offsetHeight;
  //   if( x < divx1 || x > divx2 || y < divy1 || y > divy2){
  //     let objo = this.el.nativeElement.querySelector(`#topinfos`);
  //     Array.from(objo.children).forEach(x=>{
  //     this.renderer2.setStyle(x,'display',`none`);
  //     });
  //   }
  // }
  iscontai(event,obj,fun){
    var div = obj;
    var x=event.clientX;
    var y=event.clientY;
    var val = 3;
    var divx1 = div.offsetLeft;
    var divy1 = div.offsetTop;
    var divx2 = div.offsetLeft + div.offsetWidth;
    var divy2 = div.offsetTop + div.offsetHeight;
    if( x < divx1+val || x > divx2+val || y < divy1+val || y > divy2+val){
      fun.call();
    }
  }
  onmouseout(id,event){
    let obj = this.el.nativeElement.querySelector(`[data-id="${id}"]`);
    let target = event.target.getBoundingClientRect();
    let x = target.left;
    let y = target.top;
    this.iscontai(event,obj,()=>{
      let objo = this.el.nativeElement.querySelector(`#topinfos`);
Array.from(objo.children).forEach(x=>{
this.renderer2.setStyle(x,'display',`none`);
});
});
    // this.iscontai(event,obj);
  }
  settingclick(){
   this.isShowRight = !this.isShowRight; 
  }

}
