// import { Category } from './Category';
import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { FirebaseService } from './service/firebase.service';

import { Business } from './business';
import { Category } from './category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  items: FirebaseListObservable<any[]>;
  appState: string;
  activeKey: number;
  businesses: Business[];
  categories: Category[];
  constructor(private appService: FirebaseService) {
    this.items = this.appService.getItems();//.subscribe(data => this.items = data);   
  }

  ngOnInit() {
    this.appService.getBusiness().subscribe(businesses => this.businesses = businesses);
    this.appService.getCategories().subscribe(categories => this.categories = categories);
  }

  filterCategories(category: string) {
    this.appService.getBusiness(category).subscribe(data => this.businesses = data);
  }

  changeState(state, key) {
    if (key) {
      this.activeKey = key;
    }
    this.appState = state;
  }
}