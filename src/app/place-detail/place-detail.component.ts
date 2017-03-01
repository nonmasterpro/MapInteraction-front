import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { PlaceService } from '../shared/place.service';
import { RoutesService } from '../shared/routes.service';
import * as _ from "lodash";
import { AuthService } from '../shared/auth.service';
import { User } from '../models/user';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.scss']
})
export class PlaceDetailComponent implements OnInit {
    user: User;
   toggled: boolean;
    data: any;
    id : number;

  constructor(
  	 private route: ActivatedRoute,
    private router: Router,
    private placeService: PlaceService,
    private routesService: RoutesService,
    private authService: AuthService) { }

  ngOnInit() {
  this.authService.obMe.subscribe((user: User) => {
      this.user = user;
       this.toggled =true;
 
     });
    this.route.params.forEach((param: Params) => {
        this.id = param['id'];
        this.placeService.get( this.id ).then((res) => {
          this.data = res;
          console.log(res)
        });
       
  })
}

}
