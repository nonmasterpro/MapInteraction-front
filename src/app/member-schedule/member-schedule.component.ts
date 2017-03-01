import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { SearchPipe } from '.././search.pipe';
import { Observable } from 'rxjs/Observable';
import * as _ from "lodash";
import 'rxjs/Rx';
import { UserService } from '../shared/user.service';


@Component({
  selector: 'app-member-schedule',
  templateUrl: './member-schedule.component.html',
  styleUrls: ['./member-schedule.component.scss']
})
export class MemberScheduleComponent implements OnInit {

  data: any;
 
  options = {
    'showSchedule': true,
    'title': 'Schedule',
    'action': 'schedule',
    'breadcrumb': [
      {
        'name': 'Home',
        'link': '/'
      }, {
        'name': 'Manage Schedule',
        'link': '/schedule'
      }
    ],

    'params':
    {
      'headers': [
        {
          'prop': 'courseName',
          'type': 'text',
          'name': 'CourseName',
        },
        {
          'prop': 'day',
          'type': 'text',
          'name': 'Day'
        },
        {
          'prop': 'start',
          'type': 'text',
          'name': 'Start'
        },
        {
          'prop': 'end',
          'type': 'text',
          'name': 'End'
        },
        {
          'prop': 'place_id',
          'type': 'text',
          'name': 'Place'
        }
      ],

      'members': [
      ]
    }
  };

  member: any;
  @ViewChild('input') input: ElementRef;

  search: string = '';

  constructor(
    private userService: UserService    ) {}
  ngOnInit() {
    
     this.getParameters();
       // this.options.params.members = this.test;

 // if (this.options.params.members[0]) {
 //      this.member = this.options.params.members[0];

 //    }
   

    let eventObservable = Observable.fromEvent(this.input.nativeElement, 'keyup')
    eventObservable.subscribe();
    console.log(eventObservable);

  }
  setSchedule(member) {
    this.member = member;
  }
  searchMember(members){
    var a = _.map(members,(member) => {
      console.log(member);
    });
  }
  getParameters() {
    let y =0;
    let ss = [];
       this.userService.all().then((res) => {
      this.data = res;
     _.forEach( this.data , (value) => {
    let objResult = {};
    // console.log(value.schedules);
              objResult['name'] = value.name;
              objResult['id'] = value.id;
              objResult['subjects'] = value.schedules;
              ss.push(objResult);
          // console.log(ss);


    });
     // console.log(ss);
       // this.options.params.members = ss;
       this.options.params.members = ss;
       this.member = this.options.params.members[0];
       this.toggled =true;

     // console.log(this.options.params);
    //     if (this.options.params.members[0]) {
    //   this.member = this.options.params.members[0];

    // }

     //  _.forEach( this.data.schedules[y] , (value) => {
     // console.log(value)
      
     //        ss.push(value);
     //        y++;
     //      });
    //    _.forEach( this.data.schedules , (value) => {
    //       console.log(value)
    // })
     // this.data.schedules.forEach((p: any) => {
     //        ss.push(this.data.bus_routes);
     //        y++;
     //      console.log(ss)

     //      })
        });
       return ss;
  }
   toggled: boolean;
  
}
