// import { Business } from './Business';
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
  newBusiness: any;
  businesses: Business[];
  categories: Category[];

  // Edit form- showing fields(two way databiding) 
  activeCompany: string;
  activeCategory: string;
  activeYearsInBusiness: string;
  activeCity: string;
  activeState: string;
  activeZipcode: string;
  activePhone: string;
  activeEmail: string;
  activeStreet: string;
  activeDescription: string;

  constructor(private appService: FirebaseService) {
    this.items = this.appService.getItems();//.subscribe(data => this.items = data);   
    this.newBusiness = {
      city: "Chennai",
      company: "",
      description: "",
      email: "",
      phone: "",
      state: "",
      street: "",
      "years in business": 0,
      zipcode: ""
    }
  }

  ngOnInit() {
    this.appService.getBusiness().subscribe(businesses => this.businesses = businesses);
    this.appService.getCategories().subscribe(categories => this.categories = categories);
  }

  filterCategories(category: string) {
    this.appService.getBusiness(category).subscribe(data => this.businesses = data);
  }

  changeState(state, key = null) {
    if (key) {
      this.activeKey = key;
    }
    this.appState = state;
  }

  addBusiness(company: string, category: string, yearInBusiness: string, description: string, phone: string, email: string, state: string, zipcode: string, street: string,
    city: string) {
    let created_at = new Date().toString();

    var newBusiness: Business = {
      company: company,
      category: category,
      years_in_business: yearInBusiness,
      description: description,
      email: email,
      phone: phone,
      zipcode: zipcode,
      state: state,
      city: city,
      street: street,
      created_at: created_at
    }
    //console.log(newBusiness);

    this.appService.addBusiness(newBusiness);
    this.changeState('default');
  }

  showEdit(business) {
    this.changeState('edit', business.$key);
    this.activeCompany = business.company;
    this.activeCategory = business.category;
    this.activeYearsInBusiness = business.years_in_business;
    this.activeCity = business.city;
    this.activeState = business.state;
    this.activeZipcode = business.zipcode;
    this.activePhone = business.phone;
    this.activeEmail = business.email;
    this.activeStreet = business.street || business.street_address;
    this.activeDescription = business.description;
  }

  updateBusiness() {
    var updatedBusiness = {
      company: this.activeCompany,
      description: this.activeDescription,
      category: this.activeCategory,
      years_in_business: this.activeYearsInBusiness,
      street_address: this.activeStreet,
      city: this.activeCity,
      state: this.activeState,
      zipcode: this.activeZipcode,
      phone: this.activePhone,
      email: this.activeEmail
    }
    this.appService.updateBusiness(updatedBusiness, this.activeKey);
  }
}