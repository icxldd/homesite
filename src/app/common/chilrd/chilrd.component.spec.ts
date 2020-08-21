/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChilrdComponent } from './chilrd.component';

describe('ChilrdComponent', () => {
  let component: ChilrdComponent;
  let fixture: ComponentFixture<ChilrdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChilrdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChilrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
