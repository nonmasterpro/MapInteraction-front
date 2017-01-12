import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-member',
  templateUrl: './list-member.component.html',
  styleUrls: ['./list-member.component.scss']
})
export class ListMemberComponent implements OnInit {

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
      ],

      'details': [
        {
          'name': 'admin',
          'username': 'admin1',
          'email': 'admin@admin.com',
          'password': '12345',
          'role': 'Admin'
        },
        {
          'name': 'user',
          'username': 'user1',
          'email': 'user@user.com',
          'password': '12345',
          'role': 'user'
        }]
    }
  };


  constructor() { }

  ngOnInit() {
  }

}
