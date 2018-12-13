import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-session-details',
  templateUrl: './session-details.component.html',
  styleUrls: ['./session-details.component.css']
})
export class SessionDetailsComponent implements OnInit {
  isValid: boolean = true;
  termNum: any;
  constructor(private route: ActivatedRoute) {
    this.termNum = this.route.snapshot.params['term'];
    if (this.termNum == 0) {
      this.isValid = true;
    } else if (this.termNum == 1) {
      this.isValid = false;
    }
    //console.log(this.showHide);
    //this.route.params.subscribe(params => console.log("kiran--->", params));
  }

  ngOnInit() {
  }

}
