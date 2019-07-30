import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() title;
  @Input() theme;
  @Input() ngClass=[];

  isCollasped = false;
  constructor() { }

  ngOnInit() {
  }
  toggleCollapseNavbar() :void {

      this.isCollasped = !this.isCollasped;
    
  }
}
