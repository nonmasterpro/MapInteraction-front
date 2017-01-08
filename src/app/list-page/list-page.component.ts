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
  			'link': '/placelist'
  		}
  	],

    'tiles': [
      { 'cols': 3, 
        'rows': 5,
      },
      { 
        'cols': 1, 
        'rows': 5, 
      },
    ],

    'details' : [
      { 
        'Name':'CAMT1', 
        'Description' : 'camt111', 
        'Contact':'111', 
        'Type' :'buiding', 
        'Website' :'google.com', 
        'CoordinateX':'1111', 
        'CoordinateY':' 1111',
        'image':'assets/img/IU.jpg',
      },
      {
        'Name':'CAMT2222', 
        'Description' : 'camt22222', 
        'Contact':'222', 
        'Type' :'buiding', 
        'Website' :'google.com', 
        'CoordinateX':'222', 
        'CoordinateY':' 222',
        'image':'assets/img/IU2.jpg'
      }
     ]

  }

  
  
  
  constructor() { }

  ngOnInit() {
  }

}
