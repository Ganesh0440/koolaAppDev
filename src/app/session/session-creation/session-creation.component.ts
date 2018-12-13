import { Constants } from './../../Constants';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';


@Component({
  selector: 'app-session-creation',
  templateUrl: './session-creation.component.html',
  styleUrls: ['./session-creation.component.css'],
  providers: [SessionService]

})
export class SessionCreationComponent implements OnInit {

  constructor(private router: Router, public rest: SessionService, ) { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts() {

    this.rest.getRequest(Constants.ALLPETS).subscribe((data: {}) => {
      console.log(data);
    });
  }

  public saveToDraft(event, term: string) {
    this.router.navigate(['session-details', { term: term }]);
  }
  public sessionPreview(event, term: string) {
    this.router.navigate(['session-details', { term: term }]);
  }
  public publishSession(event, term: string) {
    this.router.navigate(['session-details', { term: term }]);
  }


}
