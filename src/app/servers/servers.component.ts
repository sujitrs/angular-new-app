import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //templateUrl: './servers.component.html',
  template:`
  <server-app></server-app>
<server-app></server-app>
<server-app></server-app>
<server-app></server-app>
  `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
