import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { ScheduleService } from '../shared/schedule.service';
import { PlaceService } from '../shared/place.service';
import * as _ from "lodash";
import { AuthService } from '../shared/auth.service';
import { User } from '../models/user';


@Component({
  selector: 'app-subject-management',
  templateUrl: './subject-management.component.html',
  styleUrls: ['./subject-management.component.scss']
})
export class SubjectManagementComponent implements OnInit {
	user: User;
   toggled: boolean;

id: number;
uid: any;
	options = {
		'title': 'Course',
		'type': 'course',
		'action': 'add',
		'params': [
			{
				'name': 'CourseName',
				'type': 'text',
				'value': '',
				'control': new FormControl('', [<any>Validators.required, <any>Validators.minLength(2)]),
				'prop': 'courseName'
			},
			{
	          'name': 'day',
	          'type': 'selection',
	          'value': '',
	          'control': new FormControl('', [<any>Validators.required]),
	          'prop': 'day',
	          'selections': [
	            {
	              'name': 'Monday',
	              'value': '1'
	            },
	            {
	              'name': 'Tuesday',
	              'value': '2'
	            },
	            {
	              'name': 'Wednesday',
	              'value': '3'
	            },
	            {
	              'name': 'Thursday',
	              'value': '4'
	            },
	            {
	              'name': 'Friday',
	              'value': '5'
	            },
	            {
	              'name': 'Saturday',
	              'value': '6'
	            },
	            {
	              'name': 'Sunday',
	              'value': '7'
	            }
	          ]
	        },
			{
				'name': 'Time Start',
				'type': 'time',
				'value': '',
				'control': new FormControl('', [<any>Validators.required, <any>Validators.minLength(2)]),
				'prop': 'start'
			},
			{
				'name': 'Time End',
				'type': 'time',
				'value': '',
				'control': new FormControl('', [<any>Validators.required, <any>Validators.minLength(2)]),
				'prop': 'end'
			},
	        {
	          'name': 'Type',
	          'type': 'selection',
	          'value': '',
	          'control': new FormControl('', [<any>Validators.required]),
	          'prop': 'qq',
	          'selections': [
	            {
	              'name': 'Building',
	              'value': 'building'
	            },
	            {
	              'name': 'Sport Field',
	              'value': 'sportField'
	            },
	            {
	              'name': 'Cafe',
	              'value': 'cafe'
	            },
	            {
	              'name': 'Restaurant',
	              'value': 'restaurant'
	            },
	            {
	              'name': 'Car Parking',
	              'value': 'carParking'
	            },
	            {
	              'name': 'Dormitory',
	              'value': 'dormitory'
	            },
	            {
	              'name': 'Landmark',
	              'value': 'landmark'
	            },
	            {
	              'name': 'ATM',
	              'value': 'ATM'
	            }
	          ]
	        },
			{
	          'name': 'Place',
	          'type': 'selection',
	          'value': '',
	          'control': new FormControl('', [<any>Validators.required]),
	          'prop': 'placeId',
	          'selections': []
	        },
		]
	};
	data: any;
	places: any;
  constructor(
  	 private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private scheduleService: ScheduleService,
    private placeService: PlaceService,
    private authService: AuthService

    ) { }

  ngOnInit() {
  	this.authService.obMe.subscribe((user: User) => {
      this.user = user;
       this.toggled =true;
 
     });
  	if( this.router.url.includes('edit') ) {
	  	this.route.params.forEach((param: Params) => {
	  		this.id = param['id'];
	  		this.scheduleService.get( this.id ).then((res) => {
	  			this.data = res;
	  			this.uid = this.data['user_id'];
	  			console.log(res)
	  			this.options.params.forEach((p: any) => {
	  				if(p.prop==='placeId'){
	  				p.value = this.data[ 'place_id' ] + '';
	  				}
	  				else if(p.prop==='day'){
	  				p.value = this.data[ p.prop ] + '';
	  				}
	  					else{
	  				p.value = this.data[ p.prop ]  || '';}
	  			    console.log(p.value)

	  			})
	  		}); 
	  		this.options.action = 'edit'
	  	});
  	} else {
	  	this.options.action = 'add';
  	}
  	 this.placeService.all().then(res => {
      this.places=res;
      // console.log(res);

    })
  }

  onChange(e) {
    let listP = [];

    _.forEach( this.places, (value) => {
      	 let objResult = {};

      if (value.type==e.parameters){
              objResult['name'] = value.name;
              objResult['value'] = value.id;
              listP.push(objResult);
          }
              

      })

      
    this.options.params[5]['selections']= listP;
  }


  edit(e) {
  	this.id
        e.parameters['userId']  = this.uid;
        console.log(e.parameters)
        console.log(this.id)

   	this.scheduleService.update(this.id,e.parameters).then((res) => {
  		this.router.navigate(['schedule']);
  	}, (error) => {
  		console.log(error);
  	});
    
  }
 

  add(e) {
  	this.scheduleService.create(e.parameters).then((res) => {
    this.router.navigate(['schedule']);
  	}, (error) => {
  		console.log(error);
  	});
  }

}
