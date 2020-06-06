import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() loggedIn: boolean = false;

  // TODO: Inject appropriate service (To determine loggedIn state, remove @Input)
  // TODO: Move to /core perhaps; Does not belong to /shared due to it being global.
  constructor() { }

  ngOnInit(): void {
  }

}
