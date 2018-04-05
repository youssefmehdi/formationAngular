import { Component, OnInit } from '@angular/core';
import { NAVLINKS } from '../../../core/services/navlink';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  title: string;
  isCollapsed = true;
  links = NAVLINKS;
  constructor() { }

  ngOnInit() {
    this.title = 'My Super App!!';
  }
}
