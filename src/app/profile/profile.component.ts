import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute, ) { }
  name="";
  name2="";
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.name = params['name'];
    })

    this.route.queryParams.subscribe(params => {
      this.name2 = params['name'];
    })
  }

}
