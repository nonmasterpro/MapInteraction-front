import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-member-management',
  templateUrl: './member-management.component.html',
  styleUrls: ['./member-management.component.scss']
})
export class MemberManagementComponent implements OnInit {

	id: number;

	options = {
		'title': 'Member',
		'type': 'member',
		'action': 'add',
		'params': [
			{
				'name': 'Name',
				'type': 'text',
				'value': '',
				'control': new FormControl('', [<any>Validators.required, <any>Validators.minLength(2)]),
				'prop': 'name'
			},
			{
				'name': 'Username',
				'type': 'text',
				'value': '',
				'control': new FormControl('', [<any>Validators.required, <any>Validators.minLength(2)]),
				'prop': 'username'
			},
			{
				'name': 'Email',
				'type': 'text',
				'value': '',
				'control': new FormControl('', [<any>Validators.required, <any>Validators.minLength(2)]),
				'prop': 'email'
			},
			{
				'name': 'Password',
				'type': 'text',
				'value': '',
				'control': new FormControl('', [<any>Validators.required, <any>Validators.minLength(2)])
			},
			{
				'name': 'Role',
				'type': 'selection',
				'selections': [
					{
						'name': 'Admin',
						'value': 'admin'
					},
					{
						'name': 'User',
						'value': 'user'
					}
				]
			},
			{
				'name': 'Picture',
				'type': 'file',
				'value': ''
			}
		]
	};

	data: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
    ) { }

  ngOnInit() {
  	if( this.router.url.includes('edit') ) {
	  	this.route.params.forEach((param: Params) => {
	  		this.id = param['id'];
	  		this.userService.get( this.id ).then((res) => {
	  			this.data = res;
	  			this.options.params.forEach((p: any) => {
	  				p.value = this.data[ p.prop ] || '';
	  			})
	  		});
	  		this.options.action = 'edit'
	  	});
  	} else {
	  	this.options.action = 'add';
  	}
  }

}
