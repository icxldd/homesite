import { Component, OnInit, Output, EventEmitter, OnDestroy, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-chilrd',
  templateUrl: './chilrd.component.html',
  styleUrls: ['./chilrd.component.scss']
})

export class ChilrdComponent implements OnInit {

  public _val = 100;
  constructor() { }
  @Output() updateVal = new EventEmitter<number>();
  @Input() set val(val:number){
    this._val = val;
    
  }
  get setVal(){
    return this._val;
  }
  set setVal(val:number){
    this.val = val;
    this.updateVal.next(val);
  }
  ngOnInit() {
  }

}
