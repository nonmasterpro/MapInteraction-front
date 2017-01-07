import { Component, OnInit, ViewChild  } from '@angular/core';

@Component({
  selector: 'app-places-management',
  templateUrl: './places-management.component.html',
  styleUrls: ['./places-management.component.scss']
})
export class PlacesManagementComponent implements OnInit {
	types = [
    {value: 't1', viewValue: 'Shop'},
    {value: 't2', viewValue: 'Building'},
    {value: 't3', viewValue: 'Faculty'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
