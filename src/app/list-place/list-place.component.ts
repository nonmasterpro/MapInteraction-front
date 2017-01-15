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
    'params':
    {
      'headers': [
        {
          'prop': 'id',
          'type': 'text',
          'name': 'id'
        },
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
      ]}
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
