/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TestangularComponent } from './testangular.component';

describe('TestangularComponent', () => {
  let component: TestangularComponent;
  let fixture: ComponentFixture<TestangularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestangularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
