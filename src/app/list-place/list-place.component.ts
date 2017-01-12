import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-place',
  templateUrl: './list-place.component.html',
  styleUrls: ['./list-place.component.scss']
})
export class ListplaceComponent implements OnInit {

  options = {
    'title': 'Place',
    'action': 'place',
    'breadcrumb': [
    		{
        'name': 'Home',
        'link': '/'
    		}, {
        'name': 'Manage place',
        'link': '/placelist'
    		}
    ],

    'tiles': [
      {
        'cols': 3,
        'rows': 5,
      },
      {
        'cols': 1,
        'rows': 5,
      },
    ],

    'params':
    {
      'headers': [
        {
          'prop': 'image',
          'type': 'image',
          'name': 'Image',
          'maxWidth': '300'
        },
        {
          'prop': 'name',
          'type': 'text',
          'name': 'Name',
          'maxWidth': '150'
        },
        {
          'prop': 'description',
          'type': 'text',
          'name': 'Description'
        },
        {
          'prop': 'contact',
          'type': 'text',
          'name': 'Cotact'
        },
        {
          'prop': 'type',
          'type': 'text',
          'name': 'Type'
        },
        {
          'prop': 'website',
          'type': 'text',
          'name': 'Website'
        },
        {
          'prop': 'coordinateX',
          'type': 'text',
          'name': 'Coordinate X'
        },
        {
          'prop': 'coordinateY',
          'type': 'text',
          'name': 'Coordinate Y'
        }
      ],

      'details': [
        {
          'image': 'assets/img/IU.jpg',
          'name': 'CAMT1',
          'description': 'des1',
          'contact': '111',
          'type': 'buiding',
          'website': 'google.com',
          'coordinateX': '1111',
          'coordinateY': ' 1111'
        },
        {

          'image': 'assets/img/IU2.jpg',
          'name': 'CAMT2',
          'description': 'des22',
          'contact': '22222',
          'type': 'buiding222',
          'website': 'google.com22',
          'coordinateX': '2222',
          'coordinateY': ' 22222'
        }]
    }
  };

  constructor(
    private route: ActivatedRoute
  )
  { }

  ngOnInit() {

    this.route.params.forEach((param: Params) => {
      this.options.action = param['action'];
    });
  }

}
