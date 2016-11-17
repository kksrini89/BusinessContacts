import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { FirebaseService } from './service/firebase.service';

export const firebaseConfig = {
  apiKey: "AIzaSyAtlOI4flRCXIjUeI41a1mvPYK0mbfyTpk",
  authDomain: "businesscontacts-3249b.firebaseapp.com",
  databaseURL: "https://businesscontacts-3249b.firebaseio.com",
  storageBucket: "businesscontacts-3249b.appspot.com"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
