import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { RoutesService } from '../shared/routes.service';

@Component({
  selector: 'app-list-routes',
  templateUrl: './list-routes.component.html',
  styleUrls: ['./list-routes.component.scss']
})
export class ListRoutesComponent implements OnInit {
  data: any;
  constructor( 
  	private route: ActivatedRoute,
    private router: Router,
    private routesService: RoutesService) { }
  options = {
    'title': 'Route',
    'action': 'route',
    'number' : 1,
    'breadcrumb': [
    		{
        'name': 'Home',
        'link': '/'
    		}, {
        'name': 'Manage route',
        'link': '/route'
    		}
    ],
    'params':
    {
      'headers': [
        {
          'prop': 'name',
          'type': 'text',
          'name': 'Name',
          'maxWidth': '150'
        }
      ]}
  };

  ngOnInit() {
      this.routesService.all().then((res) => {
      this.data = res;
      console.log(res);
    });
  }
  delete(e) {
   this.routesService.delete(e.id).then((res) => {
      location.reload();
    }, (error) => {
      console.log(error);
    });
  }

}
