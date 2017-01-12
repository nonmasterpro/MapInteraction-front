import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

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
			},
			{
				'name': 'Picture',
				'type': 'file',
				'value': ''
			}
		],

		'details': [
        {
          'id': '1',
          'name': 'qq',
          'last': 'des1',
          'gender': 'male',
          'test': 'buiding'
        },
        {

          'id': '2',
          'name': 'ww',
          'last': 'des2',
          'gender': 'female',
          'test': 'buiding'
        }]
	};

  constructor(
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
  	if( this.router.url.includes('edit') ) {
	  	this.route.params.forEach((param: Params) => {
	  		this.id = param['id'];
	  		this.options.action = 'edit'
	  	});
  	} else {
	  	this.options.action = 'add';
  	}
  }

}
