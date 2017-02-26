import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { StationService } from '../shared/station.service';

@Component({
  selector: 'app-list-station',
  templateUrl: './list-station.component.html',
  styleUrls: ['./list-station.component.scss']
})
export class ListStationComponent implements OnInit {
data: any;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private stationService: StationService) { }
options = {
    'title': 'Station',
    'action': 'station',
    'number' : 1,
    'breadcrumb': [
    		{
        'name': 'Home',
        'link': '/'
    		}, {
        'name': 'Manage station',
        'link': '/station'
    		}
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
          'prop': 'bus_routes',
          'type': 'routes',
          'name': 'Bus Routes'
        },
        {
          'prop': 'x',
          'type': 'text',
          'name': 'Coordinate X'
        },
        {
          'prop': 'y',
          'type': 'text',
          'name': 'Coordinate Y'
        }
      ]}
  };

  ngOnInit() {
      this.stationService.all().then((res) => {
      this.data = res;
      console.log(res);
    });
  }
  delete(e) {
   this.stationService.delete(e.id).then((res) => {
      location.reload();
    }, (error) => {
      console.log(error);
    });
  }

}
