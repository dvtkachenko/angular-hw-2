import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  brand: string = "Clients";

  myName: string = "Dmitriy Tkachenko";

  constructor() { }

  ngOnInit() {
  }

}
