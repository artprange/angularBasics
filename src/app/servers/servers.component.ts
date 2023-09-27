import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: ` <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  allowNewUser = false;
  userCreationStatus = 'no user was added';
  serverCreationStatus = 'No server was created!';
  serverName = '';
  userName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewUser = true;
    }, 2000);
    setTimeout(() => {
      this.allowNewServer = true;
    }, 5000);
  }

  ngOnInit() {}

  onCreateUser() {
    this.userCreationStatus = 'User was created!' + this.userName;
  }
  onUpdateUser(event: any) {
    this.userName = (<HTMLInputElement>event.target).value;
    this.userName = '';
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created!' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
    this.serverName = '';
    //it would be like this if TS doesn't like it.
    // update: TS didn't like it. it didn't work as intended and in had to specify that it was indeed a HTML element. brat.
  }
}
