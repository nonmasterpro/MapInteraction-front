import { Component, OnInit, Input } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { ScheduleService } from '../shared/schedule.service';

@Component({
  selector: 'app-schedule-management',
  templateUrl: './schedule-management.component.html',
  styleUrls: ['./schedule-management.component.scss']
})
export class ScheduleManagementComponent implements OnInit {

  @Input() options;
  @Input() member;
  constructor(
    private scheduleService: ScheduleService
    ) { }

  ngOnInit() {

  }

  setSchedule(member) {

  }

delete(id) {
  let c = confirm("Press a button!");
     if (c == true) {
   this.scheduleService.delete(id).then((res) => {
      location.reload();
    }, (error) => {
      console.log(error);
    })}
    else{}
  }
  
  }



