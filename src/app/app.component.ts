import { Component } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { FirebaseService } from './service/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  items: FirebaseListObservable<any[]>;
  businesses: FirebaseListObservable<any[]>;
  categories: FirebaseListObservable<any[]>;
  constructor(private appService: FirebaseService) {
    this.items = this.appService.getItems();//.subscribe(data => this.items = data);
    this.businesses = this.appService.getBusiness();
    this.categories = this.appService.getCategories();
  }
}