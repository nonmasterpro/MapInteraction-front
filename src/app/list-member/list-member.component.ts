import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { UserService } from '../shared/user.service';
import { AuthService } from '../shared/auth.service';
import { User } from '../models/user';

@Component({
  selector: 'app-list-member',
  templateUrl: './list-member.component.html',
  styleUrls: ['./list-member.component.scss']
})
export class ListMemberComponent implements OnInit {
user: User;
   toggled: boolean;
  data: any;
  options = { 
    'number' : 1,
    'title': 'Member',
    'action': 'member',
    'breadcrumb': [
    		{
        'name': 'Home',
        'link': '/'
    		}, {
        'name': 'Manage Member',
        'link': '/member'
    		}
    ],

    'params':
    {
      'headers': [
        {
          'prop': 'name',
          'type': 'text',
          'name': 'Name',
          'maxWidth': '250'
        },
        {
          'prop': 'email',
          'type': 'text',
          'name': 'Email'
        },
        {
          'prop': 'roleName',
          'type': 'text',
          'name': 'Role'
        }
      ]
    }
  };


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private authService: AuthService) { }

  ngOnInit() {
    this.authService.obMe.subscribe((user: User) => {
      this.user = user;
       this.toggled =true;

     });
    this.userService.all().then((res) => {
      this.data = res;
      console.log(res)
    });
  }

  delete(e) {
   this.userService.delete(e.id).then((res) => {
      location.reload();
    }, (error) => {
      console.log(error);
    });
  }

}
