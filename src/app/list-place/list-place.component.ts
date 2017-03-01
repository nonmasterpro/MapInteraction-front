import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { PlaceService } from '../shared/place.service';
import { AuthService } from '../shared/auth.service';
import { User } from '../models/user';

@Component({
  selector: 'app-list-place',
  templateUrl: './list-place.component.html',
  styleUrls: ['./list-place.component.scss']
})
export class ListplaceComponent implements OnInit {
    user: User;
   toggled: boolean;
  number : '1';
  data: any;
  options = {
    'title': 'Place',
    'action': 'place',
    'number' : 1,
    'breadcrumb': [
    		{
        'name': 'Home',
        'link': '/'
    		}, {
        'name': 'Manage place',
        'link': '/place'
    		}
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
          'prop': 'bus_routes',
          'type': 'routes',
          'name': 'Bus Routes'
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
    private placeService: PlaceService,
    private authService: AuthService
  )
  { }

  ngOnInit() {
    this.authService.obMe.subscribe((user: User) => {
      this.user = user;
       this.toggled =true;
 
     });
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
