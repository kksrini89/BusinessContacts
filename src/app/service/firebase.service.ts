// import { Business } from './../Business';
import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Business } from '../Business';
import { Category } from '../Category';

@Injectable()
export class FirebaseService {
    constructor(private af: AngularFire) { }
    getItems() {
        return this.af.database.list('items');
    }
    getBusiness(category: string = null) {
        var businesses = null;
        if (category != null) {
            businesses = this.af.database.list('business', {
                query: {
                    orderByChild: 'category',
                    equalTo: category
                }
            }) as FirebaseListObservable<Business[]>;
        } else {
            businesses = this.af.database.list('business') as FirebaseListObservable<Business[]>;
        }
        return businesses;
        // return this.af.database.list('business') as FirebaseListObservable<Business[]>;
    }
    getCategories() {
        return this.af.database.list('categories') as FirebaseListObservable<Category[]>;
    }

    addBusiness(newBusiness: any) {
        this.af.database.list('business').push(newBusiness);
    }
}