import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {

  options = {
  	'title':'Place',
  	'breadcrumb': [
  		{
  			'name': 'Home',
  			'link': '/'
  		}, {
  			'name': 'Manage Page',
  			'link': '/placeManagement'
  		}, {
  			'name': '1111 Page',
  			'link': '/8'
  		}, {
  			'name': '22222 Page',
  			'link': '/9'
  		}
  	],

    'tiles': [
      { 'cols': 3, 
        'rows': 5, 
        'img':'assets/img/IU.jpg'
      },
      { 
        'cols': 1, 
        'rows': 5, 
      },
    ],

    'details' : [
      { 'Name':'CAMT1', 
        'Description' : 'camt22', 
        'Contact':'111', 
        'Type' :'buiding', 
        'Website' :'google.com', 
        'CoordinateX':'1111', 
        'CoordinateY':' 1111'}
     ]

  }

  
  
  
  constructor() { }

  ngOnInit() {
  }

}
