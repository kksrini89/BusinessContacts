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
    getBusiness() {
        return this.af.database.list('business') as FirebaseListObservable<Business[]>;
    }
    getCategories() {
        return this.af.database.list('categories') as FirebaseListObservable<Category[]>;
    }
}