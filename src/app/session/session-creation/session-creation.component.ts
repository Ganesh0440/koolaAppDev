import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-session-creation',
  templateUrl: './session-creation.component.html',
  styleUrls: ['./session-creation.component.css']
})
export class SessionCreationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public saveToDraft(event) {

  }
  public sessionPreview(event) {
    this.router.navigate(['session-details']);
  }
  public publishSession(event) {

  }


}
