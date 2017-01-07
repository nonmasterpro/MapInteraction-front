import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-member-management',
  templateUrl: './member-management.component.html',
  styleUrls: ['./member-management.component.scss']
})
export class MemberManagementComponent implements OnInit {

	options = {
		'title': 'Member',
		'type': 'member',
		'action': 'add',
		'params': [
			{
				'name': 'name',
				'type': 'text',
				'value': '',
				'control': new FormControl('', [<any>Validators.required, <any>Validators.minLength(2)])
			},
			{
				'name': 'last',
				'type': 'text',
				'value': '',
				'control': new FormControl('', [<any>Validators.required, <any>Validators.minLength(3)])
			},
			{
				'name': 'gender',
				'type': 'selection',
				'selections': [
					{
						'name': 'Male',
						'value': 'male'
					},
					{
						'name': 'Female',
						'value': 'female'
					}
				]
			},
			{
				'name': 'test',
				'type': 'selection',
				'selections': [
					{
						'name': 'Male',
						'value': 'male'
					},
					{
						'name': 'Female',
						'value': 'female'
					}
				]
			}
		]
	};

  constructor(
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
  	this.route.params.forEach((param: Params) => {
  		this.options.action = param['action'];
  	});
  }

}
