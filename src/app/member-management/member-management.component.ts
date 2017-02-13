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
				'name': 'Email',
				'type': 'text',
				'value': '',
				'control': new FormControl('', [<any>Validators.required, <any>Validators.minLength(2)]),
				'prop': 'email'
			},
			{
				'name': 'Password',
				'type': 'password',
				'value': '',
				'control': new FormControl('', [<any>Validators.required, <any>Validators.minLength(2)]),
				'prop': 'password'
			},
			{
				'name': 'Role',
				'type': 'selection',
				'value': '',
				'control': new FormControl('', [<any>Validators.required]),
				'prop': 'roleName',
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
  edit(e) {
  	this.id
   	this.userService.update(this.id,e.parameters).then((res) => {
  		this.router.navigate(['member']);
  	}, (error) => {
  		console.log(error);
  	});
    
  }

  add(e) {
  	this.userService.create(e.parameters).then((res) => {
    this.router.navigate(['member']);
  	}, (error) => {
  		console.log(error);
  	});
  }

}
