// import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// import { PNG } from '../../../assets/square.png'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  filmIcon = faCoffee;
  constructor() { }
  ngOnInit() {
  }
}
