import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-list-member',
  templateUrl: './list-member.component.html',
  styleUrls: ['./list-member.component.scss']
})
export class ListMemberComponent implements OnInit {

  data: any;
  options = {
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
          'prop': 'id',
          'type': 'text',
          'name': 'ID'
        },
        {
          'prop': 'name',
          'type': 'text',
          'name': 'Name',
          'maxWidth': '150'
        },
        {
          'prop': 'username',
          'type': 'text',
          'name': 'Username'
        },
        {
          'prop': 'email',
          'type': 'text',
          'name': 'Email'
        },
        {
          'prop': 'password',
          'type': 'text',
          'name': 'Password'
        },
        {
          'prop': 'role',
          'type': 'text',
          'name': 'Role'
        }
      ]
    }
  };


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService) { }

  ngOnInit() {
    this.userService.all().then((res) => {
      this.data = res;
    });
  }

}
