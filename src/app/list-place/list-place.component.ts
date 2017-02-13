import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { PlaceService } from '../shared/place.service';

@Component({
  selector: 'app-list-place',
  templateUrl: './list-place.component.html',
  styleUrls: ['./list-place.component.scss']
})
export class ListplaceComponent implements OnInit {

  data: any;
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
          'prop': 'x',
          'type': 'text',
          'name': 'Coordinate X'
        },
        {
          'prop': 'y',
          'type': 'text',
          'name': 'Coordinate Y'
        }
      ]}
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private placeService: PlaceService
  )
  { }

  ngOnInit() {
      this.placeService.all().then((res) => {
      this.data = res;
    });
  }
  delete(e) {
   this.placeService.delete(e.id).then((res) => {
      location.reload();
    }, (error) => {
      console.log(error);
    });
  }

}
