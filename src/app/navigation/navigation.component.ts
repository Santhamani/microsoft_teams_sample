import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  showSelected: boolean;

  constructor() {
    this.showSelected = false;
  }

   ToggleButton() {
      this.showSelected = !this.showSelected;
   }

  ngOnInit() {
  }

}
