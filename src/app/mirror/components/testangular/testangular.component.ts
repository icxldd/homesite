import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toNumber, toString } from 'lodash';
import { ChilrdComponent } from 'src/app/common/chilrd/chilrd.component';

@Component({
  selector: 'app-testangular',
  templateUrl: './testangular.component.html',
  styleUrls: ['./testangular.component.scss']
})
export class TestangularComponent implements OnInit {

  private _size=64;
  private _id = "123";
  public _outval = 0;

  @ViewChild('child',{static:true}) child:ChilrdComponent;

  set update(val:number){
    this._size = val;
    this._id = toString(val);
  }

  get update():number{
    return toNumber( this._id);
  }
  constructor(private acr:ActivatedRoute) { }

  onupdateVal(i){
    this._outval = i;
  }

  ngOnInit() {
    this.acr.queryParams.subscribe(x=>{
      this.update = x["size"];
    })

  }

  onkeyup(){
    this.child.setVal += 1;
  }


}
