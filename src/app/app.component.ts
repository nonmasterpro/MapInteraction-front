import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent implements OnInit, AfterViewInit {

  // @ViewChild('userComp') userComp;

  title = 'app works!';
  public options = {
    position: ["top", "right"]
  }

  constructor(
    private authService: AuthService
    ) {}

  ngOnInit() {
    this.authService.me();
  }

  ngAfterViewInit() {
    // console.log( this.userComp );
    // this.userComp.onClick('TEST');
  }

  onClick(e) {
    console.log(e);
  }
}
