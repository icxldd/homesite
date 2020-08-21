/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IcxlComponent } from './icxl.component';

describe('IcxlComponent', () => {
  let component: IcxlComponent;
  let fixture: ComponentFixture<IcxlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcxlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcxlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
