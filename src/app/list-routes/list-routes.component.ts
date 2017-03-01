import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { RoutesService } from '../shared/routes.service';
import { AuthService } from '../shared/auth.service';
import { User } from '../models/user';

@Component({
  selector: 'app-list-routes',
  templateUrl: './list-routes.component.html',
  styleUrls: ['./list-routes.component.scss']
})
export class ListRoutesComponent implements OnInit {
    user: User;
   toggled: boolean;
  data: any;
  constructor( 
  	private route: ActivatedRoute,
    private router: Router,
    private routesService: RoutesService,
    private authService: AuthService) { }
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
    this.authService.obMe.subscribe((user: User) => {
      this.user = user;
       this.toggled =true;
 
     });
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
