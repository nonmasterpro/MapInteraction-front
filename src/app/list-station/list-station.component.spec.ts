/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListStationComponent } from './list-station.component';

describe('ListStationComponent', () => {
  let component: ListStationComponent;
  let fixture: ComponentFixture<ListStationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListStationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
